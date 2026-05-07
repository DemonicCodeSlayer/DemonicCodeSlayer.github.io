export const sections2 = [
  {
    id: 'network',
    title: 'СЕТЬ',
    icon: '🔗',
    color: '#66BB6A',
    topics: [
      { name: 'ip-адрес и hostName', level: '1', content: `**IP-адрес** — уникальный числовой идентификатор устройства в сети.\n• **IPv4:** 192.168.1.1 (4 октета, 32 бита, ~4.3 млрд адресов)\n• **IPv6:** 2001:0db8::1 (128 бит, практически неограничено)\n\n**Hostname** — человекочитаемое имя (example.com), преобразуется в IP через DNS.\n\n**localhost** = 127.0.0.1 (loopback). **0.0.0.0** — все интерфейсы.\n\n**Порт** — логический адрес приложения на устройстве (80 — HTTP, 443 — HTTPS, 3000 — dev).` },
      { name: 'Базовое понимание различий POST и GET', level: '2', content: `**GET:**\n• Параметры в URL (query string)\n• Кэшируется браузером\n• Ограничение длины URL (~2048 символов)\n• Идемпотентный (повторный запрос = тот же результат)\n• Для получения данных\n\n**POST:**\n• Данные в теле запроса (body)\n• НЕ кэшируется по умолчанию\n• Нет ограничения размера тела\n• НЕ идемпотентный\n• Для создания/изменения данных\n\n**Другие методы:** PUT (полная замена), PATCH (частичное обновление), DELETE (удаление), HEAD (только заголовки), OPTIONS (CORS preflight).` },
      { name: 'Query-параметры', level: '2', content: `Параметры в URL после \`?\`, разделённые \`&\`:\n\`\`\`\nhttps://api.com/users?page=1&limit=10&sort=name\n\`\`\`\n\n**URLSearchParams API:**\n\`\`\`js\nconst params = new URLSearchParams('page=1&limit=10');\nparams.get('page');      // '1'\nparams.set('page', '2');\nparams.append('filter', 'active');\nparams.toString();       // 'page=2&limit=10&filter=active'\n\`\`\`\n\n**Кодирование:** спецсимволы → encodeURIComponent() / decodeURIComponent().` },
      { name: 'REST API', level: '2', content: `**REST** — архитектурный стиль для API.\n\n**Принципы:**\n• Ресурсы идентифицируются URL: \`/users\`, \`/users/1\`\n• HTTP-методы как операции: GET (read), POST (create), PUT/PATCH (update), DELETE\n• **Stateless** — каждый запрос содержит всю необходимую информацию. Сервер не помнит предыдущие запросы.\n• Единый интерфейс\n\n**Stateless на примере:**\n\`\`\`\n// Не REST (с состоянием):\nЗапрос 1: "залогинься как user123"\nЗапрос 2: "дай мне мои заказы"  // сервер помнит кто ты\n\n// REST (stateless):\nЗапрос 1: "залогинься как user123" → получаешь токен\nЗапрос 2: "дай заказы, вот мой токен: Bearer xxx"\n\`\`\`\n\nПреимущества stateless: масштабируемость (любой сервер обработает запрос), простота (не нужно хранить сессии), надёжность (упавший сервер не теряет состояние клиентов).\n\nИменно поэтому JWT популярен в REST — клиент сам хранит токен и передаёт в каждом запросе.\n\n**Хорошие практики:**\n\`\`\`\nGET    /users       → список пользователей\nGET    /users/1     → конкретный пользователь\nPOST   /users       → создать пользователя\nPUT    /users/1     → обновить полностью\nPATCH  /users/1     → обновить частично\nDELETE /users/1     → удалить\n\`\`\`\n\n**Коды ответов:** 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.` },
      { name: 'Понимание протокола HTTP', level: '2', content: `**HTTP (HyperText Transfer Protocol)** — протокол запрос-ответ.\n\n**Запрос:**\n\`\`\`\nGET /index.html HTTP/1.1\nHost: example.com\nAccept: text/html\nCookie: session=abc\n\`\`\`\n\n**Ответ:**\n\`\`\`\nHTTP/1.1 200 OK\nContent-Type: text/html\nSet-Cookie: session=abc\nCache-Control: max-age=3600\n\`\`\`\n\n**HTTPS** — HTTP + TLS шифрование. TLS (Transport Layer Security) — протокол, который:\n• Шифрует данные — перехваченный трафик нечитаем\n• Аутентифицирует сервер — SSL-сертификат подтверждает что это действительно тот сервер\n• Обеспечивает целостность — данные не изменены в пути\n\nКак работает: клиент и сервер проводят TLS Handshake — договариваются об алгоритмах, обмениваются сертификатом, генерируют общий симметричный ключ. Дальше всё шифруется этим ключом.\n\n**Коды ответов:**\n• **1xx** — информационные (101 Switching Protocols — WebSocket)\n• **2xx** — успех (200 OK, 201 Created, 204 No Content)\n• **3xx** — редиректы (301 Moved Permanently, 302 Found, 304 Not Modified)\n• **4xx** — ошибка клиента (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)\n• **5xx** — ошибка сервера (500 Internal Server Error, 503 Service Unavailable)\n\n**Заголовки:**\n\n**Content-Type** — формат тела запроса/ответа:\n\`\`\`\napplication/json                — JSON\ntext/html; charset=utf-8        — HTML\ntext/plain                      — обычный текст\nmultipart/form-data             — загрузка файлов\napplication/x-www-form-urlencoded — данные формы\n\`\`\`\n\n**Authorization** — передача токена:\n\`\`\`\nAuthorization: Bearer eyJhbGciOiJIUzI1NiJ9...\nAuthorization: Basic dXNlcjpwYXNz  // base64(login:password)\n\`\`\`\n\n**Cache-Control** — управление кэшем:\n\`\`\`\nno-cache       // всегда проверять актуальность\nno-store       // не кэшировать вообще\nmax-age=3600   // кэшировать 1 час\npublic         // можно кэшировать везде (CDN + браузер)\nprivate        // только браузер, не CDN\n\`\`\`\n\n**Accept** — ожидаемый формат ответа:\n\`\`\`\nAccept: application/json\nAccept: text/html\n\`\`\`\n\n**CORS** — управление доступом между доменами:\n\`\`\`\n// Ответ сервера:\nAccess-Control-Allow-Origin: https://mysite.com\nAccess-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: Authorization\nAccess-Control-Allow-Credentials: true\n\n// Preflight-запрос браузера:\nOrigin: https://mysite.com\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Authorization\n\`\`\`\n\n**Set-Cookie / Cookie:**\n\`\`\`\n// Сервер устанавливает:\nSet-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict\n\n// Браузер отправляет:\nCookie: session=abc123\n\`\`\`\n\n**Прочие важные:**\n\`\`\`\nContent-Length: 348           // размер тела в байтах\nHost: api.example.com         // хост назначения\nUser-Agent: Mozilla/5.0...    // браузер/клиент\nReferer: https://site.com     // откуда пришёл запрос\nLocation: /new-url            // куда редиректить (3xx)\n\`\`\`

**HTTP/3:**
• Основан на **QUIC** (поверх UDP вместо TCP)
• Встроенное шифрование TLS 1.3 прямо в QUIC
• Нет head-of-line блокировки на транспортном уровне (в HTTP/2 один потерянный TCP-пакет блокирует все потоки одного соединения)
• **0-RTT** для повторных подключений — быстрее установление соединения
• **Connection migration** — соединение выживает при смене IP (переход Wi-Fi ↔ LTE, критично для мобильных)
• Поддерживается Cloudflare, Google, Fastly` },
      { name: 'Понимание протокола HTTP/2', level: '3', content: `**Главная проблема HTTP/1.1** — один запрос на одно соединение (или очередь). Браузер открывал до 6 параллельных соединений на домен — это лимит.\n\n**HTTP/2 решает это через:**\n\n**1. Мультиплексирование** — несколько запросов через одно соединение параллельно:\n\`\`\`\nHTTP/1.1: [запрос1] → [ответ1] → [запрос2] → [ответ2]  // очередь\nHTTP/2:   [запрос1] ↘\n          [запрос2] → [ответ1][ответ2][ответ3]  // параллельно, одно соединение\n          [запрос3] ↗\n\`\`\`\n\n**2. Сжатие заголовков (HPACK)** — в HTTP/1.1 заголовки передаются как текст при каждом запросе. HTTP/2 сжимает и кэширует — повторяющиеся не передаются.\n\n**3. Server Push** — сервер сам отправляет ресурсы которые понадобятся клиенту:\n\`\`\`\nКлиент запросил index.html →\nСервер отправляет: index.html + style.css + app.js\n// Не ждёт пока браузер разберёт HTML и запросит их\n\`\`\`\n\n**4. Бинарный протокол** — HTTP/1.1 текстовый, HTTP/2 бинарный → быстрее парсится, меньше ошибок.\n\n**5. Приоритизация** — можно указать какие запросы важнее (CSS важнее картинок).\n\n**Главный выигрыш — мультиплексирование.** Именно из-за него не нужны старые оптимизации HTTP/1.1: спрайты, domain sharding, конкатенация файлов.` },
      { name: 'Различие Long-Polling, Websockets, Server-Sent Events', level: '3', content: `**Проблема:** HTTP — запрос/ответ. Сервер не может сам инициировать отправку данных клиенту. Нужны специальные техники для realtime.\n\n---\n\n**Long Polling**\nКлиент отправляет запрос → сервер держит соединение открытым пока нет данных → появились данные, сервер отвечает → клиент сразу шлёт новый запрос.\n\`\`\`js\nasync function longPoll() {\n  const response = await fetch('/api/events');\n  const data = await response.json();\n  processData(data);\n  longPoll(); // сразу новый запрос\n}\n\`\`\`\nМинусы: новое HTTP-соединение каждый раз, задержки, неэффективно при высокой нагрузке.\nКогда: простые случаи, старые браузеры, редкие обновления.\n\n---\n\n**WebSocket**\nПолнодуплексное постоянное соединение. Клиент и сервер отправляют данные в любой момент.\n\nHandshake — клиент отправляет HTTP-запрос с заголовком Upgrade:\n\`\`\`\nGET /chat HTTP/1.1\nUpgrade: websocket       ← хочу переключиться на WebSocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZQ==\n\n→ HTTP/1.1 101 Switching Protocols  ← сервер согласен\n\`\`\`\nПосле этого то же TCP-соединение используется уже для WebSocket, не HTTP.\n\`\`\`js\nconst ws = new WebSocket('wss://site.com/chat');\n\nws.onopen = () => ws.send(JSON.stringify({ type: 'message', text: 'hello' }));\nws.onmessage = (e) => console.log(JSON.parse(e.data));\nws.onerror = (e) => console.error(e);\nws.onclose = (e) => console.log('закрыто', e.code);\n\nws.close(1000, 'работа завершена');\n\`\`\`\n\nКоды закрытия: 1000 — норма, 1001 — страница закрыта, 1006 — обрыв сети, 1011 — ошибка сервера.\n\nReconnect — вручную:\n\`\`\`js\nfunction connect() {\n  const ws = new WebSocket('wss://site.com');\n  ws.onclose = () => setTimeout(connect, 1000);\n}\n\`\`\`\nКогда: чат, игры, реалтайм коллаборация, трейдинг.\n\n---\n\n**SSE (Server-Sent Events)**\nОдностороннее соединение сервер → клиент. Обычный HTTP с Content-Type: text/event-stream. Автоматический reconnect встроен в браузер.\n\`\`\`js\n// Клиент:\nconst es = new EventSource('/stream');\nes.onmessage = (e) => console.log(e.data);\nes.addEventListener('update', (e) => console.log(e.data));\nes.close();\n\`\`\`\n\`\`\`js\n// Сервер (Node.js):\nres.setHeader('Content-Type', 'text/event-stream');\nres.setHeader('Cache-Control', 'no-cache');\n\nres.write('data: привет\\n\\n');              // простое сообщение\nres.write('event: update\\n');               // именованное событие\nres.write('data: {\"price\": 100}\\n\\n');\nres.write('id: 42\\n');                      // ID для reconnect\nres.write('data: сообщение\\n\\n');\nres.write('retry: 3000\\n\\n');              // задержка reconnect (мс)\n\`\`\`\nПри обрыве браузер переподключается сам и отправляет Last-Event-ID — сервер знает с какого события продолжать.\nКогда: лента новостей, уведомления, прогресс операции, live логи.\n\n---\n\n**Сравнение:**\n\n**Long Polling** — HTTP, двустороннее, новое соединение каждый раз, reconnect вручную, простой.\n**WebSocket** — WS/WSS, двустороннее, постоянное соединение, reconnect вручную, средний.\n**SSE** — HTTP, только сервер→клиент, постоянное соединение, reconnect автоматически, простой.` },
      { name: 'Базовое понимание TCP', level: '4', content: `**TCP (Transmission Control Protocol)** — протокол транспортного уровня. Обеспечивает надёжную доставку данных между двумя точками.\nИнтернет передаёт данные пакетами — они могут потеряться, прийти не в том порядке, задублироваться. TCP решает все эти проблемы.\n\n**Модель OSI (упрощённо):**\n\`\`\`\nПриложение: HTTP, WebSocket, FTP, DNS\nТранспорт:  TCP, UDP\nСеть:       IP\nКанал:      Ethernet, WiFi\nФизический: провода, радиоволны\n\`\`\`\nКаждый уровень использует нижний как транспорт. HTTP работает поверх TCP, TCP работает поверх IP.\n\n**3-way handshake — установка соединения:**\n\`\`\`\nКлиент → Сервер:  SYN          (хочу соединиться, мой seq=100)\nСервер → Клиент:  SYN + ACK    (согласен, мой seq=200, подтверждаю твой 101)\nКлиент → Сервер:  ACK          (принял, подтверждаю твой 201)\n\`\`\`\nПосле этого соединение установлено. Это причина задержки HTTP/1.1 — каждое новое соединение требует handshake.\n\n**Закрытие — 4-way handshake:**\n\`\`\`\nКлиент → Сервер:  FIN    (я закончил отправку)\nСервер → Клиент:  ACK    (принял)\nСервер → Клиент:  FIN    (я тоже закончил)\nКлиент → Сервер:  ACK    (принял, соединение закрыто)\n\`\`\`\n\n**Главные характеристики:**\n• **Надёжность** — каждый пакет подтверждается через ACK. Нет подтверждения → повтор отправки.\n• **Порядок** — каждый пакет имеет sequence number. Получатель собирает пакеты в правильном порядке даже если пришли вразнобой.\n• **Flow Control** — получатель сообщает сколько данных готов принять (window size). Отправитель не перегружает получателя.\n• **Congestion Control** — TCP снижает скорость если сеть перегружена.\n\n**TCP vs UDP:**\n**TCP** — гарантирует доставку, сохраняет порядок, медленнее, 3-way handshake, высокий overhead.\n**UDP** — без гарантий, порядок не гарантирован, быстрее, нет handshake, минимальный overhead.\n\nTCP используют: HTTP, HTTPS, WebSocket, FTP, SSH.\nUDP используют: видеозвонки (WebRTC, Zoom), онлайн игры, DNS, стриминг, HTTP/3 (QUIC).\n\n**Почему UDP для видео/игр:**\nПотеря пакета в TCP → повтор → задержка. В видеозвонке лучше пропустить кадр чем ждать повтора — это создаёт заморозку. UDP просто отбрасывает потерянный пакет и продолжает.\n\n**HTTP/3 и QUIC:**\nHTTP/3 работает поверх QUIC — протокол на базе UDP но с надёжностью на уровне приложения: нет 3-way handshake, мультиплексирование без head-of-line blocking, встроенное шифрование TLS 1.3.\n\n**Keep-Alive:**\nHTTP/1.1 по умолчанию держит TCP-соединение открытым для нескольких запросов (Connection: keep-alive). Без этого каждый запрос = новый TCP handshake. HTTP/2 идёт дальше — одно соединение для всех запросов.` },
      { name: 'Базовое понимание IP', level: '4', content: `**IP (Internet Protocol)** — протокол сетевого уровня. Отвечает за адресацию и маршрутизацию пакетов между сетями.\n\nTCP разбивает данные на пакеты. IP доставляет каждый пакет от отправителя к получателю через цепочку роутеров. IP не гарантирует доставку — это задача TCP.\n\n**Структура IP-пакета:**\n\`\`\`\nЗаголовок:\n  Source IP      — откуда пакет\n  Destination IP — куда пакет\n  TTL            — время жизни пакета\n  Protocol       — что внутри (TCP=6, UDP=17)\n  Checksum       — проверка целостности заголовка\nДанные (payload) — TCP сегмент внутри\n\`\`\`\n\n**TTL (Time To Live):**\nКаждый пакет имеет счётчик TTL (обычно 64 или 128). Каждый роутер уменьшает TTL на 1. TTL = 0 → пакет уничтожается → отправителю приходит ICMP "Time Exceeded".\nЗачем: предотвращает бесконечную циркуляцию потерявшихся пакетов.\n\`\`\`bash\ntraceroute google.com\n# Отправляет пакеты с TTL=1, TTL=2, TTL=3...\n# Каждый роутер отвечает — видим весь маршрут\n\`\`\`\n\n**Маршрутизация:**\n\`\`\`\nТвой компьютер → Домашний роутер → Роутер провайдера → ... → Сервер\n\`\`\`\nКаждый роутер смотрит на Destination IP и решает куда передать дальше по таблице маршрутизации. IP не знает весь путь заранее — каждый роутер решает локально.\n\n**IPv4 vs IPv6:**\n• **IPv4** — 32 бита (192.168.1.1), ~4 млрд адресов, закончились, решение: NAT\n• **IPv6** — 128 бит (2001:0db8::8a2e:0370:7334), 340 ундециллионов адресов, встроенный IPSec, нет NAT\n\n**NAT (Network Address Translation):**\nИз-за нехватки IPv4 адресов несколько устройств домашней сети выходят в интернет через один публичный IP:\n\`\`\`\n192.168.1.2 (телефон)   ┐\n192.168.1.3 (ноутбук)   ├─→ Роутер (NAT) → 85.142.10.5 (один публичный IP)\n192.168.1.4 (телевизор) ┘\n\`\`\`\nПриватные диапазоны (не маршрутизируются в интернете):\n\`\`\`\n10.0.0.0/8       — большие сети\n172.16.0.0/12    — средние сети\n192.168.0.0/16   — домашние сети\n127.0.0.0/8      — loopback (localhost)\n\`\`\`\n\n**ICMP — служебные сообщения:**\n\`\`\`bash\nping google.com       # проверить доступность хоста\ntraceroute google.com # показать маршрут пакета\n\`\`\`\nТакже ICMP сообщает: "Destination Unreachable" (хост недоступен), "Time Exceeded" (TTL истёк).` },
      { name: 'Базовое понимание DNS', level: '4', content: `**DNS (Domain Name System)** — преобразует доменное имя в IP-адрес.\n\n**Как браузер резолвит домен:**\n1. Браузер проверяет свой кэш\n2. ОС проверяет файл hosts (/etc/hosts)\n3. Запрос к DNS резолверу провайдера\n4. Резолвер проверяет свой кэш\n5. Если нет — рекурсивный запрос по иерархии\n\n**Иерархия DNS:**\n\`\`\`\nRoot DNS серверы (.)\n    ↓\nTLD серверы (.com, .ru, .org)\n    ↓\nAuthoritative серверы (google.com)\n    ↓\nОтвет: 142.250.185.46\n\`\`\`\n• **Root серверы** — знают где TLD серверы. Их всего 13 кластеров в мире.\n• **TLD серверы** — знают где authoritative серверы для каждого домена.\n• **Authoritative серверы** — хранят реальные DNS записи домена.\n\n**DNS записи:**\n• **A** — домен → IPv4: google.com → 142.250.185.46\n• **AAAA** — домен → IPv6\n• **CNAME** — псевдоним: www.google.com → google.com\n• **MX** — почтовый сервер домена\n• **TXT** — текстовые данные (верификация, SPF)\n• **NS** — какие серверы отвечают за домен\n\n**TTL в DNS:**\nКаждая запись имеет TTL — сколько секунд её кэшировать. При смене IP нужно ждать пока TTL истечёт у всех кэшей. Поэтому при переезде сайта ставят низкий TTL заранее.\n\n**Файл hosts:**\nДо DNS-запроса ОС проверяет локальный файл — используется для локальной разработки и блокировки сайтов.\n\`\`\`\n# /etc/hosts (Linux/Mac)\n127.0.0.1       localhost\n192.168.1.10    mydevserver.local\n\`\`\`\n\n**DNS over HTTPS (DoH):**\nОбычный DNS — незашифрованный UDP порт 53, провайдер видит все запросы. DoH — DNS через HTTPS, зашифрован. Используют Cloudflare (1.1.1.1), Google (8.8.8.8).` },
    ],
  },
  {
    id: 'patterns',
    title: 'ПАТТЕРНЫ',
    icon: '🧩',
    color: '#AB47BC',
    topics: [
      { name: 'DRY, KISS, YAGNI', level: '2', content: `**DRY (Don't Repeat Yourself):** каждая часть знания имеет единственное представление. Дублирование → вынести в функцию/модуль. Но: не путай совпадение кода с дублированием логики.\n\n**KISS (Keep It Simple, Stupid):** простое решение лучше сложного. Не усложняй без необходимости. Читаемость > краткость.\n\n**YAGNI (You Aren't Gonna Need It):** не реализуй функционал «на будущее». Делай только то, что нужно сейчас. Преждевременная абстракция — зло.` },
      { name: 'Навык использования и определения паттерна в коде: Observer', level: '3', content: `**Observer (Наблюдатель)** — объект уведомляет подписчиков о своих изменениях.\n\n\`\`\`js\nclass EventEmitter {\n  constructor() { this.listeners = {}; }\n  on(event, fn) {\n    (this.listeners[event] ||= []).push(fn);\n  }\n  off(event, fn) {\n    this.listeners[event] = this.listeners[event]?.filter(f => f !== fn);\n  }\n  emit(event, data) {\n    this.listeners[event]?.forEach(fn => fn(data));\n  }\n}\n\`\`\`\n\n**Где в JS:** addEventListener, RxJS, EventEmitter в Node.js, Redux store.subscribe(), Vue reactivity.` },
      { name: 'Factory Method, Prototype, Proxy, Singleton', level: '3', content: `**Factory Method** — функция, создающая объекты без new:\n\`\`\`js\nfunction createUser(type) {\n  if (type === 'admin') return new Admin();\n  return new User();\n}\n\`\`\`\n\n**Prototype** — создание через клонирование существующего объекта:\n\`\`\`js\nconst proto = { greet() { return 'hi'; } };\nconst obj = Object.create(proto);\n\`\`\`\n\n**Proxy** — обёртка, перехватывающая операции (мы подробно разобрали в JS).\n\n**Singleton** — один экземпляр на всё приложение:\n\`\`\`js\nclass DB {\n  static instance;\n  static getInstance() {\n    if (!DB.instance) DB.instance = new DB();\n    return DB.instance;\n  }\n}\n\`\`\`\nВ JS модули — уже singleton (экспорт кэшируется).

**Strategy** — семейство алгоритмов, взаимозаменяемых без изменения клиента:
\`\`\`js
class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(data) { return this.strategy(data); }
}
const quickSort = data => [...data].sort(); // упрощённо
const bubbleSort = data => { /* другой алгоритм */ };

const sorter = new Sorter(quickSort);
sorter.strategy = bubbleSort; // поменяли алгоритм без изменения Sorter
\`\`\`
Где встречается: axios interceptors, разные алгоритмы валидации, стратегии кэширования в SW.

**Command** — инкапсулирует действие как объект (поддерживает undo, очередь, логирование):
\`\`\`js
const commands = [];
const execute = (cmd) => { cmd.execute(); commands.push(cmd); };
const undo = () => commands.pop()?.undo();

execute({ execute: () => editor.insert('hello'), undo: () => editor.delete(5) });
\`\`\`
Где встречается: история операций в редакторах, Redux actions (каждый action — команда).` },
      { name: 'Навык использования и определения паттерна в коде: Decorator', level: '3', content: `**Decorator** — оборачивает объект/функцию, добавляя поведение без изменения оригинала.\n\n\`\`\`js\nfunction withLogging(fn) {\n  return function(...args) {\n    console.log('Calling', fn.name, args);\n    const result = fn.apply(this, args);\n    console.log('Result:', result);\n    return result;\n  };\n}\n\nconst add = (a, b) => a + b;\nconst loggedAdd = withLogging(add);\nloggedAdd(2, 3); // Calling add [2,3] → Result: 5\n\`\`\`\n\n**TC39 Decorators (Stage 3):**\n\`\`\`js\n@logged\nclass MyClass { ... }\n\`\`\`\n\n**Где:** HOC в React, middleware в Express/Redux, TypeORM entity decorators.` },
      { name: 'Навык использования и определения паттерна в коде: Dependency Injection', level: '4', content: `**DI** — зависимости передаются извне, а не создаются внутри.\n\n\`\`\`js\n// Без DI — жёсткая связь\nclass UserService {\n  constructor() {\n    this.db = new PostgresDB(); // привязан к PostgresDB\n  }\n}\n\n// С DI — гибкая связь\nclass UserService {\n  constructor(db) { // получает снаружи\n    this.db = db;\n  }\n}\nnew UserService(new PostgresDB());\nnew UserService(new MockDB()); // для тестов!\n\`\`\`\n\n**Преимущества:** тестируемость (моки), гибкость, слабая связанность.\n\n**Где в React:** Context как DI-контейнер, передача зависимостей через props, кастомные хуки.` },
    ],
  },
  {
    id: 'dev',
    title: 'РАЗРАБОТКА ПО',
    icon: '⚙️',
    color: '#78909C',
    topics: [
      { name: 'Функциональное программирование, его отличие от ООП', level: '2', content: `**ФП:**\n• Данные неизменяемы (immutability)\n• Чистые функции (нет побочных эффектов)\n• Функции — first-class citizens\n• Композиция функций\n• Декларативный стиль\n\n**ООП:**\n• Данные + поведение в объектах\n• Инкапсуляция, наследование, полиморфизм\n• Изменяемое состояние\n• Императивный стиль\n\n**В JS используются оба:** React (ФП — компоненты как чистые функции, иммутабельный state) + классы, наследование.

**Currying** — преобразование функции с N аргументами в цепочку функций с одним:
\`\`\`js
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8 — частичное применение

// Практика: предконфигурация
const fetchWith = baseUrl => endpoint => fetch(baseUrl + endpoint);
const api = fetchWith('https://api.example.com');
api('/users'); // настроен один раз, переиспользуется
\`\`\`

**Pipe / Compose** — объединение функций в цепочку (data pipeline):
\`\`\`js
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const transform = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.replace(/\s+/g, '-')
);
transform('  Hello World '); // 'hello-world'
\`\`\`

**Иммутабельность:** никогда не мутируй — возвращай новый объект/массив:
\`\`\`js
// ❌ мутация
state.count++;
arr.push(item);
// ✅ иммутабельно
{ ...state, count: state.count + 1 }
[...arr, item]
\`\`\`
Именно поэтому React не видит изменения при мутации state — ссылка та же.` },
      { name: 'SOLID, Cohesion и Coupling', level: '3', content: `**S** — Single Responsibility: класс/модуль — одна ответственность\n**O** — Open/Closed: открыт для расширения, закрыт для изменения\n**L** — Liskov Substitution: подклассы заменяют родителей без поломок\n**I** — Interface Segregation: много специфичных интерфейсов лучше одного общего\n**D** — Dependency Inversion: зависеть от абстракций, не от деталей\n\n**Cohesion (связность):** насколько элементы модуля связаны по смыслу. Высокая — хорошо.\n**Coupling (связанность):** насколько модули зависят друг от друга. Низкая — хорошо.\n\n**Цель:** High Cohesion + Low Coupling.` },
      { name: 'MVC, MVVM', level: '4', content: `**MVC (Model-View-Controller):**\n• **Model** — данные и бизнес-логика\n• **View** — отображение (UI)\n• **Controller** — обрабатывает ввод, обновляет Model и View\n\n**MVVM (Model-View-ViewModel):**\n• **Model** — данные\n• **View** — UI (декларативный)\n• **ViewModel** — состояние View + логика. Двустороннее связывание (data binding)\n\n**В React:** ближе к однонаправленному потоку. Component = View + часть ViewModel. State/Redux = Model. Не чистый MVC/MVVM.\n\n**В Vue:** ближе к MVVM (реактивное двустороннее связывание через v-model).` },
    ],
  },
  {
    id: 'css',
    title: 'ВЁРСТКА',
    icon: '🎨',
    color: '#E44D26',
    topics: [
      { name: 'Блочная модель', level: '1', content: `Content → Padding → Border → Margin\n\n**content-box** (по умолчанию): width = только content. Padding + border добавляются сверху.\n**border-box**: width = content + padding + border. Margin НЕ входит.\n\n\`\`\`css\n*, *::before, *::after { box-sizing: border-box; }\n\`\`\`

**Margin collapsing:**
Вертикальные margins соседних блочных элементов схлопываются — берётся **больший**:
\`\`\`css
.a { margin-bottom: 20px; }
.b { margin-top: 30px; }
/* расстояние между ними = 30px, не 50px */
\`\`\`

**3 случая коллапса:**
1. Соседние siblings (братья)
2. Родитель и первый/последний ребёнок — если нет border/padding/overflow между ними
3. Пустой блок — его margin-top коллапсирует с margin-bottom

**Как предотвратить:** добавить padding/border на родителя, \`overflow: hidden\`, \`display: flex/grid\`.
Flexbox и Grid children **не коллапсируют** margins — одна из причин почему grid/flex так удобны.`, score: 4 },
      { name: 'Семантичные теги, базовые теги', level: '1', content: `Семантические теги: header, main, footer, nav, section, article, aside, figure.\n\nСемантика нужна для: доступности (скринридеры), SEO, читаемости кода.\n\n**section** — блок с конкретной смысловой нагрузкой.\n**article** — независимый контент (пост, комментарий).\n**div** — нет семантики, для группировки/стилизации.`, score: 4.5 },
      { name: 'Базовые CSS свойства', level: '1', content: `**display: none** — убирает из потока (нет размеров).\n**visibility: hidden** — скрывает, но занимает место.\n**opacity: 0** — скрывает, занимает место, реагирует на клики.\n\n**position:** static (по умолчанию), relative (смещение от своего места), absolute (от ближайшего позиционированного предка), fixed (от viewport), sticky (гибрид relative + fixed).`, score: 5 },
      { name: 'Специфичность селекторов', level: '2', content: `Формула **(a, b, c):**\n• a = id\n• b = классы, атрибуты, псевдоклассы\n• c = теги, псевдоэлементы\n\n\`!important > inline > #id > .class > tag\`\n\nПри равной специфичности → каскадность (позже = приоритетнее).`, score: 4.5 },
      { name: 'Базовые псевдоклассы', level: '2', content: `**Псевдоклассы (:)** — состояние элемента: :hover, :active, :focus, :first-child, :nth-child(n), :not(), :checked, :disabled.\n\n**Псевдоэлементы (::)** — виртуальный элемент: ::before, ::after, ::placeholder, ::selection.\n\n**:nth-child(2)** — второй потомок вообще.\n**:nth-of-type(2)** — второй элемент данного типа.\n\n**:focus** — срабатывает при любом фокусе (мышь, клавиатура, программно).\n**:focus-visible** — срабатывает только когда фокус виден пользователю — то есть при навигации с клавиатуры.\n\nЗачем: кнопки при клике мышью получают :focus и показывают outline — это раздражает. С :focus-visible outline показывается только при навигации клавиатурой — удобно для accessibility.`, score: 5 },
      { name: 'Типографика. Шрифты. Подключение шрифтов', level: '3', content: `**@font-face** — подключение локальных шрифтов:\n\`\`\`css\n@font-face {\n  font-family: 'MyFont';\n  src: url('./fonts/MyFont.woff2') format('woff2');\n  font-display: swap;\n}\n\`\`\`\n\n**Форматы:** woff2 (лучший, сжатие Brotli), woff (fallback), ttf/otf (старые).\n\n**em vs rem:**\n**em** — относительно размера шрифта родителя. Накапливается при вложенности:\n\`\`\`css\n/* Родитель 16px, дочерний 1.5em = 24px, внук 1.5em = 36px! */\n\`\`\`\n**rem** — относительно размера шрифта корневого элемента (html). Всегда предсказуемо:\n\`\`\`css\nhtml { font-size: 16px; }\n.text { font-size: 1.5rem; } /* всегда 24px */\n\`\`\`\nПоэтому rem предпочтительнее для типографики.\n\n**font-display:**\n• **auto** — браузер решает сам\n• **block** — текст невидим пока шрифт не загрузится (FOIT)\n• **swap** — сразу показывает системный шрифт, потом меняет (FOUT) ✅ чаще всего используют\n• **fallback** — короткий период невидимости (100ms), потом системный; если шрифт не успел — остаётся системный\n• **optional** — браузер сам решает показывать кастомный шрифт или нет (зависит от скорости соединения)\n\nswap — самый популярный выбор для производительности.`, score: 3.5 },
      { name: 'PostCSS', level: '3', content: `**PostCSS** — инструмент для трансформации CSS через плагины.\n\nПопулярные плагины:\n• **postcssPresetEnv** — современный CSS → полифилы (как Babel для CSS)\n• **autoprefixer** — вендорные префиксы\n• **postcssNested** — вложенность как в SASS\n• **postcssMixins** — миксины\n• **postcssImport** — @import`, score: 4 },
      { name: 'Flexbox', level: '3', content: `Одномерная раскладка (строка ИЛИ колонка).\n\n**Центрирование:** display: flex + justify-content: center + align-items: center.\n\n**align-items** — внутри одной строки.\n**align-content** — распределяет строки (только при flex-wrap: wrap).\n\n**flex: 1** = flex-grow: 1, flex-shrink: 1, flex-basis: 0%.\n\n**flex-grow** — как много элемент растёт относительно других.\n**flex-shrink** — как много элемент сжимается.\n**flex-basis** — начальный размер элемента.`, score: 4 },
      { name: 'Базовое понимание контекста наложения', level: '3', content: `**z-index** работает с позиционированными элементами (relative, absolute, fixed, sticky). Может быть отрицательным.\n\n**Stacking context** создаёт:\n• position: absolute/relative/fixed/sticky + z-index не auto\n• opacity < 1\n• transform не none\n• filter не none\n• isolation: isolate\n• will-change\n\nДочерний элемент соревнуется только внутри stacking context родителя.\n\n**Главная ловушка** — z-index работает только внутри одного контекста наложения. Элемент с z-index: 9999 не перекроет элемент из другого контекста если его родитель имеет меньший z-index.`, score: 3.5 },
      { name: 'Современные подходы к организации стилей', level: '3', content: `**CSS-Modules:** автоматические уникальные имена классов.\n**CSS-in-JS (styled-components):** стили в JS, динамика через props. Минус: runtime-стоимость.\n**Zero-runtime:** vanilla-extract, Linaria, Panda CSS — CSS-in-JS синтаксис, но компиляция в статичный CSS.`, score: 3.5 },
      { name: 'Базовые свойства Grid', level: '3', content: `Двумерная раскладка (строки И колонки одновременно).\n\n\`\`\`css\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: auto;\n  gap: 16px;\n}\n\`\`\`\n\n**fr** — доля свободного пространства: 1fr 2fr 1fr = 25% 50% 25%.\n\n**grid-area** — размещение элемента по именованным областям.\n**minmax(200px, 1fr)** — адаптивные колонки.\n\n**auto-fill** — создаёт колонки даже если элементов нет, пустые колонки занимают место.\n**auto-fit** — пустые колонки схлопываются до 0, существующие элементы растягиваются на всю ширину.`, score: 4 },
      { name: 'Векторная и растровая графика', level: '4', content: `**Растровые форматы:**\n• **JPG** — сжатие с потерями, для фото, нет прозрачности\n• **PNG** — без потерь, поддерживает прозрачность, тяжелее JPG\n• **WebP** — современный формат, меньше JPG/PNG при том же качестве, прозрачность есть\n• **AVIF** — ещё новее, ещё лучше сжатие\n\n**SVG:**\n• Масштабируется без потери качества\n• Можно анимировать через CSS/JS\n• Индексируется поисковиками\n• Может быть инлайн в HTML\n\n**Когда что использовать:**\n• **SVG** — иконки, логотипы, иллюстрации, анимации\n• **WebP/AVIF** — фотографии, сложные изображения с градиентами\n• **PNG** — когда нужна прозрачность и нет поддержки WebP\n\n**Адаптивные изображения (srcset):**\n\`\`\`html\n<img\n  src="img-800.webp"\n  srcset="img-400.webp 400w, img-800.webp 800w, img-1600.webp 1600w"\n  sizes="(max-width: 600px) 100vw, 50vw"\n  loading="lazy"\n  decoding="async"\n  alt="..."\n/>\n\`\`\`\nБраузер сам выбирает нужный размер — не грузит лишнего.\n\n**picture с fallback:**\n\`\`\`html\n<picture>\n  <source srcset="img.avif" type="image/avif">\n  <source srcset="img.webp" type="image/webp">\n  <img src="img.jpg" alt="...">\n</picture>\n\`\`\`\n\n**SVG inline vs img:**\nInline SVG — можно анимировать и стилизовать через CSS, но не кэшируется.\n\`\`\`html\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">\n  <circle cx="12" cy="12" r="10" fill="currentColor"/>\n</svg>\n\`\`\`\n\nimg tag с SVG — кэшируется браузером, но нельзя стилизовать через CSS.\n\`\`\`html\n<img src="icon.svg" alt="icon" width="24" height="24">\n\`\`\``, score: 2 },
      { name: 'browserslist', level: '4', content: `Конфиг, определяющий целевые браузеры. Читают: Autoprefixer, Babel, PostCSS Preset Env, ESLint.\n\n\`\`\`json\n"browserslist": ["> 1%", "last 2 versions", "not dead"]\n\`\`\`\n\n• **> 1%** — браузеры с долей использования больше 1% глобально\n• **last 2 versions** — последние 2 версии каждого браузера\n• **not dead** — исключает браузеры без официальной поддержки более 2 лет\n\nВсе инструменты работают согласованно по одному конфигу.\n\n**Где хранить:**\n• **.browserslistrc** — отдельный файл\n• **package.json** — поле "browserslist"\n• **в конфиге инструмента** — например в postcss.config.js`, score: 2.5 },
      { name: 'Доступность (aria, tabindex & etc.)', level: '4', content: `**tabindex:** 0 — в порядке DOM, -1 — только программно (focus()), положительный — антипаттерн.\n\n**ARIA атрибуты:**\n• **aria-label** — текстовое описание элемента для скринридера (когда нет видимого текста)\n• **aria-hidden="true"** — скрывает элемент от скринридера (декоративные иконки)\n• **aria-expanded** — состояние раскрытия (аккордеон, дропдаун)\n• **aria-live** — объявляет динамические изменения (уведомления, ошибки)\n• **role** — явно указывает роль элемента (role="button", role="dialog")\n\n**Первое правило ARIA:** если есть нативный HTML-элемент — используй его вместо ARIA. button лучше чем div с role="button".

**Focus management:**
\`\`\`js
// При открытии модального окна — фокус внутрь
useEffect(() => { if (isOpen) modalRef.current?.focus(); }, [isOpen]);

// При закрытии — вернуть фокус на кнопку открытия
useEffect(() => { if (!isOpen) triggerRef.current?.focus(); }, [isOpen]);
\`\`\`

**Focus trap в модальном окне:**
\`\`\`html
<!-- Современный способ -->
<dialog> <!-- нативный <dialog> имеет встроенный focus trap --> </dialog>

<!-- Или inert атрибут на всё кроме модального -->
<div inert>Контент позади — недоступен Tab, клик, screen reader</div>
\`\`\`

**Клавиатурная навигация (стандарты):**
• Enter/Space — активация button/link
• Escape — закрыть модальное окно, dropdown
• Arrow keys — навигация внутри composite widget (меню, tabs, listbox)

**WCAG контраст:** 4.5:1 для обычного текста, 3:1 для крупного (18px+) и UI элементов.

**aria-live (live regions)** — объявления для screen reader при динамических обновлениях:
\`\`\`html
<div aria-live="polite">Загрузка завершена</div>     <!-- не прерывает чтение -->
<div aria-live="assertive">Критическая ошибка!</div>  <!-- прерывает сразу -->
\`\`\``, score: 3 },
    ],
  },
  {
    id: 'async',
    title: 'АСИНХРОННОСТЬ',
    icon: '🔄',
    color: '#FF6B6B',
    topics: [
      { name: 'XMLHttpRequest, fetch', level: '2', content: `**XMLHttpRequest** — колбэки. **fetch** — промисы.\n\n**fetch при 404/500 — НЕ попадает в catch!** Только сетевые ошибки. Проверять response.ok.\n\n\`\`\`js\nfetch('/api').then(res => {\n  if (!res.ok) throw new Error(res.status);\n  return res.json();\n}).catch(err => console.log(err));\n\`\`\`\n\n**Отмена запроса:**\n\n XHR — просто:\n\`\`\`js\nxhr.abort();\n\`\`\`\n\nfetch — через AbortController:\n\`\`\`js\nconst controller = new AbortController();\n\nfetch('/api/data', { signal: controller.signal });\n\n// Отменяем запрос\ncontroller.abort();\n\`\`\`\nAbortController универсальнее — работает с любым Promise-based API.`, score: 3.5 },
      { name: 'Механизм Event loop, тасоки и микротасоки', level: '3', content: `**Один тик Event Loop:**\nМакротаска → Все микротаски → rAF → Рендеринг → Следующая макротаска\n\n**Микротаски:** Promise.then, queueMicrotask, MutationObserver. Опустошаются полностью.\n**rAF:** requestAnimationFrame — перед рендером, НЕ микро и НЕ макро.\n**Макротаски:** setTimeout, setInterval, I/O.\n\nМикротаска может породить микротаску → выполнится до макротаски. Бесконечные микротаски → блокировка.`, score: 4 },
      { name: 'async/await: Синтаксис, обработка ошибок', level: '3', content: `async-функция всегда возвращает Promise.\n\n**await** разрезает функцию: до await — синхронно, после await — микротаска (.then()).\n\n\`\`\`js\nasync function foo() { console.log(1); await x; console.log(2); }\nconsole.log(3); foo(); console.log(4);\n// 3, 1, 4, 2\n\`\`\`\n\n**Обработка ошибок:** try/catch или .catch() на промисе.\n\n**return value vs return Promise.resolve(value):** второй на один микротик медленнее.\n\n**Promise методы:**\n• **Promise.all(promises)** — ждёт все, падает при первой ошибке. Результат: массив значений в том же порядке.\n• **Promise.allSettled(promises)** — ждёт все, не падает. Результат: массив {status, value/reason}.\n• **Promise.race(promises)** — возвращает первый завершившийся (fulfilled и rejected). Остальные игнорируются.\n• **Promise.any(promises)** — возвращает первый успешный. Если все упали — AggregateError.\n• **Promise.resolve(value)** — создаёт уже зарезолвленный Promise.\n• **Promise.reject(reason)** — создаёт уже отклонённый Promise.\n\n**Нюансы:**\n\`\`\`js\nPromise.race([rejected, resolved]) // вернёт rejected — первый завершился\nPromise.any([rejected, resolved])  // вернёт resolved — первый успешный\n\`\`\`\nPromise.all — порядок результатов совпадает с порядком промисов, не с порядком завершения:\n\`\`\`js\nconst [a, b] = await Promise.all([slowRequest, fastRequest]);\n// a — результат slowRequest, b — fastRequest\n\`\`\`\nPromise.allSettled — никогда не попадёт в .catch().\nPromise.any — единственный метод который бросает AggregateError (содержит массив всех ошибок).\n\n**Цепочка .then().catch().finally():**\n\`\`\`js\nfetch('/api')\n  .then(res => res.json())          // трансформация\n  .catch(err => fallback)           // обработка ошибки, возвращает значение — цепочка продолжается!\n  .finally(() => setLoading(false)) // выполняется всегда, не получает значение\n\`\`\`\n\n**После .catch() можно продолжить .then()** — если catch не бросает ошибку, цепочка восстанавливается:\n\`\`\`js\nfetch('/api')\n  .then(res => res.json())\n  .catch(err => ({ error: true }))  // вернули fallback-значение\n  .then(data => render(data))       // выполнится с fallback-значением\n\`\`\`\nЕсли внутри .catch() сделать throw — следующие .then() будут пропущены до следующего .catch().`, score: 4 },
      { name: 'Генераторы и итераторы', level: '4', content: `**Два протокола:**\n• **Iterable** — объект с методом [Symbol.iterator]() возвращающим итератор\n• **Iterator** — объект с методом next() возвращающим { value, done }\n\n**Ручная реализация итератора:**\n\`\`\`js\nconst iterable = {\n  [Symbol.iterator]() {\n    let i = 0;\n    return {\n      next() {\n        return i < 3\n          ? { value: i++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n\`\`\`\n\n**Генератор** — автоматически реализует оба протокола:\n\`\`\`js\nfunction* gen() {\n  const x = yield 'first';  // строка 1\n  const y = yield 'second'; // строка 2\n  return x + y;             // строка 3\n}\nconst g = gen();\n\`\`\`\n\n**g.next()** — запуск (первый аргумент всегда игнорируется):\n• Идёт до первого yield, возвращает \`{ value: 'first', done: false }\`\n• Заморожен на строке 1\n\n**g.next('world')** — продолжение:\n• 'world' → результат yield 'first' → x = 'world'\n• Идёт до следующего yield, возвращает \`{ value: 'second', done: false }\`\n\n**g.next('!')** — продолжение:\n• '!' → результат yield 'second' → y = '!'\n• Идёт до return, возвращает \`{ value: 'world!', done: true }\`\n\n**Правило:** то что передаёшь в next() — становится результатом предыдущего yield.\n\n**yield* — делегирование:**\n\`\`\`js\nfunction* outer() {\n  yield 0;\n  yield* [1, 2, 3];  // массив\n  yield* 'abc';       // строка\n  yield* inner();     // другой генератор\n}\n[...outer()]; // [0, 1, 2, 3, 'a', 'b', 'c']\n\`\`\`\n\n**Что работает с итерируемыми:** for...of, [...spread], Array.from(), деструктуризация.\n**Встроенные итерируемые:** Array, String, Map, Set, arguments, NodeList, генераторы.\n\n**Практика:**\n\`\`\`js\nfunction* idGenerator() {\n  let id = 1;\n  while (true) yield id++;\n}\n\nfunction* range(start, end) {\n  while (start <= end) yield start++;\n}\nfor (const num of range(1, 5)) console.log(num); // 1 2 3 4 5\n\`\`\`\n\n**Применение:** Redux-Saga, бесконечные последовательности, ленивые вычисления. async/await под капотом — Babel компилирует в генераторы + промисы.`, score: 2.5 },
      { name: 'Работа с запросами', level: '2', content: `**Промисы — цепочки:**\n• .then() и .catch() всегда возвращают новый промис\n• Ошибка пропускает все .then() до ближайшего .catch()\n• .catch() без throw — «чинит» цепочку\n• .finally() — всегда, не получает аргументов, пропускает значение дальше\n\n**promise.then(ok, err) vs promise.then(ok).catch(err):**\nВ первом: err НЕ ловит ошибки из ok. Во втором: catch ловит всё.

**Promise combinators:**
\`\`\`js
// Все выполнятся — вернёт массив результатов. Один reject → всё reject.
const [user, posts] = await Promise.all([fetchUser(id), fetchPosts(id)]);

// Все выполнятся — вернёт массив { status, value/reason }. Никогда не reject.
const results = await Promise.allSettled([req1(), req2(), req3()]);
const ok = results.filter(r => r.status === 'fulfilled').map(r => r.value);

// Первый завершившийся (resolve ИЛИ reject) побеждает.
const data = await Promise.race([fetchFromPrimary(), fetchFromFallback()]);

// Первый resolve побеждает. Reject только если ВСЕ упали (AggregateError).
const fastest = await Promise.any([cdn1(), cdn2(), cdn3()]);
\`\`\`

**AbortController** — отмена fetch и любых async операций:
\`\`\`js
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .catch(e => { if (e.name !== 'AbortError') throw e; });

controller.abort(); // отмена

// В React — отменяем при размонтировании (обязательный паттерн!)
useEffect(() => {
  const controller = new AbortController();
  fetch('/api', { signal: controller.signal }).then(setData);
  return () => controller.abort();
}, []);
\`\`\`` },
    ],
  },
  {
    id: 'ts',
    title: 'TS',
    icon: '🔷',
    color: '#3178C6',
    topics: [
      { name: 'Основные типы данных в TS', level: '2', content: `**Примитивы:** string, number, boolean, null, undefined, bigint, symbol.\n\n**TS-specific:**\n• **any** — отключает проверку\n• **unknown** — безопасный any, требует проверки типа\n• **never** — функция никогда не завершится (throw, while(true))\n• **void** — функция ничего не возвращает\n• **tuple** — массив фиксированной длины: [string, number]\n• **enum** — набор именованных констант`, score: 3 },
      { name: 'Keyof, typeof', level: '2', content: `**keyof** — union ключей: keyof User → 'name' | 'age' (НЕ string!)\n**typeof** (в TS) — выводит тип из значения: typeof user → { name: string; age: number }\n\n**Комбинация:** keyof typeof obj → union ключей из значения.`, score: 3.5 },
      { name: 'Interface vs types (extend, |, &)', level: '3', content: `**interface** — declaration merging (повторное объявление объединяется), extends.\n**type** — расширение через &, union |, mapped types, conditional types.\n\n**Union (|):** A или B (или оба).\n**Intersection (&):** обязательно A и B.\n\ntype тоже можно implements в классах.`, score: 3.5 },
      { name: 'Файлы деклараций .d.ts', level: '3', content: `**.d.ts** — файл только с типами, без реализации. TypeScript читает его чтобы знать что экспортирует модуль, но в JS-бандл он не попадает.\n\n**Зачем нужны:**\nJS-библиотека написана на JS — TypeScript не знает её типы. .d.ts даёт ему эту информацию. Можно типизировать любой JS-код не переписывая его.\n\n**Три источника .d.ts:**\n\n**1. Встроены в саму библиотеку** — авторы написали на TypeScript и скомпилировали:\n\`\`\`json\n// package.json библиотеки\n{ "types": "./dist/index.d.ts" }\n\`\`\`\nTS находит это автоматически.\n\n**2. @types/* пакеты** — отдельный пакет с декларациями для JS-библиотек:\n\`\`\`bash\nnpm i -D @types/react @types/node\n\`\`\`\nPostedBy сообщество DefinitelyTyped. Устанавливаются как devDependency — в продакшн-бандл не попадают.\n\n**3. Написаны вручную** — для своего JS-кода или внутренних модулей:\n\`\`\`ts\n// legacy.d.ts — типизируем старый JS-модуль\ndeclare module './legacy/utils' {\n  export function formatDate(date: Date): string;\n  export function parseId(id: unknown): number;\n}\n\`\`\`\n\n**declare — ключевое слово в .d.ts:**\nГоворит TS "это существует в рантайме, доверяй мне":\n\`\`\`ts\n// Объявить переменную без значения:\ndeclare const __DEV__: boolean;        // например, вшитая webpack-ом\ndeclare function require(id: string): any;\n\n// Объявить модуль (любой импорт этого пути → any):\ndeclare module '*.svg' {\n  const src: string;\n  export default src;\n}\n\n// Объявить модуль с типами:\ndeclare module 'my-lib' {\n  export interface Options { timeout: number; }\n  export function init(opts: Options): void;\n}\n\`\`\`\n\n**declare global — расширение глобального namespace:**\n\`\`\`ts\n// Добавить свойство к window:\ndeclare global {\n  interface Window {\n    analytics: Analytics;\n    __APP_CONFIG__: AppConfig;\n  }\n}\n\n// Или расширить существующий тип:\ndeclare global {\n  interface Array<T> {\n    groupBy(key: keyof T): Record<string, T[]>;\n  }\n}\n\`\`\`\nВажно: declare global работает только внутри module-файла (с import/export). В глобальном файле — просто interface Window.\n\n**Автогенерация .d.ts из своего кода:**\n\`\`\`json\n// tsconfig.json\n{ "declaration": true, "declarationDir": "./dist/types" }\n\`\`\`\nПри сборке библиотеки tsc генерирует .d.ts автоматически рядом с JS-файлами. Потребители получат типы без @types.\n\n**Нюанс — ambient vs module declarations:**\nЕсли .d.ts файл не содержит import/export — он ambient (глобальный), типы доступны везде без импорта. Если содержит import/export — это module, типы нужно импортировать явно.`, score: 3 },
      { name: 'Механизм typeGuard, type cast', level: '3', content: `**Type Guard:** функция с type predicate:\n\`\`\`ts\nfunction isCat(x: Cat | Dog): x is Cat { return 'meow' in x; }\n\`\`\`\n\n**Type Cast:** as (основной) и <Type> (не работает в JSX).\nЭто утверждение, не преобразование — в рантайме ничего не происходит.`, score: 3.5 },
      { name: 'UtilityTypes', level: '3', content: `**Partial<T>** — все поля необязательны
**Required<T>** — все поля обязательны
**Readonly<T>** — все поля только для чтения
**Pick<T, K>** — выбирает поля K из T
**Omit<T, K>** — исключает поля K из T
**Record<K, V>** — объект с ключами K и значениями V
**Exclude<T, U>** — убирает из union T типы из U
**Extract<T, U>** — оставляет в union T только типы из U
**NonNullable<T>** — убирает null и undefined
**ReturnType<T>** — тип возврата функции
**Parameters<T>** — типы параметров функции как tuple
**InstanceType<T>** — тип экземпляра класса
**Awaited<T>** — разворачивает Promise
**ConstructorParameters<T>** — типы параметров конструктора`, score: 4 },
      { name: 'Generics', level: '3', content: `Переиспользуемый код с разными типами:\n\`\`\`ts\nfunction first<T>(arr: T[]): T { return arr[0]; }\n\`\`\`\n\n**Ограничения (extends):**
\`\`\`ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // TypeScript знает тип возврата
}
\`\`\`

**Дефолтные типы:**
\`\`\`ts
interface State<T = string> { value: T; }
type State1 = State;         // State<string>
type State2 = State<number>; // State<number>
\`\`\`

**Conditional generics (зависимый возврат):**
\`\`\`ts
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type A = Flatten<string[]>; // string
type B = Flatten<number>;   // number
\`\`\`

**Variance (вариантность):**
- **Covariant (ковариантный):** \`Dog extends Animal\` → \`() => Dog\` совместим с \`() => Animal\` (return types — ковариантны)
- **Contravariant (контравариантный):** \`(Animal) => void\` → несовместим с \`(Dog) => void\` (параметры — контравариантны со \`strictFunctionTypes\`)
\`\`\`ts
type Logger<T> = (value: T) => void;
// Если нужен Logger<Animal>, можно передать Logger<Animal>
// но НЕ Logger<Dog> — т.к. Logger<Animal> ожидает любой Animal
\`\`\``, score: 4 },
      { name: 'Template Literal Types', level: '3', content: `Строковые шаблоны в типах:\n\`\`\`ts\ntype Event = 'click' | 'hover';\ntype Handler = \\\`on\${Capitalize<Event>}\\\`; // 'onClick' | 'onHover'\n\`\`\`\n\nАвтоматическая генерация всех комбинаций из union. 
      **Capitalize\<T\>** — первая буква заглавная: 'hello' → 'Hello'
**Uncapitalize\<T\>** — первая буква строчная: 'Hello' → 'hello'
**Uppercase\<T\>** — всё заглавными: 'hello' → 'HELLO'
**Lowercase\<T\>** — всё строчными: 'HELLO' → 'hello'`, score: 3.5 },
      { name: 'Conditional types, mapped types, infer', level: '4', content: `**Conditional:** T extends string ? 'yes' : 'no'\n**Mapped:** [K in keyof T]?: T[K] — перебор ключей с трансформацией.\n**infer:** вытаскивает тип из структуры:\n\`\`\`ts\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\`\`\`

**Distributive (разворачивается по union):**
\`\`\`ts
type ToArray<T> = T extends any ? T[] : never;
type A = ToArray<string | number>; // string[] | number[]

// Чтобы ОТКЛЮЧИТЬ distributive — обернуть в кортеж:
type ToArrayStrict<T> = [T] extends [any] ? T[] : never;
type B = ToArrayStrict<string | number>; // (string | number)[]
\`\`\`

**Mapped type modifiers (+/-):**
\`\`\`ts
type Mutable<T> = { -readonly [K in keyof T]: T[K] };   // убрать readonly
type Optional<T> = { [K in keyof T]+?: T[K] };           // добавить ?
type Required<T> = { [K in keyof T]-?: T[K] };           // убрать ?
\`\`\`

**infer для сложных структур:**
\`\`\`ts
type Unpacked<T> = T extends Promise<infer U> ? U : T;
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

type H = Head<[string, number, boolean]>; // string
type T = Tail<[string, number, boolean]>; // [number, boolean]
\`\`\``, score: 3 },
      { name: 'Перегрузка функций', level: '4', content: `Несколько сигнатур + одна реализация. Сигнатуры стираются при компиляции.\n\nБолее конкретные сигнатуры — выше. Используй только когда возвращаемый тип зависит от типа аргумента.\n\n\`\`\`ts\nfunction format(value: string): string;\nfunction format(value: number): string;\nfunction format(value: string | number): string {\n  return String(value);\n}\n\`\`\`\n\n**Важные правила:**\n• Сигнатуры сверху — для TypeScript\n• Реализация снизу — для JS рантайма, должна покрывать все сигнатуры\n• Реализацию нельзя вызвать напрямую — только через сигнатуры`, score: 3 },
      { name: 'Reference types', level: '4', content: `Reference types — директивы в начале файла для подключения типов:\n\n**Triple-slash directives:**\n\`\`\`ts\n/// <reference types="node" />          // подключает @types/node\n/// <reference path="./other.d.ts" />   // подключает конкретный файл\n/// <reference lib="dom" />             // подключает встроенную библиотеку TS\n\`\`\`\n\nВ tsconfig.json можно указать \`types\` или \`lib\` глобально для всего проекта.\n\n**Reference директивы нужны когда:**\n• Нужен тип только в одном файле — не хочешь подключать глобально\n• Автоматически генерируемые .d.ts — компилятор сам добавляет reference чтобы указать зависимости\n• Старые проекты — до того как tsconfig стал стандартом\n\nСейчас в большинстве проектов reference директивы не нужны — всё настраивается через tsconfig.json.`, score: 3.5 },
      { name: 'Использование tsc', level: '4', content: `**tsc** — компилятор TypeScript. Проверяет типы + компилирует в JS.\n\n**tsconfig.json ключевые настройки:**\n• **strict: true** — зонтичный флаг (strictNullChecks, noImplicitAny, и др.)\n• **target** — версия JS на выходе (ES5, ES6, ESNext)\n• **module** — система модулей (commonjs, esnext)\n• **paths** — алиасы импортов\n• **include/exclude** — какие файлы компилировать\n\n**strict: true включает:**\n• **noImplicitAny** — нельзя неявный any\n• **strictNullChecks** — null и undefined не совместимы с другими типами\n• **strictFunctionTypes** — строгая проверка типов функций при присваивании\n• **strictPropertyInitialization** — все поля класса должны быть инициализированы в конструкторе\n\n**--noEmit** — проверяет типы но не генерирует JS файлы. Используется:\n• В CI/CD для проверки типов без сборки\n• Когда сборкой занимается другой инструмент (Vite, webpack) а TS только для типов\n\`\`\`bash\ntsc --noEmit         # только проверка типов\ntsc --watch          # следит за изменениями\ntsc --noEmit --watch # проверка типов в режиме слежения\n\`\`\``, score: 3.5 },
    ],
  },
  {
    id: 'security',
    title: 'БЕЗОПАСНОСТЬ',
    icon: '🔒',
    color: '#EF5350',
    topics: [
      { name: 'eval, dangerouslySetInnerHTML', level: '2', content: `**eval()** — выполняет строку как код. Опасно: XSS-инъекция, нет оптимизаций V8.\n\n**dangerouslySetInnerHTML** — React-аналог innerHTML. Вставляет сырой HTML. Обязательно **санитизировать** входные данные (DOMPurify).\n\n\`\`\`jsx\n<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />\n\`\`\`` },
      { name: 'Аутентификация и авторизация, их отличия', level: '2', content: `**Аутентификация (Authentication)** — КТО ты? Проверка личности (логин/пароль, OAuth, биометрия).\n\n**Авторизация (Authorization)** — ЧТО тебе можно? Проверка прав доступа (роли, permissions).\n\nСначала аутентификация, потом авторизация.\n\n**OAuth 2.0 flows:**
• **Authorization Code + PKCE** — стандарт для SPA и мобильных приложений. Код обменивается на токен на сервере.
• **Client Credentials** — server-to-server (без пользователя)
• **Implicit flow** — устарел, небезопасен, не использовать

**Session vs JWT:**
| | Session | JWT |
|--|---------|-----|
| Хранение | Сервер (Redis/DB) | Нигде (stateless) |
| Инвалидация | Мгновенная | Только по истечении |
| Масштабирование | Нужен общий Redis | Легко (stateless) |
| Размер запроса | Маленький (cookie ID) | Больше (JWT в header) |

**Token rotation паттерн:**
\`\`\`
access token: 15 мин → в памяти (НЕ в localStorage!)
refresh token: 7 дней → в httpOnly cookie (защита от XSS)

access истёк → клиент отправляет refresh token
сервер проверяет хэш refresh в БД → выдаёт новый access + ротирует refresh
\`\`\`
При компрометации refresh — блокируем в БД. В localStorage нельзя — доступен через XSS.` },
      { name: 'npm audit. SCA и SAST', level: '2', content: `**npm audit** — проверка зависимостей на известные уязвимости.\n**npm audit fix** — автоматическое обновление уязвимых пакетов.\n\n**SCA (Software Composition Analysis)** — анализ зависимостей (npm audit, Snyk, Dependabot).\n**SAST (Static Application Security Testing)** — анализ исходного кода без запуска (ESLint security plugins, SonarQube).` },
      { name: 'Атрибут rel: noreferrer, noopener, nofollow', level: '3', content: `\`\`\`html\n<a href="..." target="_blank" rel="noopener noreferrer">\n\`\`\`\n\n**noopener** — новая вкладка не получает доступ к window.opener (защита от подмены страницы).\n**noreferrer** — не передаёт заголовок Referer (скрывает откуда пришёл пользователь). Включает noopener.\n**nofollow** — указание поисковикам не передавать «вес» ссылки (SEO).` },
      { name: 'CSP и X-Frame-Options', level: '3', content: `**CSP (Content Security Policy)** — заголовок, контролирующий откуда можно загружать ресурсы:\n\`\`\`\nContent-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com;\n\`\`\`\nЗащита от XSS — запрет inline-скриптов и загрузки с чужих доменов.\n\n**X-Frame-Options** — контролирует встраивание в iframe:\n• DENY — запретить\n• SAMEORIGIN — только с того же домена\n• ALLOW-FROM — с конкретного домена` },
      { name: 'CORS', level: '3', content: `**CORS (Cross-Origin Resource Sharing)** — механизм разрешения кросс-доменных запросов.\n\n**Простой запрос:** GET/POST с простыми заголовками → браузер добавляет Origin → сервер проверяет.\n\n**Preflight (OPTIONS):** для «сложных» запросов (PUT, DELETE, кастомные заголовки) → браузер сначала шлёт OPTIONS → сервер отвечает Access-Control-Allow-*.\n\n**Заголовки:**\n• Access-Control-Allow-Origin: * или конкретный домен\n• Access-Control-Allow-Methods: GET, POST, PUT\n• Access-Control-Allow-Headers: Content-Type, Authorization\n• Access-Control-Allow-Credentials: true (для cookies)`, score: null },
      { name: 'XSS', level: '3', content: `**XSS (Cross-Site Scripting)** — внедрение вредоносного скрипта на страницу.\n\n**Типы:**\n• **Stored** — скрипт сохранён на сервере (комментарий с JS)\n• **Reflected** — скрипт в URL-параметре, отражается в ответе\n• **DOM-based** — через клиентский JS (innerHTML, eval)\n\n**Защита:**\n• Экранирование вывода (React делает по умолчанию)\n• CSP заголовки\n• HttpOnly cookies (недоступны для JS)\n• Санитизация ввода (DOMPurify)` },
      { name: 'CSRF', level: '3', content: `**CSRF (Cross-Site Request Forgery)** — атака, заставляющая браузер отправить запрос от имени пользователя.\n\n**Пример:** пользователь залогинен на bank.com. На evil.com — форма, отправляющая POST на bank.com/transfer. Браузер прикрепит cookies автоматически.\n\n**Защита:**\n• **CSRF-токен** — уникальный токен в форме, проверяемый сервером\n• **SameSite cookies** — Strict/Lax\n• Проверка заголовка Origin/Referer\n• Double-submit cookie` },
      { name: 'Безопасность JWT', level: '3', content: `**JWT (JSON Web Token)** — header.payload.signature (Base64).\n\n**Не шифрует данные!** Только подписывает. Payload читается кем угодно.\n\n**Уязвимости:**\n• Хранение в localStorage → доступен через XSS\n• Длинный срок жизни → украденный токен работает долго\n• Алгоритм none → отключение подписи\n\n**Лучшие практики:**\n• Короткий срок жизни access token (15 мин)\n• Refresh token в HttpOnly cookie\n• Проверять алгоритм на сервере\n• Не хранить чувствительные данные в payload` },
      { name: 'Работа SSL/TLS', level: '4', content: `**TLS (Transport Layer Security)** — шифрование соединения.\n\n**Handshake (TLS 1.3):**\n1. ClientHello — поддерживаемые алгоритмы + случайное число\n2. ServerHello — выбранный алгоритм + сертификат\n3. Обмен ключами (Diffie-Hellman)\n4. Симметричное шифрование установлено\n\n**Сертификат:** подтверждает подлинность сервера. Выдаётся CA (Certificate Authority). Let's Encrypt — бесплатный.` },
      { name: 'Организация безопасности при реализации WebSocket-ов', level: '4', content: `**Угрозы:** CSWSH (Cross-Site WebSocket Hijacking), DDoS, инъекции в сообщениях.\n\n**Защита:**\n• Проверка Origin при handshake\n• Аутентификация через токен (не полагаться на cookies)\n• Валидация и санитизация всех входящих сообщений\n• Rate limiting\n• WSS (WebSocket Secure) — только через TLS\n• Heartbeat/ping-pong для обнаружения мёртвых соединений` },
    ],
  },
  {
    id: 'testing',
    title: 'ТЕСТИРОВАНИЕ',
    icon: '🧪',
    color: '#26A69A',
    topics: [
      { name: 'Паттерн AAA (Arrange Act Assert)', level: '2', content: `\`\`\`js\n// Arrange — подготовка\nconst calculator = new Calculator();\n\n// Act — действие\nconst result = calculator.add(2, 3);\n\n// Assert — проверка\nexpect(result).toBe(5);\n\`\`\`\n\nКаждый тест — одно действие, одна проверка. Чистый и читаемый.` },
      { name: 'Моки. Зачем нужны и как применять', level: '3', content: `**Mock** — подделка зависимости с контролируемым поведением.\n\n\`\`\`js\nconst mockFetch = jest.fn().mockResolvedValue({ json: () => ({ name: 'Alice' }) });\nglobal.fetch = mockFetch;\n\nawait loadUser();\n\nexpect(mockFetch).toHaveBeenCalledWith('/api/user');\n\`\`\`\n\nЗачем: изоляция тестируемого кода, предсказуемость, скорость (не ждём реальный API).` },
      { name: 'Stub, Spy. Зачем нужны и как применять', level: '3', content: `**Stub** — заглушка, возвращающая фиксированное значение. Не проверяем вызов.\n\`\`\`js\nconst getUser = jest.fn().mockReturnValue({ name: 'Alice' });\n\`\`\`\n\n**Spy** — наблюдатель, следит за вызовами реального метода без подмены:\n\`\`\`js\nconst spy = jest.spyOn(console, 'log');\ndoSomething();\nexpect(spy).toHaveBeenCalledWith('done');\nspy.mockRestore();\n\`\`\`\n\n**Mock** = Stub + Spy (подменяет и отслеживает).` },
      { name: 'Принцип TDD', level: '3', content: `**TDD (Test-Driven Development):**\n1. **Red** — пишем тест → он падает (функционал не реализован)\n2. **Green** — пишем минимальный код, чтобы тест прошёл\n3. **Refactor** — улучшаем код, тесты продолжают проходить\n\nПреимущества: лучший дизайн кода, высокое покрытие, документация через тесты, уверенность при рефакторинге.` },
      { name: 'Интеграционные и e2e тесты (cypress / playwright)', level: '3', content: `**Unit** — одна функция/компонент в изоляции.\n**Интеграционные** — несколько модулей вместе (API + компонент).\n**E2E** — полный пользовательский сценарий в реальном браузере.\n\n**Cypress:** JS-фреймворк, работает в браузере, time-travel debugging, автоматические ожидания.\n**Playwright:** от Microsoft, мультибраузерный (Chromium, Firefox, WebKit), быстрее, API для мобильных.` },
      { name: 'Пирамида тестирования, инструменты для каждого уровня', level: '3', content: `\`\`\`\n       /  E2E  \\       — мало, медленные, дорогие\n      / Integration \\   — средне\n     /    Unit       \\  — много, быстрые, дешёвые\n\`\`\`\n\n**Unit:** Jest, Vitest, React Testing Library\n**Integration:** Jest + MSW (Mock Service Worker), Supertest\n**E2E:** Cypress, Playwright\n\n**Перевёрнутая пирамида** — антипаттерн: много E2E, мало Unit. Медленные, хрупкие тесты.` },
      { name: 'Coverage. Инструменты и принцип работы', level: '4', content: `**Coverage** — процент кода, выполненного при прогоне тестов.\n\n**Метрики:**\n• **Statements** — % выполненных выражений\n• **Branches** — % пройденных ветвлений (if/else, switch)\n• **Functions** — % вызванных функций\n• **Lines** — % выполненных строк\n\n**Инструменты:** istanbul/nyc, Jest --coverage, Vitest --coverage, c8.\n\n**Важно:** 100% coverage ≠ качественные тесты. Можно покрыть всё без проверки правильности. Coverage — метрика полноты, не качества.` },
      { name: 'Unit тестирование', level: '2', content: `Тестирование отдельной функции/компонента в изоляции.\n\n**React Testing Library:**\n\`\`\`js\nrender(<Button label="Click" onClick={mockFn} />);\nconst btn = screen.getByText('Click');\nfireEvent.click(btn);\nexpect(mockFn).toHaveBeenCalled();\n\`\`\`\n\nПринцип: тестируй поведение, не реализацию. Query по тексту/роли, не по className.` },
    ],
  },
  {
    id: 'exceptions',
    title: 'ОБРАБОТКА ИСКЛЮЧЕНИЙ, ЛОГИРОВАНИЕ, ДЕБАГ',
    icon: '🐛',
    color: '#FF7043',
    topics: [
      { name: 'try-catch', level: '2', content: `\`\`\`js\ntry {\n  riskyOperation();\n} catch (error) {\n  console.error(error.message);\n} finally {\n  cleanup(); // всегда выполняется\n}\n\`\`\`\n\n**finally** — выполняется всегда (и при ошибке, и без).\n\n**Не ловит:** асинхронные ошибки (setTimeout, Promise). Для промисов — .catch() или try/catch с await.\n\n**Custom Error:**\n\`\`\`js\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n  }\n}\n\`\`\`` },
      { name: 'Способы дебага клиентского кода', level: '2', content: `• **console.log/warn/error/table/group/time** — базовое логирование\n• **debugger** — программный breakpoint\n• **DevTools breakpoints** — line, conditional, DOM, XHR, event\n• **Source maps** — маппинг минифицированного кода на исходный\n• **Network tab** — анализ запросов и ответов\n• **Performance tab** — профилирование\n• **React DevTools** — дерево компонентов, props, state, profiler` },
      { name: 'redux/react/альтернативы devtools', level: '3', content: `**React DevTools:** дерево компонентов, props, state, hooks, profiler (перерендеры), highlight updates.\n\n**Redux DevTools:** time-travel debugging, просмотр всех actions и state diff, импорт/экспорт состояния.\n\n**Vue DevTools, MobX DevTools, Zustand DevTools** — аналогичные инструменты для своих экосистем.` },
      { name: 'Настройка логирования ошибок (sentry, prometheus и др.)', level: '4', content: `**Sentry** — мониторинг ошибок в реальном времени:\n• Автоматический перехват ошибок (window.onerror, unhandledrejection)\n• Source maps для читаемых stack traces\n• Breadcrumbs — цепочка действий перед ошибкой\n• Release tracking — привязка ошибок к версиям\n• Performance monitoring\n\n**Prometheus + Grafana** — метрики (больше для backend/инфраструктуры).\n\n**LogRocket / FullStory** — session replay + логирование.` },
      { name: 'Понимание принципа выделения программных узлов для логирования', level: '4', content: `**Что логировать:**\n• API-вызовы (запрос, ответ, ошибки)\n• Действия пользователя (навигация, клики на ключевые элементы)\n• Ошибки рендеринга (ErrorBoundary)\n• Бизнес-логика (переходы состояний, транзакции)\n• Производительность (долгие операции, медленные рендеры)\n\n**Уровни логирования:** debug, info, warn, error, fatal.\n\n**Не логировать:** чувствительные данные (пароли, токены, персональные данные — GDPR!).` },
    ],
  },
  {
    id: 'perf',
    title: 'ПРОИЗВОДИТЕЛЬНОСТЬ',
    icon: '🚀',
    color: '#FFC107',
    topics: [
      { name: 'Инструменты проверки производительности (devtools, lighthouse)', level: '2', content: `**Lighthouse:** аудит Performance, Accessibility, SEO, Best Practices. Даёт оценку 0-100 и рекомендации.\n\n**DevTools Performance tab:** запись и анализ. Flame chart — визуализация стека вызовов. Main thread — видно что блокирует.\n\n**WebPageTest** — тестирование из разных локаций и устройств.\n**Chrome UX Report** — реальные данные пользователей.` },
      { name: 'Preload, prefetch, async, defer', level: '2', content: `**Scripts:**\n\`\`\`html\n<script src="app.js"></script>           <!-- блокирует парсинг -->\n<script src="app.js" async></script>     <!-- загружает параллельно, выполняет сразу -->\n<script src="app.js" defer></script>     <!-- загружает параллельно, выполняет после парсинга -->\n\`\`\`\n\n**Resource hints:**\n\`\`\`html\n<link rel="preload" href="font.woff2" as="font">   <!-- загрузить сейчас (критический ресурс) -->\n<link rel="prefetch" href="next-page.js">           <!-- загрузить потом (для будущей навигации) -->\n<link rel="preconnect" href="https://api.com">      <!-- установить соединение заранее -->\n\`\`\`` },
      { name: 'Метрики клиентской производительности', level: '3', content: `**Core Web Vitals:**\n• **LCP (Largest Contentful Paint)** — время отрисовки самого большого элемента. Хорошо: < 2.5s\n• **FID (First Input Delay)** / **INP (Interaction to Next Paint)** — задержка реакции на ввод. Хорошо: < 100ms\n• **CLS (Cumulative Layout Shift)** — визуальная стабильность (прыжки элементов). Хорошо: < 0.1\n\n**Другие:**\n• **FCP (First Contentful Paint)** — первый контент на экране\n• **TTFB (Time To First Byte)** — время до первого байта ответа\n• **TTI (Time To Interactive)** — когда страница полностью интерактивна` },
      { name: 'Механизмы уменьшения размера бандла, CDN', level: '3', content: `**Уменьшение бандла:**\n• **Tree shaking** — удаление неиспользуемого кода (ES modules)\n• **Code splitting** — разделение на чанки (React.lazy, dynamic import)\n• **Minification** — сжатие кода (Terser)\n• **Compression** — gzip, Brotli\n• **Анализ бандла** — webpack-bundle-analyzer, source-map-explorer\n\n**CDN (Content Delivery Network):**\nСеть серверов по всему миру. Ресурсы раздаются с ближайшего сервера → меньше latency.\nКэширование на edge-серверах. Защита от DDoS.

**Оптимизация изображений (критично для LCP):**
• Использовать **WebP/AVIF** вместо JPEG/PNG (–25-50% размера)
• **srcset + sizes** — браузер сам выбирает нужный размер, не грузит лишнего
• **loading="lazy"** — для изображений below the fold
• **decoding="async"** — не блокирует main thread при декодировании
• CDN с auto-format (Cloudinary, imgix — автоматически конвертируют в WebP/AVIF)
\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img
    src="hero.jpg"
    srcset="hero-400.jpg 400w, hero-800.jpg 800w"
    sizes="(max-width: 600px) 100vw, 800px"
    loading="eager"
    fetchpriority="high"
    alt="..."
  />
</picture>
\`\`\`
**fetchpriority="high"** — для LCP-изображения (выше preload в очереди загрузки).` },
      { name: 'Lazy-loading, оптимизация критичного пути', level: '4', content: `**Critical Rendering Path:** HTML → DOM + CSSOM → Render Tree → Layout → Paint.\n\n**Оптимизация:**\n• Inline critical CSS (above-the-fold)\n• Defer non-critical CSS\n• Lazy-load изображений: \`loading="lazy"\`\n• Lazy-load компонентов: React.lazy + Suspense\n• Минимизировать блокирующие ресурсы\n• Preload критических ресурсов\n\n**Intersection Observer:**\n\`\`\`js\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(e => { if (e.isIntersecting) loadImage(e.target); });\n});\n\`\`\`` },
      { name: 'Метрики серверной производительности', level: '4', content: `**TTFB** — время до первого байта. Зависит от сервера, БД, сети.\n**Server Response Time** — время обработки запроса.\n**Throughput** — количество запросов в секунду.\n**Error Rate** — процент ошибочных ответов.\n\n**Мониторинг:** New Relic, DataDog, Prometheus + Grafana.\n\n**Оптимизация:** кэширование (Redis), CDN, оптимизация запросов к БД, horizontal scaling.` },
    ],
  },
  {
    id: 'refactoring',
    title: 'РЕФАКТОРИНГ',
    icon: '🔧',
    color: '#8D6E63',
    topics: [
      { name: 'Правила работы с комментариями при рефакторинге', level: '2', content: `**Хорошие комментарии:**\n• Объясняют ПОЧЕМУ, а не ЧТО\n• TODO / FIXME / HACK с обоснованием\n• JSDoc для публичных API\n• Регулярные выражения и сложные алгоритмы\n\n**Плохие комментарии:**\n• Описывают очевидный код\n• Устаревшие (не обновлены при рефакторинге)\n• Закомментированный код (удаляй, git помнит)\n\n**Правило:** если код требует комментария — сначала попробуй сделать код понятнее (переименовать, выделить функцию).` },
      { name: 'Основные принципы рефакторинга', level: '3', content: `**Рефакторинг** — изменение внутренней структуры без изменения поведения.\n\n**Принципы:**\n• Маленькие шаги + тесты после каждого шага\n• Не менять поведение и рефакторить одновременно\n• Тесты — safety net (без тестов рефакторинг рискован)\n• Роль тестов при рефакторинге — они ДОЛЖНЫ проходить после каждого изменения\n\n**Цели рефакторинга:** улучшить читаемость, убрать дублирование, упростить поддержку, подготовить к новой фиче.` },
      { name: 'Признаки грязного кода', level: '3', content: `**Code Smells:**\n• **Длинные функции/методы** (> 20-30 строк)\n• **Дублирование кода**\n• **Магические числа** (42 вместо MAX_RETRIES)\n• **Глубокая вложенность** (if внутри if внутри if)\n• **Большие классы / God Object** (один класс делает всё)\n• **Feature Envy** — метод больше работает с чужими данными, чем со своими\n• **Длинные списки параметров** (> 3 — используй объект)\n• **Мёртвый код** — недостижимый или неиспользуемый\n• **Shotgun Surgery** — одно изменение требует правок в 10 местах` },
      { name: 'Применять различные методы рефакторинга', level: '3', content: `**Извлечение метода:**\n\`\`\`js\n// До\nfunction process() { /* 50 строк */ }\n\n// После\nfunction process() {\n  validate();\n  transform();\n  save();\n}\n\`\`\`\n\n**Извлечение переменной** — сложное выражение → именованная переменная.\n**Инкапсуляция полей** — прямой доступ → геттеры/сеттеры.\n**Разбиение условного оператора** — сложный if → функции с говорящими именами.\n**Замена магических чисел** — константы с понятным именем.\n**Inline метод** — обратное извлечению, если метод тривиален.` },
      { name: 'Понимает текущий бэклог технического развития проекта', level: '4', content: `**Технический долг (Tech Debt)** — осознанные или случайные компромиссы в коде.\n\n**Бэклог тех. развития:**\n• Обновление зависимостей\n• Миграция на новые версии фреймворков\n• Покрытие тестами критических путей\n• Оптимизация производительности\n• Улучшение CI/CD\n• Документация архитектурных решений (ADR)\n\n**Senior-ответственность:** видеть картину целиком, приоритизировать тех. долг, обосновывать бизнесу время на рефакторинг, планировать миграции.` },
    ],
  },
  {
    id: 'git',
    title: 'GIT',
    icon: '📦',
    color: '#F4511E',
    topics: [
      { name: 'Базовые команды: pull, push, commit, fetch, add, clone', level: '2', content: `**Три зоны:**\nРабочая директория → git add → Staging area → git commit → Repository\n\n\`\`\`bash\ngit status          # статус файлов\ngit add file.js     # добавить файл в staging\ngit add .           # добавить все\ngit commit -m "msg" # зафиксировать\ngit push            # отправить на remote\ngit pull            # fetch + merge\ngit fetch           # скачать без merge (безопасно)\ngit clone <url>     # клонировать репо\n\`\`\`\nfetch vs pull: fetch скачивает изменения, но не применяет. pull = fetch + merge.\n\n**init + config:**\n\`\`\`bash\ngit init                               # инициализировать репо\ngit config --global user.name "Alex"   # имя для коммитов\ngit config --global user.email "..."   # email\ngit config --global core.editor vim    # редактор\ngit config --list                      # все настройки\n\`\`\`` },
      { name: 'branch, merge, remote', level: '2', content: `**branch:**\n\`\`\`bash\ngit branch              # список веток\ngit branch -a           # все включая remote\ngit branch feature      # создать ветку\ngit branch -d feature   # удалить ветку\ngit branch -m old new   # переименовать\n\ngit switch feature      # переключиться (Git 2.23+)\ngit switch -c feature   # создать и переключиться\n\`\`\`\n\n**merge:**\n\`\`\`bash\ngit merge feature         # влить feature в текущую ветку\ngit merge --no-ff feature # всегда создавать merge коммит\ngit merge --abort         # отменить merge при конфликте\n\`\`\`\nFast-forward — когда main не уходил вперёд, Git просто двигает указатель, merge коммита нет.\n--no-ff — всегда создаёт merge коммит, видно что была ветка.\n\n**remote:**\n\`\`\`bash\ngit remote -v                      # список remote\ngit remote add origin https://...  # добавить\ngit remote remove origin           # удалить\ngit remote rename origin upstream  # переименовать\n\ngit fetch origin       # скачать без merge\ngit pull origin main   # fetch + merge\n\`\`\`` },
      { name: 'amend, fixup, revert, cherry-pick, stash, rebase, .gitignore', level: '3', content: `**amend:**\n\`\`\`bash\ngit commit --amend -m "новое сообщение"  # изменить последний коммит\ngit commit --amend --no-edit             # добавить файлы без смены сообщения\n\`\`\`\n⚠️ Переписывает SHA коммита. Если уже запушен — нужен git push --force-with-lease.\n\n**stash:**\n\`\`\`bash\ngit stash                  # сохранить изменения\ngit stash save "описание"  # с описанием\ngit stash list             # список всех stash\ngit stash pop              # применить последний и удалить\ngit stash apply stash@{2}  # применить конкретный\ngit stash drop             # удалить последний\ngit stash clear            # удалить все\n\`\`\`\n\n**revert vs reset:**\n\`\`\`bash\ngit revert abc123         # новый коммит отменяющий abc123 (безопасно для remote)\n\ngit reset --soft HEAD~1   # коммит удалён, изменения в staging\ngit reset --mixed HEAD~1  # коммит удалён, изменения в рабочей директории\ngit reset --hard HEAD~1   # коммит и изменения удалены полностью\n\`\`\`\nПравило: reset только для локальных коммитов. revert когда коммит уже в remote.\n\n**cherry-pick:**\n\`\`\`bash\ngit cherry-pick abc123          # перенести один коммит\ngit cherry-pick abc123..def456  # диапазон коммитов\n\`\`\`\nИспользуется для хотфиксов — перенести исправление бага с одной ветки на другую.\n\n**rebase:**\n\`\`\`bash\ngit rebase main          # перебазировать текущую ветку на main\ngit rebase -i HEAD~3     # интерактивный rebase последних 3 коммитов\ngit rebase --abort       # отменить rebase\ngit rebase --continue    # продолжить после разрешения конфликта\n\`\`\`\n⚠️ Переписывает историю. Нельзя делать на публичных ветках которые используют другие.\n\n**fixup:**\n\`\`\`bash\ngit commit --fixup abc123             # создать коммит-исправление\ngit rebase -i --autosquash HEAD~5     # автоматически склеить fixup коммиты\n\`\`\`\n\n**.gitignore** — файлы которые git игнорирует (node_modules, .env, dist).` },
      { name: 'log, diff, reflog, tag', level: '3', content: `**log:**\n\`\`\`bash\ngit log --oneline --graph   # самый частый вариант\ngit log -n 5                # последние 5 коммитов\ngit log --author="Alex"     # коммиты автора\ngit log --since="2 weeks"   # за период\ngit log file.js             # история файла\n\`\`\`\n\n**diff:**\n\`\`\`bash\ngit diff                   # изменения не в staging\ngit diff --staged          # изменения в staging\ngit diff main feature      # разница между ветками\ngit diff abc123 def456     # разница между коммитами\n\`\`\`\n\n**reflog:**\n\`\`\`bash\ngit reflog               # история всех перемещений HEAD\ngit reset --hard abc123  # восстановить потерянный коммит\n\`\`\`\nХранит историю ~90 дней. Страховка от reset --hard.\n\n**tag:**\n\`\`\`bash\ngit tag v1.0.0                   # lightweight тег\ngit tag -a v1.0.0 -m "Release"  # annotated тег (предпочтительно)\ngit push origin v1.0.0           # запушить тег\ngit push origin --tags           # запушить все теги\ngit tag -d v1.0.0                # удалить тег\n\`\`\`` },
      { name: 'hooks', level: '4', content: `**Git Hooks** — скрипты в .git/hooks/ выполняющиеся автоматически при git командах.\n\n**Основные хуки:**\n• **pre-commit** — перед коммитом (линтинг, форматирование)\n• **commit-msg** — проверка формата сообщения\n• **pre-push** — перед push (тесты)\n\n**Husky** — шарит хуки между разработчиками через package.json:\n\`\`\`json\n{\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged",\n      "pre-push": "npm test"\n    }\n  }\n}\n\`\`\`\n**lint-staged** — запускает линтер только на изменённых файлах.` },
      { name: 'switch, restore', level: '4', content: `Новые команды (Git 2.23+), заменяющие перегруженный checkout:\n\n\`\`\`bash\ngit switch feature         # переключить ветку\ngit switch -c feature      # создать и переключить\n\ngit restore file.js              # восстановить файл из последнего коммита\ngit restore --staged file.js     # убрать файл из staging\n\`\`\`\n\ncheckout делал слишком много (переключение веток + откат файлов). switch и restore — чёткое разделение обязанностей.` },
      { name: 'Способы оптимизации рабочего пространства Git, git-lfs, сабмодули', level: '4', content: `**git-lfs (Large File Storage):**\nДля больших бинарных файлов (видео, дизайн, скриншоты). В репозитории хранится указатель, файл — на LFS сервере.\n\`\`\`bash\ngit lfs install\ngit lfs track "*.png"\ngit lfs track "*.psd"\ngit add .gitattributes\n\`\`\`\n\n**Субмодули:**\nВложенный git-репозиторий внутри основного. Для переиспользования библиотек между проектами.\n\`\`\`bash\ngit submodule add https://github.com/org/lib  # добавить\ngit submodule init                             # инициализировать\ngit submodule update                           # обновить\ngit clone --recurse-submodules https://...    # клонировать с субмодулями\n\`\`\`\nМинус — сложность синхронизации в команде.\n\n**Shallow clone:**\n\`\`\`bash\ngit clone --depth 1 <url>  # только последний коммит (быстрее для CI)\n\`\`\`` },
      { name: 'worktree', level: '4', content: `**git worktree** — несколько рабочих директорий одного репо одновременно. Позволяет работать в нескольких ветках без stash и переключений.\n\n\`\`\`bash\ngit worktree add ../hotfix main  # создать папку с веткой main\ngit worktree list                # список worktree\ngit worktree remove ../hotfix    # удалить\n\`\`\`\n\nКейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.` },
    ],
  },
];
