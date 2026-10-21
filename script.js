(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---------------- i18n: English lives in the HTML, Turkish here ---------------- */
  var TR = {
    'skip': 'İçeriğe geç',
    'nav.work': 'Projeler', 'nav.skills': 'Yetenekler', 'nav.experience': 'Deneyim', 'nav.open': 'Açık kaynak',
    'nav.contrib': 'Katkılar', 'nav.contact': 'İletişim',

    'hero.sub': 'Backend Geliştirici',
    'id.cap': 'Profil kaydı',
    'rec.name': 'Ad', 'rec.role': 'Odak', 'rec.role.v': 'Backend, yapay zekâ ve oyun geliştirme',
    'rec.loc': 'Konum', 'rec.loc.v': 'Eskişehir, Türkiye',
    'rec.edu': 'Eğitim', 'rec.edu.v': 'Anadolu Üniversitesi, ön lisans',
    'rec.lang': 'Diller', 'rec.lang.v': 'Türkçe, İngilizce',
    'hero.l1': 'Backend geliştirme', 'hero.l2': 'Yapay zekâ ve görüntü işleme', 'hero.l3': 'Unreal Engine 5 ile oyun geliştirme',
    'hero.lead': 'Canlıda ayakta kalan backend sistemleri, kamera görüntüsünü haritaya dönüştüren görüntü işleme hatları ve C++ ile oyun sistemleri geliştiriyorum. Canlıdaki işlerim arasında bir eğitim platformu, kurumsal siteler ve bir video platformu var.',
    'hero.cta1': 'Seçili projeler', 'hero.cta2': 'CV indir',

    'pr.h': 'Yaklaşım',
    'pr.lead': 'Kurduğum her sistemde bir şeye güvenilmesi gereken bir an vardır: bir ajanın onayı, bir kamera karesi, bir ödeme. Önce o anı tasarlarım ve hâlâ bitmemiş olanı yazıya dökerim.',
    't1.h': 'Onayı sunucu doğrular.', 't1.p': 'Onay protokol üzerinden gelir ve sunucu tarafından doğrulanır. Ajanın kendi onay bayrağının hiçbir ağırlığı yoktur.',
    't2.h': 'Bilinmeyen, dur demektir.', 't2.p': 'Eksik token, sessiz bir uç nokta ya da okunamayan bir yanıt retle sonuçlanır. Kapı yalnızca görebildiğinde açılır.',
    't3.h': 'Kurallar kodda yaşar.', 't3.p': 'Unutulabilecek bir gizlilik kuralı unutulur. Asfalya, maskelenmemiş kareleri bir kontrol listesine güvenmek yerine istisna fırlatarak reddeder.',
    't4.h': 'Bitmeyeni söyle.', 't4.p': 'Her depoda açık maddeleriyle bir durum tablosu bulunur: tutturulamamış bir duyarlılık hedefi, yalnızca simülasyonda çalışan bir bağlantı, hâlâ boş duran bir yasal izin klasörü.',

    'work.h': 'Seçili projeler', 'work.sub': 'Amacını, ekranlarını ve teknik altyapısını görmek için bir projeye tıklayın.', 'work.more': 'Diğer işler',
    'lz.cls': 'Sınıf', 'lz.cls.v': 'Timsah sırtı çatlak', 'lz.conf': 'Güven', 'lz.box': 'Kutu', 'lz.map': 'Sınıf AP@0.5', 'lz.hint': 'İncelemek için üzerine gelin',
    'as.tag': 'Otobüslere takılan kameralarla yol hasarı tespiti.', 'as.baum': 'BAUM staj projesi',
    'wf.tag': 'Unreal Engine 5 ve C++ ile açık dünya hayatta kalma oyunu.',
    'ekt.tag': 'Canlıda çalışan eğitim platformu.',
    'ar.p': 'Aranabilir katalog, sezon takvimi, çok dilli altyazı ve hibrit P2P + sunucu oynatıcısı olan bir anime video platformu. Backend, medya işleme hattı ve sunucular üzerinde çalışıyorum.',
    'ku.p': 'Anime altyazı çeviri servisi. Videoya dokunmadan .ass altyazı üretir: ses zamanlaması, ekran yazılarının OCR\'ı ve sekiz dilde bağlamı koruyan çeviri.',
    'cp.p': 'Cam balkon ve doğrama firması için kurumsal site; build adımı olmayan statik çok sayfalı yapı: 23 sayfa, marka kılavuzundan tasarım değişkenleri, ölçülmüş WCAG kontrastı, JSON-LD ve site haritası.',
    'rc.p': 'Konuşmayı merkeze alan canlı destek: Express ve Socket.IO geçidi, iframe arayüzlü 5 KB\'lık widget yükleyici, ziyaretçi kartlı operatör gelen kutusu ve uçtan uca testler.',
    'rc.yer': 'AnimeRank destek masası',
    'bd.p': 'TanStack Start ve Cloudflare üzerinde D1 ve KV ile bal e-ticaret sitesi: Turnstile bot koruması, kartla ödeme ve canlı veriye hiç dokunmayan yerel geliştirme akışı.',
    'bd.yer': 'Müşteri projesi',
    's.live': 'Canlı', 's.dev': 'Geliştiriliyor', 's.pre': 'Erken erişim', 's.use': 'Kullanımda', 's.sim': 'Yalnızca simülasyon',

    'sk.h': 'Yetenekler',
    'sk1': 'Backend geliştirme', 'sk2': 'Yapay zekâ ve görüntü', 'sk3': 'Oyun geliştirme',
    'sk4': 'Veri ve önbellekleme', 'sk5': 'Medya hatları', 'sk6': 'Yayına alma',
    'sk.lang': 'Diller', 'sk.back': 'Backend', 'sk.data': 'Veri', 'sk.ai': 'Yapay zekâ', 'sk.game': 'Oyun',
    'sk.dist': 'Medya', 'sk.ops': 'Yayına alma', 'sk.front': 'Ön yüz', 'sk.int': 'Entegrasyonlar',

    'wd.h': 'Ne yapıyorum',
    'wd1.h': 'Backend ve API’ler', 'wd1.p': 'Node.js ve Python servisleri, REST ve GraphQL API’leri; PostgreSQL, MongoDB ve Redis — sorgular hızlanana ve sunucular yük altında sakin kalana kadar ayarlanmış.',
    'wd2.h': 'Yapay zekâ ve görüntü işleme', 'wd2.p': 'YOLO hatları, GPS harita eşleme, konuşma zamanlaması, OCR ve LLM araçları; gizlilik kuralları kodda uygulanır.',
    'wd3.h': 'Oyun ve gerçek zamanlı sistemler', 'wd3.p': 'Unreal Engine 5 ve C++ ile oyun sistemleri; veri odaklı kurulur ve ilk kilometre taşından itibaren otomasyon testleriyle korunur.',

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
    'exa.b1': 'Bir video platformunun backend’i, medya işleme hattı ve sunucu operasyonları.',
    'exa.b2': 'Birden çok medya sunucusunda kodlama dönüşümü, altyazı senkronizasyonu ve P2P + sunucu dağıtımı.',
    'ex2.b1': '30 iş günü, 6 Temmuz – 17 Ağustos 2026.',
    'ex2.b2': 'YOLO yol hasarı modelini eğitip değerlendirdim; çevresine harita, skor ve raporlama backend’ini kurdum.',
    'ed.h': 'Eğitim',
    'ed.p': 'Backend geliştirme, veritabanı sistemleri, API tasarımı, mikroservis mimarileri ve modern yazılım pratikleri; yukarıdaki projeleri geliştirip yayınlarken birlikte yürüyen bir eğitim.',

    'op.h': 'Açık kaynak', 'op.sub': 'Herkese açık, kodu okuyabilirsiniz.', 'op.src': 'Kaynak', 'op.site': 'Proje sitesi',
    'ag.tag': 'Para harcayan yapay zekâ ajanları için ağ doğrulamalı güven.',
    'ag.p1': 'Gerçek Google Ads ve Meta kampanyalarını sunucu taraflı harcama korumalarının arkasında yürüten bir MCP sunucusu. Bir insana onay sorulmadan önce mobil ağa (GSMA Open Gateway ve CAMARA, Nokia Network-as-Code üzerinden) onaylayan kişinin hattının ele geçirilip geçirilmediğini sorar.',
    'ag.p2': 'Ajanın kendi onay bayrağı her yolda yok sayılır. Onay, sunucunun doğruladığı bir olgudur.',
    'ag.k1': 'Testler', 'ag.v1': 'satır kapsamı', 'ag.k2': 'Yığın', 'ag.k3': 'Lisans',
    'ag.chain': 'Güven zinciri ve dürüstçe nerede durduğu',
    'ag.th1': 'Sinyal', 'ag.th2': 'Yanıtladığı soru', 'ag.th3': 'Durum',
    'c1': 'Onaylayanın hattı yakın zamanda ele geçirildi mi?', 'c2': 'Onay, sahibin kendi cihazından mı geliyor?',
    'c3': 'Hat şu an veri ya da SMS alabiliyor mu?', 'c4': 'Hat beklenen ülkede mi?',
    'c5': 'Hat yeni bir cihaza taşındı mı?', 'c6': 'Koşulsuz çağrı yönlendirme açık mı?',
    'ag.note': 'Altı bağlantının beşi canlı uç noktalara karşı doğrulandı. Hesap Nokia’nın Simulator modunda çalışıyor: bağlantı kanıtlandı, operatör entegrasyonu ise beklemede. Number Verification, hiçbir backend’in çağıramadığı cihaz taraflı bir OIDC akışıdır.',
    'ap.p': 'Güvenlik kapılı Google Ads yönetimi için açık kaynak MCP sunucusu. Bir yapay zekâ ajanı kampanyaları yönetebilir; her bütçe artışı doğrulanmış bir insan onayını bekler.',

    'cb.h': 'Katkılar', 'cb.sub': 'Başka ekiplerin yönettiği projelere gönderdiğim değişiklikler.',
    'cb.merged': 'Birleştirildi', 'cb.open': 'İncelemede',
    'cb1.p': 'FindInput ve ReplaceInput içinde tekrarlanan ok tuşu ve Escape davranışı artık tek bir ortak yardımcıda; beş yeni birim testiyle korunuyor. #199892 numaralı kaydı kapatıyor.',
    'cb2.p': 'NASA’nın görev kontrol çatısı için bir düzeltme: grafik görünümü, Y ekseni etiketi değiştiği anda etiketi yeniler.',

    'ct.h': 'İletişim',
    'ct.p': 'Yapay zekâ, büyük veri, medya teknolojileri ve oyun alanlarında uluslararası rekabet edebilecek ölçeklenebilir ürünler geliştirmek istiyorum. Üzerinde çalıştığınız şeyle örtüşüyorsa bana yazın.',
    'ct.mail': 'E-posta', 'ct.loc': 'Konum', 'ct.lang': 'Diller', 'ct.cv': 'Özgeçmiş', 'ct.cvd': 'PDF indir',
    'foot.top': 'Başa dön ↑'
  };

  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) { EN[el.getAttribute('data-i18n')] = el.innerHTML; });

  var langBtns = document.querySelectorAll('[data-lang]');
  var ROT = {
    en: ['AI & computer vision', 'game development', 'media pipelines', 'production backends'],
    tr: ['yapay zekâ ve görüntü', 'oyun geliştirme', 'medya hatları', 'canlı backend sistemleri']
  };

  function setLang(lang) {
    var dict = lang === 'tr' ? TR : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    root.setAttribute('lang', lang);
    langBtns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.title = lang === 'tr' ? 'Bedirhan Çetin — Backend Geliştirici' : 'Bedirhan Çetin — Backend Developer';
    rotI = 0; rotYaz(false);
    try { localStorage.setItem('lang', lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('dil', { detail: lang }));
  }

  /* ---------------- rotating focus word in the hero ---------------- */
  var rot = document.getElementById('rot');
  var rotI = 0;
  function rotYaz(animasyon) {
    if (!rot) return;
    var l = ROT[root.getAttribute('lang') === 'tr' ? 'tr' : 'en'];
    var w = l[rotI % l.length];
    if (!animasyon) { rot.textContent = w; return; }
    rot.classList.add('is-out');
    setTimeout(function () { rot.textContent = w; rot.classList.remove('is-out'); }, 380);
  }
  if (rot && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(function () { rotI++; rotYaz(true); }, 2600);
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
    document.dispatchEvent(new CustomEvent('tema', { detail: next }));
  });
  paintMeta();

  /* ---------------- active nav link ---------------- */
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
