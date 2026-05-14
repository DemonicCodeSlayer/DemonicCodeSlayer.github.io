import { useState, useEffect } from 'react';
import { sections, LEVELS } from './data';
import './App.css';

/** @param {any[]} sectionList @returns {any[]} */
function extractTerms(sectionList) {
  const seen = new Set();
  /** @type {any[]} */
  const result = [];
  sectionList.forEach(section => {
    section.topics.forEach(topic => {
      if (!topic.content) return;
      const regex = /\*\*([^*\n`]+?)\*\*/g;
      let m;
      while ((m = regex.exec(topic.content)) !== null) {
        const raw = m[1].trim();
        if (raw.endsWith('.') || raw.endsWith('!') || raw.endsWith('?')) continue;
        if (/^\d/.test(raw)) continue;
        if (raw.split(/\s+/).length > 7) continue;
        if (raw.length < 2) continue;
        const key = raw.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        const after = topic.content.slice(m.index + m[0].length);
        const defM = after.match(/^[ \t]*[—:][ \t]*([^\n]{5,120})/);
        let definition = defM ? defM[1].replace(/\*\*([^*]+)\*\*/g, '$1').split(/[.!?]/)[0].trim() : '';
        if (definition.endsWith(',')) definition = definition.slice(0, -1);
        result.push({ name: raw, definition, sectionId: section.id, sectionTitle: section.title, sectionColor: section.color, sectionIcon: section.icon, topicName: topic.name, topicLevel: topic.level });
      }
    });
  });
  return result.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

function highlightText(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function TopicRow({ topic, sectionColor, highlight, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const level = LEVELS[topic.level] || LEVELS['2'];

  return (
    <div className="topic-row">
      <button className="topic-header" onClick={() => setOpen(!open)}>
        <span className="topic-chevron">{open ? '▾' : '▸'}</span>
        <span className="topic-name">{highlight ? highlightText(topic.name, highlight) : topic.name}</span>
        <span className="topic-badges">
          {topic.score != null && (
            <span className="topic-score" title="Оценка">{topic.score}/5</span>
          )}
          <span className="topic-level" style={{ background: level.color + '22', color: level.color, borderColor: level.color + '44' }}>
            {topic.level} — {level.label}
          </span>
        </span>
      </button>
      {open && (
        <div className="topic-content">
          <FormattedContent text={topic.content} />
        </div>
      )}
    </div>
  );
}

function FormattedContent({ text }) {
  if (!text) return <p className="placeholder">Контент будет добавлен позже</p>;

  const blocks = text.split('\n');
  const elements = [];
  let inCode = false;
  let codeLines = [];
  let key = 0;

  blocks.forEach((line, i) => {
    if (line.startsWith('```')) {
      if (inCode) {
        elements.push(<pre key={key++}>{codeLines.join('\n')}</pre>);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      return;
    }
    if (inCode) {
      codeLines.push(line);
      return;
    }
    if (line.trim() === '') {
      elements.push(<div key={key++} className="spacer" />);
      return;
    }
    // Process inline formatting
    let html = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^‣ |^• /, '‣ ');

    elements.push(
      <p key={key++} className="content-line" dangerouslySetInnerHTML={{ __html: html }} />
    );
  });

  if (inCode && codeLines.length) {
    elements.push(<pre key={key++}>{codeLines.join('\n')}</pre>);
  }

  return <div className="formatted-content">{elements}</div>;
}

/**
 * @param {{ section: any, defaultCollapsed?: boolean, onSelect?: ((id: string) => void) | undefined, collapseKey?: number, levelFilter?: string }} props
 */
function SectionBlock({ section, defaultCollapsed = true, onSelect = undefined, collapseKey = 0, levelFilter = 'all' }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const filteredTopics = levelFilter === 'all' ? section.topics : section.topics.filter(t => t.level === levelFilter);
  const topicCount = filteredTopics.length;

  useEffect(() => {
    if (collapseKey > 0) setCollapsed(true);
  }, [collapseKey]);
  const scored = filteredTopics.filter(t => t.score != null);
  const avg = scored.length ? (scored.reduce((a, t) => a + t.score, 0) / scored.length).toFixed(1) : null;

  function handleHeaderClick() {
    if (onSelect) {
      onSelect(section.id);
    } else {
      setCollapsed(!collapsed);
    }
  }

  return (
    <div className="section-block">
      <button className="section-header" onClick={handleHeaderClick} style={{ '--accent': section.color }}>
        <div className="section-left">
          <span className="section-icon">{section.icon}</span>
          <div>
            <h2 className="section-title">{section.title}</h2>
            <span className="section-meta">{topicCount} тем{avg ? ` · Средняя: ${avg}/5` : ''}</span>
          </div>
        </div>
        <span className="section-chevron">{collapsed ? '▸' : '▾'}</span>
      </button>
      {!collapsed && (
        <div className="section-topics">
          {filteredTopics.length === 0 ? (
            <p className="section-empty">Нет тем для этого уровня</p>
          ) : (
            filteredTopics.map((topic, i) => (
              <TopicRow key={i} topic={topic} sectionColor={section.color} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function SearchResults({ query, sections }) {
  const q = query.toLowerCase();
  const results = [];

  sections.forEach(section => {
    const matched = section.topics.filter(t =>
      t.name.toLowerCase().includes(q) ||
      (t.content && t.content.toLowerCase().includes(q))
    );
    if (matched.length > 0) results.push({ section, topics: matched });
  });

  if (results.length === 0) {
    return <p className="search-empty">Ничего не найдено по запросу «{query}»</p>;
  }

  return (
    <>
      {results.map(({ section, topics }) => (
        <div key={section.id} className="section-block">
          <div className="section-header" style={{ '--accent': section.color }}>
            <div className="section-left">
              <span className="section-icon">{section.icon}</span>
              <div>
                <h2 className="section-title">{section.title}</h2>
                <span className="section-meta">{topics.length} совпадений</span>
              </div>
            </div>
          </div>
          <div className="section-topics">
            {topics.map((topic, i) => (
              <TopicRow key={i} topic={topic} sectionColor={section.color} highlight={query} defaultOpen />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function FlashcardMode({ sections, levelFilter = 'all' }) {
  const [sectionFilter, setSectionFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const allTopics = [];
  sections.forEach(s => {
    s.topics.forEach(t => {
      const matchSection = sectionFilter === 'all' || sectionFilter === s.id;
      const matchLevel = levelFilter === 'all' || t.level === levelFilter;
      if (t.content && matchSection && matchLevel) {
        allTopics.push({ ...t, sectionTitle: s.title, sectionIcon: s.icon, sectionColor: s.color });
      }
    });
  });

  const current = allTopics[currentIdx];
  if (!current) return <p>Нет карточек</p>;

  const level = LEVELS[current.level] || LEVELS['2'];

  return (
    <div className="flashcard-mode">
      <div className="flash-filter">
        <select value={sectionFilter} onChange={e => { setSectionFilter(e.target.value); setCurrentIdx(0); setFlipped(false); }}>
          <option value="all">Все разделы</option>
          {sections.map(s => <option key={s.id} value={s.id}>{s.icon} {s.title}</option>)}
        </select>
        <span className="flash-counter">{currentIdx + 1} / {allTopics.length}</span>
      </div>
      <div className={`flash-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        {!flipped ? (
          <div className="flash-front">
            <span className="flash-section" style={{ color: current.sectionColor }}>{current.sectionIcon} {current.sectionTitle}</span>
            <span className="flash-level" style={{ color: level.color }}>{level.label}</span>
            <h3 className="flash-question">{current.name}</h3>
            <span className="flash-hint">Нажми, чтобы увидеть ответ</span>
          </div>
        ) : (
          <div className="flash-back">
            <FormattedContent text={current.content} />
          </div>
        )}
      </div>
      <div className="flash-nav">
        <button disabled={currentIdx === 0} onClick={() => { setCurrentIdx(i => i - 1); setFlipped(false); }}>← Назад</button>
        <button onClick={() => { setCurrentIdx(Math.floor(Math.random() * allTopics.length)); setFlipped(false); }}>🎲 Случайная</button>
        <button disabled={currentIdx >= allTopics.length - 1} onClick={() => { setCurrentIdx(i => i + 1); setFlipped(false); }}>Далее →</button>
      </div>
    </div>
  );
}

/** @param {{ term: any, highlight: string }} props */
function TermRow({ term, highlight }) {
  return (
    <div className="term-row">
      <div className="term-name">{highlight ? highlightText(term.name, highlight) : term.name}</div>
      {term.definition && (
        <div className="term-def">{highlight ? highlightText(term.definition, highlight) : term.definition}</div>
      )}
      <div className="term-source">
        <span className="term-section-badge" style={{ color: term.sectionColor }}>
          {term.sectionIcon} {term.sectionTitle}
        </span>
        <span className="term-topic">· {term.topicName}</span>
      </div>
    </div>
  );
}

/** @param {{ sections: any[], levelFilter?: string }} props */
function GlossaryTab({ sections, levelFilter = 'all' }) {
  const [search, setSearch] = useState('');
  const [sectionFilter, setSectionFilter] = useState('all');

  const allTerms = extractTerms(sections);
  const q = search.trim().toLowerCase();

  const filtered = allTerms.filter(t => {
    const matchSearch = !q || t.name.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
    const matchSection = sectionFilter === 'all' || t.sectionId === sectionFilter;
    const matchLevel = levelFilter === 'all' || t.topicLevel === levelFilter;
    return matchSearch && matchSection && matchLevel;
  });

  /** @type {any[]} */
  const grouped = [];
  /** @type {Map<string, any>} */
  const sectionMap = new Map();
  filtered.forEach(t => {
    if (!sectionMap.has(t.sectionId)) {
      const g = { id: t.sectionId, title: t.sectionTitle, color: t.sectionColor, icon: t.sectionIcon, terms: [] };
      sectionMap.set(t.sectionId, g);
      grouped.push(g);
    }
    sectionMap.get(t.sectionId).terms.push(t);
  });

  return (
    <div className="glossary">
      <div className="glossary-controls">
        <div className="search-bar">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
          <input
            type="search"
            placeholder="Поиск по терминам и определениям..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')} title="Очистить">✕</button>
          )}
        </div>
        <nav className="section-tabs" style={{ marginTop: '10px' }}>
          <button
            className={`section-tab ${sectionFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSectionFilter('all')}
          >
            Все разделы
          </button>
          {sections.map(s => (
            <button
              key={s.id}
              className={`section-tab ${sectionFilter === s.id ? 'active' : ''}`}
              onClick={() => setSectionFilter(sectionFilter === s.id ? 'all' : s.id)}
              style={sectionFilter === s.id ? /** @type {any} */({ '--tab-color': s.color }) : {}}
            >
              <span className="section-tab-icon">{s.icon}</span>{s.title}
            </button>
          ))}
        </nav>
      </div>

      <p className="glossary-stats">{filtered.length} {filtered.length === 1 ? 'термин' : filtered.length < 5 ? 'термина' : 'терминов'}</p>

      {filtered.length === 0 ? (
        <p className="search-empty">Ничего не найдено по запросу «{search}»</p>
      ) : sectionFilter !== 'all' ? (
        <div className="glossary-group">
          {filtered.map((t, /** @type {number} */ i) => <TermRow key={i} term={t} highlight={q} />)}
        </div>
      ) : (
        grouped.map(group => (
          <div key={group.id} className="glossary-group">
            <div className="glossary-group-header" style={/** @type {any} */({ '--accent': group.color })}>
              <span>{group.icon}</span>
              <span>{group.title}</span>
              <span className="glossary-count">{group.terms.length} терм.</span>
            </div>
            {group.terms.map((/** @type {any} */ t, i) => <TermRow key={i} term={t} highlight={q} />)}
          </div>
        ))
      )}
    </div>
  );
}

const LEVEL_FILTERS = [
  { key: 'all', label: 'Все' },
  { key: '2', label: 'Junior', color: '#3fb950' },
  { key: '3', label: 'Middle', color: '#d29922' },
  { key: '4', label: 'Senior', color: '#f85149' },
];

export default function App() {
  const [tab, setTab] = useState('roadmap');
  const [viewMode, setViewMode] = useState('list');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(/** @type {string | null} */ (null));
  const [collapseKey, setCollapseKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [levelFilter, setLevelFilter] = useState('all');

  const totalTopics = sections.reduce((a, s) => a + s.topics.length, 0);
  const isSearching = tab === 'roadmap' && search.trim().length > 0;
  const visibleSections = activeSection ? sections.filter(s => s.id === activeSection) : sections;

  function switchTab(t) {
    setTab(t);
    setSearch('');
    setSearchOpen(false);
    setSidebarOpen(false);
  }

  return (
    <div className="app">
      <div className="mobile-header">
        <button className="burger-btn" onClick={() => setSidebarOpen(v => !v)} aria-label="Меню">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <rect x="1" y="3" width="16" height="2" rx="1"/>
            <rect x="1" y="8" width="16" height="2" rx="1"/>
            <rect x="1" y="13" width="16" height="2" rx="1"/>
          </svg>
        </button>
        <span className="mobile-title">Frontend Senior+</span>
      </div>

      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-brand">
          <h1 className="app-title">Frontend Senior+</h1>
          <p className="app-sub">{sections.length} разделов · {totalTopics} тем</p>
        </div>

        {tab === 'roadmap' && (
          <div className="sidebar-roadmap-controls">
            <div className="sidebar-tools-row">
              <button
                className="view-btn"
                onClick={() => setCollapseKey(k => k + 1)}
                title="Свернуть все"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="7" width="14" height="2" rx="1"/>
                  <path d="M4 5L8 1l4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className={`view-btn search-toggle ${searchOpen ? 'active' : ''}`}
                onClick={() => { setSearchOpen(v => !v); if (searchOpen) setSearch(''); }}
                title="Поиск"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                </svg>
              </button>
              <div className="view-toggle">
                <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} title="Список">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="2" width="14" height="2" rx="1"/>
                    <rect x="1" y="7" width="14" height="2" rx="1"/>
                    <rect x="1" y="12" width="14" height="2" rx="1"/>
                  </svg>
                </button>
                <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} title="Сетка">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="1" width="6" height="6" rx="1"/>
                    <rect x="9" y="1" width="6" height="6" rx="1"/>
                    <rect x="1" y="9" width="6" height="6" rx="1"/>
                    <rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </button>
              </div>
            </div>

            {searchOpen && (
              <div className="search-bar search-bar-expanded">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                </svg>
                <input
                  type="search"
                  placeholder="Поиск..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="search-input"
                  autoFocus
                  onKeyDown={e => { if (e.key === 'Escape') { setSearch(''); setSearchOpen(false); } }}
                />
                {search && (
                  <button className="search-clear" onClick={() => setSearch('')} title="Очистить">✕</button>
                )}
              </div>
            )}

          </div>
        )}

        <div className="sidebar-level-filter">
          <span className="sidebar-filter-label">Уровень</span>
          <div className="level-btns">
            {LEVEL_FILTERS.map(({ key, label, color }) => (
              <button
                key={key}
                className={`level-btn ${levelFilter === key ? 'active' : ''}`}
                style={levelFilter === key && color ? { '--level-color': color } : {}}
                onClick={() => setLevelFilter(levelFilter === key && key !== 'all' ? 'all' : key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <nav className="sidebar-nav">
          <button className={`sidebar-tab ${tab === 'roadmap' ? 'active' : ''}`} onClick={() => switchTab('roadmap')}>
            📋 Темы
          </button>
          <button className={`sidebar-tab ${tab === 'cards' ? 'active' : ''}`} onClick={() => switchTab('cards')}>
            🃏 Карточки
          </button>
          <button className={`sidebar-tab ${tab === 'glossary' ? 'active' : ''}`} onClick={() => switchTab('glossary')}>
            📚 Справочник
          </button>
        </nav>
      </aside>

      <div className="app-right">
        {tab === 'roadmap' && (
          <div className="app-topbar">
            <nav className="section-tabs">
              <button
                className={`section-tab ${activeSection === null ? 'active' : ''}`}
                onClick={() => setActiveSection(null)}
              >
                Все
              </button>
              {sections.map(s => (
                <button
                  key={s.id}
                  className={`section-tab ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(activeSection === s.id ? null : s.id)}
                  style={activeSection === s.id ? /** @type {any} */({ '--tab-color': s.color }) : {}}
                >
                  <span className="section-tab-icon">{s.icon}</span>
                  <span className="section-tab-icon">{s.icon}</span>{s.title}
                </button>
              ))}
            </nav>
          </div>
        )}

        <main key={isSearching ? `search-${search}` : `${viewMode}-${activeSection}-${levelFilter}`} className={`app-main ${tab === 'roadmap' && !isSearching && viewMode === 'grid' && !activeSection ? 'view-grid' : ''}`}>
          {tab === 'roadmap' ? (
            isSearching ? (
              <SearchResults query={search.trim()} sections={visibleSections} />
            ) : (
              visibleSections
                .filter(section => levelFilter === 'all' || section.topics.some(t => t.level === levelFilter))
                .map(section => (
                  <SectionBlock
                    key={section.id + (activeSection ? '-open' : '')}
                    section={section}
                    defaultCollapsed={activeSection === null}
                    collapseKey={collapseKey}
                    levelFilter={levelFilter}
                    onSelect={viewMode === 'grid' && !activeSection ? setActiveSection : undefined}
                  />
                ))
            )
          ) : tab === 'cards' ? (
            <FlashcardMode sections={sections} levelFilter={levelFilter} />
          ) : (
            <GlossaryTab sections={sections} levelFilter={levelFilter} />
          )}
        </main>
      </div>
    </div>
  );
}
