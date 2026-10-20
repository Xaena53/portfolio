(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---------------- i18n (EN is the HTML source, TR below) ---------------- */
  var TR = {
    'nav.contrib': 'Katkılar', 'cb.h': 'Katkılar', 'cb.sub': 'Başka ekiplerin yönettiği projelere gönderdiğim değişiklikler.',
    'cb.merged': 'Birleştirildi', 'cb.open': 'İncelemede',
    'cb1.p': 'FindInput ve ReplaceInput içinde tekrarlanan ok tuşu ve Escape davranışı artık tek bir ortak yardımcıda; beş yeni birim testiyle korunuyor. #199892 numaralı kaydı kapatıyor.',
    'cb2.p': 'NASA’nın görev kontrol çatısı için bir düzeltme: grafik görünümü, Y ekseni etiketi değiştiği anda etiketi yeniler.',
    // Eksik kalan TR metinleri (2026-10-20)
    'nav.skills': 'Yetenekler', 'hero.sub': 'Backend Geliştirici', 'id.cap': 'Profil kaydı',
    'rec.edu': 'Eğitim', 'rec.edu.v': 'Anadolu Üniversitesi, ön lisans',
    'hero.l1': 'Backend geliştirme', 'hero.l2': 'Yapay zekâ ve dağıtık sistemler', 'hero.l3': 'Bilgisayarlı görü ve ajan güvenliği',
    'pr.lead': 'Kurduğum her sistemde bir şeye güvenilmesi gereken bir an vardır: bir ajanın onayı, bir kamera karesi, bir ödeme. Önce o anı tasarlarım ve hâlâ bitmemiş olanı yazıya dökerim.',
    'more': 'Ayrıntılar',
    'ar.aim': 'Backend tarafında 49 Jest test grubu. Hedef: Teknopark desteğiyle platformu küresel ölçeğe taşımak.',
    'as.facts': 'Hedef: Eskişehir pilotu, ardından on iki haftada beş otobüs. Model v3, mAP50 0.660; çok geçişli yakalama %87,1 (saha hedefi %85). 7 aşamanın 5.si.',
    'work.more': 'Diğer işler', 'q.h': 'Bilinmeyen, <em>dur</em> demektir.', 'q.s': 'Kapı yalnızca görebildiğinde açılır.',
    'sk1': 'Backend geliştirme', 'sk2': 'Yapay zekâ ve görü', 'sk3': 'Dağıtık sistemler', 'sk4': 'Veri ve önbellekleme', 'sk5': 'Yayına alma', 'sk6': 'Entegrasyonlar',
    'wd.h': 'Ne yapıyorum', 'wd1.h': 'Backend ve API’ler',
    'wd1.p': 'Node.js ve Python servisleri, REST ve GraphQL API’leri; PostgreSQL, MongoDB ve Redis — sorgular hızlanana kadar ayarlanmış.',
    'wd2.h': 'Yapay zekâ ve bilgisayarlı görü',
    'wd2.p': 'YOLO hatları, GPS harita eşleme, MCP sunucuları ve LLM araçları; gizlilik kuralları kodda uygulanır.',
    'wd3.h': 'Dağıtık medya sistemleri',
    'wd3.p': 'P2P ve hibrit dağıtım, HLS hatları, içerik doğrulama ve ölçeklenen mikroservisler.',
    'ex1.d': 'AnimeRank. Yapay zekâ destekli bir medya platformunun mimarisi, backend’i, verisi ve yayını.',
    'ex2.d': 'Node.js, Python ve PostgreSQL backend’leri. Redis önbelleği sorgu süresini %60 kısalttı.',
    'ex.more': 'Tüm sorumluluklar', 'ct.loc': 'Konum', 'ct.lang': 'Diller', 'ct.cvd': 'PDF indir',
    'skip': 'İçeriğe geç',
    'nav.work': 'Projeler', 'nav.open': 'Açık kaynak', 'nav.experience': 'Deneyim',
    'nav.practice': 'Yaklaşım', 'nav.stack': 'Teknolojiler', 'nav.education': 'Eğitim', 'nav.contact': 'İletişim',

    'hero.now': 'AnimeRank\'i geliştiriyor',
    'hero.role': 'Güvenilmesi gereken yapay zeka ve dağıtık sistemler kuran backend geliştirici.',
    'hero.lead': 'AnimeRank\'in teknik tarafını yönetiyor, şehir otobüsleri için yol hasarı tespiti, para harcayan ajanlar için bir güvenlik kapısı ve canlıda çalışan bir eğitim platformu geliştiriyorum. Doğrulama, denetim kayıtları ve dürüst durum bilgisi, özelliklerden önce gelir.',
    'hero.cta1': 'Seçili projeler',
    'hero.cta2': 'CV indir',
    'map.note': 'Asfalya hasar haritasının şematik gösterimi. Sentetik veri.',

    'rec.name': 'Ad', 'rec.role': 'Rol', 'rec.role.v': 'AnimeRank kurucusu ve tek geliştiricisi',
    'rec.loc': 'Konum', 'rec.loc.v': 'Eskişehir, Türkiye',
    'rec.focus': 'Odak', 'rec.focus.v': 'Backend, yapay zeka ve dağıtık sistemler',
    'rec.lang': 'Diller', 'rec.lang.v': 'Türkçe, İngilizce',
    'rec.mail': 'E-posta',

    'st1': 'Redis önbellekleme ile sorgu süresindeki azalma, serbest backend işleri',
    'st2': 'AnimeRank backend\'indeki Jest test paketi',
    'st3': 'Aegis\'teki otomatik test',
    'st4': 'canlıda çalışan üretim sitesi',

    'work.h': 'Seçili projeler',
    'work.sub': 'Özel depolar, göstereceğim sırayla.',

    'ar.tag': 'Tek başıma geliştirdiğim, Türkçe öncelikli anime platformu.',
    'ar.p1': 'Aranabilir bir katalog, hibrit P2P ve HLS oynatıcı, cihazlar arası izleme takibi ve topluluk katmanı; baştan sona kontrol ettiğim bir altyapıda. Türkçe asıl dil, İngilizce tam bir ikinci dil. Kurucu ortağıyım; mimariyi, backend\'i ve teslimatı ben yönetiyorum.',
    'ar.p2': 'Arkasında şunlar var: Node.js REST backend, sorgu iyileştirmeleriyle SQLite\'tan PostgreSQL\'e geçiş, büyük ölçekli metadata toplama ve indeksleme, içerik doğrulama ve medya eşleştirme motorları ve mikroservis tabanlı bir servis katmanı. Eşler arası hibrit dağıtım ve yapay zeka destekli medya işleme hatları Ar-Ge aşamasında.',
    'ar.k1': 'Rol', 'ar.v1': 'Kurucu ve tek geliştirici, 2025\'ten bugüne',
    'ar.k2': 'Kalite', 'ar.v2': 'Backend\'de 49 Jest test paketi',
    'ar.k3': 'Hedef', 'ar.v3': 'Platformu Teknopark desteğiyle küresel ölçeğe taşımak',

    's.pre': 'Yayın öncesi', 's.dev': 'Geliştiriliyor', 's.live': 'Canlı', 's.proto': 'Prototip', 's.sim': 'Yalnızca simülasyon',
    'priv': 'Özel depo',

    'as.tag': 'Araç üstü kameralarla yol hasarı tespiti.',
    'as.p1': 'Belediye otobüslerine takılan telefon kameraları yolu kaydeder. Görüntüler gece tek bir GPU\'da işlenir: bir YOLO modeli çukur, çatlak, yama ve çıkıntılı rögar kapaklarını bulur, GPS ve OSM eşleştirmesi her birini bir sokağa sabitler, farklı geçişlerdeki tekrar görüntüler tek bir takipli onarım kaydına indirgenir. Sonuçlar canlı bir hasar haritasına ve haftalık PDF raporlara düşer.',
    'as.p2': 'Gizlilik kodla zorlanır. Yüz ve plaka bulanıklaştırma hattın zorunlu adımıdır, maskelenmemiş kare PrivacyViolation ile reddedilir ve ham video sunucuya hiç ulaşmaz.',
    'as.k1': 'Hedef', 'as.v1': 'Eskişehir pilotu: demo hasar haritası, ardından on iki haftada beş otobüs',
    'as.k2': 'Model', 'as.v2': 'v3 fine-tune, mAP50 0,660. Çok geçişli yakalama %87,1, saha hedefi %85',
    'as.k3': 'Durum', 'as.v3': '7 fazın 5.si. Saha çekimi bilerek en sonda',

    'ekt.tag': 'Canlıda çalışan eğitim platformu.',
    'ekt.p': 'Kurumsal web sitesi, öğrenci paneli ve yönetici paneli. PostgreSQL ve Prisma üzerinde Node 22 + Express API, sunucu tarafı oturumlar, dosya yükleme, karekod doğrulamalı PDF sertifikalar, e-posta ve SMS hatırlatmaları, spam korumalı formlar ve canlı ders bağlantıları. Statik bir ön yüzden başlayarak faz faz inşa edildi, 20 Ağustos 2026\'dan beri yayında.',

    'cp.tag': 'Cam balkon ve doğrama firması için kurumsal site.',
    'cp.p': 'Sıfırdan, build adımı olmayan statik çok sayfalı site olarak inşa edildi: 23 sayfa, marka kılavuzundan alınan tasarım token\'ları, ölçülmüş WCAG kontrastı, JSON-LD, sitemap ve llms.txt. Her tasarım ve erişilebilirlik kararı bir karar kaydında yazılı.',

    'bd.tag': 'Bal e-ticaret sitesi.',
    'bd.p': 'Cloudflare üzerinde D1 ve KV ile TanStack Start, siparişler için Turnstile bot koruması, canlı veriye hiç dokunmayan yerel emülasyon akışı ve yazılı bir yol haritası.',

    'ku.tag': 'Anime altyazı çeviri servisi.',
    'ku.p': 'Videoya dokunmadan .ass altyazı üretir: ses zamanlaması, ekran yazılarının OCR\'ı ve sekiz dilde kültürel bağlama uygun Türkçe çeviri. Değiştirilebilir servis katmanı, P2P oynatıcılar için altyazı önbelleği, önceden ısıtma kuyrukları ve pilot işletim rehberi.',

    'rc.tag': 'Konuşmayı merkeze alan canlı destek.',
    'rc.p': 'Konuşmayı merkeze alan canlı destek: Express ve Socket.IO geçidi, iframe arayüzlü 5 KB\'lık widget yükleyici, ziyaretçi kartlı operatör gelen kutusu ve dokuz adımlı uçtan uca test.',

    'wf.tag': 'Birinci şahıs açık dünya hayatta kalma oyunu.',
    'wf.p': 'Unreal Engine 5 ve C++. Hayatta kalma ihtiyaçları, gündüz köy yönetimi ve gece savunması; nihai varlıklar olmadan çalışan veriye dayalı sistemler, ilk kilometre taşından itibaren otomasyon testleri ve CI ile. Şu an M12\'nin M0 aşamasında.',

    'op.h': 'Açık kaynak',
    'op.sub': 'Herkese açık, kodu okuyabilirsiniz.',
    'op.src': 'Kaynak', 'op.site': 'Proje sitesi',

    'ag.tag': 'Para harcayan yapay zeka ajanları için ağ doğrulamalı güven.',
    'ag.p1': 'Gerçek Google Ads ve Meta kampanyalarını sunucu tarafı harcama korumalarının ardında yöneten bir MCP sunucusu. Bir insana onay sorulmadan önce mobil ağa (GSMA Open Gateway ve CAMARA, Nokia Network-as-Code üzerinden) onaylayanın hattının ele geçirilip geçirilmediğini sorar.',
    'ag.p2': 'Ajanın kendi onay bayrağı her yolda yok sayılır. Onay, sunucunun doğruladığı bir olgudur.',
    'ag.k1': 'Test', 'ag.v1': 'satır kapsamı', 'ag.k2': 'Teknoloji', 'ag.k3': 'Lisans',
    'ag.chain': 'Güven zinciri ve bugün gerçekte geldiği nokta',
    'ag.th1': 'Sinyal', 'ag.th2': 'Yanıtladığı soru', 'ag.th3': 'Durum',
    'c1': 'Onaylayanın hattı yakın zamanda ele geçirildi mi?',
    'c2': 'Onay, hat sahibinin kendi cihazından mı geliyor?',
    'c3': 'Hat şu an veri veya SMS alabiliyor mu?',
    'c4': 'Hat beklenen ülkede mi?',
    'c5': 'Hat yeni bir cihaza taşındı mı?',
    'c6': 'Koşulsuz çağrı yönlendirme açık mı?',
    'ag.note': 'Altı bağlantının beşi canlı uçlara karşı doğrulandı. Hesap Nokia\'nın Simulator modunda çalışıyor: hat kanıtlandı, operatör entegrasyonu henüz değil. Number Verification, hiçbir backend\'in çağıramayacağı cihaz tarafı bir OIDC akışıdır.',

    'ap.p': 'Güvenlik kapılı Google Ads yönetimi için açık kaynak MCP sunucusu. Bir yapay zeka ajanı, parayı denetimsiz harcamadan kampanyaları yönetebilir.',

    'ex.h': 'Deneyim',
    'ex1.when': '2025 — devam ediyor',
    'ex1.h': 'Kurucu ve tek geliştirici',
    'ex1.org': 'AnimeRank',
    'ex1.b1': 'Yapay zeka destekli bir medya teknolojileri platformunun mimarisi, geliştirme sürecinin yönetimi ve teknik liderliği.',
    'ex1.b2': 'Yüksek performanslı Node.js backend ve RESTful API geliştirildi.',
    'ex1.b3': 'Veri katmanı SQLite\'tan PostgreSQL\'e taşındı, sorgu performansı iyileştirildi.',
    'ex1.b4': 'Büyük ölçekli veri toplama ve indeksleme, içerik doğrulama ve medya eşleştirme motorları geliştirildi.',
    'ex1.b5': 'Ölçeklenebilir, mikroservis tabanlı servis altyapısı kuruldu.',
    'ex1.b6': 'P2P destekli hibrit içerik dağıtımı ve yapay zeka destekli medya işleme hatları araştırılıyor.',
    'ex2.when': '2024 — devam ediyor',
    'ex2.h': 'Serbest backend geliştirici',
    'ex2.org': 'Bağımsız',
    'ex2.b1': 'Çeşitli web projeleri için Node.js, Python ve PostgreSQL tabanlı backend sistemleri geliştirildi.',
    'ex2.b2': 'REST ve GraphQL API\'leri tasarlandı ve entegre edildi.',
    'ex2.b3': 'Redis tabanlı önbellekleme ile sorgu süresi %60 azaltıldı.',
    'ex2.b4': 'Docker ve CI/CD hatlarıyla dağıtım süreçleri otomatikleştirildi.',

    'pr.h': 'Yaklaşım',
    'pr.sub': 'Her depoda karşınıza çıkan alışkanlıklar.',
    't1.h': 'Onayı sunucu doğrular.',
    't1.p': 'Onay protokol üzerinden gelir ve sunucu tarafından doğrulanır. Ajanın kendi onay bayrağının hiçbir ağırlığı yoktur.',
    't2.h': 'Bilinmeyen, dur demektir.',
    't2.p': 'Eksik token, sessiz bir uç nokta ya da okunamayan bir yanıt retle sonuçlanır. Kapı yalnızca görebildiğinde açılır.',
    't3.h': 'Kurallar kodda yaşar.',
    't3.p': 'Unutulabilen bir gizlilik kuralı unutulur. Asfalya maskelenmemiş kareleri bir kontrol listesine güvenmeden, istisna fırlatarak reddeder.',
    't4.h': 'Yapılmayanı söyle.',
    't4.p': 'Her depo açık işlerini içeren bir durum tablosu taşır: tutmayan bir geri çağırma hedefi, yalnızca simülasyon olan bir bağlantı, hâlâ boş duran bir hukuki izin klasörü.',

    'sk.h': 'Teknolojiler',
    'sk.lang': 'Diller', 'sk.back': 'Backend', 'sk.data': 'Veri',
    'sk.ai': 'Yapay zeka ve görü', 'sk.dist': 'Dağıtık sistemler', 'sk.ops': 'Teslimat',
    'sk.front': 'Frontend', 'sk.int': 'Entegrasyonlar',

    'ed.h': 'Eğitim',
    'ed.when': '2025 — devam ediyor',
    'ed.deg': 'Ön lisans, Arka-Yüz Yazılım Geliştirme.',
    'ed.p': 'Backend geliştirme, veritabanı sistemleri, API tasarımı, mikroservis mimarileri ve modern yazılım pratikleri; yukarıdaki projeleri geliştirip yayına alırken okunuyor.',

    'ct.h': 'İletişim',
    'ct.p': 'Yapay zeka, büyük veri ve medya teknolojilerinde uluslararası ölçekte rekabet edebilecek, ölçeklenebilir ürünler geliştirmek istiyorum. Üzerinde çalıştığınız şeyle kesişiyorsa bana yazın.',
    'ct.mail': 'E-posta', 'ct.cv': 'Özgeçmiş',

    'foot.top': 'Başa dön ↑'
  };

  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  var tipNodes = document.querySelectorAll('[data-i18n-tip]');
  nodes.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });
  tipNodes.forEach(function (el) { EN[el.getAttribute('data-i18n-tip')] = el.getAttribute('data-tip'); });

  var langBtns = document.querySelectorAll('[data-lang]');

  function setLang(lang) {
    var dict = lang === 'tr' ? TR : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    tipNodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n-tip');
      if (dict[k] != null) { el.setAttribute('data-tip', dict[k]); el.setAttribute('aria-label', dict[k]); }
    });
    root.setAttribute('lang', lang);
    langBtns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.title = lang === 'tr'
      ? 'Bedirhan Çetin — Backend Geliştirici'
      : 'Bedirhan Çetin — Backend Developer';
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  langBtns.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  setLang(root.getAttribute('lang') === 'tr' ? 'tr' : 'en');

  /* ---------------- theme ---------------- */
  var meta = document.querySelector('meta[name="theme-color"]');
  function paintMeta() {
    if (meta) meta.setAttribute('content', root.getAttribute('data-theme') === 'dark' ? '#0B0B0D' : '#ECECEF');
  }
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintMeta();
  });
  paintMeta();

  /* ---------------- reveal on scroll ---------------- */
  var reveals = document.querySelectorAll(".__none");
  reveals.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------- active rail link ---------------- */
  var links = document.querySelectorAll('.strip__nav a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('is-active'); });
          var a = map[e.target.id];
          if (a) a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) so.observe(s);
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
