import { useState } from 'react';
import { sections, LEVELS } from './data';
import './App.css';

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
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^• /, '‣ ');

    elements.push(
      <p key={key++} className="content-line" dangerouslySetInnerHTML={{ __html: html }} />
    );
  });

  if (inCode && codeLines.length) {
    elements.push(<pre key={key++}>{codeLines.join('\n')}</pre>);
  }

  return <div className="formatted-content">{elements}</div>;
}

function SectionBlock({ section, defaultCollapsed = false }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const topicCount = section.topics.length;
  const scored = section.topics.filter(t => t.score != null);
  const avg = scored.length ? (scored.reduce((a, t) => a + t.score, 0) / scored.length).toFixed(1) : null;

  return (
    <div className="section-block">
      <button className="section-header" onClick={() => setCollapsed(!collapsed)} style={{ '--accent': section.color }}>
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
          {section.topics.map((topic, i) => (
            <TopicRow key={i} topic={topic} sectionColor={section.color} />
          ))}
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

function FlashcardMode({ sections }) {
  const [sectionFilter, setSectionFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const allTopics = [];
  sections.forEach(s => {
    s.topics.forEach(t => {
      if (t.content && (sectionFilter === 'all' || sectionFilter === s.id)) {
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

export default function App() {
  const [tab, setTab] = useState('roadmap');
  const [viewMode, setViewMode] = useState('list');
  const [search, setSearch] = useState('');

  const totalTopics = sections.reduce((a, s) => a + s.topics.length, 0);
  const isSearching = tab === 'roadmap' && search.trim().length > 0;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Frontend Senior+ Roadmap</h1>
          <p className="app-sub">{sections.length} разделов · {totalTopics} тем</p>
        </div>
        <div className="header-controls">
          <nav className="tabs">
            <button className={`tab ${tab === 'roadmap' ? 'active' : ''}`} onClick={() => { setTab('roadmap'); setSearch(''); }}>
              📋 Темы
            </button>
            <button className={`tab ${tab === 'cards' ? 'active' : ''}`} onClick={() => { setTab('cards'); setSearch(''); }}>
              🃏 Карточки
            </button>
          </nav>
          {tab === 'roadmap' && (
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="Список"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="2" width="14" height="2" rx="1"/>
                  <rect x="1" y="7" width="14" height="2" rx="1"/>
                  <rect x="1" y="12" width="14" height="2" rx="1"/>
                </svg>
              </button>
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Сетка"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="1" width="6" height="6" rx="1"/>
                  <rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/>
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
              </button>
            </div>
          )}
        </div>
        {tab === 'roadmap' && (
          <div className="search-bar">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
            </svg>
            <input
              type="search"
              placeholder="Поиск по темам..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch('')} title="Очистить">✕</button>
            )}
          </div>
        )}
      </header>
      <main key={isSearching ? `search-${search}` : viewMode} className={`app-main ${tab === 'roadmap' && !isSearching && viewMode === 'grid' ? 'view-grid' : ''}`}>
        {tab === 'roadmap' ? (
          isSearching ? (
            <SearchResults query={search.trim()} sections={sections} />
          ) : (
            sections.map(section => (
              <SectionBlock key={section.id} section={section} defaultCollapsed={viewMode === 'grid'} />
            ))
          )
        ) : (
          <FlashcardMode sections={sections} />
        )}
      </main>
    </div>
  );
}
