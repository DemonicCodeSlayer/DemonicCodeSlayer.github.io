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

\`\`\`js
function foo() { console.log(this); }

// Нестрогий режим:
foo.call(null);      // this → window
foo.call(undefined); // this → window
foo.call(7);         // this → Number {7}  ← boxing!
foo.call('hi');      // this → String {'hi'} ← boxing!

// Strict mode — boxing не происходит:
foo.call(7);         // this → 7 (просто примитив)
foo.call(null);      // this → null
\`\`\`

**Правило:** нестрогий → null/undefined заменяются на window, примитивы оборачиваются в объект. Строгий → что передал, то и получил.`,
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

**User.prototype** по умолчанию = \`{ constructor: User }\`

**Приватные методы:**
\`\`\`js
class User {
  #name;
  constructor(name) { this.#name = name; }
  #validate() { return this.#name.length > 0; }
  getName() { return this.#validate() ? this.#name : null; }
}
\`\`\`

**Порядок инициализации полей:**
1. Поля родителя (class fields)
2. Конструктор родителя (super())
3. Поля дочернего класса
4. Конструктор дочернего класса

**Mixin-паттерн** (псевдо-множественное наследование):
\`\`\`js
const Serializable = (Base) => class extends Base {
  serialize() { return JSON.stringify(this); }
};
const Validatable = (Base) => class extends Base {
  validate() { return Object.values(this).every(v => v !== null); }
};
class User extends Serializable(Validatable(EventEmitter)) { ... }
\`\`\`
Каждый mixin — функция (Base) => class extends Base. Цепочка прототипов линейна, нет diamond problem.`,
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

**Конец цепочки:** Object.prototype → null

**Object.create():**
\`\`\`js
// Создать объект с конкретным прототипом
const animal = { breathe() { return true; } };
const dog = Object.create(animal);
dog.bark = () => 'Woof';
Object.getPrototypeOf(dog) === animal; // true

// Объект без прототипа — чистый hash map (нет toString, hasOwnProperty и т.д.)
const map = Object.create(null);
map['key'] = 'value'; // никогда не конфликтует с prototype методами
\`\`\`

**Object.getPrototypeOf vs __proto__:**
\`__proto__\` — устаревший геттер/сеттер на Object.prototype.
\`Object.getPrototypeOf(obj)\` — стандартный API, используй его.
\`Object.setPrototypeOf(obj, proto)\` — изменить прототип у существующего объекта. Избегай в горячем коде: переводит объект в slow mode (V8 сбрасывает Hidden Class).`,
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

**• Incremental Marking** — фаза Mark разбита на порции по 5-10мс, между которыми выполняется JS. Без этого обход всего графа объектов блокировал поток на десятки-сотни мс. Побочный эффект: пока идут порции, JS может изменить ссылки. Решение — **write barrier**: при каждой записи свойства V8 помечает объект «изменён» и перепроверяет его в следующей порции.

**• Concurrent Marking/Sweeping/Compacting** — фазы Sweep и Compact выполняются в отдельных worker-потоках параллельно с JS. С 2018 года часть фазы Mark тоже идёт параллельно, основной поток только финализирует результат.

**• Lazy Sweeping** — после Mark движок знает мёртвые объекты, но не торопится очищать. Sweep происходит лениво — только когда нужно выделить новую память и страница заполнена. Стоимость очистки размазывается во времени.

**Итог:** без оптимизаций пауза Major GC — 100-500мс (заметный фриз). С оптимизациями — основной поток блокируется на 1-5мс, остальное параллельно.`,
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
        content: `**Скрытые классы (Hidden Classes)**

