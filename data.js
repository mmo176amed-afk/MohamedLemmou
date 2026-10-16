/* ============================================================
   ملف المحتوى — هذا هو الملف الوحيد الذي تحتاج لتعديله
   كل نص مكتوب بثلاث لغات: ar (عربي) / fr (فرنسي) / en (إنجليزي)
   لإضافة عنصر جديد: انسخ عنصراً موجوداً والصقه تحته ثم عدّل نصوصه.
   اترك الرابط url: "" فارغاً إذا لم يكن جاهزاً (سيختفي الزر تلقائياً).
   ============================================================ */
window.SITE = {

  /* ---------- معلومات عامة ---------- */
  person: {
    name:  { ar: "محمد لمو", fr: "Mohamed Lemmou", en: "Mohamed Lemmou" },
    title: {
      ar: "مدرّب أطفال: الذاكرة • الذكاء • الحساب الذهني • مكعب روبيك • روبوتيك STEM",
      fr: "Formateur pour enfants : mémoire, intelligence, calcul mental, Rubik's Cube, robotique STEM",
      en: "Children's trainer: memory, intelligence, mental arithmetic, Rubik's Cube, STEM robotics"
    },
    tagline: {
      ar: "أصنع من التعلّم متعة، ومن الأطفال مبدعين.",
      fr: "Je transforme l'apprentissage en plaisir et les enfants en créateurs.",
      en: "I turn learning into fun and children into creators."
    },
    about: {
      ar: "أنا محمد لمو، مدرّب متخصص في تنمية قدرات الأطفال العقلية والتقنية. أُدرّب على تقوية الذاكرة، وتنمية الذكاء، والحساب الذهني (السوروبان)، وحلّ مكعب روبيك، وأُدخل الأطفال إلى عالم الروبوتات والبرمجة عبر مشاريع STEM عملية بالأردوينو وESP32. إلى جانب التدريس أبني منصات ويب وبرامج تعليمية وإدارية، وأنا مؤلف سلسلة كتب «كتاب في كل بيت» لتعلّم مكعب روبيك بدون معلم.",
      fr: "Je suis Mohamed Lemmou, formateur spécialisé dans le développement des capacités mentales et techniques des enfants : mémoire, intelligence, calcul mental (soroban), Rubik's Cube, et initiation à la robotique et à la programmation avec des projets STEM concrets (Arduino, ESP32). En parallèle, je conçois des plateformes web et des logiciels éducatifs et de gestion, et je suis l'auteur de la collection « Un livre dans chaque foyer » pour apprendre le Rubik's Cube sans professeur.",
      en: "I'm Mohamed Lemmou, a trainer focused on developing children's mental and technical abilities: memory, intelligence, mental arithmetic (soroban), Rubik's Cube, and hands-on STEM robotics and programming with Arduino and ESP32. Alongside teaching, I build web platforms and educational and management software, and I'm the author of the “A Book in Every Home” series for learning the Rubik's Cube without a teacher."
    },
    location: { ar: "الجزائر", fr: "Algérie", en: "Algeria" },
    photo: "images/me.jpg"
  },

  /* ---------- التواصل ---------- */
  contact: {
    whatsapp: "213666925680",
    email: "mmoh76amed@gmail.com",
    social: [
      { key: "whatsapp",     label: "WhatsApp",        url: "https://wa.me/213666925680" },
      { key: "messenger",    label: "Messenger",       url: "https://m.me/mohamed.lemmou.7" },
      { key: "youtube",      label: "YouTube",         url: "https://www.youtube.com/@Mohamedmoh" },
      { key: "tiktok",       label: "TikTok",          url: "https://www.tiktok.com/@mohamedlemmou4" },
      { key: "facebook",     label: "Facebook",        url: "https://www.facebook.com/mohamed.lemmou.7/" },
      { key: "facebookpage", label: "Facebook Page",   url: "https://www.facebook.com/moh76amed" },
      { key: "instagram",    label: "Instagram",       url: "https://www.instagram.com/lemmoimohamed/" },
      { key: "x",            label: "X (Twitter)",     url: "https://twitter.com/mmoh76amed1" }
    ]
  },

  /* ---------- مجالات التدريب ---------- */
  services: [
    { icon: "🔢",
      title: { ar: "تحفيظ جدول الضرب بطرق إبداعية", fr: "Table de multiplication, façon créative", en: "Multiplication table, the creative way" },
      text:  { ar: "التدريب على حفظ جدول الضرب بأساليب مبتكرة وممتعة.", fr: "Entraînement à mémoriser la table de multiplication avec des méthodes originales et amusantes.", en: "Training to memorize the multiplication table with original, fun methods." } },
    { icon: "🧮",
      title: { ar: "الحساب الذهني (السوروبان)", fr: "Calcul mental (Soroban)", en: "Mental arithmetic (Soroban)" },
      text:  { ar: "التدريب على الحساب السريع بالعقل بمساعدة المعداد الياباني.", fr: "Entraînement au calcul rapide de tête grâce au boulier japonais.", en: "Training in lightning-fast mental math with the Japanese abacus." } },
    { icon: "⚡",
      title: { ar: "الرياضيات السريعة", fr: "Mathématiques rapides", en: "Fast math" },
      text:  { ar: "التدريب على تقنيات حلّ العمليات والمسائل الحسابية بسرعة ودقة.", fr: "Entraînement aux techniques pour résoudre calculs et problèmes rapidement et avec précision.", en: "Training in techniques to solve calculations and problems quickly and accurately." } },
    { icon: "🧊",
      title: { ar: "مكعب روبيك", fr: "Rubik's Cube", en: "Rubik's Cube" },
      text:  { ar: "التدريب على حلّ مكعب روبيك للمبتدئين والمحترفين، ومغمض العينين، وعدّة مكعبات أخرى.", fr: "Entraînement à résoudre le Rubik's Cube pour débutants et experts, les yeux bandés, et de nombreux autres cubes.", en: "Training to solve the Rubik's Cube for beginners and experts, blindfolded, and many other puzzle cubes." } },
    { icon: "🤖",
      title: { ar: "الروبوتيك", fr: "Robotique", en: "Robotics" },
      text:  { ar: "التدريب على الروبوتيك بما فيها ليغو والأردوينو وmBot2.", fr: "Entraînement à la robotique, avec LEGO, Arduino et mBot2.", en: "Training in robotics, including LEGO, Arduino and mBot2." } }
  ],

  /* ---------- منصة ZED Soroban (قسم خاص) ---------- */
  zed: {
    name:   { ar: "زاد سوروبان — ZED Soroban", fr: "ZED Soroban", en: "ZED Soroban" },
    slogan: { ar: "زاد سوروبان شريكك الدائم", fr: "ZED Soroban, votre partenaire de toujours", en: "ZED Soroban, your lasting partner" },
    text: {
      ar: "منصة تفاعلية وممتعة وتعليمية للأطفال والكبار لتعلّم الحساب الذهني باستعمال المعداد الياباني (السوروبان). تساهم المنصة في إنجاح المسابقات والبطولات.",
      fr: "Une plateforme interactive, ludique et éducative pour enfants et adultes afin d'apprendre le calcul mental avec le boulier japonais (soroban). Elle contribue à la réussite des concours et championnats.",
      en: "An interactive, fun and educational platform for children and adults to learn mental arithmetic with the Japanese abacus (soroban). It helps competitions and championships run successfully."
    },
    url: "https://zed-app.github.io/zedsoroban/",
    since: "2019",
    apps: [
      { icon: "💻", img: "images/zed-windows.jpg", shape: "",
        title: { ar: "نسخة ويندوز", fr: "Version Windows", en: "Windows version" },
        text:  { ar: "حمّل المنصة على حاسوبك وابدأ التدريب على الحساب الذهني.", fr: "Téléchargez la plateforme sur votre ordinateur et commencez l'entraînement au calcul mental.", en: "Download the platform to your PC and start mental-arithmetic training." },
        btn:   { ar: "تحميل نسخة ويندوز", fr: "Télécharger pour Windows", en: "Download for Windows" },
        file: "downloads/ZED_Soroban_Studio.rar",
        url: "https://www.mediafire.com/file/6qd1baqgillsjen/ZED_Soroban_Studio_%25281%2529.rar/file",
        hint:  { ar: "الملف مضغوط (RAR): بعد التحميل افتحه ببرنامج WinRAR أو 7-Zip.", fr: "Fichier compressé (RAR) : après le téléchargement, ouvrez-le avec WinRAR ou 7-Zip.", en: "Compressed file (RAR): after downloading, open it with WinRAR or 7-Zip." } },
      { icon: "📱", img: "images/zed-android.jpg", shape: "phone",
        title: { ar: "نسخة أندرويد", fr: "Version Android", en: "Android version" },
        text:  { ar: "حمّل تطبيق الهاتف من متجر Google Play.", fr: "Téléchargez l'application mobile depuis Google Play.", en: "Get the mobile app from Google Play." },
        btn:   { ar: "تحميل من Google Play", fr: "Télécharger sur Google Play", en: "Get it on Google Play" },
        file: "",
        url: "https://play.google.com/store/apps/details?id=com.zedsoroban.gamesinogh",
        hint: null }
    ]
  },

  /* ---------- كتبي (قسم خاص) ---------- */
  books: {
    shortName: { ar: "كتاب مكعب روبيك", fr: "Livre Rubik's Cube", en: "Rubik's Cube book" },
    series: {
      ar: "سلسلة «كتاب في كل بيت»: تعلّم مكعب روبيك بدون معلم",
      fr: "Collection « Un livre dans chaque foyer » : apprendre le Rubik's Cube sans professeur",
      en: "“A Book in Every Home” series: learn the Rubik's Cube without a teacher"
    },
    text: {
      ar: "من خلال مشوارنا التعليمي وحصصنا التدريبية مع الناس على اختلاف أعمارهم، اكتسبنا إتقاناً ودراية بلعبة المكعب. فارتأينا أن نجعل الدروس التدريبية في شكل كتاب مضبوط فيه قواعد المكعب، ليتسنّى لكل من أراد التعلّم، وخاصة لمن لم يستطع الاستعانة بمعلم، أن يتبع الخطوات المقررة ويتمرّن عدة مرات ولو لبعض الدقائق.",
      fr: "Au fil de notre parcours pédagogique et de nos séances de formation avec des personnes de tous âges, nous avons acquis une solide maîtrise du cube. Nous avons donc réuni les leçons dans un livre qui en fixe les règles, afin que toute personne souhaitant apprendre, surtout sans professeur, puisse suivre les étapes et s'entraîner plusieurs fois, même quelques minutes.",
      en: "Through our teaching journey and training sessions with people of all ages, we gained real mastery of the cube. So we gathered the lessons into a book that sets out its rules, so anyone who wants to learn, especially without a teacher, can follow the steps and practice several times, even for a few minutes."
    },
    covers: [
      { img: "images/rubik-book-1.jpg",    alt: { ar: "غلاف الجزء الأول: ثمانية مراحل لحل مكعب الروبيك", fr: "Couverture du tome 1", en: "Cover of part 1" } },
      { img: "images/rubik-book-back.jpg", alt: { ar: "الغلاف الخلفي: الأجزاء الثلاثة وحول المؤلف", fr: "Quatrième de couverture : les trois tomes et l'auteur", en: "Back cover: the three parts and about the author" } }
    ],
    volumes: [
      { part:  { ar: "الجزء الأول", fr: "Tome 1", en: "Part 1" },
        title: { ar: "ثمانية مراحل لحل مكعب الروبيك بدون معلم", fr: "Huit étapes pour résoudre le Rubik's Cube sans professeur", en: "Eight stages to solve the Rubik's Cube without a teacher" } },
      { part:  { ar: "الجزء الثاني", fr: "Tome 2", en: "Part 2" },
        title: { ar: "عالم اختراق مكعب الروبيك بدون معلم", fr: "Percer les secrets du Rubik's Cube sans professeur", en: "Breaking into the Rubik's Cube world without a teacher" } },
      { part:  { ar: "الجزء الثالث", fr: "Tome 3", en: "Part 3" },
        title: { ar: "حل مكعب الروبيك معصوب العينين بدون معلم", fr: "Résoudre le Rubik's Cube les yeux bandés, sans professeur", en: "Solving the Rubik's Cube blindfolded, without a teacher" } }
    ],
    credits: [
      { label: { ar: "التأليف", fr: "Auteur", en: "Author" },
        value: { ar: "محمد لمو", fr: "Mohamed Lemmou", en: "Mohamed Lemmou" } },
      { label: { ar: "التدقيق اللغوي", fr: "Relecture linguistique", en: "Language editing" },
        value: { ar: "موليّاط الأمير", fr: "Mouliat El-Amir", en: "Mouliat El-Amir" } },
      { label: { ar: "التصميم", fr: "Conception", en: "Design" },
        value: { ar: "بودن عبد الرزاق", fr: "Boudene Abdelrazak", en: "Boudene Abdelrazak" } }
    ],
    isbn: "978-9931-499-12-1"
  },

  /* ---------- أعمالي ----------
     cat: platform | survey | program | book | robotics | other */
  works: [
    { cat: "platform", icon: "🧮", img: "",
      title: { ar: "ZED Soroban — زاد سوروبان", fr: "ZED Soroban", en: "ZED Soroban" },
      text: { ar: "منصة تعليمية تفاعلية للحساب الذهني بالسوروبان: تطبيقات ويندوز وأندرويد وألعاب ونماذج.", fr: "Plateforme éducative interactive de calcul mental au soroban : applications Windows et Android, jeux et formulaires.", en: "Interactive soroban mental-arithmetic platform: Windows and Android apps, games and forms." },
      url: "https://zed-app.github.io/zedsoroban/" },
    { cat: "survey", icon: "🌊", img: "",
      title: { ar: "استبيان التسجيل — موجة البحر", fr: "Questionnaire d'inscription — Mawjat Al-Bahr", en: "Registration Survey — Mawjat Al-Bahr" },
      text: { ar: "رابط الاستبيان للتسجيل في مسابقات موجة البحر.", fr: "Lien du questionnaire d'inscription aux concours Mawjat Al-Bahr.", en: "Registration survey link for Mawjat Al-Bahr competitions." },
      url: "https://mmo176amed-afk.github.io/Mawjat-Al-Bahr/" },
    { cat: "survey", icon: "🏆", img: "",
      title: { ar: "استبيان التسجيل — Mellou Brain Cup", fr: "Questionnaire d'inscription — Mellou Brain Cup", en: "Registration Survey — Mellou Brain Cup" },
      text: { ar: "رابط الاستبيان للتسجيل في مسابقة Mellou Brain Cup.", fr: "Lien du questionnaire d'inscription au concours Mellou Brain Cup.", en: "Registration survey link for the Mellou Brain Cup competition." },
      url: "https://mmo176amed-afk.github.io/mellou-brain-cup/" },
    { cat: "survey", icon: "🏜️", img: "",
      title: { ar: "استبيان التسجيل — باب الصحراء", fr: "Questionnaire d'inscription — BabSahra", en: "Registration Survey — BabSahra" },
      text: { ar: "رابط الاستبيان للتسجيل في مسابقة باب الصحراء.", fr: "Lien du questionnaire d'inscription au concours BabSahra.", en: "Registration survey link for the BabSahra competition." },
      url: "https://mmo176amed-afk.github.io/BabSahra/" },
    { cat: "program", icon: "🍬", img: "",
      title: { ar: "Houtane Sweets — إدارة مصنع حلويات", fr: "Houtane Sweets : gestion de pâtisserie", en: "Houtane Sweets: bakery management" },
      text: { ar: "برنامج لإدارة المنتجات والزبائن والفواتير والتوزيع والمخزون.", fr: "Logiciel de gestion des produits, clients, factures, distribution et stock.", en: "Software for products, clients, invoices, distribution and stock." },
      url: "https://mmo176amed-afk.github.io/houtane-sweets/" },
    { cat: "platform", icon: "🏫", img: "",
      title: { ar: "School Manager DZ", fr: "School Manager DZ", en: "School Manager DZ" },
      text: { ar: "نظام ويب لإدارة المؤسسة المدرسية.", fr: "Système web de gestion d'établissement scolaire.", en: "Web system for school management." },
      url: "https://school-manager-dz.vercel.app/" },
    { cat: "platform", icon: "🗓️", img: "",
      title: { ar: "SchoolLemmou — مولّد جداول التوقيت", fr: "SchoolLemmou : générateur d'emplois du temps", en: "SchoolLemmou: timetable generator" },
      text: { ar: "نظام ذكي لتوليد التوقيت المدرسي للمؤسسات الجزائرية.", fr: "Système intelligent de génération d'emplois du temps pour les établissements algériens.", en: "Smart timetable generation system for Algerian schools." },
      url: "" },
    { cat: "book", icon: "📘", img: "images/rubik-book-1.jpg",
      title: { ar: "سلسلة كتب مكعب روبيك (3 أجزاء)", fr: "Collection Rubik's Cube (3 tomes)", en: "Rubik's Cube book series (3 parts)" },
      text: { ar: "ثمانية مراحل لحل المكعب، عالم الاختراق، وحلّ المكعب معصوب العينين.", fr: "Huit étapes de résolution, techniques avancées et résolution les yeux bandés.", en: "Eight solving stages, advanced techniques and blindfolded solving." },
      url: "#books" },
    { cat: "robotics", icon: "🏎️", img: "",
      title: { ar: "سيارة ESP32 متحكَّم بها عن بعد", fr: "Voiture ESP32 télécommandée", en: "ESP32 remote-controlled car" },
      text: { ar: "سيارة روبوتية تُتحكَّم بها عبر الهاتف.", fr: "Voiture robotisée pilotée depuis un téléphone.", en: "A robotic car controlled from a phone." },
      url: "" },
    { cat: "robotics", icon: "🔥", img: "",
      title: { ar: "رادار كشف الحريق", fr: "Radar de détection d'incendie", en: "Fire-detection radar" },
      text: { ar: "نموذج أولي بأردوينو يكتشف النار ويشغّل مضخة ماء تلقائياً.", fr: "Prototype Arduino qui détecte le feu et active une pompe à eau.", en: "Arduino prototype that detects fire and triggers a water pump." },
      url: "" }
  ],

  /* ---------- الدورات والإعلانات ---------- */
  courses: [
    { icon: "🧮", status: "open",
      title: { ar: "دورة الحساب الذهني — المستوى الأول", fr: "Formation calcul mental, niveau 1", en: "Mental arithmetic course, level 1" },
      text: { ar: "للأطفال من 6 إلى 12 سنة. حصص ممتعة وتمارين أسبوعية.", fr: "Pour les enfants de 6 à 12 ans. Séances ludiques et exercices hebdomadaires.", en: "For children aged 6 to 12. Fun sessions and weekly exercises." },
      date: { ar: "يُحدَّد قريباً", fr: "Date à confirmer", en: "Date to be announced" },
      price: "" },
    { icon: "🧊", status: "soon",
      title: { ar: "دورة مكعب روبيك", fr: "Formation Rubik's Cube", en: "Rubik's Cube course" },
      text: { ar: "تعلّم حلّ المكعب بطريقة مبسّطة وتحدّيات سرعة.", fr: "Apprenez à résoudre le cube simplement, avec défis de vitesse.", en: "Learn to solve the cube simply, with speed challenges." },
      date: { ar: "قريباً", fr: "Bientôt", en: "Coming soon" },
      price: "" },
    { icon: "🤖", status: "soon",
      title: { ar: "ورشة روبوتيك STEM", fr: "Atelier robotique STEM", en: "STEM robotics workshop" },
      text: { ar: "نبني روبوتاً صغيراً ونبرمجه بأنفسنا.", fr: "Nous construisons et programmons un petit robot.", en: "We build and program a small robot ourselves." },
      date: { ar: "قريباً", fr: "Bientôt", en: "Coming soon" },
      price: "" }
  ],

  /* ---------- المتجر ---------- */
  shop: [
    { icon: "📘", img: "images/rubik-book-1.jpg",
      title: { ar: "ثمانية مراحل لحل مكعب الروبيك — الجزء الأول", fr: "Huit étapes pour résoudre le Rubik's Cube : tome 1", en: "Eight stages to solve the Rubik's Cube: part 1" },
      text: { ar: "كتاب في كل بيت: تعلّم حلّ المكعب بدون معلم.", fr: "Un livre dans chaque foyer : apprenez à résoudre le cube sans professeur.", en: "A book in every home: learn to solve the cube without a teacher." },
      price: "" },
    { icon: "📗", img: "",
      title: { ar: "عالم اختراق مكعب الروبيك — الجزء الثاني", fr: "Percer les secrets du Rubik's Cube : tome 2", en: "Breaking into the Rubik's Cube world: part 2" },
      text: { ar: "الجزء الثاني من السلسلة.", fr: "Le deuxième tome de la collection.", en: "The second book in the series." },
      price: "" },
    { icon: "📙", img: "",
      title: { ar: "حل مكعب الروبيك معصوب العينين — الجزء الثالث", fr: "Rubik's Cube les yeux bandés : tome 3", en: "Blindfolded Rubik's Cube: part 3" },
      text: { ar: "الجزء الثالث من السلسلة.", fr: "Le troisième tome de la collection.", en: "The third book in the series." },
      price: "" }
  ],

  /* ---------- نصوص الواجهة ---------- */
  ui: {
    nav: {
      about:    { ar: "من أنا", fr: "À propos", en: "About" },
      services: { ar: "مجالاتي", fr: "Domaines", en: "Expertise" },
      zed:      { ar: "ZED Soroban", fr: "ZED Soroban", en: "ZED Soroban" },
      books:    { ar: "كتبي", fr: "Livres", en: "Books" },
      works:    { ar: "أعمالي", fr: "Réalisations", en: "Works" },
      courses:  { ar: "الدورات", fr: "Formations", en: "Courses" },
      shop:     { ar: "المتجر", fr: "Boutique", en: "Shop" },
      contact:  { ar: "تواصل", fr: "Contact", en: "Contact" }
    },
    cta:        { ar: "تواصل معي", fr: "Me contacter", en: "Contact me" },
    seeWorks:   { ar: "شاهد أعمالي", fr: "Voir mes réalisations", en: "See my works" },
    servicesH:  { ar: "ماذا أُدرّب؟", fr: "Que j'enseigne", en: "What I teach" },
    booksH:     { ar: "من إصداراتي", fr: "Mes publications", en: "My publications" },
    worksH:     { ar: "أعمالي ومشاريعي", fr: "Mes réalisations", en: "My works & projects" },
    coursesH:   { ar: "الدورات والإعلانات", fr: "Formations et annonces", en: "Courses & announcements" },
    shopH:      { ar: "المتجر", fr: "Boutique", en: "Shop" },
    contactH:   { ar: "تواصل معي", fr: "Contactez-moi", en: "Get in touch" },
    contactP:   { ar: "اختر الوسيلة الأنسب لك، وأرد عليك في أقرب وقت.", fr: "Choisissez le moyen qui vous convient, je réponds au plus vite.", en: "Pick whichever channel suits you, I'll reply as soon as I can." },
    visitZed:   { ar: "زيارة المنصة", fr: "Visiter la plateforme", en: "Visit the platform" },
    gamesH:     { ar: "ألعاب المنصة", fr: "Jeux de la plateforme", en: "Platform games" },
    since:      { ar: "منذ", fr: "Depuis", en: "Since" },
    volumesH:   { ar: "الأجزاء", fr: "Les tomes", en: "The volumes" },
    orderBook:  { ar: "اطلب الكتاب", fr: "Commander le livre", en: "Order the book" },
    isbn:       { ar: "ردمك (ISBN)", fr: "ISBN", en: "ISBN" },
    open:       { ar: "افتح", fr: "Ouvrir", en: "Open" },
    details:    { ar: "التفاصيل", fr: "Détails", en: "Details" },
    register:   { ar: "سجّل الآن", fr: "S'inscrire", en: "Register" },
    order:      { ar: "اطلب الآن", fr: "Commander", en: "Order now" },
    askPrice:   { ar: "اتصل لمعرفة السعر", fr: "Prix sur demande", en: "Price on request" },
    soonBtn:    { ar: "اسأل عنها", fr: "Se renseigner", en: "Ask about it" },
    empty:      { ar: "لا توجد عناصر في هذا القسم بعد.", fr: "Aucun élément pour l'instant.", en: "Nothing here yet." },
    all:        { ar: "الكل", fr: "Tout", en: "All" },
    cats: {
      platform: { ar: "منصات", fr: "Plateformes", en: "Platforms" },
      survey:   { ar: "استبيانات", fr: "Questionnaires", en: "Surveys" },
      program:  { ar: "برامج", fr: "Logiciels", en: "Software" },
      book:     { ar: "كتب", fr: "Livres", en: "Books" },
      robotics: { ar: "روبوتيك", fr: "Robotique", en: "Robotics" },
      other:    { ar: "أخرى", fr: "Autres", en: "Other" }
    },
    status: {
      open:   { ar: "التسجيل مفتوح", fr: "Inscriptions ouvertes", en: "Registration open" },
      soon:   { ar: "قريباً", fr: "Bientôt", en: "Coming soon" },
      closed: { ar: "انتهت", fr: "Terminée", en: "Finished" }
    },
    waCourse: { ar: "مرحباً، أريد التسجيل في: ", fr: "Bonjour, je souhaite m'inscrire à : ", en: "Hello, I'd like to register for: " },
    waOrder:  { ar: "مرحباً، أريد طلب: ", fr: "Bonjour, je souhaite commander : ", en: "Hello, I'd like to order: " },
    waHello:  { ar: "مرحباً محمد", fr: "Bonjour Mohamed", en: "Hello Mohamed" },
    rights:   { ar: "جميع الحقوق محفوظة", fr: "Tous droits réservés", en: "All rights reserved" }
  }
};
