export const LEVELS = {
  '1': { label: 'INTERN', color: '#8b949e' },
  '2': { label: 'JUNIOR', color: '#3fb950' },
  '3': { label: 'MIDDLE', color: '#d29922' },
  '4': { label: 'SENIOR', color: '#f85149' },
};

export const sections = [
  {
    id: 'js',
    title: 'JS',
    icon: '⚡',
    color: '#F0DB4F',
    topics: [
      {
        name: 'Определение контекста выполнения, случаи применения',
        level: '2',
        content: `**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

Состоит из двух компонентов:
• **Lexical Environment** — для \`let\`, \`const\`, function declarations
• **Variable Environment** — для \`var\`

**this определяется способом вызова функции, НЕ местом объявления.**

Способы вызова и значение this:
\`\`\`js
obj.method()        // this = obj (метод объекта)
func()              // this = window / undefined (свободный вызов)
func.call(ctx)      // this = ctx (явная привязка)
func.apply(ctx)     // this = ctx (явная привязка)
func.bind(ctx)()    // this = ctx (жёсткая привязка)
new Func()          // this = новый объект
\`\`\`

**Шаги оператора new:**
1. Создаётся пустой объект \`{}\`
2. \`__proto__\` нового объекта → \`Function.prototype\`
3. \`this\` внутри функции указывает на новый объект
4. Выполняется тело функции
5. Если return объект → вернётся он; если примитив/ничего → свой объект`,
        score: 3.5,
      },
      {
        name: 'Вычисление контекста, его значение по умолчанию',
        level: '2',
        content: `**Reference Type** — внутренний тип спецификации. При вычислении \`obj.method\` движок получает:
\`\`\`
{ base: obj, name: 'method', strict: false }
\`\`\`

**GetValue()** — внутренняя операция, которая извлекает значение из Reference Type, уничтожая base.

Вызывается при: присваивании (\`=\`), логических операторах (\`||\`, \`&&\`), операторе запятая.
**НЕ вызывается** при группировке \`()\`.

\`\`\`js
obj.method()              // Reference Type жив → this = obj
(obj.method)()            // группировка не ломает → this = obj
(obj.method = obj.method)() // присваивание → GetValue() → this = window
(false || obj.method)()   // || → GetValue() → this = window
\`\`\`

**Boxing (нестрогий режим):**
• \`null\` / \`undefined\` → \`window\`
• Примитив → обёртка: \`7\` → \`Number{7}\`

**Strict mode:** boxing не происходит. Что передал — то и получил.`,
        score: 2.5,
      },
      {
        name: 'Сохранение контекста выполнения через замыкание',
        level: '2',
        content: `**Замыкание** — функция + её ссылка \`[[Environment]]\` на лексическое окружение, в котором она была создана.

**\`[[Environment]]\`** — скрытое свойство каждой функции, устанавливается в момент **СОЗДАНИЯ** (не вызова!).

Сборщик мусора не удаляет лексическое окружение, пока на него есть ссылка из \`[[Environment]]\`.

**Приём const self = this:**
\`\`\`js
function Timer() {
  this.seconds = 0;
  const self = this; // сохраняем через замыкание
  setInterval(function() {
    self.seconds++;
  }, 1000);
}
\`\`\`

**Классическая задача var + цикл:**
\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 3, 3, 3

// Решение 1: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

// Решение 2: let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 0, 1, 2 — спецификация for+let создаёт новое ЛО на каждую итерацию
\`\`\``,
        score: 3,
      },
      {
        name: 'Потеря контекста',
        level: '2',
        content: `**3 случая потери контекста:**

1. **Присваивание метода в переменную:**
\`\`\`js
const fn = obj.greet; // GetValue() → base потерян
fn(); // this = window/undefined
\`\`\`

2. **Передача метода как колбэка:**
\`\`\`js
setTimeout(obj.greet, 1000); // GetValue() → base потерян
\`\`\`

3. **Вложенная функция внутри метода:**
\`\`\`js
const obj = {
  method() {
    function inner() {
      console.log(this); // window — inner имеет base = ЛО (не объект)
    }
    inner();
  }
};
\`\`\`

**4 способа исправить:**
1. **Стрелочная функция** — не создаёт свой this
2. **bind** — возвращает функцию с привязанным this
3. **const self = this** — замыкание
4. **call/apply** — для немедленного вызова`,
        score: 4,
      },
      {
        name: 'Виды объявления переменных, Function declaration и Function expression, NFE, IIFE',
        level: '2',
        content: `**var**: область видимости — функция/скрипт, всплывает с \`undefined\`
**let/const**: область видимости — блок, всплывает как \`uninitialized\` (TDZ)

**Function Declaration vs Expression:**
• FD — полностью всплывает (можно вызвать до объявления)
• FE — следует правилам переменной, в которую присвоен

**Приоритет при одном имени:** function declaration перезаписывает var при всплытии.

**NFE (Named Function Expression):**
\`\`\`js
const sayHi = function greeting() {
  // greeting доступно только здесь
  // хранится в промежуточном ЛО как immutable
  // Перезаписать нельзя
};
greeting(); // ReferenceError — снаружи не видно
\`\`\`
Зачем: надёжная рекурсия (не зависит от внешней переменной) + отладка (имя в stack trace).

**IIFE:** Создаёт изолированную область видимости. До ES6 — основной инструмент модульности. Сейчас заменён \`let/const\`, блоками, модулями.`,
        score: 3.5,
      },
      {
        name: 'Всплытие переменных',
        level: '2',
        content: `Движок проходит код дважды:
1. **Регистрация** — var → \`undefined\`, let/const → \`uninitialized\`, FD → полностью
2. **Выполнение** — построчно

**TDZ (Temporal Dead Zone):** промежуток от начала блока до строки объявления let/const. Обращение → ReferenceError.

\`\`\`js
let x = 'outer';
{
  console.log(x); // ReferenceError, НЕ 'outer'!
  let x = 'inner'; // TS знает о нём с начала блока
}
\`\`\`

**function declaration внутри блока:**
• Нестрогий режим: всплывает только имя как var (\`undefined\`), функция не поднимается
• Strict mode: блочная видимость, не всплывает наружу вообще

**Разница ЛО блока и функции:**
• Функция: Lexical Environment + Variable Environment
• Блок: только Lexical Environment (var пролетает мимо блока)`,
        score: 4,
      },
      {
        name: 'Что такое замыкание?',
        level: '2',
        content: `**Замыкание** — сама функция вместе с её ссылкой \`[[Environment]]\` на лексическое окружение, в котором она была создана.

Технически **каждая** функция в JS — замыкание, потому что каждая получает \`[[Environment]]\`. Заметно когда внутренняя функция живёт дольше внешней.

**Механика:**
1. Функция создаётся → получает \`[[Environment]]\` → ссылка на текущее ЛО
2. Функция вызывается → создаётся новое ЛО, \`outer\` = \`[[Environment]]\`
3. Поиск переменных идёт по цепочке \`outer\`
4. \`[[Environment]]\` уже не участвует — он сделал своё дело на шаге 2

Сборщик мусора не удаляет ЛО, пока на него ссылается \`[[Environment]]\` живой функции.`,
        score: 4,
      },
      {
        name: 'Определение класса. Синтаксис классов. Наследование',
        level: '2',
        content: `**typeof class = "function"** — синтаксический сахар.

**Отличия class от функции-конструктора:**
1. Без \`new\` — TypeError
2. Методы неперечислимые
3. Всегда strict mode
4. Не всплывает

**extends создаёт ДВЕ цепочки:**
\`\`\`js
Admin.prototype.__proto__ === User.prototype // для экземпляров
Admin.__proto__ === User                     // для статики
\`\`\`

**super():**
• В конструкторе — вызывает конструктор родителя, создаёт this
• В методе — обращается к методу родительского прототипа
• Без super() в дочернем конструкторе — ReferenceError при обращении к this

**User.prototype** по умолчанию = \`{ constructor: User }\``,
        score: 3.5,
      },
      {
        name: 'Подмена существующего контекста',
        level: '2',
        content: `**call(ctx, a, b)** — вызывает сразу, аргументы через запятую
**apply(ctx, [a, b])** — вызывает сразу, аргументы массивом (A = Array)
**bind(ctx)** — НЕ вызывает, возвращает новую функцию

**bind привязывает навсегда.** Повторный bind/call/apply не перебьёт. Под капотом создаётся exotic object с \`[[BoundThis]]\`.

**Стрелочная функция** — подмена this НЕВОЗМОЖНА. call/apply/bind игнорируются. this ищется как переменная по \`[[Environment]]\`.

**React классовые компоненты:**
\`\`\`js
// Вариант 1: bind в конструкторе
this.handleClick = this.handleClick.bind(this);

// Вариант 2: стрелочная функция как поле класса
handleClick = () => { ... }
\`\`\``,
        score: 3,
      },
      {
        name: 'Лексическое окружение',
        level: '3',
        content: `**Лексическое окружение (Lexical Environment)** — структура данных, хранящая:
• **Environment Record** — привязки идентификаторов к значениям
• **outer** — ссылка на внешнее ЛО

Создаётся при каждом вызове функции и для каждого блока (для let/const).

**Поиск переменных:** своё ЛО → outer → ... → глобальное ЛО → null → ReferenceError

**\`[[Environment]]\`:**
• Устанавливается в момент **создания** функции
• При вызове функции: новое ЛО, его outer = \`[[Environment]]\`

**Промежуточное ЛО у NFE:**
\`\`\`
Внутреннее ЛО функции
  ↓ outer
Промежуточное { greeting: <функция> } (immutable)
  ↓ outer
Внешнее ЛО
\`\`\``,
        score: 4.5,
      },
      {
        name: 'Определение прототипа. Цепочка прототипов, механизм поиска свойств',
        level: '3',
        content: `**\`[[Prototype]]\`** — скрытое свойство объекта, доступно через \`__proto__\` (геттер/сеттер).

**Два механизма поиска:**
• Переменные: по цепочке outer (статически, при создании) → ReferenceError
• Свойства: по цепочке __proto__ (динамически, можно менять) → undefined

**Shadowing:** запись свойства ВСЕГДА на самом объекте, не поднимается по цепочке.

**this в методе прототипа:** неважно где метод найден, this = объект перед точкой.

\`\`\`js
hasOwnProperty('prop')  // проверка собственного свойства
for...in                // включая прототип
Object.keys()           // только собственные
\`\`\`

**Конец цепочки:** Object.prototype → null`,
        score: 4,
      },
      {
        name: 'Особенности стрелочных функций. Отличия от классических',
        level: '3',
        content: `**6 отличий:**
1. Нет своего this — берёт из \`[[Environment]]\`
2. Нет \`arguments\`
3. Нельзя вызвать через \`new\`
4. Нет свойства \`prototype\`
5. Не может быть генератором
6. Краткий синтаксис

this внутри стрелочной функции **есть** и работает, но она не создаёт **свой**. Ищет как обычную переменную по цепочке ЛО.

\`call/apply/bind\` полностью **игнорируются** — подменить this невозможно.`,
        score: 4,
      },
      {
        name: 'Принципы работы сборщика мусора в V8',
        level: '4',
        content: `**Принцип достижимости (reachability):** всё, до чего можно добраться от корней — живое.

**Корни (roots):**
1. Глобальный объект (window/global)
2. Стек вызовов (локальные переменные выполняющихся функций)
3. Замыкания (ЛО со ссылками из живых функций)

**Два поколения памяти:**

**Young Generation → Scavenger (Minor GC):**
• Маленькая область для новых объектов
• Два полупространства: from-space и to-space
• Живые копируются в to-space, from-space очищается, роли меняются
• Быстрый, частый

**Old Generation → Mark-Sweep-Compact (Major GC):**
• Mark — помечает живые от корней
• Sweep — освобождает непомеченные
• Compact — уплотняет, убирая фрагментацию
• Медленный, редкий

**Promotion:** объект пережил 2 сборки в Young → Old

**Оптимизации пауз GC в V8:**
• Incremental Marking:
Фаза Mark в Mark-Sweep-Compact — самая долгая, потому что нужно обойти весь граф объектов от корней. Вместо того чтобы делать это за один раз и блокировать основной поток на десятки-сотни миллисекунд, V8 разбивает обход на маленькие порции по 5-10мс. Между порциями выполняется JavaScript. Проблема — пока мы помечали объекты порциями, JS-код мог создать новые ссылки или удалить старые. Для этого используется write barrier — при каждой записи свойства V8 отмечает изменённые объекты и перепроверяет их при следующей порции.
• Concurrent Marking/Sweeping/Compacting:
Фазы Sweep и Compact выполняются в отдельных потоках (worker threads), параллельно с основным JS-потоком. Основной поток продолжает выполнять JS, а воркеры в это время освобождают и уплотняют память. Начиная с 2018 года V8 также делает concurrent marking — часть фазы Mark тоже выполняется в параллельных потоках, а основной поток только финализирует результат.
• Lazy Sweeping:
После фазы Mark движок знает какие объекты мёртвые, но не торопится их очищать. Sweep происходит лениво — только когда нужно выделить новую память и текущая страница заполнена. Если памяти хватает — sweep откладывается. Это размазывает стоимость очистки во времени.
Итого эффект:
Без оптимизаций пауза Major GC могла занимать 100-500мс (заметный фриз UI). С оптимизациями — основной поток блокируется на 1-5мс за раз, остальное параллельно или инкрементально.`,
        score: 2.5,
      },
      {
        name: 'Процесс обработки кода в V8: AST, лексический анализ, JIT, деоптимизация',
        level: '4',
        content: `**Pipeline V8:**
\`\`\`
Исходный код → Токены → AST → Байткод (Ignition) → Машинный код (TurboFan)
\`\`\`

**Процесс обработки кода в V8:**

**1. Лексический анализ (Tokenization/Lexing):**
Движок получает исходный код как текст. Первым делом разбивает его на токены — минимальные значимые единицы. Например const x = 10 + 5; → [const][x][=][10][+][5][;]. Каждый токен имеет тип (ключевое слово, идентификатор, оператор, число, пунктуация).
V8 делает это двумя способами:

Eager parsing (полный) — для кода, который нужен прямо сейчас (верхний уровень скрипта, немедленно вызываемые функции)
Lazy parsing (pre-parsing) — для тел функций, которые могут никогда не вызваться. Pre-parser не строит AST, только проверяет синтаксические ошибки и запоминает границы функции (где начинается, где заканчивается). Полный парсинг произойдёт только при первом вызове. Это критично для ускорения старта — представь бандл на 2MB JS, из которого при загрузке реально выполняется 20%.

**2. Синтаксический анализ (Parsing) → AST:**
Из плоского списка токенов строится Abstract Syntax Tree — дерево, где каждый узел представляет операцию или конструкцию. AST нужен потому что токены — плоский список, а код имеет вложенную структуру: приоритеты операций (* раньше +), вложенные блоки, scope. Дерево разрешает эти связи и позволяет дальше генерировать код и оптимизировать.

**3. Ignition (интерпретатор) → байткод:**
AST передаётся в Ignition — интерпретатор V8. Он генерирует байткод — промежуточное низкоуровневое представление, но не машинный код. Байткод генерируется быстро и выполняется сразу — это даёт быстрый старт. Пользователь видит страницу не дожидаясь тяжёлой компиляции. Параллельно Ignition собирает профилирующую информацию: какие функции вызываются часто, какие типы аргументов приходят, какие ветки if/else выполняются.

**4. TurboFan (оптимизирующий компилятор) → машинный код:**
Когда функция вызывается достаточно часто (становится «горячей»), Ignition передаёт её байткод и собранный профиль в TurboFan. TurboFan выполняет спекулятивную оптимизацию — на основе профиля предполагает типы и генерирует оптимизированный машинный код. Например, если add(a, b) 10000 раз получала числа — TurboFan генерирует машинный код для сложения чисел напрямую, без проверок типов, без boxing, с использованием CPU-инструкций для целочисленной арифметики.

**5. Деоптимизация (Deoptimization):**
Если предположения TurboFan оказались неверны (пришла строка вместо числа, объект другой формы) — оптимизированный машинный код выбрасывается, и функция возвращается к выполнению через байткод в Ignition. Это называется bailout. Функция снова работает медленно, но корректно. Ignition продолжит собирать профиль, и если увидит новую стабильную закономерность — TurboFan попробует оптимизировать заново, уже с учётом новых типов.
Практические следствия:

Мономорфный код (одни типы) → TurboFan оптимизирует → быстро
Полиморфный код (разные типы в одном месте) → частые деоптимизации → медленно
Большие бандлы → lazy parsing экономит время старта → code splitting помогает
eval(), with, arguments в некоторых случаях отключают оптимизации TurboFan`,
        score: 3,
      },
      {
        name: 'Преобразование классов в рантайме. Приватные и статичные поля',
        level: '4',
        content: `**Преобразование класса:**
\`\`\`js
class User {
  constructor(name) { this.name = name; }
  greet() { ... }         // → User.prototype.greet
  static create() { ... } // → User.create (на самой функции)
}
\`\`\`

**Приватные поля (#):**
\`\`\`js
class User {
  #password = '123';
  changePassword(p) { this.#password = p; } // можно изнутри
}
user.#password; // SyntaxError! Снаружи недоступно
\`\`\`

**3 способа приватности:**
1. \`_\` — соглашение (не настоящая приватность)
2. \`WeakMap\` — настоящая, но громоздко
3. \`#\` — настоящая, встроенная в язык`,
        score: 3,
      },
      {
        name: 'Оптимизации в V8: Скрытые классы, Inline Caching',
        level: '4',
        content: `**Скрытые классы (Hidden Classes / Maps):**
Описывают форму объекта — какие свойства и по какому смещению в памяти.

\`\`\`js
const user = {};          // Hidden Class C0
user.name = 'Alice';      // → C1: { name: offset 0 }
user.age = 25;            // → C2: { name: offset 0, age: offset 8 }
\`\`\`

Одинаковый порядок свойств → один Hidden Class → переиспользование оптимизаций.

**delete** — часто переводит в dictionary mode (slow mode). Вместо delete → \`= undefined\`.

**Inline Caching:**
• Monomorphic (1 форма) → максимально быстро
• Polymorphic (2-4) → медленнее
• Megamorphic (5+) → кэш бесполезен

**Глобальные переменные медленнее:**
1. Длинный путь по outer
2. Нет оптимизации через регистры CPU
3. Нестабильная форма глобального объекта`,
        score: 3.5,
      },
      {
        name: 'Proxy и Reflect',
        level: '4',
        content: `**Proxy** — обёртка, перехватывающая операции с объектом:
\`\`\`js
new Proxy(target, {
  get(target, prop, receiver) { ... },
  set(target, prop, value, receiver) { ... },
  deleteProperty(target, prop) { ... },
  has(target, prop) { ... },     // оператор in
  apply(target, thisArg, args) { ... }, // вызов функции
  construct(target, args) { ... },      // new
});
\`\`\`

**Reflect** — стандартный способ выполнить операцию по умолчанию:
• Единообразие — метод для каждой ловушки
• **receiver** — правильно передаёт this в геттерах/сеттерах
• Без Reflect: \`target[prop]\` может дать неправильный this

**Практика:** Vue 3 (реактивность), MobX, Immer (Redux Toolkit).`,
        score: 3,
      },
    ],
  },
  {
    id: 'browser',
    title: 'БРАУЗЕР И ЕГО ИНСТРУМЕНТЫ',
    icon: '🌐',
    color: '#4FC3F7',
    topics: [
      { name: 'devTools (network, application)', level: '2', content: `**Network:** мониторинг HTTP-запросов, время загрузки, размеры, заголовки, тело ответа. Фильтрация по типу (XHR, JS, CSS, Img). Throttling (3G, offline).\n\n**Application:** cookies, localStorage, sessionStorage, IndexedDB, Service Workers, Cache Storage, Manifests.\n\n**Performance:** запись и анализ производительности, flame chart, CPU profiling.\n\n**Elements:** DOM-дерево, стили, computed styles, box model.\n\n**Console:** логирование, выполнение JS, фильтрация по уровням.` },
      { name: 'breakpoints', level: '2', content: `**Типы breakpoints в DevTools:**\n\n• **Line breakpoint** — пауза на конкретной строке кода\n• **Conditional breakpoint** — срабатывает при условии (\`user.id === 5\`)\n• **DOM breakpoint** — при изменении DOM-узла (subtree, attributes, node removal)\n• **XHR/Fetch breakpoint** — при запросе к определённому URL\n• **Event listener breakpoint** — при определённом событии (click, scroll)\n• **Exception breakpoint** — при выбросе исключения\n\n**Отладка:** Step over (F10), Step into (F11), Step out (Shift+F11), Resume (F8).\n\n**Watch expressions** — отслеживание переменных. **Call Stack** — стек вызовов. **Scope** — текущие переменные.` },
      { name: 'Всплытие и погружение событий', level: '2', content: `**3 фазы события:**\n1. **Capturing (погружение)** — от window вниз к целевому элементу\n2. **Target** — событие на целевом элементе\n3. **Bubbling (всплытие)** — от целевого элемента вверх к window\n\n\`\`\`js\nel.addEventListener('click', handler, true);  // capturing\nel.addEventListener('click', handler, false); // bubbling (по умолчанию)\n\`\`\`\n\n**event.stopPropagation()** — останавливает всплытие/погружение\n**event.stopImmediatePropagation()** — + отменяет остальные обработчики на этом элементе\n**event.preventDefault()** — отменяет действие по умолчанию (НЕ останавливает всплытие)\n\n**Делегирование событий:** вешаем один обработчик на родителя, проверяем \`event.target\`.` },
      { name: 'Основные браузерные события', level: '2', content: `**Mouse:** click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, contextmenu\n**Keyboard:** keydown, keyup, keypress (deprecated)\n**Form:** submit, input, change, focus, blur\n**Document:** DOMContentLoaded, load, beforeunload, unload\n**Scroll/Resize:** scroll, resize\n**Clipboard:** copy, paste, cut\n**Touch:** touchstart, touchmove, touchend\n**Drag:** dragstart, drag, dragend, dragover, drop\n\n**DOMContentLoaded** — DOM готов, стили/картинки могут ещё грузиться\n**load** — всё загружено (включая картинки, стили)\n\n**Passive listeners:** \`{ passive: true }\` — обработчик не вызовет preventDefault(), браузер может оптимизировать скролл.` },
      { name: 'Что такое DOM. JS Методы работы с узлами', level: '2', content: `**DOM (Document Object Model)** — древовидное представление HTML-документа. Каждый HTML-тег — узел (node).\n\n**Поиск:**\n\`\`\`js\ndocument.getElementById('id')\ndocument.querySelector('.class')      // первый\ndocument.querySelectorAll('.class')   // все (статическая коллекция)\ndocument.getElementsByClassName()     // живая коллекция\n\`\`\`\n\n**Создание/модификация:**\n\`\`\`js\ndocument.createElement('div')\nelement.append(child)      // в конец\nelement.prepend(child)     // в начало\nelement.before(sibling)    // перед\nelement.after(sibling)     // после\nelement.remove()           // удалить\nelement.cloneNode(true)    // глубокое клонирование\n\`\`\`\n\n**Атрибуты:** getAttribute, setAttribute, removeAttribute, dataset (data-*).\n**Классы:** classList.add, remove, toggle, contains.` },
      { name: 'iframe', level: '3', content: `**iframe** — встраивает другую HTML-страницу внутрь текущей.\n\n\`\`\`html\n<iframe src="https://example.com" sandbox="allow-scripts"></iframe>\n\`\`\`\n\n**Безопасность:**\n• **sandbox** — ограничивает возможности: allow-scripts, allow-same-origin, allow-forms, allow-popups\n• **Same-Origin Policy** — доступ к содержимому iframe только с того же домена\n• **postMessage** — безопасное общение между окнами разных доменов\n\n\`\`\`js\n// Родитель → iframe\niframe.contentWindow.postMessage(data, 'https://target.com');\n\n// iframe → родитель\nwindow.parent.postMessage(data, 'https://parent.com');\n\n// Приём\nwindow.addEventListener('message', (e) => {\n  if (e.origin !== 'https://trusted.com') return;\n  console.log(e.data);\n});\n\`\`\`\n\n**X-Frame-Options** — заголовок, запрещающий встраивание сайта в iframe.` },
      { name: 'Отладка WebSocket в браузере', level: '3', content: `В DevTools → Network → вкладка **WS** (WebSocket):\n• Видны все WebSocket-соединения\n• **Messages** — отправленные (зелёные) и полученные (красные) сообщения\n• **Headers** — заголовки handshake (Upgrade: websocket)\n• **Timing** — время установки соединения\n\nМожно фильтровать по содержимому сообщений, видеть бинарные данные. Полезно для дебага real-time приложений (чаты, уведомления, торговые платформы).` },
      { name: 'Базовое понимание cookies', level: '3', content: `**Cookies** — маленькие текстовые данные, отправляемые с каждым HTTP-запросом.\n\n\`\`\`js\ndocument.cookie = "name=value; max-age=3600; path=/; secure; samesite=strict";\n\`\`\`\n\n**Атрибуты:**\n• **max-age / expires** — время жизни\n• **path** — для какого пути доступна\n• **domain** — для какого домена\n• **secure** — только по HTTPS\n• **httpOnly** — недоступна из JS (защита от XSS)\n• **SameSite** — strict/lax/none (защита от CSRF)\n\n**Ограничения:** ~4KB на cookie, ~20 cookies на домен.\n\n**Типы:** Session cookies (без max-age, до закрытия браузера), Persistent (с max-age), Third-party (с другого домена — для трекинга).` },
      { name: 'localStorage и sessionStorage', level: '3', content: `**localStorage:** данные сохраняются навсегда (до явного удаления)\n**sessionStorage:** данные живут до закрытия вкладки\n\n\`\`\`js\nlocalStorage.setItem('key', JSON.stringify(data));\nconst data = JSON.parse(localStorage.getItem('key'));\nlocalStorage.removeItem('key');\nlocalStorage.clear();\n\`\`\`\n\n**Ограничения:** ~5-10MB, только строки, синхронный API (может блокировать).\n\n**Отличия от cookies:**\n• Не отправляются на сервер с каждым запросом\n• Больше объём (5MB vs 4KB)\n• Нет атрибутов безопасности (httpOnly, secure)\n\n**Событие storage:** срабатывает в ДРУГИХ вкладках при изменении localStorage. Можно использовать для синхронизации между вкладками.` },
      { name: 'Базовое понимание Selection и Range', level: '3', content: `**Range** — объект, представляющий фрагмент документа (от точки A до точки B).\n\n\`\`\`js\nconst range = document.createRange();\nrange.setStart(node, offset);\nrange.setEnd(node, offset);\nrange.selectNodeContents(element);\n\`\`\`\n\n**Selection** — то, что выделил пользователь.\n\n\`\`\`js\nconst selection = window.getSelection();\nselection.toString();        // текст выделения\nselection.getRangeAt(0);     // Range объект\nselection.removeAllRanges(); // снять выделение\nselection.addRange(range);   // программно выделить\n\`\`\`\n\nПрименение: редакторы текста, подсветка поиска, кастомные контекстные меню.` },
      { name: 'Особенности работы с браузерными событиями', level: '3', content: `**Throttle** — не чаще чем раз в N мс (scroll, resize).\n**Debounce** — ждёт N мс после последнего вызова (input поиска).\n\n**Passive listeners:**\n\`\`\`js\nel.addEventListener('scroll', handler, { passive: true });\n\`\`\`\nОбещаем не вызывать preventDefault() → браузер оптимизирует скролл.\n\n**Event delegation:**\n\`\`\`js\ntable.addEventListener('click', (e) => {\n  const td = e.target.closest('td');\n  if (!td || !table.contains(td)) return;\n  highlight(td);\n});\n\`\`\`\n\n**Custom Events:**\n\`\`\`js\nconst event = new CustomEvent('myEvent', { detail: { id: 1 }, bubbles: true });\nelement.dispatchEvent(event);\n\`\`\`\n\n**once: true** — обработчик вызовется один раз и удалится автоматически.` },
      { name: 'Живые коллекции, методы обработки и преобразования в массив', level: '3', content: `**Живая коллекция** — автоматически обновляется при изменении DOM:\n\`\`\`js\nconst divs = document.getElementsByTagName('div'); // живая\n// Добавили div → divs.length увеличится\n\`\`\`\n\n**Статическая коллекция** — снимок на момент вызова:\n\`\`\`js\nconst divs = document.querySelectorAll('div'); // статическая\n// Добавили div → divs.length НЕ изменится\n\`\`\`\n\n**Преобразование в массив:**\n\`\`\`js\nArray.from(collection)\n[...collection]\nArray.prototype.slice.call(collection)\n\`\`\`\n\nЖивые: getElementsByClassName, getElementsByTagName, children\nСтатические: querySelectorAll` },
      { name: 'Service workers', level: '4', content: `**Service Worker** — скрипт, работающий в фоне, отдельно от страницы.\n\n\`\`\`js\nnavigator.serviceWorker.register('/sw.js');\n\n// sw.js\nself.addEventListener('install', (e) => {\n  e.waitUntil(caches.open('v1').then(c => c.addAll(['/index.html', '/app.js'])));\n});\n\nself.addEventListener('fetch', (e) => {\n  e.respondWith(\n    caches.match(e.request).then(r => r || fetch(e.request))\n  );\n});\n\`\`\`\n\n**Возможности:** кэширование (офлайн), push-уведомления, фоновая синхронизация.\n**Ограничения:** только HTTPS, нет доступа к DOM, асинхронный API.` },
      { name: 'Web-workers', level: '4', content: `**Web Worker** — выполнение JS в отдельном потоке.\n\n\`\`\`js\n// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage({ data: bigArray });\nworker.onmessage = (e) => console.log(e.data);\n\n// worker.js\nself.onmessage = (e) => {\n  const result = heavyComputation(e.data);\n  self.postMessage(result);\n};\n\`\`\`\n\n**Ограничения:** нет доступа к DOM, window, document. Общение только через postMessage (сериализация).\n\n**SharedWorker** — один воркер на несколько вкладок.\n**Transferable Objects** — передача данных без копирования (ArrayBuffer).` },
      { name: 'Как веб-приложение превратить в PWA', level: '4', content: `**PWA (Progressive Web App)** — веб-приложение с нативными возможностями.\n\n**3 требования:**\n1. **HTTPS** — обязательно\n2. **Service Worker** — кэширование, офлайн\n3. **Web App Manifest** — метаданные приложения\n\n\`\`\`json\n// manifest.json\n{\n  "name": "My App",\n  "short_name": "App",\n  "start_url": "/",\n  "display": "standalone",\n  "theme_color": "#000",\n  "icons": [{ "src": "icon.png", "sizes": "192x192" }]\n}\n\`\`\`\n\n**Возможности:** установка на домашний экран, push-уведомления, офлайн-работа, фоновая синхронизация.\n\n**Стратегии кэширования:** Cache First, Network First, Stale While Revalidate.` },
      { name: 'WebComponents, ShadowDOM, Custom Elements', level: '4', content: `**Custom Elements:**\n\`\`\`js\nclass MyButton extends HTMLElement {\n  connectedCallback() { this.innerHTML = '<button>Click</button>'; }\n}\ncustomElements.define('my-button', MyButton);\n\`\`\`\n\n**Shadow DOM** — инкапсулированное DOM-дерево, изолированное от внешних стилей:\n\`\`\`js\nconst shadow = this.attachShadow({ mode: 'open' });\nshadow.innerHTML = '<style>p { color: red; }</style><p>Isolated</p>';\n\`\`\`\n\n**HTML Templates:**\n\`\`\`html\n<template id="tmpl"><p>Reusable content</p></template>\n\`\`\`\n\`\`\`js\nconst tmpl = document.getElementById('tmpl');\nconst clone = tmpl.content.cloneNode(true);\nshadow.appendChild(clone);\n\`\`\`\n\n**Slots** — точки вставки контента извне в Shadow DOM.` },
    ],
  },
  {
    id: 'react',
    title: 'REACT',
    icon: '⚛️',
    color: '#61DAFB',
    topics: [
      { name: 'Компоненты, свойства: Props, State, однонаправленный поток данных', level: '2', content: `**Однонаправленный поток:** данные (props) текут сверху вниз. Обратно — через колбэки.\n\n**Props** — неизменяемы (read-only), передаются от родителя.\n**State** — принадлежит компоненту, изменяется через setter, вызывает ререндер.\n\n**Ререндер дочерних:** по умолчанию ВСЕ дети ререндерятся при ререндере родителя. React.memo — предотвращает, если props не изменились.\n\n**Ловушка с memo + колбэками:** новая функция каждый ререндер → новая ссылка → memo бесполезен. Решение: useCallback.`, score: 4.5 },
      { name: 'Особенности синтаксиса JSX', level: '2', content: `**JSX → React.createElement(type, props, children) → объект (React-элемент)**\n\n\`className\` вместо \`class\` (зарезервированное слово), \`htmlFor\` вместо \`for\`.\n\nВ React 17+ — \`_jsx()\` вместо createElement, не нужен \`import React\`.`, score: 4 },
      { name: 'Хуки: встроенные и пользовательские', level: '2', content: `**useState** — состояние компонента\n**useEffect** — побочные эффекты (API, подписки)\n**useMemo** — мемоизация результата вычисления\n**useCallback** — мемоизация функции (= useMemo(() => fn, deps))\n**useRef** — ссылка на DOM / хранение данных без ререндера\n**useContext** — потребление контекста\n**useReducer** — сложное состояние (как мини-Redux)\n**useTransition** — низкоприоритетные обновления\n\n**Правила хуков:**\n1. Только на верхнем уровне (не в if/for/вложенных функциях)\n2. Префикс \`use\`\nReact запоминает хуки по **порядку вызова**.`, score: 4 },
      { name: 'Жизненный цикл компонента', level: '2', content: `**3 фазы:** Mounting → Updating → Unmounting\n\n**useEffect маппинг:**\n\`\`\`js\nuseEffect(() => { ... }, []);     // componentDidMount\nuseEffect(() => { ... }, [dep]);  // componentDidUpdate (для dep)\nuseEffect(() => {\n  return () => { ... };           // componentWillUnmount\n}, []);\n\`\`\`\n\n**shouldComponentUpdate** → React.memo (для функциональных).`, score: 4 },
      { name: 'Фрагменты', level: '2', content: `Группировка без лишнего DOM-узла: \`<Fragment>\` или \`<>...</>\`.\n\n\`<>\` — нельзя передать key. \`<Fragment key={id}>\` — можно. Единственный случай для полного Fragment — списки.`, score: 5 },
      { name: 'Компоненты высшего порядка', level: '3', content: `**HOC** — функция, принимающая компонент → возвращающая новый с расширенной функциональностью.\n\n\`\`\`jsx\nfunction withAuth(Component) {\n  return function(props) {\n    if (!useAuth()) return <Redirect to="/login" />;\n    return <Component {...props} />;\n  };\n}\nconst ProtectedPage = withAuth(Dashboard);\n\`\`\`\n\nHOC не изменяет оригинальный компонент, а оборачивает. Сейчас заменён хуками.`, score: 4 },
      { name: 'Virtual DOM', level: '3', content: `**Virtual DOM** — легковесное JS-представление реального DOM.\n\n**Reconciliation (согласование):**\n1. Тип элемента изменился → уничтожить поддерево, строить заново\n2. Тип тот же → обновить только изменённые props/атрибуты\n\n**key** — идентификатор элемента в списке для правильного сопоставления. index как key → баги при вставке/удалении + лишние ререндеры.`, score: 4 },
      { name: 'Способы оптимизации React-приложения', level: '3', content: `1. **memo/useMemo/useCallback** — мемоизация (применять предметно!)\n2. **React.lazy + Suspense** — code splitting\n3. **Виртуализация списков** — react-window, react-virtualized\n4. **Колокализация стейта** — стейт ближе к месту использования\n5. **Стейт-менеджеры** — точечная подписка на данные`, score: 3.5 },
      { name: 'Предохранители (ErrorBoundary)', level: '3', content: `Классовый компонент, ловит ошибки в рендере и жизненном цикле дочерних.\n\n**НЕ ловит:**\n• Обработчики событий (onClick и т.д.)\n• Асинхронный код (setTimeout, fetch)\n• SSR\n• Ошибки в самом ErrorBoundary\n\nМожно размещать на разных уровнях дерева — если секция упадёт, остальное работает.`, score: 3 },
      { name: 'Порталы и как ими пользоваться', level: '3', content: `\`\`\`jsx\nimport { createPortal } from 'react-dom';\ncreatePortal(<Modal />, document.getElementById('modal-root'));\n\`\`\`\n\nМонтирует в другой DOM-узел, но события всплывают по **React-дереву** (не DOM-дереву).`, score: 4 },
      { name: 'React Context', level: '3', content: `Решает **prop drilling**. createContext → Provider (value) → useContext.\n\n**Проблема:** изменение value → ВСЕ подписчики ререндерятся. React.memo НЕ помогает (контекст обходит memo).\n\n**Решение:** разделить на отдельные контексты (UserContext, ThemeContext).`, score: 4.5 },
      { name: 'Концепция SSR. Ограничения применения', level: '3', content: `Сервер рендерит HTML → браузер показывает сразу → **гидратация** (навешивает обработчики).\n\n**API:**\n• \`createRoot\` — CSR (пустой DOM)\n• \`hydrateRoot\` — SSR (DOM с контентом)\n• \`renderToString\` — синхронный (старый)\n• \`renderToPipeableStream\` — потоковый (React 18, Streaming SSR)\n\n**Плюсы:** SEO, быстрый FCP.\n**Минусы:** нет window/document, увеличенный TTFB, нагрузка на сервер.`, score: 3.5 },
      { name: 'Form managers', level: '3', content: `**React Hook Form** — неконтролируемые компоненты + useRef. Минимум ререндеров.\n**Formik** — контролируемые компоненты. Каждое нажатие → ререндер.\n\nReact Hook Form + **Zod/Yup** — валидация по схеме с выводом типов.`, score: 3 },
      { name: 'React паттерны. Compound components. render-props', level: '4', content: `**Compound Components:** набор связанных компонентов через Context.\n\`\`\`jsx\n<Table>\n  <Table.Header><Table.Cell>Name</Table.Cell></Table.Header>\n  <Table.Row><Table.Cell>Alice</Table.Cell></Table.Row>\n</Table>\n\`\`\`\n\n**Render-props:** компонент принимает функцию для рендеринга.\n\`\`\`jsx\n<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />\n\`\`\`\n\nОба паттерна в основном заменены хуками (проще, без wrapper hell).`, score: 3.5 },
      { name: 'Механизм Reconciliation', level: '4', content: `Алгоритм сравнения Virtual DOM деревьев O(n):\n\n1. **Разный тип** → уничтожить поддерево, создать заново (включая state)\n2. **Одинаковый тип DOM** → обновить атрибуты\n3. **Одинаковый тип компонента** → обновить props, вызвать render\n4. **Списки** → key для сопоставления\n\n**Одинаковый key** → warning + баги со стейтом. **index как key** → лишние ререндеры при вставке/удалении.`, score: 4 },
      { name: 'Архитектура Fiber', level: '4', content: `**Fiber** — структура данных (узел) для каждого компонента. Хранит тип, props, state, ссылки на соседей.\n\n**Проблема до Fiber:** стековый рекурсивный обход — нельзя прервать, UI зависает.\n\n**Решение:** работа делится на маленькие units of work, можно прервать и возобновить.\n\n**useTransition** — помечает обновление как низкоприоритетное. React может прервать при срочном обновлении.\n\n**useDeferredValue** — аналог, но для значения.`, score: 4 },
      { name: 'Server components', level: '4', content: `Код остаётся на сервере, JS НЕ отправляется клиенту. Нет гидратации.\n\n**\`'use client'\`** — маркер клиентского компонента. Остальное — серверное по умолчанию.\n\n**RSC Payload:** серверные компоненты → готовая разметка, клиентские → ссылки из бандла.\n\n**Ограничения SC:** нет useState/useEffect, нет обработчиков событий, нет интерактивности.\n\n**Плюс:** тяжёлые библиотеки не попадают в бандл клиента. Прямой доступ к БД, файловой системе.`, score: 4 },
    ],
  },
];