**Hashmap** — структура данных "ключ → значение". При чтении \`obj.name\` нужно вычислить хэш строки "name", найти ячейку, разрешить коллизии. Это O(1) в среднем, но с константными накладными расходами на каждое обращение.

V8 не хранит свойства объекта как hashmap — это медленно. Вместо этого он назначает каждому объекту Hidden Class (внутреннее описание формы) — какие свойства есть и по какому смещению в памяти. Тогда \`obj.name\` читается напрямую по смещению — как поле структуры в C, без хэширования.

\`\`\`js
const user = {};        // Hidden Class C0: {}
user.name = 'Alice';    // → C1: { name: offset 0 }
user.age = 25;          // → C2: { name: offset 0, age: offset 8 }
\`\`\`

Два объекта с **одинаковым порядком добавления свойств** разделяют один Hidden Class → V8 переиспользует оптимизации для обоих.

\`\`\`js
// ✅ Оба получат один Hidden Class C2
const a = {}; a.x = 1; a.y = 2;
const b = {}; b.x = 5; b.y = 10;

// ❌ Разные Hidden Classes — разный порядок свойств
const c = {}; c.x = 1; c.y = 2;
const d = {}; d.y = 2; d.x = 1;
\`\`\`

**Практика:** инициализировать все свойства в конструкторе в одинаковом порядке. Динамическое добавление свойств в разном порядке дробит оптимизации.

**delete — опасен:**
Удаление свойства переводит объект в **dictionary mode** (slow mode) — V8 переходит на настоящий hashmap, теряет скрытый класс. Вместо delete → присвой \`undefined\` или \`null\`.

---

**Inline Caching (IC)**

IC — оптимизация на уровне JIT. Каждый раз когда V8 впервые выполняет операцию вроде \`obj.prop\`, он не знает что там внутри — и делает полный поиск. Но он запоминает: "здесь был объект с Hidden Class C2, свойство prop — на смещении 8". При следующем вызове просто проверяет класс и читает по смещению — без хэширования, без поиска.

Проблема возникает когда в одно и то же место кода приходят объекты **разных форм**. V8 должен хранить кэш для каждой встреченной формы — и с каждой новой формой кэш становится дороже:

\`\`\`js
function getX(obj) { return obj.x; }

getX({ x: 1 });           // 1-я форма → IC: Uninitialized → Monomorphic
getX({ x: 2, y: 3 });     // 2-я форма → IC: Monomorphic → Polymorphic
getX({ a: 1, x: 4 });     // 3-я форма → IC: Polymorphic (растёт)
// ... 5+ форм → Megamorphic: кэш выброшен, каждый вызов — полный поиск
\`\`\`

Стадии — это не настройки, а **состояние кэша**. V8 сам переводит IC вперёд по мере того как видит новые формы:

- **Uninitialized** — функция ещё не вызывалась
- **Monomorphic** — одна форма → максимально быстро, кэш из одной записи
- **Polymorphic** — 2–4 формы → кэш на несколько вариантов, сравниваются линейно
- **Megamorphic** — 5+ форм → кэш выброшен, V8 ходит в глобальную хэш-таблицу

**Назад IC не откатывается.** Функция ставшая Megamorphic остаётся такой до следующей перекомпиляции — V8 переключается обратно на hashmap (полный поиск по хэшу при каждом обращении), теряя все преимущества скрытых классов. Поэтому утилитарные функции которые принимают любые объекты (lodash, Object.assign) сознательно написаны так чтобы не полагаться на IC.`,
        score: 3.5,
      },
      {
        name: 'Proxy и Reflect',
        level: '4',
        content: `**Proxy** — обёртка вокруг объекта, которая перехватывает операции над ним. Сам объект не меняется — ты работаешь с прокси, а прокси решает что делать дальше.

\`\`\`js
const handler = {
  get(target, prop, receiver) {
    console.log(\`читаем \${prop}\`);
    return Reflect.get(target, prop, receiver); // стандартное поведение
  },
  set(target, prop, value, receiver) {
    if (typeof value !== 'number') throw new TypeError('только числа');
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxy = new Proxy({}, handler);
proxy.x = 42;   // OK
proxy.x = 'hi'; // TypeError
\`\`\`

**Полный список ловушек** (каждая перехватывает свою операцию):
\`\`\`js
get(target, prop, receiver)              // obj.prop
set(target, prop, value, receiver)       // obj.prop = value
has(target, prop)                        // 'prop' in obj
deleteProperty(target, prop)             // delete obj.prop
apply(target, thisArg, args)             // fn()
construct(target, args)                  // new Fn()
ownKeys(target)                          // Object.keys(), for...in
defineProperty(target, key, desc)        // Object.defineProperty
getOwnPropertyDescriptor(target, key)    // Object.getOwnPropertyDescriptor
getPrototypeOf(target)                   // Object.getPrototypeOf
setPrototypeOf(target, proto)            // Object.setPrototypeOf
isExtensible(target)                     // Object.isExtensible
preventExtensions(target)                // Object.preventExtensions
\`\`\`

---

**Reflect** — зеркало операций JS. Для каждой ловушки Proxy есть соответствующий метод Reflect с той же сигнатурой.

Зачем не просто \`target[prop]\`:
\`\`\`js
// ❌ Без Reflect — теряем receiver, this в геттере будет target, а не proxy
get(target, prop) {
  return target[prop]; // если prop — геттер, this внутри = target
}

// ✅ С Reflect — receiver (прокси) правильно передаётся как this
get(target, prop, receiver) {
  return Reflect.get(target, prop, receiver);
}
\`\`\`
Это критично когда объект наследует геттеры — без receiver они сломаются.

---

**Инварианты Proxy:**
Proxy не может нарушать объектную модель JS. Если свойство \`non-configurable + non-writable\`, get-ловушка обязана вернуть то же значение что в target — иначе TypeError. Движок принудительно проверяет это независимо от твоего кода.

**Proxy.revocable():**
\`\`\`js
const { proxy, revoke } = Proxy.revocable(target, handler);
revoke(); // proxy мёртв → TypeError на любую операцию
\`\`\`
Кейс: временный доступ к объекту. После revoke все ссылки на proxy бесполезны — данные не утекут.

**Где используется:** Vue 3 реактивность (перехват get/set для отслеживания зависимостей), MobX, валидация данных, логирование, мемоизация.`,
        score: 3,
      },
      {
        name: 'Map, Set, WeakMap, WeakSet',
        level: '3',
        content: `**Map** — коллекция ключ-значение. Ключом может быть что угодно (объект, функция, NaN):
\`\`\`js
const map = new Map();
map.set('key', 'value');
map.set(obj, 42);        // объект как ключ
map.get('key');          // 'value'
map.has('key');          // true
map.delete('key');
map.size;                // кол-во записей

// Итерация:
for (const [key, value] of map) { ... }
map.forEach((value, key) => { ... });
[...map.keys()], [...map.values()], [...map.entries()]
\`\`\`
Map vs Object: Map сохраняет порядок вставки, не имеет прототипных ключей, удобнее для итерации.

**Set** — коллекция уникальных значений:
\`\`\`js
const set = new Set([1, 2, 2, 3]); // Set {1, 2, 3}
set.add(4);
set.has(2);   // true
set.delete(2);
set.size;     // 3

// Удаление дублей из массива:
const unique = [...new Set(arr)];
\`\`\`

**WeakMap** — как Map, но:
• Ключи — только объекты
• Слабые ссылки — если объект-ключ больше нигде не используется, GC его удалит вместе с записью
• Нет итерации, нет size
\`\`\`js
const cache = new WeakMap();
cache.set(domNode, computedData); // удалится вместе с domNode
\`\`\`
Кейсы: кэш данных привязанный к объекту, приватные данные классов без утечек памяти.

**WeakSet** — как Set, но только объекты, слабые ссылки, нет итерации:
\`\`\`js
const seen = new WeakSet();
seen.add(obj);
seen.has(obj); // true
\`\`\`
Кейс: отмечать объекты как "обработанные" без удержания в памяти.

**Ключевое отличие Weak-версий:** не мешают сборщику мусора — объект удалится как только исчезнут все остальные ссылки на него.`,
        score: 3.5,
      },
    ],
  },
  {
    id: 'browser',
    title: 'БРАУЗЕР И ЕГО ИНСТРУМЕНТЫ',
    icon: '🌐',
    color: '#4FC3F7',
    topics: [
      { name: 'devTools (network, application)', level: '2', content: `**Network:** мониторинг HTTP-запросов, время загрузки, размеры, заголовки, тело ответа. Фильтрация по типу (XHR, JS, CSS, Img). Throttling (3G, offline).\n\n**Application:** cookies, localStorage, sessionStorage, IndexedDB, Service Workers, Cache Storage, Manifests.\n\n**Performance:** запись и анализ производительности, flame chart, CPU profiling.\n\n**Elements:** DOM-дерево, стили, computed styles, box model.\n\n**Console:** логирование, выполнение JS, фильтрация по уровням.

**Memory:** heap snapshots (сравнивать до/после — найти утечки), allocation timeline (что создаётся и удерживается), retained size — реальная память с учётом удерживаемых объектов.

**Coverage:** показывает % неиспользуемого JS/CSS при загрузке страницы. Помогает найти что вынести в lazy-load.

**Local Overrides:** редактировать файлы сайта прямо в DevTools — изменения переживают перезагрузку страницы. Удобно для экспериментов без локального сервера.

**Recorder:** запись пользовательских сценариев → воспроизведение → экспорт в Playwright/Puppeteer скрипты.` },
      { name: 'breakpoints', level: '2', content: `**Типы breakpoints в DevTools:**\n\n• **Line breakpoint** — пауза на конкретной строке кода\n• **Conditional breakpoint** — срабатывает при условии (\`user.id === 5\`)\n• **DOM breakpoint** — при изменении DOM-узла (subtree, attributes, node removal)\n• **XHR/Fetch breakpoint** — при запросе к определённому URL\n• **Event listener breakpoint** — при определённом событии (click, scroll)\n• **Exception breakpoint** — при выбросе исключения\n\n**Отладка:** Step over (F10), Step into (F11), Step out (Shift+F11), Resume (F8).\n\n**Watch expressions** — отслеживание переменных. **Call Stack** — стек вызовов. **Scope** — текущие переменные.` },
      { name: 'Всплытие и погружение событий', level: '2', content: `**3 фазы события:**\n1. **Capturing (погружение)** — от window вниз к целевому элементу\n2. **Target** — событие на целевом элементе\n3. **Bubbling (всплытие)** — от целевого элемента вверх к window\n\n\`\`\`js\nel.addEventListener('click', handler, true);  // capturing\nel.addEventListener('click', handler, false); // bubbling (по умолчанию)\n\`\`\`\n\n**event.stopPropagation()** — останавливает всплытие/погружение\n**event.stopImmediatePropagation()** — + отменяет остальные обработчики на этом элементе\n**event.preventDefault()** — отменяет действие по умолчанию (НЕ останавливает всплытие)\n\n**Делегирование событий:** вешаем один обработчик на родителя, проверяем \`event.target\`.` },
      { name: 'Основные браузерные события', level: '2', content: `**Мышь:**\n\`\`\`\nclick       — клик (mousedown + mouseup на одном элементе)\ndblclick    — двойной клик\nmousedown   — кнопка нажата\nmouseup     — кнопка отпущена\nmousemove   — движение мыши\nmouseenter  — вошла на элемент (не всплывает, не триггерится на детях)\nmouseleave  — вышла с элемента (не всплывает)\nmouseover   — вошла на элемент или дочерний (всплывает)\nmouseout    — вышла с элемента или дочернего (всплывает)\ncontextmenu — правый клик\nwheel       — колесо мыши\n\`\`\`\nmouseenter/mouseleave — для одного элемента, не реагируют на детей. mouseover/mouseout — всплывают, срабатывают при переходе между дочерними.\n\n**Клавиатура:**\n\`\`\`\nkeydown   — клавиша нажата (повторяется при удержании)\nkeyup     — клавиша отпущена\nkeypress  — устарел, не использовать\n\`\`\`\n\n**Форма:**\n\`\`\`\nsubmit    — отправка формы\nreset     — сброс формы\nchange    — значение изменено И потерян фокус (input, select, checkbox)\ninput     — значение изменяется в реальном времени (каждый символ)\nfocus     — элемент получил фокус (не всплывает)\nblur      — элемент потерял фокус (не всплывает)\nfocusin   — как focus, но всплывает\nfocusout  — как blur, но всплывает\n\`\`\`\n\n**Документ и окно:**\n\`\`\`\nDOMContentLoaded — DOM построен, стили/картинки могут не загрузиться\nload             — всё загружено (стили, картинки, шрифты)\nbeforeunload     — перед закрытием (можно показать предупреждение)\nunload           — страница закрывается\nresize           — изменение размера окна\nscroll           — прокрутка\nvisibilitychange — вкладка стала активной/неактивной\n\`\`\`\n\n**Drag & Drop:**\n\`\`\`\ndragstart  — начало перетаскивания\ndrag       — во время перетаскивания\ndragend    — конец перетаскивания\ndragenter  — элемент вошёл в зону drop\ndragleave  — элемент вышел из зоны drop\ndragover   — над зоной drop (нужен preventDefault() чтобы drop сработал)\ndrop       — элемент брошен\n\`\`\`\n\n**Touch (мобильные):**\n\`\`\`\ntouchstart  — палец коснулся экрана\ntouchmove   — палец движется\ntouchend    — палец убран\ntouchcancel — касание прервано (звонок, уведомление)\n\`\`\`\n\n**Буфер обмена:**\n\`\`\`\ncopy   — копирование\ncut    — вырезание\npaste  — вставка\n\`\`\`\n\n**Медиа:**\n\`\`\`\nplay          — воспроизведение началось\npause         — пауза\nended         — воспроизведение закончено\ntimeupdate    — текущее время изменилось\nvolumechange  — громкость изменилась\nloadeddata    — данные загружены\n\`\`\`\n\n**Анимации и переходы:**\n\`\`\`\nanimationstart  — CSS-анимация началась\nanimationend    — CSS-анимация закончилась\ntransitionend   — CSS-transition закончился\n\`\`\`\n\n**Intersection Observer** — не событие, но ключевой API. Срабатывает когда элемент появляется или исчезает из viewport. Используется для lazy-loading, infinite scroll, анимаций при скролле:\n\`\`\`js\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      loadImage(entry.target);\n      observer.unobserve(entry.target); // перестать следить\n    }\n  });\n}, { threshold: 0.1 }); // 0.1 = срабатывает когда 10% элемента видно\n\nobserver.observe(document.querySelector('.lazy-img'));\n\`\`\`\n\n**Passive listeners** — подсказка браузеру что обработчик не вызовет preventDefault(). Браузер не ждёт выполнения обработчика перед прокруткой — скролл плавнее:\n\`\`\`js\ndocument.addEventListener('scroll', handler, { passive: true });\ndocument.addEventListener('touchmove', handler, { passive: true });\n\`\`\`` },
      { name: 'Что такое DOM. JS Методы работы с узлами', level: '2', content: `**DOM (Document Object Model)** — древовидное представление HTML-документа. Каждый HTML-тег — узел (node).\n\n**Поиск:**\n\`\`\`js\ndocument.getElementById('id')\ndocument.querySelector('.class')      // первый\ndocument.querySelectorAll('.class')   // все (статическая коллекция)\ndocument.getElementsByClassName()     // живая коллекция\n\`\`\`\n\n**Создание/модификация:**\n\`\`\`js\ndocument.createElement('div')\nelement.append(child)      // в конец\nelement.prepend(child)     // в начало\nelement.before(sibling)    // перед\nelement.after(sibling)     // после\nelement.remove()           // удалить\nelement.cloneNode(true)    // глубокое клонирование\n\`\`\`\n\n**Атрибуты:** getAttribute, setAttribute, removeAttribute, dataset (data-*).\n**Классы:** classList.add, remove, toggle, contains.

**DocumentFragment** — лёгкий узел вне DOM. Добавляй элементы пакетно, потом вставь один раз → один reflow:
\`\`\`js
const frag = document.createDocumentFragment();
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  frag.appendChild(li);
});
list.appendChild(frag); // единственный reflow
\`\`\`

**MutationObserver** — следит за изменениями в DOM (замена устаревшего MutationEvents):
\`\`\`js
const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => console.log(m.type, m.addedNodes, m.attributeName));
});
observer.observe(element, {
  childList: true,    // добавление/удаление дочерних узлов
  subtree: true,      // всё поддерево
  attributes: true,   // изменения атрибутов
  characterData: true // изменения текстового контента
});
observer.disconnect();
\`\`\`
Используется в: React DevTools, rich text редакторах, analytics трекерах.` },
      { name: 'iframe', level: '3', content: `**iframe** — встраивает другую HTML-страницу внутрь текущей.\n\n\`\`\`html\n<iframe src="https://example.com" sandbox="allow-scripts"></iframe>\n\`\`\`\n\n**Безопасность:**\n• **sandbox** — ограничивает возможности: allow-scripts, allow-same-origin, allow-forms, allow-popups\n• **Same-Origin Policy** — доступ к содержимому iframe только с того же домена\n• **postMessage** — безопасное общение между окнами разных доменов\n\n\`\`\`js\n// Родитель → iframe\niframe.contentWindow.postMessage(data, 'https://target.com');\n\n// iframe → родитель\nwindow.parent.postMessage(data, 'https://parent.com');\n\n// Приём\nwindow.addEventListener('message', (e) => {\n  if (e.origin !== 'https://trusted.com') return;\n  console.log(e.data);\n});\n\`\`\`\n\n**X-Frame-Options** — заголовок, запрещающий встраивание сайта в iframe.` },
      { name: 'Отладка WebSocket в браузере', level: '3', content: `В DevTools → Network → вкладка **WS** (WebSocket):\n• Видны все WebSocket-соединения\n• **Messages** — отправленные (зелёные) и полученные (красные) сообщения\n• **Headers** — заголовки handshake (Upgrade: websocket)\n• **Timing** — время установки соединения\n\nМожно фильтровать по содержимому сообщений, видеть бинарные данные. Полезно для дебага real-time приложений (чаты, уведомления, торговые платформы).` },
      { name: 'Базовое понимание cookies', level: '3', content: `**Cookie** — небольшой фрагмент данных (до ~4 KB), который сервер устанавливает в браузере через заголовок Set-Cookie. Браузер автоматически прикладывает cookie к каждому HTTP-запросу к тому же домену через заголовок Cookie.

Именно поэтому cookies используют для аутентификации — сервер один раз установил session-id, и браузер сам носит его при каждом запросе, не требуя ничего от JS-кода.

**Как это выглядит на уровне HTTP:**
\`\`\`
← Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax; Max-Age=86400
→ Cookie: session=abc123
\`\`\`

**Установка через JS:**
\`\`\`js
// Записать
document.cookie = "theme=dark; max-age=2592000; path=/";

// Прочитать — возвращает ВСЕ cookie строкой через ";"
document.cookie; // "theme=dark; lang=ru"

// Удалить — установить max-age=0 или expires в прошлом
document.cookie = "theme=; max-age=0; path=/";
\`\`\`
API намеренно неудобный — нет нативного getItem/removeItem. Обычно используют библиотеку js-cookie или пишут хелпер.

**Атрибуты безопасности:**

**HttpOnly** — cookie недоступна из JS (document.cookie её не видит). Защита от XSS.

**Secure** — cookie отправляется только по HTTPS.

**SameSite** — контролирует отправку cookie в кросс-сайтовых запросах:
\`\`\`
Strict — не отправляется ни в каких кросс-сайтовых запросах
Lax    — не отправляется при CSRF-запросах (POST, img, iframe),
         но отправляется при top-level навигации. Дефолт в современных браузерах.
None   — отправляется всегда, требует Secure. Для third-party (виджеты, аналитика).
\`\`\`

**path и domain:**
\`\`\`
path=/admin   — cookie видна только для /admin и его подпутей
domain=.example.com — cookie доступна для всех поддоменов (sub.example.com, api.example.com)
\`\`\`
Без явного domain — cookie принадлежит только точному домену, поддомены не видят.

**max-age vs expires:**
\`\`\`js
max-age=3600       // секунды от текущего момента (предпочтительнее)
expires=Wed, 21 Oct 2026 07:28:00 GMT  // конкретная дата (зависит от часов клиента)
\`\`\`
Без обоих — session cookie: живёт до закрытия браузера (не вкладки).

**Типы cookies:**
\`\`\`
Session cookie    — без max-age/expires, удаляется при закрытии браузера
Persistent cookie — с max-age/expires, хранится до истечения срока
First-party       — домен совпадает с текущим сайтом
Third-party       — домен отличается (пиксели аналитики, рекламные трекеры)
                    Браузеры блокируют по умолчанию (Safari ITP, Chrome Privacy Sandbox)
\`\`\`

**Ограничения:**
• ~4 KB на одну cookie
• ~50 cookies на домен (в зависимости от браузера)
• Отправляются с каждым запросом — не хранить большие данные (для этого localStorage)

**Cookie vs localStorage:**
\`\`\`
Cookie         — автоматически летит на сервер, есть HttpOnly/Secure, 4 KB
localStorage   — только JS, не уходит на сервер, нет HttpOnly, 5-10 MB
\`\`\`
Для аутентификации — cookie с HttpOnly. Для настроек UI — localStorage.` },
      { name: 'localStorage и sessionStorage', level: '3', content: `**localStorage** — хранит данные без срока истечения, переживает закрытие браузера. Область видимости: домен + протокол (http и https — разные хранилища).

**sessionStorage** — данные живут до закрытия вкладки. Уникально для каждой вкладки: две вкладки одного сайта — два разных sessionStorage. Дублируется при открытии вкладки через Ctrl+Click (копируется на момент открытия, дальше независимо).

**API — синхронный (одинаковый для обоих):**
\`\`\`js
localStorage.setItem('key', JSON.stringify(value));
const val = JSON.parse(localStorage.getItem('key')); // null если нет
localStorage.removeItem('key');
localStorage.clear();
localStorage.length;
localStorage.key(0); // ключ по индексу

// sessionStorage — тот же интерфейс, другая область видимости
sessionStorage.setItem('step', '2');
sessionStorage.getItem('step'); // '2'
\`\`\`

**Нюансы:**
• Хранит только строки — объекты нужно JSON.stringify/parse
• getItem несуществующего ключа возвращает null, не undefined
• Синхронный API — блокирует main thread при большом объёме данных
• ~5 MB на домен (зависит от браузера, в некоторых 10 MB)
• Недоступен в Web Workers и Service Workers (там — IndexedDB)
• В режиме инкогнито очищается при закрытии окна (ведёт себя как sessionStorage)

**Событие storage:**
\`\`\`js
window.addEventListener('storage', (e) => {
  e.key;        // изменённый ключ (null при clear())
  e.oldValue;
  e.newValue;
  e.url;        // страница, которая изменила
  e.storageArea // localStorage или sessionStorage
});
\`\`\`
Срабатывает только в других вкладках/окнах того же домена — не в той, что изменила. Используется для синхронизации состояния между вкладками.

**localStorage vs sessionStorage vs cookie:**
\`\`\`
                localStorage  sessionStorage  cookie
Срок жизни      бессрочно     до закрытия вк. задаётся явно
Объём           ~5 MB         ~5 MB           ~4 KB
Уходит на сервер нет          нет             да (каждый запрос)
Доступ из JS    да            да              да (если нет HttpOnly)
Вкладки         общий         изолирован      общий
\`\`\`` },
      { name: 'Базовое понимание Selection и Range', level: '3', content: `**Range** — объект, описывающий фрагмент DOM от стартовой до конечной точки. Точка = (node, offset), где offset для текстового узла — позиция символа, для элемента — индекс дочернего узла.

\`\`\`js
const range = document.createRange();

range.setStart(textNode, 2);       // с 3-го символа текстового узла
range.setEnd(textNode, 7);         // по 7-й
range.selectNode(el);              // весь элемент включая тег
range.selectNodeContents(el);      // только содержимое элемента
range.collapse(true);              // схлопнуть в начало (false — в конец)

range.toString();                  // текст внутри
range.getBoundingClientRect();     // координаты для позиционирования тултипа
range.cloneContents();             // DocumentFragment — копия без удаления
range.extractContents();           // DocumentFragment — вырезает из DOM
range.deleteContents();            // удаляет содержимое
range.insertNode(node);            // вставить узел в начало range
range.surroundContents(node);      // обернуть содержимое в node
\`\`\`

**Selection** — то что выделил пользователь; может содержать несколько Range (на практике браузеры поддерживают один).

\`\`\`js
const sel = window.getSelection();

sel.rangeCount;           // количество Range (обычно 0 или 1)
sel.getRangeAt(0);        // получить Range по индексу
sel.toString();           // выделенный текст
sel.isCollapsed;          // true если курсор без выделения (каретка)
sel.anchorNode;           // узел где началось выделение
sel.anchorOffset;         // смещение в anchorNode
sel.focusNode;            // узел где закончилось выделение
sel.focusOffset;

sel.removeAllRanges();    // снять выделение
sel.addRange(range);      // программно выделить
sel.collapse(node, offset); // переместить каретку
sel.selectAllChildren(el);  // выделить всё содержимое элемента
\`\`\`

**anchor vs focus:** anchor — где пользователь нажал мышь, focus — где отпустил. При выделении снизу вверх focus будет раньше anchor в DOM.

**Типичные задачи:**
\`\`\`js
// Получить координаты выделения (для тултипа форматирования)
const rect = sel.getRangeAt(0).getBoundingClientRect();

// Программно выделить текст в элементе
const range = document.createRange();
range.selectNodeContents(document.getElementById('title'));
sel.removeAllRanges();
sel.addRange(range);

// Вставить HTML в позицию курсора (contenteditable)
const range = sel.getRangeAt(0);
range.deleteContents();
range.insertNode(document.createTextNode('вставленный текст'));
\`\`\`

**Применение:** rich-text редакторы (Slate, TipTap), подсветка найденного текста, кастомные контекстные меню по выделению, аннотации.` },
      { name: 'Особенности работы с браузерными событиями', level: '3', content: `**Throttle** — не чаще чем раз в N мс (scroll, resize).\n**Debounce** — ждёт N мс после последнего вызова (input поиска).\n\n**Опции addEventListener:**\n\n**once** — обработчик срабатывает один раз и автоматически удаляется:\n\`\`\`js\nbutton.addEventListener('click', handler, { once: true });\n\`\`\`\n\n**passive** — обещаем браузеру что не вызовем preventDefault(). Браузер не ждёт выполнения обработчика перед прокруткой → плавный скролл:\n\`\`\`js\ndocument.addEventListener('scroll', handler, { passive: true });\ndocument.addEventListener('touchmove', handler, { passive: true });\n\`\`\`\nВажно для scroll/touchmove — без passive браузер каждый раз ждёт, не вызван ли preventDefault(), и тормозит прокрутку.\n\n**capture** — обработчик на фазе погружения (по умолчанию false — всплытие):\n\`\`\`js\nel.addEventListener('click', handler, { capture: true });\n// или сокращённо:\nel.addEventListener('click', handler, true);\n\`\`\`\n\n**Удаление обработчика — нужна та же ссылка на функцию:**\n\`\`\`js\n// ❌ Не работает — каждый раз новая функция:\nel.addEventListener('click', () => handler());\nel.removeEventListener('click', () => handler());\n\n// ✅ Работает — одна ссылка:\nconst fn = () => handler();\nel.addEventListener('click', fn);\nel.removeEventListener('click', fn);\n\`\`\`\nТа же проблема с методами класса — this.handler каждый раз одна ссылка, а () => this.handler() — нет.\n\n**Делегирование событий** — один обработчик на родителе вместо N обработчиков на детях. Работает благодаря всплытию:\n\`\`\`js\n// Плохо — 1000 обработчиков:\nitems.forEach(item => item.addEventListener('click', handler));\n\n// Хорошо — один обработчик:\nlist.addEventListener('click', (e) => {\n  const item = e.target.closest('.item');\n  if (!item || !list.contains(item)) return; // защита от кликов вне .item\n  handler(item);\n});\n\`\`\`\nclosest() поднимается по DOM вверх — работает даже если кликнули на дочерний элемент внутри .item. contains() защищает от случая когда closest нашёл элемент за пределами контейнера.\n\n**Custom Events:**\n\`\`\`js\nconst event = new CustomEvent('myEvent', { detail: { id: 1 }, bubbles: true });\nelement.dispatchEvent(event);\n\`\`\`` },
      { name: 'Живые коллекции, методы обработки и преобразования в массив', level: '3', content: `**Живая коллекция** — автоматически обновляется при изменении DOM:\n\`\`\`js\nconst divs = document.getElementsByTagName('div'); // живая\n// Добавили div → divs.length увеличится\n\`\`\`\n\n**Статическая коллекция** — снимок на момент вызова:\n\`\`\`js\nconst divs = document.querySelectorAll('div'); // статическая\n// Добавили div → divs.length НЕ изменится\n\`\`\`\n\n**Преобразование в массив:**\n\`\`\`js\nArray.from(collection)\n[...collection]\nArray.prototype.slice.call(collection)\n\`\`\`\n\nЖивые: getElementsByClassName, getElementsByTagName, children\nСтатические: querySelectorAll` },
      { name: 'Service workers', level: '4', content: `**Service Worker** — JS скрипт который:
• Работает в отдельном потоке (не блокирует UI)
• Является прокси между браузером и сетью
• Живёт дольше страницы — продолжает работать когда вкладка закрыта
• Работает только на HTTPS (или localhost)
• Нет доступа к DOM

**Регистрация:**
\`\`\`js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW зарегистрирован', reg))
    .catch(err => console.log('Ошибка', err));
}
\`\`\`

**Полный жизненный цикл:**
\`\`\`
installing → выполняется install (кэширование ассетов)
waiting    → установка прошла, ждёт пока закроются вкладки со старым SW
activating → выполняется activate (чистка старых кэшей)
activated  → контролирует страницы, слушает fetch/push
redundant  → заменён новой версией или сломался при установке
\`\`\`

**Почему появляется waiting:** браузер нашёл новый sw.js → запустил install у v2 → v2 завис в waiting, потому что старый v1 ещё контролирует открытые вкладки. F5 не помогает — перезагрузка не закрывает документ. Нужно закрыть все вкладки сайта или вызвать \`skipWaiting()\`.

**Install** — загружают статику в кэш для офлайн. Если хоть один файл не загрузился — install падает, SW не активируется.

**Activate** — удаляют кэши предыдущих версий (старый SW писал в \`'v1'\`, новый в \`'v2'\` — \`'v1'\` больше не нужен).

**skipWaiting()** — пропустить фазу waiting, активироваться немедленно, выкинув старый SW.
**clients.claim()** — забрать контроль над уже открытыми вкладками (без него они остаются у старого SW до следующей навигации даже после активации нового).
**Связка skipWaiting() + clients.claim()** — мгновенное обновление без перезагрузки. Но риск: страница загруженная со старым SW внезапно начинает общаться с новым — если форматы кэша/API несовместимы, поломается. Поэтому многие команды вместо этой связки показывают баннер "обновите страницу".
\`\`\`js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll(['/index.html', '/app.js']))
  );
  self.skipWaiting(); // активировать немедленно, не ждать закрытия вкладок
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== 'v1').map(k => caches.delete(k)))
    )
  );
  self.clients.claim(); // взять контроль над всеми открытыми вкладками
});
\`\`\`

**Стратегии кэширования:**

**Cache First** — сначала кэш, потом сеть (для статики):
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
\`\`\`

**Network First** — сначала сеть, при ошибке кэш (для API):
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
\`\`\`

**Stale While Revalidate** — отдаём кэш сразу, обновляем в фоне:
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('v1').then(cache =>
      cache.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        });
        return cached || fetchPromise;
      })
    )
  );
});
\`\`\`

**Push уведомления:**
\`\`\`js
Notification.requestPermission().then(permission => { /* подписываемся */ });

self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, { body: data.body, icon: '/icon.png' })
  );
});
\`\`\`

**Background Sync** — откладывает запросы до появления сети:
\`\`\`js
navigator.serviceWorker.ready.then(sw => sw.sync.register('send-message'));

self.addEventListener('sync', (event) => {
  if (event.tag === 'send-message') event.waitUntil(sendPendingMessages());
});
\`\`\`

**Возможности:** кэширование, офлайн-режим, push-уведомления, background sync, перехват и модификация любых запросов.` },
      { name: 'Web-workers', level: '4', content: `**Web Worker** — запускает JS в отдельном потоке, не блокируя main thread и UI. Нет доступа к DOM, window, document — только вычисления и сеть (fetch).

**Когда использовать:** тяжёлые вычисления (парсинг, шифрование, обработка изображений, сортировка больших массивов) — всё что вешает интерфейс дольше ~16ms.

**Создание и общение через postMessage:**
\`\`\`js
// main.js
const worker = new Worker('./worker.js');

worker.postMessage({ type: 'compute', data: bigArray }); // отправить

worker.onmessage = (e) => console.log('результат:', e.data);
worker.onerror = (e) => console.error(e.message);

worker.terminate(); // убить воркер
\`\`\`
\`\`\`js
// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data.data);
  self.postMessage(result); // отправить обратно
};
\`\`\`
Данные передаются копированием (structured clone) — изменения в воркере не влияют на оригинал.

**Transferable Objects** — передача без копирования, данные перемещаются (ArrayBuffer становится недоступен в отправителе):
\`\`\`js
const buffer = new ArrayBuffer(1024 * 1024 * 32); // 32MB
worker.postMessage(buffer, [buffer]); // второй аргумент — список transferable
// buffer здесь теперь пустой (detached)
\`\`\`
Критично для больших бинарных данных — без transfer копирование 32MB блокирует поток.

**SharedWorker** — один экземпляр воркера на все вкладки одного домена. Общение через port:
\`\`\`js
// main.js
const worker = new SharedWorker('./shared.js');
worker.port.start();
worker.port.postMessage('hello');
worker.port.onmessage = (e) => console.log(e.data);
\`\`\`
\`\`\`js
// shared.js
self.onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (e) => port.postMessage('ответ: ' + e.data);
};
\`\`\`
Применение: общий кэш данных, синхронизация состояния между вкладками.

**Inline Worker** — без отдельного файла:
\`\`\`js
const blob = new Blob([
  \`self.onmessage = (e) => self.postMessage(e.data * 2);\`
], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));
\`\`\`

**Worker vs Service Worker:**
\`\`\`
Web Worker      — вычисления в фоне, живёт пока страница открыта
Service Worker  — прокси для сети, живёт независимо от страницы
\`\`\`` },
      { name: 'Как веб-приложение превратить в PWA', level: '4', content: `**PWA (Progressive Web App)** — веб-приложение которое ведёт себя как нативное: устанавливается на устройство, работает офлайн, получает push-уведомления.

**3 обязательных компонента:**
1. **HTTPS** — обязательно для SW и установки
2. **Web App Manifest** — описывает приложение
3. **Service Worker** — кэширование и офлайн

**Web App Manifest:**
\`\`\`json
{
  "name": "My Application",
  "short_name": "MyApp",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
\`\`\`
\`\`\`html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#000000">
\`\`\`

**display варианты:**
\`\`\`
standalone  — как нативное приложение, без браузерного UI (самый популярный)
fullscreen  — полный экран без каких-либо элементов браузера
minimal-ui  — минимальный браузерный UI (кнопки назад/вперёд)
browser     — обычная вкладка браузера
\`\`\`

**Установка — кастомный баннер:**
\`\`\`js
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

installButton.addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') console.log('Установлено!');
    deferredPrompt = null;
  });
});
\`\`\`
Браузер показывает баннер автоматически если: HTTPS + manifest с иконками + SW зарегистрирован + пользователь провёл достаточно времени на сайте.

**Push уведомления:**
\`\`\`js
// 1. Запросить разрешение:
const permission = await Notification.requestPermission();

// 2. Подписаться (VAPID ключ генерируется на сервере):
const subscription = await registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: vapidPublicKey
});
// 3. Отправить subscription на сервер — он будет слать уведомления

// 4. В SW получаем push:
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png',
      data: { url: data.url }
    })
  );
});

// 5. Клик по уведомлению:
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
\`\`\`

**Проверка:** DevTools → Application (Manifest, Service Workers, Cache Storage). Lighthouse — аудит PWA.

**Преимущества:** без App Store, автообновление, офлайн, push, индексируется поисковиками.

**Ограничения:** iOS — push только с iOS 16.4+; нет доступа к некоторым нативным API (Bluetooth, NFC).` },
      { name: 'WebComponents, ShadowDOM, Custom Elements', level: '4', content: `**Web Components** — набор браузерных API для создания переиспользуемых кастомных HTML элементов с инкапсулированной логикой и стилями. Без фреймворков — нативный браузер.

Три составляющих: **Custom Elements**, **Shadow DOM**, **HTML Templates**.

**Custom Elements — создание своих тегов:**
\`\`\`js
class MyButton extends HTMLElement {
  constructor() {
    super();
    // инициализация — не трогать DOM здесь!
  }

  connectedCallback() {
    // элемент добавлен в DOM — здесь работаем с DOM
    this.render();
  }

  disconnectedCallback() {
    // элемент удалён из DOM — чистим listeners, таймеры
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // атрибут изменился
  }

  static get observedAttributes() {
    return ['color', 'disabled']; // какие атрибуты отслеживать
  }

  render() {
    this.textContent = this.getAttribute('label') || 'Click';
  }
}

// имя обязательно содержит дефис!
customElements.define('my-button', MyButton);
\`\`\`
\`\`\`html
<my-button color="red" label="Submit"></my-button>
\`\`\`

**Shadow DOM — изолированное DOM-дерево.** Стили снаружи не проникают внутрь и наоборот:
\`\`\`js
class MyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        .card { border: 1px solid #ccc; padding: 16px; }
        h2 { color: navy; } /* не утечёт наружу */
      </style>
      <div class="card">
        <h2><slot name="title">Default Title</slot></h2>
        <p><slot>Default content</slot></p>
      </div>
    \`;
  }
}
customElements.define('my-card', MyCard);
\`\`\`
\`\`\`html
<my-card>
  <span slot="title">My Title</span>
  <p>Card content</p>
</my-card>
\`\`\`

**mode: open vs closed:**
\`\`\`js
this.attachShadow({ mode: 'open' });   // element.shadowRoot — доступен
this.attachShadow({ mode: 'closed' }); // element.shadowRoot — null
\`\`\`

**Slots — проекция внешнего контента внутрь Shadow DOM:**
Именованный slot — \`slot="name"\` для конкретного места.
Дефолтный slot — без имени, принимает всё остальное.

**HTML Templates — шаблоны которые парсятся, но не рендерятся сразу:**
\`\`\`html
<template id="card-template">
  <div class="card">
    <h2 class="title"></h2>
  </div>
</template>
\`\`\`
\`\`\`js
const clone = document.getElementById('card-template').content.cloneNode(true);
clone.querySelector('.title').textContent = this.getAttribute('title');
this.attachShadow({ mode: 'open' }).appendChild(clone);
\`\`\`

**Изоляция Shadow DOM — не абсолютная.** Три способа "пробить" границу:

1. **Наследуемые CSS-свойства** (\`color\`, \`font-family\`, \`line-height\` и др.) — проходят сквозь границу от shadow host. \`body { color: blue }\` → текст внутри тоже синий.
2. **CSS-переменные** — намеренно проходят сквозь границу. Стандартный API кастомизации компонентов:
\`\`\`css
/* снаружи: */
my-button { --btn-color: red; }
/* внутри Shadow DOM: */
button { color: var(--btn-color, blue); }
\`\`\`
3. **\`::part()\`** — компонент помечает элементы атрибутом \`part\`, снаружи стилизуют через псевдоэлемент:
\`\`\`css
/* внутри: <button part="btn"> */
my-button::part(btn) { background: red; }
\`\`\`

**Жизненный цикл:** constructor → connectedCallback → attributeChangedCallback → disconnectedCallback

**Web Components vs React:**
\`\`\`
                  Web Components     React
Фреймворк         не нужен           нужен React
Изоляция стилей   Shadow DOM         CSS Modules / styled
Реактивность      вручную            автоматически
Переиспользование любой фреймворк    только React
\`\`\`

**Когда использовать:** дизайн-системы для разных фреймворков, виджеты для встраивания на сторонние сайты.
**Примеры:** GitHub UI, Google Material Web, YouTube.` },
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
      { name: 'Хуки: встроенные и пользовательские', level: '2', content: `**useState** — состояние компонента\n**useEffect** — побочные эффекты (API, подписки)\n**useMemo** — мемоизация результата вычисления\n**useCallback** — мемоизация функции (= useMemo(() => fn, deps))\n**useRef** — ссылка на DOM / хранение данных без ререндера\n**useContext** — потребление контекста\n**useReducer** — сложное состояние (как мини-Redux)\n**useTransition** — помечает обновление как низкоприоритетное (UI не зависает при тяжёлых ререндерах)
**useLayoutEffect** — как useEffect, но синхронно после мутации DOM до отрисовки. Для измерения DOM и предотвращения визуального мерцания. Стоит дороже useEffect.
**useId** — стабильный уникальный ID для пары label/input. Решает проблему гидратации при SSR:
\`\`\`js
const id = useId();
return <><label htmlFor={id}>Name</label><input id={id} /></>;
\`\`\`
**useImperativeHandle(ref, () => api, deps)** — выставить наружу только нужные методы:
\`\`\`js
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));
  return <input ref={inputRef} />;
});
// Родитель: ref.current.focus() — только выставленное API
\`\`\`
**useSyncExternalStore(subscribe, getSnapshot)** — подписка на внешние сторы с поддержкой Concurrent Mode. Именно так работают Zustand, Redux Toolkit, Jotai.

**Правила хуков:**
1. Только на верхнем уровне (не в if/for/вложенных функциях)
2. Префикс \`use\`
React запоминает хуки по **порядку вызова**.`, score: 4 },
      { name: 'Жизненный цикл компонента', level: '2', content: `**3 фазы:** Mounting → Updating → Unmounting\n\n**useEffect маппинг:**\n\`\`\`js\nuseEffect(() => { ... }, []);     // componentDidMount\nuseEffect(() => { ... }, [dep]);  // componentDidUpdate (для dep)\nuseEffect(() => {\n  return () => { ... };           // componentWillUnmount\n}, []);\n\`\`\`\n\n**shouldComponentUpdate** → React.memo (для функциональных).`, score: 4 },
      { name: 'Фрагменты', level: '2', content: `Группировка без лишнего DOM-узла: \`<Fragment>\` или \`<>...</>\`.\n\n\`<>\` — нельзя передать key. \`<Fragment key={id}>\` — можно. Единственный случай для полного Fragment — списки.`, score: 5 },
      { name: 'Компоненты высшего порядка', level: '3', content: `**HOC** — функция, принимающая компонент → возвращающая новый с расширенной функциональностью.\n\n\`\`\`jsx\nfunction withAuth(Component) {\n  return function(props) {\n    if (!useAuth()) return <Redirect to="/login" />;\n    return <Component {...props} />;\n  };\n}\nconst ProtectedPage = withAuth(Dashboard);\n\`\`\`\n\nHOC не изменяет оригинальный компонент, а оборачивает. Сейчас заменён хуками.`, score: 4 },
      { name: 'Virtual DOM', level: '3', content: `**Зачем нужен Virtual DOM**\n\nПрямые операции с реальным DOM дорогие — каждое изменение может вызвать reflow и repaint. Если при каждом обновлении состояния перерисовывать весь UI через innerHTML, это будет крайне медленно.\n\nVirtual DOM — это легковесный JS-объект, который описывает как должен выглядеть DOM:\n\`\`\`js\n// JSX <div className="box"><p>Hello</p></div>\n// компилируется в:\n{\n  type: 'div',\n  props: { className: 'box' },\n  children: [{ type: 'p', props: {}, children: ['Hello'] }]\n}\n\`\`\`\n\nПри изменении состояния React строит новое дерево VDOM и сравнивает его со старым — это называется **diffing**. В реальный DOM попадают только минимальные изменения.\n\n**Reconciliation — алгоритм сравнения деревьев**\n\nНаивный diff двух деревьев — O(n³). React использует эвристики и делает это за O(n):\n\n**1. Разный тип элемента → снести поддерево и построить заново:**\n\`\`\`jsx\n// было:\n<div><Counter /></div>\n// стало:\n<span><Counter /></span>\n\`\`\`\nReact видит div → span: старый DOM-узел удаляется. Все дочерние компоненты (Counter) вызывают componentWillUnmount / cleanup useEffect. Их state уничтожается. Новое поддерево монтируется с нуля — componentDidMount / useEffect запускаются заново.\n\n**2. Одинаковый тип DOM-элемента → обновить только изменившееся:**\n\`\`\`jsx\n// было: <div className="old" title="x" />\n// стало: <div className="new" />\n\`\`\`\nDOM-узел тот же — React только патчит атрибуты (className меняет, title удаляет). Дочерние компоненты продолжают жить, их state сохраняется — рекурсивно применяется тот же алгоритм.\n\n**2б. Одинаковый тип компонента → обновить props, перерендерить:**\n\`\`\`jsx\n// было: <Counter step={1} />\n// стало: <Counter step={2} />\n\`\`\`\nЭкземпляр компонента тот же — React обновляет props и вызывает рендер. State сохраняется. Запускается useEffect у которого изменились deps.\n\n**3. Списки → React не знает что с чем сопоставить без key:**\n\`\`\`jsx\n// Без key при добавлении в начало React перерисует все элементы\n// С key React знает: этот элемент переместился, а не пересоздался\n[<li key="a">A</li>, <li key="b">B</li>]\n\`\`\`\nС правильным key: компонент переместился → React переиспользует экземпляр, state сохраняется. Без key или с изменившимся key: компонент считается новым → полный unmount + mount, state теряется.\n\n**Почему index как key — антипаттерн:**\n\`\`\`jsx\n// Список: [A(0), B(1), C(2)]\n// Вставили в начало D: [D(0), A(1), B(2), C(3)]\n// React видит: key=0 изменился (был A, стал D) → обновляет\n// Все элементы "изменились" → лишние ререндеры + баги со state инпутов\n\`\`\`\nKey должен быть стабильным уникальным идентификатором из данных (id из БД, slug и т.д.).\n\n**VDOM — не бесплатный:**\nСоздание и сравнение VDOM тоже стоит памяти и CPU. Для очень простых случаев (статичные страницы, частые мелкие обновления) прямые DOM-операции могут быть быстрее. Svelte и Solid.js отказались от VDOM в пользу компиляции в точечные DOM-обновления.`, score: 4 },
      { name: 'Способы оптимизации React-приложения', level: '3', content: `1. **memo/useMemo/useCallback** — мемоизация (применять предметно!)\n2. **React.lazy + Suspense** — code splitting\n3. **Виртуализация списков** — react-window, react-virtualized\n4. **Колокализация стейта** — стейт ближе к месту использования\n5. **Стейт-менеджеры** — точечная подписка на данные`, score: 3.5 },
      { name: 'Предохранители (ErrorBoundary)', level: '3', content: `Классовый компонент, ловит ошибки в рендере и жизненном цикле дочерних.\n\n**НЕ ловит:**\n• Обработчики событий (onClick и т.д.)\n• Асинхронный код (setTimeout, fetch)\n• SSR\n• Ошибки в самом ErrorBoundary\n\nМожно размещать на разных уровнях дерева — если секция упадёт, остальное работает.`, score: 3 },
      { name: 'Порталы и как ими пользоваться', level: '3', content: `\`\`\`jsx\nimport { createPortal } from 'react-dom';\ncreatePortal(<Modal />, document.getElementById('modal-root'));\n\`\`\`\n\nМонтирует в другой DOM-узел, но события всплывают по **React-дереву** (не DOM-дереву).`, score: 4 },
      { name: 'React Context', level: '3', content: `Решает **prop drilling**. createContext → Provider (value) → useContext.\n\n**Проблема:** изменение value → ВСЕ подписчики ререндерятся. React.memo НЕ помогает (контекст обходит memo).\n\n**Решение:** разделить на отдельные контексты (UserContext, ThemeContext).`, score: 4.5 },
      { name: 'Концепция SSR. Ограничения применения', level: '3', content: `**CSR vs SSR**\n\nCSR (Client-Side Rendering) — браузер получает пустой HTML и JS-бандл, React строит DOM на клиенте. Пользователь видит белый экран пока JS не загрузится и не выполнится.\n\nSSR (Server-Side Rendering) — сервер запускает React, генерирует готовый HTML и отдаёт его. Браузер показывает контент сразу — ещё до загрузки JS.\n\n**Как работает SSR + гидратация:**\n\`\`\`\n1. Запрос → сервер рендерит компоненты в HTML-строку\n2. Браузер получает готовый HTML → показывает контент (FCP быстрый)\n3. JS-бандл загружается\n4. hydrateRoot() — React "оживляет" существующий DOM:\n   привязывает обработчики событий, восстанавливает state\n5. Страница становится интерактивной (TTI)\n\`\`\`\nМежду шагами 2 и 5 — страница выглядит готовой, но не интерактивна. Это называется **hydration gap**.\n\n**React API:**\n\`\`\`js\n// Клиент CSR:\ncreatRoot(document.getElementById('root')).render(<App />);\n\n// Клиент SSR — гидратация существующего DOM:\nhydrateRoot(document.getElementById('root'), <App />);\n\n// Сервер (старый, синхронный — блокирует поток):\nconst html = renderToString(<App />);\n\n// Сервер (React 18, стриминг — отдаёт HTML по частям):\nconst { pipe } = renderToPipeableStream(<App />, {\n  onShellReady() { pipe(response); }\n});\n\`\`\`\n\n**Streaming SSR** — сервер начинает отдавать HTML не дожидаясь рендера всей страницы. Работает вместе с \`<Suspense>\`: тяжёлые части стримятся позже, оболочка приходит сразу.\n\n**Плюсы SSR:**\n• Быстрый FCP — пользователь видит контент без ожидания JS\n• SEO — поисковики получают готовый HTML\n• Работает без JS на клиенте\n\n**Ограничения и минусы:**\n• Нет \`window\`, \`document\`, \`localStorage\` на сервере — весь браузерный API недоступен\n• Увеличенный TTFB — сервер должен отрендерить прежде чем отдать\n• Нагрузка на сервер — React выполняется при каждом запросе\n• Гидратация должна дать идентичный DOM — расхождение сервер/клиент вызывает ошибки и полный перерендер\n• Сложнее деплой — нужен Node.js сервер, не просто CDN\n\n**Когда SSR оправдан:** публичные страницы с важным SEO, медленные устройства/соединения, контент-сайты. Для дашбордов за авторизацией — CSR проще и достаточно.`, score: 3.5 },
      { name: 'Form managers', level: '3', content: `**Контролируемые компоненты:** значение в state, React управляет вводом. Каждый keystroke → setState → ререндер.
\`\`\`jsx
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />
\`\`\`
**Неконтролируемые компоненты:** DOM хранит значение, React читает через ref когда нужно.
\`\`\`jsx
const ref = useRef();
<input ref={ref} defaultValue="initial" />
// При сабмите: ref.current.value
\`\`\`

**React Hook Form** — работает через неконтролируемые компоненты + \`register\` (ref под капотом). React не знает о значениях полей до сабмита — ререндер только при ошибках валидации и сабмите. Производительный выбор для больших форм.

**Formik** — контролируемые компоненты, значение каждого поля в state. Каждый keystroke → setState → ререндер всей формы. При 20+ полях начинает тормозить. Зато проще для понимания и работы с зависимыми полями.

**Главное отличие:** RHF читает значения из DOM через refs в момент сабмита. Formik держит все значения в React state всё время — отсюда разница в производительности.

**Валидация схемами:**
\`\`\`js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
\`\`\`

**React 19 — Server Actions**

Server Action — async-функция с директивой \`'use server'\`, которая выполняется на сервере. Вызывается с клиента как обычная функция, но запрос уходит на сервер автоматически — без fetch, без API-роута.

\`\`\`jsx
// actions.ts (серверный код)
'use server';
export async function saveUser(formData: FormData) {
  await db.users.create({ name: formData.get('name') });
  revalidatePath('/users'); // инвалидировать кэш Next.js
}
\`\`\`

\`\`\`jsx
// Вариант 1 — нативная форма (работает даже без JS на клиенте):
<form action={saveUser}>
  <input name="name" />
  <button>Save</button>
</form>

// Вариант 2 — программный вызов:
<button onClick={() => saveUser(formData)}>Save</button>
\`\`\`

**useActionState** — отслеживает состояние Server Action (pending, error, result):
\`\`\`jsx
const [state, formAction, isPending] = useActionState(saveUser, null);

<form action={formAction}>
  <input name="name" />
  <button disabled={isPending}>
    {isPending ? 'Сохраняем...' : 'Save'}
  </button>
  {state?.error && <p>{state.error}</p>}
</form>
\`\`\`

**Плюсы:** нет boilerplate с fetch/useState/loading, прогрессивное улучшение (форма работает без JS), серверный код не попадает в бандл клиента, типобезопасность end-to-end.

**Ограничения:** только в серверных окружениях (Next.js App Router, Remix и т.д.). В чистом React без фреймворка — не работает.`, score: 3 },
      { name: 'React паттерны. Compound components. render-props', level: '4', content: `**Compound Components:** набор связанных компонентов через Context.\n\`\`\`jsx\n<Table>\n  <Table.Header><Table.Cell>Name</Table.Cell></Table.Header>\n  <Table.Row><Table.Cell>Alice</Table.Cell></Table.Row>\n</Table>\n\`\`\`\n\n**Render-props:** паттерн для переиспользования логики — компонент управляет данными/поведением, а потребитель сам решает как их рендерить.\n\`\`\`jsx\n// MouseTracker знает координаты, но не знает как их показать\nclass MouseTracker extends React.Component {\n  state = { x: 0, y: 0 };\n  handleMove = (e) => this.setState({ x: e.clientX, y: e.clientY });\n  render() {\n    return <div onMouseMove={this.handleMove}>{this.props.render(this.state)}</div>;\n  }\n}\n\n// Потребитель сам решает что рендерить с этими данными:\n<MouseTracker render={({ x, y }) => <p>Курсор: {x}, {y}</p>} />\n<MouseTracker render={({ x, y }) => <Avatar style={{ left: x, top: y }} />} />\n\`\`\`\nЗадача — разделить логику (что происходит) от представления (как выглядит). До хуков это был основной способ переиспользовать логику с состоянием.\n\nОба паттерна в основном заменены хуками (проще, без wrapper hell). Render-props → кастомный хук. Но иногда встречаются в библиотеках (react-table, Downshift).`, score: 3.5 },
      { name: 'Механизм Reconciliation', level: '4', content: `**Что запускает reconciliation:**\nsetState, dispatch (useReducer), обновление контекста, ререндер родителя. React ставит компонент в очередь на перерендер — не выполняет сразу.\n\n**Batching (пакетирование обновлений):**\nReact 18 автоматически объединяет несколько setState в один ререндер — даже внутри setTimeout, fetch, промисов:\n\`\`\`js\n// Один ререндер, не три:\nsetTimeout(() => {\n  setA(1);\n  setB(2);\n  setC(3);\n}, 1000);\n\`\`\`\nДо React 18 batching работал только в обработчиках событий.\n\n**Work-in-progress tree (двойная буферизация):**\nReact держит два дерева: текущее (current) — то что видит пользователь, и work-in-progress — то что строится. Diffing идёт между ними. Когда всё готово — деревья меняются местами атомарно. Пользователь никогда не видит незавершённое состояние.\n\n**Почему O(n), а не O(n³):**\nНаивный diff любых двух деревьев — O(n³). React использует две эвристики которые делают это O(n):\n1. Элементы разного типа никогда не сравниваются — сразу снос и пересоздание\n2. key — подсказка React какой элемент списка соответствует какому\n\n**Bailout — пропуск поддерева:**\nЕсли React при обходе видит что props и state компонента не изменились — он пропускает всё поддерево целиком, не заходя в него:\n\`\`\`js\n// React.memo — bailout если props не изменились (поверхностное сравнение)\nconst Child = React.memo(({ value }) => <div>{value}</div>);\n\n// Нюанс: новая функция каждый ререндер = новая ссылка = memo бесполезен\n<Child onClick={() => doSomething()} /> // ❌\n<Child onClick={useCallback(() => doSomething(), [])} /> // ✅\n\`\`\`\n\n**Важный нюанс — ререндер ≠ обновление DOM:**\nРеакт может вызвать render-функцию компонента, посчитать VDOM и решить что реальный DOM менять не нужно — изменений нет. Ререндер дорог памятью (создание VDOM), но не обязательно дорог DOM-операциями.`, score: 4 },
      { name: 'Архитектура Fiber', level: '4', content: `**Проблема до Fiber (React 15 и раньше):**\nReconciliation был синхронным рекурсивным обходом стека. Начав обход — нельзя остановиться. При большом дереве JS занимал main thread на десятки миллисекунд: анимации замерзали, ввод не отвечал.\n\n**Что такое Fiber:**\nFiber — это новый движок reconciliation (React 16+) и одновременно структура данных. Каждый компонент в дереве — это Fiber-узел:\n\`\`\`js\n// Упрощённо что хранит Fiber-узел:\n{\n  type,          // тип компонента или DOM-тег\n  props,         // текущие props\n  stateNode,     // DOM-узел или экземпляр класса\n  memoizedState, // state хуков (связный список)\n  child,         // первый дочерний Fiber\n  sibling,       // следующий сосед\n  return,        // родительский Fiber\n  flags,         // что нужно сделать: Update | Placement | Deletion\n}\n\`\`\`\nВместо рекурсии — связный список. Обход можно остановить после любого узла и продолжить позже.\n\n**Две фазы работы:**\n\n**1. Render фаза — прерываемая:**\nReact обходит Fiber-дерево, вызывает render-функции, строит work-in-progress дерево, помечает узлы флагами (Update, Placement, Deletion). Эту работу можно прервать — браузер получит управление для обработки ввода или анимации — и возобновить позже.\nПоскольку фаза прерываемая, тело компонента может вызваться несколько раз за одно обновление. Именно поэтому рендер должен быть чистой функцией.\n\n**2. Commit фаза — непрерываемая:**\nReact берёт список изменений (effectList) и атомарно применяет к реальному DOM. Прерывать нельзя — пользователь не должен видеть промежуточное состояние.\nТри подфазы commit:\n• **Before mutation** — вызываются getSnapshotBeforeUpdate\n• **Mutation** — применяются DOM-изменения\n• **Layout** — вызывается useLayoutEffect (синхронно после DOM, до отрисовки)\n\nПосле этого браузер рисует экран, затем асинхронно вызывается useEffect.\n\n**Приоритеты и Concurrent Mode:**\nFiber позволяет назначать приоритет обновлениям. Срочное (ввод пользователя) → выполняется немедленно. Несрочное → можно отложить:\n\`\`\`js\n// useTransition — помечает обновление как несрочное\nconst [isPending, startTransition] = useTransition();\nstartTransition(() => setFilter(value)); // React может прервать при вводе\n\n// useDeferredValue — дерево с этим значением рендерится с низким приоритетом\nconst deferred = useDeferredValue(heavyValue);\n\`\`\`\n\n**StrictMode вызывает рендер дважды** именно из-за Fiber: проверяет что компонент идемпотентен (два вызова дают одинаковый результат). В продакшне — один раз.`, score: 4 },
      { name: 'Server components', level: '4', content: `**Проблема которую решают RSC:**\nПри SSR компонент рендерится на сервере в HTML, но его JS-код всё равно попадает в бандл — для гидратации. Тяжёлые зависимости (markdown-парсер, date библиотека) едут клиенту даже если там они не нужны.\n\nServer Components (RSC) — компоненты которые выполняются только на сервере. Их JS в бандл не попадает вообще. Нет гидратации — нечего гидратировать.\n\n**Как работает:**\n\`\`\`jsx\n// app/page.tsx — Server Component по умолчанию в Next.js App Router\nexport default async function Page() {\n  const posts = await db.posts.findMany(); // прямой доступ к БД — без fetch!\n  return <PostList posts={posts} />;\n}\n\`\`\`\nКомпонент async — можно await прямо в теле. Данные фетчатся на сервере, клиент получает готовый результат.\n\n**Граница server/client — директива \`'use client'\`:**\n\`\`\`jsx\n// ❌ Без директивы — серверный, нет интерактивности\nexport function StaticCard({ title }) {\n  return <div>{title}</div>;\n}\n\n// ✅ С директивой — клиентский, полный React\n'use client';\nexport function LikeButton({ postId }) {\n  const [liked, setLiked] = useState(false);\n  return <button onClick={() => setLiked(true)}>Like</button>;\n}\n\`\`\`\n\`'use client'\` — граница бандла. Всё что импортирует клиентский компонент тоже попадает в бандл.\n\n**Что можно/нельзя:**\n\`\`\`\nServer Component:         Client Component:\n✅ async/await            ✅ useState, useEffect\n✅ прямой доступ к БД     ✅ обработчики событий\n✅ env переменные          ✅ браузерные API\n✅ fs, секретные ключи     ✅ useContext\n❌ useState/useEffect      ❌ прямой доступ к БД\n❌ обработчики событий     ❌ async компонент\n❌ браузерные API\n\`\`\`\n\n**RSC Payload — что летит по сети:**\nСервер отдаёт не HTML, а специальный формат (JSON-подобный). Клиентские компоненты — ссылки на JS в бандле. Серверные — готовый результат рендера. React на клиенте собирает из этого дерево.\n\n**Composition pattern — как совмещать:**\n\`\`\`jsx\n// Серверный компонент передаёт children клиентскому\n// Важно: children рендерится на сервере, не попадает в бандл клиента\nasync function Page() {\n  const data = await fetchData();\n  return (\n    <ClientShell> {/* 'use client' */}\n      <ServerContent data={data} /> {/* остаётся серверным */}\n    </ClientShell>\n  );\n}\n\`\`\`\n\n**RSC vs SSR — разница:**\nSSR — рендер на сервере + гидратация на клиенте, JS едет клиенту. RSC — рендер на сервере, JS не едет, нет гидратации. Они совместимы: страница может использовать и SSR и RSC одновременно.`, score: 4 },
    ],
  },
];
