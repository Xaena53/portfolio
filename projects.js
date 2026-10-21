(function () {
  'use strict';

  var root = document.documentElement;
  var dil = function () { return root.getAttribute('lang') === 'tr' ? 'tr' : 'en'; };
  var P = 'assets/projects/';
  var MAP = { en: 'Road photo: Mapillary (CC BY-SA). Boxes: Asfalya model output.', tr: 'Yol fotoğrafı: Mapillary (CC BY-SA). Kutular: Asfalya model çıktısı.' };

  /* ---------------- project data ---------------- */
  var PROJE = {
    asfalya: {
      ad: 'Asfalya',
      ust: { en: 'Computer vision · BAUM internship project', tr: 'Görüntü işleme · BAUM staj projesi' },
      metin: {
        en: ['Phone cameras on municipal buses record the road. Footage is processed overnight on a single GPU: a YOLO model finds potholes, cracks, patches and manhole covers, GPS and OpenStreetMap map-matching pins each one to a street, and sightings across passes collapse into one tracked repair. Results land on a live damage map with neighbourhood scores and weekly PDF reports.',
             'Privacy is enforced in code. Face and plate blurring is a mandatory pipeline step, an unmasked frame is rejected with a PrivacyViolation, and raw video never reaches the server.'],
        tr: ['Belediye otobüslerine takılan telefon kameraları yolu kaydeder. Görüntüler gece tek bir GPU’da işlenir: YOLO modeli çukur, çatlak, yama ve rögar kapaklarını bulur; GPS ve OpenStreetMap eşleştirmesi her hasarı bir sokağa bağlar; farklı geçişlerde görülen aynı hasar tek bir onarım kaydında birleşir. Sonuçlar mahalle skorlarıyla birlikte canlı hasar haritasına ve haftalık PDF raporlarına düşer.',
             'Gizlilik kodda uygulanır: yüz ve plaka bulanıklaştırma zorunlu bir adımdır, maskelenmemiş kare PrivacyViolation ile reddedilir ve ham video sunucuya hiç ulaşmaz.']
      },
      one: {
        en: ['mAP@0.5 of 0.632 across five classes; manhole covers 0.824, alligator cracks 0.715', '7,704 detections deduplicated into tracked damage records', 'Multi-pass capture of 87.1% against an 85% field target', 'Presented as my internship project at BAUM, Anadolu University'],
        tr: ['Beş sınıfta mAP@0.5 0,632; rögar kapağı 0,824, timsah sırtı çatlak 0,715', '7.704 tespit, tekilleştirilerek izlenen hasar kayıtlarına indirildi', 'Çok geçişli yakalama %87,1 (saha hedefi %85)', 'Anadolu Üniversitesi BAUM’daki stajımda proje olarak sunuldu']
      },
      gorsel: [
        [P + 'asfalya-1.jpg', { en: 'Alligator crack detected at 0.72 confidence. ' + MAP.en, tr: 'Timsah sırtı çatlak, 0,72 güvenle tespit edildi. ' + MAP.tr }],
        [P + 'asfalya-2.jpg', { en: 'Transverse (0.35) and longitudinal (0.50) cracks on the same frame. ' + MAP.en, tr: 'Aynı karede enine (0,35) ve boyuna (0,50) çatlak. ' + MAP.tr }],
        [P + 'asfalya-3.jpg', { en: 'Damage map of Eskişehir with neighbourhood score card.', tr: 'Mahalle skor kartıyla Eskişehir hasar haritası.' }],
        [P + 'asfalya-4.jpg', { en: 'Density view of open damage records.', tr: 'Açık hasar kayıtlarının yoğunluk görünümü.' }],
        [P + 'asfalya-5.jpg', { en: 'Precision–recall curve per class, all classes mAP@0.5 = 0.632.', tr: 'Sınıf bazında hassasiyet–duyarlılık eğrisi; tüm sınıflar mAP@0.5 = 0,632.' }],
        [P + 'asfalya-6.jpg', { en: 'Training data: labelled instances per class. Longitudinal cracks lead with 22,194; the patch and edge-break classes have no labels yet, so the model detects five classes.', tr: 'Eğitim verisi: sınıf başına etiketli örnek sayısı. 22.194 ile en çok boyuna çatlak var; yama ve kenar kırığı sınıflarında henüz etiket yok, bu yüzden model beş sınıf tespit eder.' }]
      ],
      teknik: [
        [{ en: 'Model', tr: 'Model' }, 'YOLO (Ultralytics), OpenCV, PyTorch'],
        [{ en: 'Pipeline', tr: 'İşleme hattı' }, 'Python, GPX / NMEA parsing, OSM map-matching, pytest'],
        [{ en: 'Backend', tr: 'Backend' }, 'Node.js, Express, PostgreSQL + PostGIS, zod, pino'],
        [{ en: 'Front end', tr: 'Ön yüz' }, 'MapLibre GL, PDF reports'],
        [{ en: 'Delivery', tr: 'Yayına alma' }, 'Docker Compose, GitHub Actions']
      ],
      link: null
    },

    warden: {
      ad: 'Warden of the Fields',
      ust: { en: 'Game development · Unreal Engine 5', tr: 'Oyun geliştirme · Unreal Engine 5' },
      metin: {
        en: ['A first-person open-world survival game: run the village by day and defend it at night. Survival needs, villager jobs and buildings are built as data-driven systems, so balancing lives in data assets.',
             'Development runs on milestones M0 to M12 with automation tests and CI from the first milestone. The world is assembled from licensed Fab asset packs, tracked in an inventory so every licence and credit stays accounted for.'],
        tr: ['Birinci şahıs açık dünya hayatta kalma oyunu: gündüz köyü yönet, gece savun. Hayatta kalma ihtiyaçları, köylü işleri ve binalar veri odaklı sistemler olarak kuruldu; denge ayarları veri dosyalarında yapılır.',
             'Geliştirme M0’dan M12’ye kilometre taşlarıyla ilerliyor; ilk kilometre taşından itibaren otomasyon testleri ve CI var. Dünya lisanslı Fab paketleriyle kuruluyor; her lisans ve kredi bir envanterde takip ediliyor.']
      },
      one: {
        en: ['Unreal Engine 5.8, a single C++ module split into Core, Character, Survival, Building and World', 'M0 complete: clean build, 34 of 34 automation tests passing', 'Fab library of 606 packs inventoried with licence types'],
        tr: ['Unreal Engine 5.8; Core, Character, Survival, Building ve World olarak bölünmüş tek C++ modülü', 'M0 tamam: hatasız derleme, 34/34 otomasyon testi geçiyor', '606 Fab paketi lisans türleriyle envantere alındı']
      },
      gorsel: [
        [P + 'warden-1.jpg', { en: 'Village square during a work cycle.', tr: 'İş döngüsü sırasında köy meydanı.' }],
        [P + 'warden-2.jpg', { en: 'The general store, one of the village buildings.', tr: 'Köy binalarından bakkal.' }],
        [P + 'warden-3.jpg', { en: 'The tavern at dusk.', tr: 'Gün batımında meyhane.' }],
        [P + 'warden-4.jpg', { en: 'Aerial view of the village layout and fields.', tr: 'Köy yerleşimi ve tarlaların kuşbakışı görünümü.' }]
      ],
      teknik: [
        [{ en: 'Engine', tr: 'Motor' }, 'Unreal Engine 5.8'],
        [{ en: 'Code', tr: 'Kod' }, 'C++, Gameplay Framework, Enhanced Input, Data Assets'],
        [{ en: 'Quality', tr: 'Kalite' }, 'UE Automation Tests, CI'],
        [{ en: 'Tooling', tr: 'Araçlar' }, 'Python editor scripts, Visual Studio 2022']
      ],
      link: null
    },

    ekt: {
      ad: 'EKT Akademi',
      ust: { en: 'Client project · Live since 20 August 2026', tr: 'Müşteri projesi · 20 Ağustos 2026’dan beri canlı' },
      metin: {
        en: ['An education platform for corporate training. I wrote the entire backend behind an existing static front end and took it live: public website, student panel and admin panel.',
             'The brief was uptime. The previous site kept falling over, so the system is kept small and predictable: one Node service, one database, sessions on the server and a reboot-tested deployment.'],
        tr: ['Kurumsal eğitimler için bir eğitim platformu. Hazır bir statik ön yüzün arkasına tüm backend’i yazdım ve canlıya aldım: herkese açık site, öğrenci paneli ve yönetim paneli.',
             'Asıl istek kesintisizlikti. Önceki site sürekli çöküyordu; bu yüzden sistem küçük ve öngörülebilir tutuldu: tek Node servisi, tek veritabanı, sunucuda tutulan oturumlar ve yeniden başlatmayla sınanmış bir kurulum.']
      },
      one: {
        en: ['Argon2id passwords, server-side sessions with hashed tokens, role-based panels', 'PDF certificates with QR verification, file uploads, email and SMS reminders', 'Spam-protected forms and live-class links'],
        tr: ['Argon2id parolalar, özetlenmiş token’lı sunucu oturumları, rol tabanlı paneller', 'QR doğrulamalı PDF sertifikalar, dosya yükleme, e-posta ve SMS hatırlatmaları', 'Spam korumalı formlar ve canlı ders bağlantıları']
      },
      gorsel: [
        [P + 'ekt-1.jpg', { en: 'Home page.', tr: 'Ana sayfa.' }],
        [P + 'ekt-2.jpg', { en: 'Training catalogue, served from the API.', tr: 'API’den gelen eğitim kataloğu.' }],
        [P + 'ekt-3.jpg', { en: 'Programme detail page.', tr: 'Program detay sayfası.' }]
      ],
      teknik: [
        [{ en: 'Backend', tr: 'Backend' }, 'Node 22, Express 5, Prisma'],
        [{ en: 'Data', tr: 'Veri' }, 'PostgreSQL 16'],
        [{ en: 'Server', tr: 'Sunucu' }, 'AWS Lightsail (Frankfurt), nginx, pm2'],
        [{ en: 'Security', tr: 'Güvenlik' }, 'Argon2id, CSRF protection, rate limiting']
      ],
      link: 'https://ektakademi.com'
    },

    animerank: {
      ad: 'AnimeRank',
      ust: { en: 'Video platform · Early access', tr: 'Video platformu · Erken erişim' },
      metin: {
        en: ['A video platform for anime: searchable catalogue, season calendar, cross-device watch progress, multi-language subtitles and a community layer.',
             'I designed and built AnimeRank end to end, from the interface to the servers. Episodes are transcoded to browser-friendly H.264, subtitle timing is measured against speech in the audio, and delivery combines peer-to-peer with dedicated media servers.'],
        tr: ['Anime için bir video platformu: aranabilir katalog, sezon takvimi, cihazlar arası izleme takibi, çok dilli altyazı ve topluluk özellikleri.',
             'AnimeRank’i arayüzden sunuculara kadar uçtan uca tasarlayıp geliştirdim. Bölümler tarayıcı dostu H.264’e dönüştürülür, altyazı zamanlaması sesteki konuşmaya göre ölçülür, dağıtım ise P2P ile medya sunucularını birlikte kullanır.']
      },
      one: {
        en: ['Subtitle sync checker that measures offsets against speech in the audio', 'Zero-downtime deployments and a watchdog that throttles background jobs when playback slows', '49 Jest suites on the backend'],
        tr: ['Altyazı kaymasını sesteki konuşmaya göre ölçen senkron denetleyicisi', 'Kesintisiz dağıtım ve oynatma yavaşlayınca arka plan işlerini kısan bir bekçi', 'Backend’de 49 Jest test grubu']
      },
      gorsel: [
        [P + 'animerank-2.jpg', { en: 'Anime library: 2,465 titles merged from Jikan, AniList and Kitsu, with search, sort, format, genre and year filters.', tr: 'Anime Kütüphanesi: Jikan, AniList ve Kitsu’dan birleştirilen 2.465 yapım; arama, sıralama, format, tür ve yıl filtreleri.' }],
        [P + 'animerank-3.jpg', { en: 'Series page episode list: thumbnail grid with episode titles and air dates.', tr: 'Dizi sayfasındaki bölüm listesi: küçük görseller, bölüm adları ve yayın tarihleriyle ızgara.' }],
        [P + 'animerank-4.jpg', { en: 'Membership page: 5-day free trial, monthly / 3-month / yearly toggle and Starter, Ultra and lifetime Legendary plans.', tr: 'Üyelik sayfası: 5 gün ücretsiz deneme, aylık / 3 aylık / yıllık seçimi ve Başlangıç, Ultra ile ömür boyu Legendary paketleri.' }],
        [P + 'animerank-1.jpg', { en: 'Home page: full-bleed hero for Frieren with rating, year, episode count and Watch / Details actions.', tr: 'Ana sayfa: puan, yıl, bölüm sayısı ve İzle / Detay düğmeleriyle tam genişlikte Frieren vitrini.' }]
      ],
      teknik: [
        [{ en: 'Front end', tr: 'Ön yüz' }, 'Design system, responsive player UI'],
        [{ en: 'Backend', tr: 'Backend' }, 'Node.js, Express, MongoDB'],
        [{ en: 'Media', tr: 'Medya' }, 'ffmpeg, H.264 / HEVC, WebRTC P2P, nginx'],
        [{ en: 'Subtitles', tr: 'Altyazı' }, 'VTT / ASS, VAD-based sync measurement'],
        [{ en: 'Quality', tr: 'Kalite' }, 'Jest, zero-downtime deploys']
      ],
      link: 'https://animerank.tv'
    },

    kurenai: {
      ad: 'Kurenai',
      ust: { en: 'AI translation service · Live', tr: 'Yapay zekâ çeviri servisi · Canlı' },
      metin: {
        en: ['Kurenai produces anime subtitles as .ass files without touching the video. Audio timing comes from WhisperX, on-screen text from OCR, and the translation keeps cultural context across eight languages.',
             'It runs as an API with a desktop client, a subtitle cache that P2P players can query by magnet hash, and fingerprint matching to recognise an episode from its audio.'],
        tr: ['Kurenai, videoya dokunmadan anime altyazılarını .ass dosyası olarak üretir. Ses zamanlaması WhisperX’ten, ekran yazıları OCR’dan gelir; çeviri sekiz dilde kültürel bağlamı korur.',
             'Masaüstü istemcisi olan bir API olarak çalışır; P2P oynatıcıların magnet özetiyle sorgulayabildiği bir altyazı önbelleği ve bölümü sesinden tanıyan parmak izi eşleştirmesi vardır.']
      },
      one: {
        en: ['Swappable service layer for speech, OCR and translation providers', 'Hardened API behind a reverse proxy with per-client rate limits', 'Pilot runbook and production-readiness checklist'],
        tr: ['Konuşma, OCR ve çeviri sağlayıcıları için değiştirilebilir servis katmanı', 'Ters vekil arkasında, istemci bazlı hız sınırlı güçlendirilmiş API', 'Pilot işletim rehberi ve canlıya hazırlık kontrol listesi']
      },
      gorsel: [
        [P + 'kurenai-1.jpg', { en: 'Landing hero: “the subtitle translation bot that sees anime”, with a typeset frame preview and a quality-score card (87).', tr: 'Giriş bölümü: “Anime’yi gören altyazı çeviri botu”, dizilmiş kare önizlemesi ve kalite skoru kartı (87).' }],
        [P + 'kurenai-3.jpg', { en: 'Developer API section: Python SDK snippet that sends a frame and gets back an .ass file with a COMET quality score.', tr: 'Geliştirici API bölümü: bir kare gönderip COMET kalite skoruyla .ass dosyası alan Python SDK örneği.' }],
        [P + 'kurenai-2.jpg', { en: 'Before / after slider: the original Japanese station sign next to the engine’s Turkish sign replacement in perspective.', tr: 'Önce / sonra kaydırıcısı: orijinal Japonca istasyon tabelası ve motorun perspektife oturttuğu Türkçe tabela.' }]
      ],
      teknik: [
        [{ en: 'Backend', tr: 'Backend' }, 'Python, FastAPI, SQLAlchemy, Alembic'],
        [{ en: 'AI', tr: 'Yapay zekâ' }, 'WhisperX, OCR, LLM translation, Chromaprint'],
        [{ en: 'Data', tr: 'Veri' }, 'PostgreSQL'],
        [{ en: 'Delivery', tr: 'Yayına alma' }, 'Docker Compose, Caddy, PyInstaller desktop client']
      ],
      link: 'https://kurenai.shop'
    },

    cakmakpen: {
      ad: 'Çakmak Pen',
      ust: { en: 'Client project · Live', tr: 'Müşteri projesi · Canlı' },
      metin: {
        en: ['A corporate site for a glass-balcony and joinery company in Tirebolu. Built from scratch as a static multi-page site with no build step, so the client can host it anywhere and it stays fast.',
             'Design tokens come from the brand guide, contrast is measured against WCAG, and every page carries structured data for search engines.'],
        tr: ['Tirebolu’daki bir cam balkon ve doğrama firması için kurumsal site. Build adımı olmayan statik çok sayfalı bir yapı olarak sıfırdan yazıldı; böylece her yerde barındırılabiliyor ve hızlı kalıyor.',
             'Tasarım değişkenleri marka kılavuzundan geliyor, kontrast WCAG’ye göre ölçüldü ve her sayfa arama motorları için yapılandırılmış veri taşıyor.']
      },
      one: {
        en: ['23 pages, all returning 200, with a rotating hero gallery', 'Six security headers, HTTPS only, TLS 1.2 minimum', 'JSON-LD, sitemap and llms.txt'],
        tr: ['23 sayfa, hepsi 200 dönüyor; dönen hero galerisi', 'Altı güvenlik başlığı, yalnız HTTPS, en az TLS 1.2', 'JSON-LD, site haritası ve llms.txt']
      },
      gorsel: [
        [P + 'cakmakpen-1.jpg', { en: 'Home page.', tr: 'Ana sayfa.' }],
        [P + 'cakmakpen-2.jpg', { en: 'Gallery with category filters.', tr: 'Kategori filtreli galeri.' }],
        [P + 'cakmakpen-3.jpg', { en: 'Service page: glass balcony.', tr: 'Hizmet sayfası: cam balkon.' }]
      ],
      teknik: [
        [{ en: 'Front end', tr: 'Ön yüz' }, 'HTML, CSS, JavaScript (no build step)'],
        [{ en: 'Hosting', tr: 'Barındırma' }, 'Cloudflare Pages'],
        [{ en: 'SEO', tr: 'SEO' }, 'JSON-LD, sitemap, llms.txt'],
        [{ en: 'Quality', tr: 'Kalite' }, 'WCAG contrast checks, security headers']
      ],
      link: 'https://cakmakpen.com.tr'
    },

    repchat: {
      ad: 'RepChat',
      ust: { en: 'Live support · In use', tr: 'Canlı destek · Kullanımda' },
      metin: {
        en: ['An embeddable live-support widget with an operator panel. The widget is a 5 KB loader that opens an isolated iframe UI, so it cannot clash with the host site’s styles or scripts.',
             'Conversations move through a clear state machine: new, claimed atomically by one operator, resolved with a required note, closed. Operators see a visitor card with the live page, device and history.'],
        tr: ['Operatör paneliyle birlikte gelen, sitelere gömülebilir bir canlı destek widget’ı. Widget, yalıtılmış bir iframe arayüzü açan 5 KB’lık bir yükleyicidir; bu yüzden barındıran sitenin stil ve betikleriyle çakışmaz.',
             'Konuşmalar net bir durum makinesinden geçer: yeni, tek bir operatörce atomik olarak üstlenilmiş, zorunlu notla çözülmüş, kapalı. Operatörler canlı sayfayı, cihazı ve geçmişi gösteren bir ziyaretçi kartı görür.']
      },
      one: {
        en: ['Domain-locked public widget keys, separate from panel secrets', 'Spam and ban controls, file attachments with a whitelist', 'End-to-end test suite covering the full flow'],
        tr: ['Panel anahtarlarından ayrı, alan adına kilitli herkese açık widget anahtarları', 'Spam ve engelleme kontrolleri, beyaz listeli dosya ekleri', 'Tüm akışı kapsayan uçtan uca test paketi']
      },
      gorsel: [
        [P + 'repchat-1.jpg', { en: 'Support widget open on a desktop site: user message, auto-created ticket card and an operator reply.', tr: 'Masaüstü sitede açık destek penceresi: kullanıcı mesajı, otomatik açılan talep kartı ve yetkili yanıtı.' }],
        [[P + 'repchat-2.jpg', P + 'repchat-3.jpg'], { en: 'Mobile widget, steps 1 and 3: topic picker (account, membership and payment, codes, content request, partnership, feedback), then a 6-digit email code in the dark theme before the ticket is created.', tr: 'Mobil pencere, 1. ve 3. adım: konu seçimi (hesap, üyelik ve ödeme, kodlar, içerik talebi, iş birliği, öneri), ardından koyu temada talep açılmadan önce 6 haneli e-posta kodu.' }],
        [P + 'repchat-4.jpg', { en: 'Operator panel inbox (dark): ticket list with Legendary priority tags, live conversation and user details with per-user file permissions.', tr: 'Yetkili paneli gelen kutusu (koyu): Legendary öncelik etiketli talep listesi, canlı sohbet ve kullanıcıya özel dosya izinleriyle kullanıcı bilgileri.' }],
        [P + 'repchat-5.jpg', { en: 'Operator panel (light): restrict-support dialog with reason, scope, duration presets and a note to the user.', tr: 'Yetkili paneli (açık): gerekçe, kapsam, süre seçenekleri ve kullanıcıya not içeren destek kısıtlama penceresi.' }],
        [P + 'repchat-6.jpg', { en: 'Widget priority support: a Legendary member’s ticket goes to the front of the queue with an estimated 5-minute reply.', tr: 'Pencerede öncelikli destek: Legendary üyenin talebi sıranın önüne alınır, tahmini yanıt süresi 5 dakika.' }]
      ],
      teknik: [
        [{ en: 'Realtime', tr: 'Gerçek zamanlı' }, 'Node.js, Express, Socket.IO, Redis adapter'],
        [{ en: 'Data', tr: 'Veri' }, 'MongoDB'],
        [{ en: 'Widget', tr: 'Widget' }, 'Preact in an iframe, 5 KB loader'],
        [{ en: 'Panel', tr: 'Panel' }, 'React, Vite']
      ],
      link: null
    },

    baldefteri: {
      ad: 'Bal Defteri',
      ust: { en: 'Client project · In development', tr: 'Müşteri projesi · Geliştiriliyor' },
      metin: {
        en: ['An e-commerce site for a honey brand, server-rendered on the edge. Orders are protected by Turnstile, payments go through PayTR, and order, status and password emails are sent automatically.',
             'Development uses a local emulation of the database and storage, so testing never touches production data. Work is planned in phases in a written roadmap and merged through CI.'],
        tr: ['Bir bal markası için kenar sunucularda işlenen bir e-ticaret sitesi. Siparişler Turnstile ile korunur, ödemeler PayTR üzerinden alınır; sipariş, durum ve parola e-postaları otomatik gönderilir.',
             'Geliştirmede veritabanı ve depolamanın yerel bir benzetimi kullanılır; testler canlı veriye hiç dokunmaz. İş, yazılı bir yol haritasında fazlara bölünür ve CI üzerinden birleştirilir.']
      },
      one: {
        en: ['Nonce-based content security policy', 'Shipment tracking and legal compliance pages', 'Typecheck, lint, test and build in CI on every pull request'],
        tr: ['Nonce tabanlı içerik güvenliği politikası', 'Kargo takibi ve yasal uyum sayfaları', 'Her pull request’te CI’da tip denetimi, lint, test ve build']
      },
      gorsel: [],
      teknik: [
        [{ en: 'App', tr: 'Uygulama' }, 'TanStack Start (SSR), TanStack Router'],
        [{ en: 'Platform', tr: 'Platform' }, 'Cloudflare Workers, D1, KV, Turnstile'],
        [{ en: 'Payments', tr: 'Ödeme' }, 'PayTR'],
        [{ en: 'Quality', tr: 'Kalite' }, 'GitHub Actions CI']
      ],
      link: null
    }
  };

  var UI = {
    en: { one: 'Highlights', teknik: 'Technical stack', ziyaret: 'Visit site', ozel: 'Private repository', kapat: 'Close', onceki: 'Previous image', sonraki: 'Next image' },
    tr: { one: 'Öne çıkanlar', teknik: 'Teknik altyapı', ziyaret: 'Siteyi ziyaret et', ozel: 'Özel depo', kapat: 'Kapat', onceki: 'Önceki görsel', sonraki: 'Sonraki görsel' }
  };

  /* ---------------- detail dialog ---------------- */
  var dlg = document.getElementById('pd');
  var $ = function (id) { return document.getElementById(id); };
  var acik = null, sira = 0, sonOdak = null;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var srcs = function (g) { return [].concat(g[0]); };
  var portreler = { 'repchat-2.jpg': 1, 'repchat-3.jpg': 1, 'repchat-6.jpg': 1, 'asfalya-6.jpg': 1 };
  var dikMi = function (src) { return !!portreler[src.split('/').pop()]; };

  function gorselGoster(i, ilk) {
    var g = PROJE[acik].gorsel; if (!g.length) return;
    sira = (i + g.length) % g.length;
    var kutu = $('pd-imgs'), sahne = $('pd-stage'), cur = g[sira], liste = srcs(cur);
    var yaz = function () {
      sahne.classList.toggle('pd__stage--tall', dikMi(liste[0]));
      sahne.classList.toggle('pd__stage--pair', liste.length > 1);
      kutu.innerHTML = liste.map(function (src, k) { return '<img src="' + src + '" alt="' + esc(k ? '' : cur[1][dil()]) + '" decoding="async">'; }).join('');
      $('pd-cap').innerHTML = '<b>' + (sira + 1) + ' / ' + g.length + '</b>' + esc(cur[1][dil()]);
      kutu.classList.remove('is-swap');
    };
    if (ilk) yaz(); else { kutu.classList.add('is-swap'); setTimeout(yaz, 160); }
    $('pd-thumbs').querySelectorAll('button').forEach(function (b, k) { b.setAttribute('aria-current', String(k === sira)); });
  }

  function doldur() {
    var p = PROJE[acik], l = dil(), u = UI[l];
    $('pd-kicker').textContent = p.ust[l];
    $('pd-title').textContent = p.ad;
    dlg.querySelector('.pd__close').setAttribute('aria-label', u.kapat);
    dlg.querySelector('.pd__nav--p').setAttribute('aria-label', u.onceki);
    dlg.querySelector('.pd__nav--n').setAttribute('aria-label', u.sonraki);
    $('pd-text').innerHTML = p.metin[l].map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
      '<h3 class="mono">' + u.one + '</h3><ul class="bullets">' + p.one[l].map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
    $('pd-tech-h').textContent = u.teknik;
    $('pd-tech').innerHTML = p.teknik.map(function (t) { return '<div><dt>' + esc(t[0][l]) + '</dt><dd>' + esc(t[1]) + '</dd></div>'; }).join('');
    $('pd-link').innerHTML = p.link
      ? '<a class="pd__btn glow" href="' + p.link + '" target="_blank" rel="noopener">' + u.ziyaret + ' ↗</a><span class="mono">' + esc(p.link.replace('https://', '')) + '</span>'
      : '<span class="mono pd__ozel">' + u.ozel + '</span>';
    var gal = $('pd-gal');
    gal.hidden = !p.gorsel.length;
    gal.classList.toggle('is-tek', p.gorsel.length < 2);
    $('pd-thumbs').innerHTML = p.gorsel.map(function (g, k) {
      return '<button type="button" data-k="' + k + '" aria-label="' + esc(g[1][l]) + '"><img src="' + srcs(g)[0] + '" alt="" loading="lazy"></button>';
    }).join('');
    if (p.gorsel.length) gorselGoster(sira, true);
  }

  function ac(id) {
    if (!PROJE[id] || !dlg) return;
    sonOdak = document.activeElement;
    acik = id; sira = 0; doldur();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    var kaynak = document.querySelector('[data-proje="' + id + '"]'), ic = dlg.querySelector('.pd__in');
    if (kaynak && ic) {
      var a = kaynak.getBoundingClientRect(), b = ic.getBoundingClientRect();
      ic.style.setProperty('--ox', Math.round(a.left + a.width / 2 - b.left) + 'px');
      ic.style.setProperty('--oy', Math.round(a.top + a.height / 2 - b.top) + 'px');
    }
    root.classList.add('pd-acik');
    dlg.querySelector('.pd__in').scrollTop = 0;
  }
  function kapat() {
    if (!dlg.open) return;
    dlg.classList.add('is-closing');
    setTimeout(function () {
      dlg.classList.remove('is-closing'); dlg.close(); root.classList.remove('pd-acik'); acik = null;
      if (sonOdak && sonOdak.focus) sonOdak.focus();
    }, 260);
  }

  // Hero plane: each screen opens its project.
  document.querySelectorAll('[data-open]').forEach(function (el) {
    el.addEventListener('click', function () { ac(el.getAttribute('data-open')); });
  });
  document.querySelectorAll('[data-proje]').forEach(function (el) {
    el.classList.add('is-acilir');
    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;            // external links open normally
      ac(el.getAttribute('data-proje'));
    });
  });
  if (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target.closest('[data-pd-close]')) kapat();
      var n = e.target.closest('[data-pd-nav]'); if (n) gorselGoster(sira + Number(n.getAttribute('data-pd-nav')));
      var t = e.target.closest('[data-k]'); if (t) gorselGoster(Number(t.getAttribute('data-k')));
    });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); kapat(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') gorselGoster(sira + 1);
      if (e.key === 'ArrowLeft') gorselGoster(sira - 1);
    });
    // Swipe between images on touch screens.
    var sx = null, sy = 0, sahne = $('pd-stage');
    sahne.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') { sx = e.clientX; sy = e.clientY; } });
    sahne.addEventListener('pointerup', function (e) {
      if (sx == null) return;
      var dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) gorselGoster(sira + (dx < 0 ? 1 : -1));
    });
    sahne.addEventListener('pointercancel', function () { sx = null; });
  }
  document.addEventListener('dil', function () { if (acik) doldur(); });

  /* ---------------- Asfalya damage lens ---------------- */
  // Boxes measured on the 1280×720 model output frames (x, y, w, h in px).
  var W8 = P + 'w/';
  var TESPIT = [
    { src: W8 + 'asfalya-1-1280.webp', x: 515, y: 553, w: 190, h: 149, sinif: { en: 'Alligator crack', tr: 'Timsah sırtı çatlak' }, guven: '0.72', ap: '0.715' },
    { src: W8 + 'asfalya-2-1280.webp', x: 566, y: 585, w: 44, h: 128, sinif: { en: 'Longitudinal crack', tr: 'Boyuna çatlak' }, guven: '0.50', ap: '0.598' },
    { src: W8 + 'asfalya-2-1280.webp', x: 442, y: 532, w: 233, h: 56, sinif: { en: 'Transverse crack', tr: 'Enine çatlak' }, guven: '0.35', ap: '0.538' }
  ];
  var lens = $('lens');
  if (lens) {
    var img = lens.querySelector('img'), kutu = lens.querySelector('.lens__box'), zoom = lens.querySelector('.lens__zoom');
    var dd = lens.querySelectorAll('.lens__data dd');
    var ti = 0, dongu = null, hazir = false, yuklendi = false;
    // Load the second frame only once someone reaches for the lens.
    var onYukle = function () { if (yuklendi) return; yuklendi = true; TESPIT.forEach(function (t) { var i = new Image(); i.src = t.src; }); };

    var yerlestir = function () {
      var t = TESPIT[ti], W = 1280, H = 720;
      if (img.getAttribute('src') !== t.src) { img.removeAttribute('srcset'); img.setAttribute('src', t.src); }
      // Panel sits on the side away from the box.
      lens.classList.toggle('is-sag', (t.x + t.w / 2) / W < 0.5);
      kutu.style.setProperty('--x', (t.x / W * 100) + '%');
      kutu.style.setProperty('--y', (t.y / H * 100) + '%');
      kutu.style.setProperty('--w', (t.w / W * 100) + '%');
      kutu.style.setProperty('--h', (t.h / H * 100) + '%');
      // Zoom window: the box plus a margin, centred, scaled to fill the panel (pixel maths, panel keeps its size while hidden).
      var pw = zoom.clientWidth || 200, ph = zoom.clientHeight || 125;
      var pad = 0.35, zw = t.w * (1 + 2 * pad), zh = t.h * (1 + 2 * pad);
      var sw = Math.max(zw, zh * pw / ph), sh = sw * ph / pw, k = pw / sw;
      var sx = Math.min(Math.max(t.x + t.w / 2 - sw / 2, 0), W - sw), sy = Math.min(Math.max(t.y + t.h / 2 - sh / 2, 0), H - sh);
      zoom.style.backgroundImage = 'url(' + t.src + ')';
      zoom.style.backgroundSize = (W * k) + 'px ' + (H * k) + 'px';
      zoom.style.backgroundPosition = (-sx * k) + 'px ' + (-sy * k) + 'px';
      dd[0].textContent = t.sinif[dil()]; dd[1].textContent = t.guven;
      dd[2].textContent = t.w + ' × ' + t.h + ' px'; dd[3].textContent = t.ap;
    };
    var basla = function () {
      if (hazir) return; hazir = true; onYukle();
      ti = 0; yerlestir(); lens.classList.add('is-on');
      dongu = setInterval(function () { ti = (ti + 1) % TESPIT.length; lens.classList.add('is-next'); setTimeout(function () { yerlestir(); lens.classList.remove('is-next'); }, 260); }, 2800);
    };
    var bitir = function () {
      hazir = false; clearInterval(dongu); lens.classList.remove('is-on');
      setTimeout(function () { if (!hazir) { ti = 0; img.setAttribute('src', TESPIT[0].src); } }, 400);
    };
    lens.addEventListener('mouseenter', basla);
    lens.addEventListener('mouseleave', bitir);
    lens.addEventListener('focus', basla);
    lens.addEventListener('blur', bitir);
    lens.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); var c = lens.closest('[data-proje]'); if (c) ac(c.getAttribute('data-proje')); }
    });
    // Touch: the first tap opens the lens, the next tap opens the project.
    var dokunusAcildi = false;
    lens.addEventListener('touchstart', function () { if (!hazir) { basla(); dokunusAcildi = true; } }, { passive: true });
    lens.addEventListener('click', function (e) { if (dokunusAcildi) { dokunusAcildi = false; e.stopPropagation(); } });
    document.addEventListener('dil', function () { if (hazir) yerlestir(); });
  }
})();
