(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n: English lives in the HTML, Turkish here ---------------- */
  var TR = {
    'skip': 'İçeriğe geç',
    'nav.work': 'Projeler', 'nav.skills': 'Yetenekler', 'nav.experience': 'Deneyim', 'nav.open': 'Açık kaynak',
    'nav.contrib': 'Katkılar', 'nav.contact': 'İletişim', 'nav.menu': 'Menü',

    'hero.eyebrow': 'Backend geliştirici · Eskişehir',
    'hero.pre': '', 'hero.post': 'kuruyor',
    'hero.lead': 'Canlıda ayakta kalan backend sistemleri, kamera görüntüsünü haritaya dönüştüren görüntü işleme hatları ve C++ ile oyun sistemleri geliştiriyorum. Canlıdaki işlerim arasında bir eğitim platformu, kurumsal siteler ve bir video platformu var.',
    'hero.cta1': 'Seçili projeler', 'hero.cta2': 'CV indir',
    'rec.role': 'Odak', 'rec.role.v': 'Backend, yapay zekâ ve oyun',
    'rec.edu': 'Eğitim', 'rec.edu.v': 'Anadolu Üniversitesi',
    'rec.lang': 'Diller', 'rec.lang.v': 'Türkçe, İngilizce',
    'rec.os': 'Açık kaynak', 'rec.os.v': 'Aegis’te 1.765 test',

    'hs.as': 'mAP@0.5 0,632', 'hs.wf': 'UE5 · M0, 34/34 test', 'hs.ekt': 'Ağustos 2026’dan beri canlı',
    'hs.a1': 'Asfalya projesini aç', 'hs.a2': 'Warden of the Fields projesini aç', 'hs.a3': 'EKT Akademi projesini aç',
    'a.home': 'Bedirhan Çetin, başa dön', 'a.nav': 'Ana menü', 'a.lang': 'Dil',
    'a.lens': 'Tespit edilen yol hasarı. Asfalya’yı açmak için Enter’a basın.',
    'alt.lens': 'Sınırlayıcı kutu içinde tespit edilmiş timsah sırtı çatlak bulunan yol fotoğrafı',
    'alt.wf': 'Warden of the Fields: köy meydanında çalışan bir köylü',

    'work.h': 'Seçili projeler', 'work.sub': 'Üç proje, ayrıntılı. Ekranlar ve teknik altyapı için birini açın.', 'work.more': 'Diğer işler',
    'lz.cls': 'Sınıf', 'lz.cls.v': 'Timsah sırtı çatlak', 'lz.conf': 'Güven', 'lz.box': 'Kutu', 'lz.map': 'Sınıf AP@0.5', 'lz.hint': 'İncelemek için üzerine gelin', 'lz.hintT': 'İncelemek için dokunun',
    'as.tag': 'Otobüslere takılan kameralarla yol hasarı tespiti.', 'as.baum': 'BAUM staj projesi',
    'as.cap': 'Mapillary karesinde Asfalya model çıktısı (CC BY-SA). Mercek üç tespit arasında döner.',
    'pl.t': 'Gece çalışan işleme hattı',
    'pl.1': 'Kayıt', 'pl.1v': 'otobüs kamerası · GPS',
    'pl.2': 'Yüz ve plaka bulanıklaştırma', 'pl.2v': 'zorunlu',
    'pl.3': 'Tespit', 'pl.3v': 'YOLO · 5 sınıf',
    'pl.4': 'Harita eşleme', 'pl.4v': 'OSM sokakları',
    'pl.5': 'Birleştir ve puanla', 'pl.5v': '7.704 → izlenen kayıt',
    'pl.res': 'mAP@0.5 0,632 · çok geçiş %87,1',
    'st.det': 'tespit', 'st.mp': 'çok geçişli yakalama',
    'wf.tag': 'Unreal Engine 5 ve C++ ile açık dünya hayatta kalma oyunu.',
    'wf.ms': '34/34 otomasyon testi · 606 Fab paketi envanterde',
    'wf.prog': 'Kilometre taşı 0 / 12 · tamam',
    'wf.c1': 'Çekirdek', 'wf.c2': 'Karakter', 'wf.c3': 'Hayatta kalma', 'wf.c4': 'İnşa', 'wf.c5': 'Dünya',
    'ekt.tag': '20 Ağustos 2026’dan beri canlı eğitim platformu.',
    'ekt.v1': 'Doğrulanıyor…', 'ekt.v2': 'Doğrulandı',
    'ekt.f1': 'Argon2id parolalar, özetlenmiş token’lı sunucu oturumları',
    'ekt.f2': 'QR doğrulamalı PDF sertifikalar',
    'ekt.f3': 'E-posta ve SMS hatırlatmaları',
    'ar.p': 'Aranabilir katalog, sezon takvimi, çok dilli altyazı ve hibrit P2P + sunucu oynatıcısı olan anime video platformu.',
    'ar.sync': 'konuşmaya göre ölçüldü',
    'ku.p': 'Anime altyazı çeviri servisi. Videoya dokunmadan .ass altyazı üretir: ses zamanlaması, ekran yazılarının OCR’ı ve sekiz dilde bağlamı koruyan çeviri.',
    'ku.c8': '8 dil', 'ku.c1': 'WhisperX zamanlama', 'ku.c4': '.ass çıktı',
    'cp.p': 'Cam balkon ve doğrama firması için kurumsal site: build adımı olmayan 23 statik sayfa, marka kılavuzundan tasarım değişkenleri, ölçülmüş WCAG kontrastı ve JSON-LD.',
    'cp.chk': '/ 23 sayfa · 200',
    'rc.p': 'Konuşmayı merkeze alan canlı destek: Express ve Socket.IO geçidi, iframe arayüzlü 5 KB’lık widget yükleyici, ziyaretçi kartlı operatör gelen kutusu ve uçtan uca testler.',
    'rc.yer': 'Destek masası, canlıda',
    'rc.inbox': 'Yetkili gelen kutusu', 'rc.s1': 'Konu seçimi', 'rc.s2': 'E-posta kodu', 'rc.s3': 'Öncelik kartı',
    'bd.p': 'TanStack Start ve Cloudflare D1 ile KV üzerinde bal e-ticaret sitesi: Turnstile, kartla ödeme ve canlı veriye hiç dokunmayan yerel geliştirme akışı.',
    'bd.yer': 'Müşteri projesi', 'bd.mail': 'Sipariş e-postası', 'bd.t': 'Ödeme akışı',
    'bd.f1': 'Turnstile denetimi', 'bd.f1v': 'sipariş formu korundu', 'bd.f2': 'PayTR ödemesi', 'bd.f2v': 'kartla ödeme · onaylandı', 'bd.f3v': 'otomatik gönderildi',
    'more.gh': 'Tüm kaynak kod GitHub’da',
    's.live': 'Canlı', 's.dev': 'Geliştiriliyor', 's.pre': 'Erken erişim', 's.use': 'Kullanımda', 's.sim': 'Yalnızca simülasyon',

    'sk.h': 'Yetenekler',
    'sk1': 'Backend geliştirme', 'sk2': 'Yapay zekâ ve görüntü', 'sk3': 'Oyun geliştirme',
    'sk4': 'Veri ve önbellekleme', 'sk5': 'Medya hatları', 'sk6': 'Yayına alma',
    'sk.lang': 'Diller', 'sk.back': 'Backend', 'sk.data': 'Veri', 'sk.ai': 'Yapay zekâ', 'sk.game': 'Oyun',
    'sk.dist': 'Medya', 'sk.ops': 'Yayına alma', 'sk.front': 'Ön yüz', 'sk.int': 'Entegrasyonlar',
    'sk.back.v': 'Node.js, Express, FastAPI, REST, GraphQL, Socket.IO, mikroservisler',
    'sk.ai.v': 'YOLO eğitimi ve değerlendirmesi, OpenCV, GPS harita eşleme, WhisperX, OCR, LLM entegrasyonu, Model Context Protocol',
    'sk.game.v': 'Unreal Engine 5, C++, Gameplay Framework, veri odaklı sistemler, UE otomasyon testleri, Python ile editör betikleri',
    'sk.dist.v': 'ffmpeg, H.264 / HEVC dönüştürme, HLS, WebRTC P2P dağıtım, altyazı zamanlama',
    'sk.front.v': 'HTML ve CSS tasarım sistemleri, WebGL, TanStack Start, Svelte, Preact, MapLibre GL',
    'sk.int.v': 'Google Ads API, Meta Marketing API, CAMARA / Nokia Network-as-Code, PayTR, SMTP ve SMS ağ geçitleri',

    'wd.h': 'Ne yapıyorum',
    'wd1.h': 'Backend ve API’ler', 'wd1.p': 'Node.js ve Python servisleri, REST ve GraphQL API’leri; PostgreSQL, MongoDB ve Redis. Sorgular hızlanana ve sunucular yük altında sakin kalana kadar ayarlanır.',
    'wd2.h': 'Yapay zekâ ve görüntü işleme', 'wd2.p': 'YOLO hatları, GPS harita eşleme, konuşma zamanlaması, OCR ve LLM araçları; gizlilik kuralları kodda uygulanır.',
    'wd3.h': 'Oyun ve gerçek zamanlı sistemler', 'wd3.p': 'Unreal Engine 5 ve C++ ile oyun sistemleri; veri odaklı kurulur ve ilk kilometre taşından itibaren otomasyon testleriyle korunur.',

    'pr.h': 'Nasıl çalışırım',
    'pr.lead': 'Kurduğum her sistemde bir şeye güvenilmesi gereken bir an vardır: bir ajanın onayı, bir kamera karesi, bir ödeme. Önce o anı tasarlarım ve hâlâ bitmemiş olanı yazıya dökerim.',
    'sw.label': 'Ajan “onaylandı” diyor',
    'sw.held': 'İstek bekletiliyor · sunucu doğrulamalı onay bekleniyor',
    'sw.flag': 'onay bayrağı: true → yok sayıldı',
    'sw.cap': 'Onayı sunucunun kendisi denetler.',
    't1.h': 'Onayı sunucu doğrular.', 't1.p': 'Onay, sunucu tarafında doğrulanan bir olgudur. Her harcama yolu önce ağa sorar.',
    't2.h': 'Bilinmeyen, dur demektir.', 't2.p': 'Eksik token, sessiz bir uç nokta ya da okunamayan bir yanıt retle sonuçlanır. Kapı yalnızca görebildiğinde açılır.',
    't3.h': 'Kurallar kodda yaşar.', 't3.p': 'Unutulabilecek bir gizlilik kuralı unutulur. Asfalya maskelenmemiş her karede istisna fırlatır.',
    't4.h': 'Bitmeyeni söyle.', 't4.p': 'Her depoda açık maddeleriyle bir durum tablosu bulunur: tutturulamamış bir duyarlılık hedefi, yalnızca simülasyonda çalışan bir bağlantı, hâlâ boş duran bir yasal izin klasörü.',

    'ex.h': 'Deneyim',
    'ex1.when': '2024 — bugün', 'ex1.h': 'Serbest yazılım geliştirici',
    'ex1.d': 'Müşteriler için ilk satırdan canlıya backend ve web siteleri: EKT Akademi, Çakmak Pen ve Bal Defteri.',
    'ex2.when': 'Temmuz — Ağustos 2026', 'ex2.h': 'Stajyer, BAUM',
    'ex2.d': 'Anadolu Üniversitesi Bilgisayar Araştırma ve Uygulama Merkezi. Yol hasarı tespit sistemi Asfalya’yı geliştirip sundum.',
    'ed.when': '2025 — bugün', 'ed.deg': 'Ön lisans, Arka-Yüz Yazılım Geliştirme.',
    'ex.more': 'Tüm sorumluluklar',
    'ex1.b1': 'EKT Akademi’nin hazır statik ön yüzünün arkasına tüm backend’i yazdım ve AWS üzerinde canlıya aldım.',
    'ex1.b2': 'Çakmak Pen kurumsal sitesini geliştirip Cloudflare Pages üzerinde yayınladım.',
    'ex1.b3': 'REST ve GraphQL API’leri tasarladım; Redis önbelleğiyle sorgu süresini %60 kısalttım.',
    'ex1.b4': 'Docker ve CI/CD hatlarıyla yayına alma süreçlerini otomatikleştirdim.',
    'exa.b1': 'Bir video platformunun tasarımı, ön yüzü, backend’i, medya işleme hattı ve sunucu operasyonları.',
    'exa.b2': 'Birden çok medya sunucusunda kodlama dönüşümü, altyazı senkronizasyonu ve P2P + sunucu dağıtımı.',
    'ex2.b1': '30 iş günü, 6 Temmuz – 17 Ağustos 2026.',
    'ex2.b2': 'YOLO yol hasarı modelini eğitip değerlendirdim; çevresine harita, skor ve raporlama backend’ini kurdum.',
    'ed.h': 'Eğitim',
    'ed.p': 'Backend geliştirme, veritabanı sistemleri, API tasarımı, mikroservis mimarileri ve modern yazılım pratikleri; yukarıdaki projeleri geliştirip yayınlarken birlikte yürüyen bir eğitim.',

    'op.h': 'Açık kaynak', 'op.sub': 'Herkese açık, kodu okuyabilirsiniz.', 'op.src': 'Kaynak', 'op.site': 'Proje sitesi',
    'ag.tag': 'Para harcayan yapay zekâ ajanları için ağ doğrulamalı güven.',
    'ag.p1': 'Gerçek Google Ads ve Meta kampanyalarını sunucu taraflı harcama korumalarının arkasında yürüten bir MCP sunucusu. Bir insana onay sorulmadan önce mobil ağa (GSMA Open Gateway ve CAMARA, Nokia Network-as-Code üzerinden) onaylayan kişinin hattının ele geçirilip geçirilmediğini sorar.',
    'ag.p2': 'Kampanyalar her zaman duraklatılmış olarak oluşturulur, bütçe artışları onaylayanı bekler ve harcama tavanını yalnızca hesap sahibi yükseltebilir. Servisi kullanan herkes kodunu AGPL-3.0 altında okuyabilir.',
    'ag.passed': 'geçti', 'ag.v1': 'satır kapsamı',
    'ag.lic': 'Servisi kullanan herkes kodu okuyabilir',
    'ag.chain': 'Güven zinciri ve dürüstçe nerede durduğu',
    'ag.th1': 'Sinyal', 'ag.th2': 'Yanıtladığı soru', 'ag.th3': 'Durum',
    'c1': 'Onaylayanın hattı yakın zamanda ele geçirildi mi?', 'c2': 'Onay, sahibin kendi cihazından mı geliyor?',
    'c3': 'Hat şu an veri ya da SMS alabiliyor mu?', 'c4': 'Hat beklenen ülkede mi?',
    'c5': 'Hat yeni bir cihaza taşındı mı?', 'c6': 'Koşulsuz çağrı yönlendirme açık mı?',
    'ag.note': 'Altı bağlantının beşi canlı uç noktalara karşı doğrulandı. Hesap Nokia’nın Simulator modunda çalışıyor: bağlantı kanıtlandı, operatör entegrasyonu ise beklemede. Number Verification, hiçbir backend’in çağıramadığı cihaz taraflı bir OIDC akışıdır.',
    'ap.p': 'Güvenlik kapılı Google Ads yönetimi için açık kaynak MCP sunucusu. Bir yapay zekâ ajanı kampanyaları yönetebilir; her bütçe artışı doğrulanmış bir insan onayını bekler.',
    'ap.budget': 'Günlük bütçe',
    'ap.s1': 'Ajan artış istiyor', 'ap.s1v': '+%50 · kapıda bekletildi',
    'ap.s2': 'Sahibine onay isteği', 'ap.s2v': 'doğrulanmış yanıt bekleniyor',
    'ap.s3': 'Doğrulanmış sahip onayladı', 'ap.s3v': 'sunucuda denetlendi',
    'ap.s4': 'Bütçe uygulandı', 'ap.s4v': '₺750 / gün',

    'cb.h': 'Katkılar', 'cb.sub': 'Başka ekiplerin yönettiği projelere gönderdiğim değişiklikler.',
    'cb.merged': 'Birleştirildi', 'cb.open': 'İncelemede',
    'cb1.p': 'FindInput ve ReplaceInput içinde tekrarlanan ok tuşu ve Escape davranışı artık tek bir ortak yardımcıda; beş yeni birim testiyle korunuyor. #199892 numaralı kaydı kapatıyor.',
    'cb2.p': 'NASA’nın görev kontrol çatısı için bir düzeltme: grafik görünümü, Y ekseni etiketi değiştiği anda etiketi yeniler.',

    'ct.h': 'Ayakta kalan bir şey kuralım.',
    'ct.p': 'Yapay zekâ, büyük veri, medya teknolojileri ve oyun alanlarında uluslararası rekabet edebilecek ölçeklenebilir ürünler geliştirmek istiyorum. Üzerinde çalıştığınız şeyle örtüşüyorsa bana yazın.',
    'ct.cta': 'Bana yazın', 'ct.copy': 'E-postayı kopyala',
    'ct.mail': 'E-posta', 'ct.loc': 'Konum', 'ct.loc.v': 'Eskişehir, Türkiye', 'ct.lang': 'Diller',
    'foot.made': 'Elle yazılmış HTML, CSS ve JS · çatı yok',
    'foot.top': 'Başa dön ↑'
  };
  var EXTRA = {
    en: { copied: 'Copied', copiedLive: 'Email address copied.', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    tr: { copied: 'Kopyalandı', copiedLive: 'E-posta adresi kopyalandı.', toLight: 'Açık temaya geç', toDark: 'Koyu temaya geç' }
  };

  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });
  // Attributes: aria-label, alt and title follow the language too.
  var ATTR = [['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-title', 'title']];
  var attrNodes = [];
  ATTR.forEach(function (a) {
    document.querySelectorAll('[' + a[0] + ']').forEach(function (el) {
      var k = el.getAttribute(a[0]);
      if (EN[k] == null) EN[k] = el.getAttribute(a[1]) || '';
      attrNodes.push([el, k, a[1]]);
    });
  });

  var langBtns = document.querySelectorAll('[data-lang]');
  var ROT = {
    en: ['production backends', 'computer-vision pipelines', 'Unreal Engine games', 'video delivery'],
    tr: ['canlı backend sistemleri', 'görüntü işleme hatları', 'Unreal Engine oyunları', 'video dağıtım altyapısı']
  };
  var lang = function () { return root.getAttribute('lang') === 'tr' ? 'tr' : 'en'; };

  function setLang(l) {
    var dict = l === 'tr' ? TR : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    attrNodes.forEach(function (n) { var v = dict[n[1]] != null ? dict[n[1]] : EN[n[1]]; if (v != null) n[0].setAttribute(n[2], v.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')); });
    root.setAttribute('lang', l);
    langBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l)); });
    document.title = l === 'tr' ? 'Bedirhan Çetin — Backend Geliştirici' : 'Bedirhan Çetin — Backend Developer';
    rotI = 0; rotYaz(false);
    paintTheme();
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('dil', { detail: l }));
  }

  /* ---------------- theme state (meta colour + accessible name) ---------------- */
  function paintTheme() {
    var light = root.getAttribute('data-theme') === 'light';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', light ? '#F3F0EA' : '#0C0B0A');
    var tb = document.getElementById('theme-toggle');
    if (tb) { tb.setAttribute('aria-label', EXTRA[lang()][light ? 'toDark' : 'toLight']); }
  }

  /* ---------------- rotating word in the hero ---------------- */
  var rot = document.getElementById('rot'), rotWrap = document.getElementById('rot-wrap');
  var rotI = 0, rotTimer = 0, rotLive = true;
  function rotWidth() { if (rotWrap && rot) rotWrap.style.width = Math.ceil(rot.getBoundingClientRect().width) + 'px'; }
  // Width of a word in the rotator's font, measured on a hidden clone before the swap.
  var rotProbe = null;
  function rotMeasure(w) {
    if (!rotProbe) { rotProbe = rot.cloneNode(false); rotProbe.removeAttribute('id'); rotProbe.setAttribute('aria-hidden', 'true'); rotProbe.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0;white-space:nowrap'; rotWrap.parentNode.appendChild(rotProbe); }
    rotProbe.textContent = w;
    return Math.ceil(rotProbe.getBoundingClientRect().width);
  }
  function rotYaz(animasyon) {
    if (!rot) return;
    var w = ROT[lang()][rotI % ROT[lang()].length];
    if (!animasyon) { rot.textContent = w; rotWrap.style.width = ''; requestAnimationFrame(rotWidth); return; }
    var next = rotMeasure(w), cur = Math.ceil(rot.getBoundingClientRect().width);
    if (next > cur) rotWrap.style.width = next + 'px';   // grow first, so the new word is never clipped
    rot.classList.add('is-out');
    setTimeout(function () {
      rot.classList.remove('is-out'); rot.classList.add('is-in');
      rot.textContent = w; rotWrap.style.width = next + 'px';
      void rot.offsetWidth;
      rot.classList.remove('is-in');
    }, 220);
  }
  function rotStart() { if (!rotTimer && !reduce) rotTimer = setInterval(function () { if (rotLive && !document.hidden) { rotI++; rotYaz(true); } }, 2800); }
  if (rot && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { rotLive = e[0].isIntersecting; }).observe(document.querySelector('.hero'));
  }
  rotStart();
  addEventListener('resize', function () { rotWrap && (rotWrap.style.width = ''); rotWidth(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { rotWrap.style.width = ''; rotWidth(); });

  langBtns.forEach(function (b) { b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); }); });
  setLang(lang());

  /* ---------------- theme ---------------- */
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintTheme();
    document.dispatchEvent(new CustomEvent('tema', { detail: next }));
  });
  paintTheme();

  /* ---------------- mobile menu ---------------- */
  var menuBtn = document.getElementById('menu-btn'), nav = document.getElementById('navpanel');
  function menu(open) { menuBtn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); }
  menuBtn.addEventListener('click', function () { menu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) menu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { menu(false); menuBtn.focus(); } });

  /* ---------------- active nav link ---------------- */
  var links = document.querySelectorAll('.nav a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          var a = map[e.target.id === 'more' ? 'work' : e.target.id === 'what' ? 'skills' : e.target.id];
          if (a) a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    ['work', 'more', 'skills', 'what', 'experience', 'open', 'contrib', 'contact'].forEach(function (id) {
      var s = document.getElementById(id); if (s) so.observe(s);
    });
  }

  /* ---------------- copy email ---------------- */
  var copyBtn = document.getElementById('copy-mail');
  if (copyBtn) copyBtn.addEventListener('click', function () {
    var mail = copyBtn.getAttribute('data-mail');
    var done = function () {
      var span = copyBtn.querySelector('span');
      span.textContent = EXTRA[lang()].copied;
      document.getElementById('copy-live').textContent = EXTRA[lang()].copiedLive;
      setTimeout(function () { span.innerHTML = (lang() === 'tr' ? TR : EN)['ct.copy']; }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(mail).then(done, function () { location.href = 'mailto:' + mail; });
    else location.href = 'mailto:' + mail;
  });

  /* ---------------- ripple on primary buttons ---------------- */
  if (!reduce) document.querySelectorAll('.btn--primary').forEach(function (b) {
    b.addEventListener('pointerdown', function (e) {
      var r = b.getBoundingClientRect(), s = document.createElement('span');
      s.className = 'ripple'; s.style.left = (e.clientX - r.left) + 'px'; s.style.top = (e.clientY - r.top) + 'px';
      b.appendChild(s); setTimeout(function () { s.remove(); }, 560);
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
