// ================================================================
// 1. DATA
// ================================================================

// Product Data
const fishProducts = [
    { id: 1, name: 'میگو پرلود بندرعباس', price: 580000, weight: '۵۰۰-۸۰۰ گرم', catchDate: 'امروز',
        freshness: 'fresh', type: 'shrimp',
        img: 'https://kimi-web-img.moonshot.cn/img/www.fresh-cornish-fish.co.uk/7adb9e31e41d10da32f6cd6dd197fa46ce4a16a4.jpg' },
    { id: 2, name: 'قزل‌آلای تازه رودخانه‌ای', price: 320000, weight: '۱-۱.۵ کیلوگرم', catchDate: 'امروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/thewrightbrothers.co.uk/071e629584369054608dcf9a5a405bef78450c36.jpg' },
    { id: 3, name: 'ماهی سفید خلیج فارس', price: 450000, weight: '۸۰۰-۱.۲ کیلوگرم', catchDate: 'دیروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/www.ninjafood.com.sg/7d95261219945c7c050a53cdd81a42b1596c81a0.jpg' },
    { id: 4, name: 'حلوا ماهی (سرخو)', price: 680000, weight: '۶۰۰-۹۰۰ گرم', catchDate: 'امروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/pickfreshfish.com/c6f61e5c424dd021e26de5d8764eaf0443adba69.webp' },
    { id: 5, name: 'شاه‌ماهی صید امروز', price: 390000, weight: '۳۰۰-۵۰۰ گرم', catchDate: 'امروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/cityfish.com/2194b1e4559d2e3f542983fc097bba002d10886b.jpg' },
    { id: 6, name: 'ماهی هامور خلیج فارس', price: 750000, weight: '۱.۵-۲.۵ کیلوگرم', catchDate: 'دیروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/katiesseafood.com/7d757bea6b34fd559a3937b064991ed35ade1398.jpg' },
    { id: 7, name: 'میگو منجمد ۴۰-۵۰', price: 420000, weight: '۱ کیلوگرم', catchDate: 'منجمد',
        freshness: 'frozen', type: 'shrimp',
        img: 'https://kimi-web-img.moonshot.cn/img/www.ulmapackaging.com/03601b3a9cb441cf7e13df6ab7e2fbadf5510bcf.jpeg' },
    { id: 8, name: 'ماهی کفال منجمد', price: 280000, weight: '۸۰۰ گرم', catchDate: 'منجمد',
        freshness: 'frozen', type: 'frozen',
        img: 'https://kimi-web-img.moonshot.cn/img/intershellseafood.com/32d0f1bffcd7e7026f9a02d23252b4289cf90bff.png' },
    { id: 9, name: 'فیل‌ماهی تازه', price: 520000, weight: '۲-۳ کیلوگرم', catchDate: 'امروز',
        freshness: 'fresh', type: 'fresh',
        img: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/24fbb95ac9e3a8344f734d4989b6d1432911fbb7.jpg' },
];

const accessories = [
    { id: 101, name: 'دستبند صدف طبیعی', price: 350000, cat: 'shell',
        img: 'https://kimi-web-img.moonshot.cn/img/kinnstudio.com/9d4822e3e289826e9357725f3081c5728710a372.jpg' },
    { id: 102, name: 'گردنبند مروارید خلیجی', price: 890000, cat: 'pearl',
        img: 'https://kimi-web-img.moonshot.cn/img/chandranipearls.in/e006a259ed849c0781cdc993561813b195539a7d.jpg' },
    { id: 103, name: 'انگشتر سنگ مرجان', price: 450000, cat: 'stone',
        img: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/3bf58b97f22d1d035709eadf93d8d0f079a500c1.jpg' },
    { id: 104, name: 'ست زیورآلات صدفی', price: 1200000, cat: 'shell',
        img: 'https://kimi-web-img.moonshot.cn/img/www.crunchyfashion.com/d3fa8696e035d30443c7e0c6a2ffd1959f72d0a3.jpg' },
    { id: 105, name: 'گوشواره مروارید قطره‌ای', price: 560000, cat: 'pearl',
        img: 'https://kimi-web-img.moonshot.cn/img/www.linjer.co/dba39d2bc3fb3bd386e1af5435954dd5cd2b36e5.jpg' },
    { id: 106, name: 'دستبند سنگ دریایی', price: 280000, cat: 'stone',
        img: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/3bf58b97f22d1d035709eadf93d8d0f079a500c1.jpg' },
    { id: 107, name: 'پلاک صدف مرواریدی', price: 380000, cat: 'shell',
        img: 'https://kimi-web-img.moonshot.cn/img/cdn11.bigcommerce.com/cbdca67c7f11f876275c1945a7b117d15ba4f8db.jpg' },
    { id: 108, name: 'نیم‌ست مروارید اصل', price: 1500000, cat: 'pearl',
        img: 'https://kimi-web-img.moonshot.cn/img/cdn.salla.sa/d2040b2d552d5f70ddf7482fdbd5fce5c2014c7f.jpg' },
];

// Provinces & Cities
const provincesData = {
    'آذربایجان شرقی': ['تبریز', 'مراغه', 'مرند', 'میانه', 'اهر', 'بناب', 'سراب', 'هشترود', 'ملکان', 'ممقان', 'اسکو',
        'بستان‌آباد', 'تیکم‌داش', 'چایپاره', 'خدابنده‌لو', 'سلطانیه', 'شبستر', 'عجب‌شیر', 'کلیبر', 'گوزدک', 'ملایر',
        'هریس', 'ورزقان', 'بخشایش', 'جلفا', 'خمارلو', 'صوفیان'
    ],
    'آذربایجان غربی': ['ارومیه', 'خوی', 'میاندوآب', 'بوکان', 'مهاباد', 'سلماس', 'نقده', 'پیرانشهر', 'ماکو', 'تکاب',
        'شاهین‌دژ', 'سردشت', 'شنکوه', 'اشنویه', 'نالوس', 'باروق', 'بازرگان', 'پلدشت', 'چالدران', 'سیمینه', 'سیلوانه',
        'کوثار', 'گچ‌ساز', 'ماکو'
    ],
    'اردبیل': ['اردبیل', 'پارس‌آباد', 'مشکین‌شهر', 'خلخال', 'گرمی', 'بیله‌سوار', 'نمین', 'نیر', 'کوثر', 'سرعین', 'عنبران',
        'تازه‌کند', 'آرمرده', 'اصلاندوز', 'شاطی', 'فخرabad', 'هیر', 'نوشینه'
    ],
    'اصفهان': ['اصفهان', 'کاشان', 'خمینی‌شهر', 'نجف‌آباد', 'شاهین‌شهر', 'فلاورجان', 'لنجان', 'مبارکه', 'نطنز', 'نائین',
        'اردستان', 'تیران', 'سمیرم', 'شهرضا', 'گلپایگان', 'خوانسار', 'فریدون‌شهر', 'بوئین‌زهرا', 'آران و بیدگل',
        'دهاقان', 'برخوار', 'جی', 'تيران', 'میمه'
    ],
    'البرز': ['کرج', 'فردیس', 'نظرآباد', 'هشتگرد', 'اشتهارد', 'طالقان', 'چهارباغ', 'محمدشهر', 'مشکین‌دشت', 'پیشوا',
        'کردان', 'آسارا', 'بیلقان', 'تنکمان', 'سرتپه', 'عسگرآباد', 'فردیس', 'کوهسار', 'گرمدره', 'ماهدشت', 'نظم‌آباد',
        'هشتگرد'
    ],
    'ایلام': ['ایلام', 'دهلران', 'ایوان', 'آبدانان', 'دره‌شهر', 'مهران', 'چرداول', 'ملکشاهی', 'سرابله', 'بدره', 'شهران',
        'پهلوان‌شهر', 'مورموری'
    ],
    'بوشهر': ['بوشهر', 'برازجان', 'کنگان', 'دشتی', 'گناوه', 'دیلم', 'دیر', 'جم', 'عسلویه', 'خورموج', 'ریشهر', 'تنگستان',
        'خارک', 'ناصری', 'شنبه', 'بندرگناوه', 'بندردیر', 'بندرکنگان'
    ],
    'تهران': ['تهران', 'ری', 'شهرری', 'اسلامشهر', 'پاکدشت', 'ورامین', 'قرچک', 'فیروزکوه', 'دماوند', 'پیشوا', 'رباط‌کریم',
        'ملارد', 'شهریار', 'اندیشه', 'بهارستان', 'قدس', 'فردیس', 'حسن‌آباد', 'باقرشهر', 'صالح‌آباد', 'شهر جدید پرند',
        'شهر جدید هشتگرد', 'طالقان', 'لواسان', 'شمشک', 'فشم', 'رویان', 'نodar', 'رباط‌کریم', 'پاکدشت', 'قشلاق', 'آسارا'
    ],
    'چهارمحال و بختیاری': ['شهرکرد', 'بروجن', 'فارسان', 'لردگان', 'اردل', 'کوهرنگ', 'سامان', 'بن', 'جونقان', 'شارقان',
        'نافچ', 'بلداجی', 'هفشجان', 'ناغان', 'دستنا', 'امیان'
    ],
    'خراسان جنوبی': ['بیرجند', 'قائن', 'فردوس', 'طبس', 'نهبندان', 'سربیشه', 'بشرویه', 'خوسف', 'درمیان', 'زیرکوه', 'رابر',
        'طبس', 'سرایان', 'سه‌قلعه', 'شاهداد', 'عشق‌آباد'
    ],
    'خراسان رضوی': ['مشهد', 'نیشابور', 'سبزوار', 'تربت‌حیدریه', 'قوچان', 'کاشمر', 'گناباد', 'تربت‌جام', 'خواف', 'چناران',
        'فریمان', 'درگز', 'تایباد', 'خلیل‌آباد', 'کاشمر', 'گلبهار', 'نقاب', 'بجستان', 'صالح‌آباد', 'رشتخوار',
        'فرهادگرد', 'لطف‌آباد', 'میامی'
    ],
    'خراسان شمالی': ['بجنورد', 'شیروان', 'اسفراین', 'جاجرم', 'آشخانه', 'فاروج', 'مانه و سملقان', 'گرمه', 'راز و جرگلان',
        'گیسو', 'بام و صفی‌آباد', 'قاضی', 'لوشان'
    ],
    'خوزستان': ['اهواز', 'دزفول', 'آبادان', 'خرمشهر', 'شوشتر', 'بهبهان', 'ماهشهر', 'ایذه', 'شادگان', 'اندیمشک',
        'مسجدسلیمان', 'رامهرمز', 'شوش', 'رامشیر', 'هندیجان', 'الشتر', 'باغ‌ملک', 'تفتان', 'جندی‌شاپور', 'حسینیه',
        'دزپارت', 'سلیمان‌شهر', 'صالح‌شهر', 'کوت‌عبدالله', 'مینوشهر'
    ],
    'زنجان': ['زنجان', 'ابهر', 'خرمدره', 'قیدار', 'ماه‌نشان', 'طارم', 'سلطانیه', 'ایجرود', 'خدابنده', 'سجاس', 'چورزق',
        'دریا', 'رازلیق', 'زنجان‌رود', 'صائین', 'عجب‌شیر', 'قره‌پشتلو', 'گراب‌گون', 'ماهنشان'
    ],
    'سمنان': ['سمنان', 'شاهرود', 'دامغان', 'گرمسار', 'مهدی‌شهر', 'سرخه', 'آرادان', 'بسطام', 'جعفرآباد', 'حومه سمنان',
        'دلیجان', 'شاهمیرزاد', 'شمیران', 'کلاته‌پایین', 'میامی'
    ],
    'سیستان و بلوچستان': ['زاهدان', 'چابهار', 'زابل', 'ایرانشهر', 'سراوان', 'خاش', 'نیکشهر', 'کنارک', 'راسک', 'دلگان',
        'سرباز', 'میرجاوه', 'نصرت‌آباد', 'هامون', 'هیرمند', 'قصرقند', 'کنگار', 'پیشین', 'تفتان', 'جالق'
    ],
    'فارس': ['شیراز', 'مرودشت', 'جهرم', 'فسا', 'لار', 'کازرون', 'داراب', 'آباده', 'نورآباد', 'قیروکارزین', 'ممسنی',
        'خرم‌بید', 'فیروزآباد', 'اصفهان', 'بهارستان', 'بوانات', 'پاسارگاد', 'جهرم', 'حاجی‌آباد', 'خفر', 'خنج', 'رستم',
        'سروستان', 'سیاه‌چشمه', 'فراشبند', 'قیر', 'کوار', 'گل‌گشت', 'لارستان', 'مثنوی', 'نورآباد', 'نی‌ریز', 'اردکان',
        'ارسنجان', 'اشکنان', 'باب‌انار', 'بازفت', 'بهمن', 'بوانات', 'جویم', 'حاجی‌آباد', 'خام‌ری', 'خشت', 'داریان',
        'رامجرد', 'زره‌پول', 'سروستان', 'صغد', 'عسکران', 'قطب‌آباد', 'کامفیروز', 'کوه‌نجک', 'گراش', 'مروارید', 'نویدشهر',
        'هرمود'
    ],
    'قزوین': ['قزوین', 'تاکستان', 'آبیک', 'بوئین‌زهرا', 'البرز', 'آوج', 'خرم‌رود', 'رودبار الموت', 'شال',
        'معلم‌کلایه', 'نرجه', 'ویک'
    ],
    'قم': ['قم', 'جعفریه', 'سلفچگان', 'قمصر', 'کهک', 'دستجرد', 'خلجستان', 'قنوات'],
    'کردستان': ['سنندج', 'سقز', 'مریوان', 'بانه', 'قروه', 'بیجار', 'کامیاران', 'دیواندره', 'دهگلان', 'سروآباد', 'پاوه',
        'جوانرود', 'اورامانات', 'باینگان', 'چرداول', 'دالاهو', 'زیویه', 'شاهو', 'صلوات‌آباد', 'کرند', 'کوشان', 'گاورود'
    ],
    'کرمان': ['کرمان', 'رفسنجان', 'جیرفت', 'سیرجان', 'بم', 'زرند', 'کهنوج', 'بافت', 'راور', 'شهربابک', 'عنبرآباد',
        'بردسیر', 'ارزوئیه', 'بم', 'جیرفت', 'حاجی‌آباد', 'راور', 'زرند', 'سیرجان', 'شهر بابک', 'عنبرآباد', 'فهرج',
        'قلعه گنج', 'کوهبنان', 'ماهان', 'نرماشیر', 'نوق', 'یزد'
    ],
    'کرمانشاه': ['کرمانشاه', 'اسلام‌آباد غرب', 'سرپل ذهاب', 'جوانرود', 'پاوه', 'سنقر', 'کنگاور', 'هرسین', 'گیلان‌غرب',
        'صحنه', 'پاوه', 'قصرشیرین', 'دانگه', 'دالاهو', 'روانسر', 'سرابله', 'صحنه', 'گیلان غرب', 'هلیلان'
    ],
    'کهگیلویه و بویراحمد': ['یاسوج', 'دوگنبدان', 'گچساران', 'دهدشت', 'سی‌سخت', 'چرام', 'لنده', 'باشت', 'پاتاوه',
        'بهمئی', 'دشت‌روم', 'شاه‌بهادر', 'کوهمره', 'لنده', 'مارگون', 'نورآباد'
    ],
    'گلستان': ['گرگان', 'گنبدکاووس', 'آق‌قلا', 'علی‌آباد کتول', 'مینودشت', 'کردکوی', 'بندرترکمن', 'آزادشهر', 'رامیان',
        'کلاله', 'گالیکش', 'مرداویج', 'نوشهر', 'صالح‌آباد', 'نگین‌شهر'
    ],
    'گیلان': ['رشت', 'لاهیجان', 'بندرانزلی', 'لنگرود', 'آستارا', 'تالش', 'رودسر', 'صومعه‌سرا', 'فومن', 'آستانه اشرفیه',
        'شفت', 'سیاهکل', 'املش', 'رهال', '.masouleh', 'منجیل', 'چابکسر', 'حویق', 'خشکبیجار', 'دیلمان', 'سنگر',
        'کوثر', 'کیاشهر', 'لوشان'
    ],
    'لرستان': ['خرم‌آباد', 'بروجرد', 'دورود', 'الیگودرز', 'کوهدشت', 'ازنا', 'نورآباد', 'پلدختر', 'الشتر', 'ازنا', 'چگنی',
        'رommeh', 'شوراب', 'فارسان', 'کوهدشت', 'نورآباد', 'ورزنه'
    ],
    'مازندران': ['ساری', 'بابل', 'آمل', 'بهشهر', 'قائم‌شهر', 'تنکابن', 'نوشهر', 'چالوس', 'رامسر', 'نکا', 'بابلسر',
        'محمودآباد', 'فریدونکنار', 'جویبار', 'سوادکوه', 'شهمیرزاد', 'گلوگاه', 'مرزی‌نکا', 'میاندورود'
    ],
    'مرکزی': ['اراک', 'ساوه', 'خمین', 'دلیجان', 'محلات', 'شازند', 'تفرش', 'آشتیان', 'کمیجان', 'زرندیه', 'سلفچگان',
        'نراق', 'ششتمد', 'غرق‌آباد', 'فراهان'
    ],
    'هرمزگان': ['بندرعباس', 'بندرلنگه', 'میناب', 'قشم', 'کیش', 'رودان', 'حاجی‌آباد', 'بستک', 'بشاگرد', 'جاسک', 'پارسیان',
        'خمیر', 'رودان', 'سیریک', 'فین', 'گاوبندی', 'جزیره هنگام', 'جزیره لارک', 'جزیره قشم', 'بندر چارک', 'بندر جاسک',
        'بندر خمیر', 'بندرلنگه', 'بندر مقنا', 'حاجی‌آباد', 'سندرک', 'کوهستک', 'لارک', 'ملاشیر', 'نخلستاق', 'هرمز'
    ],
    'همدان': ['همدان', 'ملایر', 'نهاوند', 'تویسرکان', 'اسدآباد', 'بهار', 'کبودرآهنگ', 'رزن', 'فامنین', 'قهاوند',
        'گل‌تپه', 'مریانج', 'جورقان', 'درازان', 'زنگنه', 'صالح‌آباد', 'کلهر'
    ],
    'یزد': ['یزد', 'میبد', 'اردکان', 'تفت', 'مهریز', 'ابرکوه', 'بافق', 'هرات', 'اشکذر', 'بهرمان', 'بهاباد', 'خضرآباد',
        'دیهوک', 'زوارقان', 'سرداب', 'شهرک', 'عقدا', 'فهرج', 'مروست', 'ناحیه‌بهرمان', 'ندوشن'
    ]
};

// Shipping Costs
const shippingByProvince = {
    'هرمزگان': { cost: 0, time: 'همان روز' },
    'بوشهر': { cost: 35000, time: '۲۴ ساعت' },
    'خوزستان': { cost: 40000, time: '۲۴ ساعت' },
    'فارس': { cost: 45000, time: '۲۴ ساعت' },
    'چهارمحال و بختیاری': { cost: 45000, time: '۳۶ ساعت' },
    'کهگیلویه و بویراحمد': { cost: 50000, time: '۳۶ ساعت' },
    'کرمان': { cost: 50000, time: '۳۶ ساعت' },
    'سیستان و بلوچستان': { cost: 55000, time: '۴۸ ساعت' },
    'اصفهان': { cost: 50000, time: '۳۶ ساعت' },
    'یزد': { cost: 50000, time: '۳۶ ساعت' },
    'مرکزی': { cost: 55000, time: '۳۶ ساعت' },
    'قم': { cost: 50000, time: '۲۴ ساعت' },
    'تهران': { cost: 55000, time: '۲۴ ساعت' },
    'البرز': { cost: 55000, time: '۲۴ ساعت' },
    'سمنان': { cost: 55000, time: '۳۶ ساعت' },
    'قزوین': { cost: 55000, time: '۳۶ ساعت' },
    'لرستان': { cost: 55000, time: '۴۸ ساعت' },
    'همدان': { cost: 60000, time: '۴۸ ساعت' },
    'کردستان': { cost: 60000, time: '۴۸ ساعت' },
    'کرمانشاه': { cost: 65000, time: '۴۸ ساعت' },
    'ایلام': { cost: 60000, time: '۴۸ ساعت' },
    'گلستان': { cost: 65000, time: '۴۸ ساعت' },
    'مازندران': { cost: 60000, time: '۴۸ ساعت' },
    'گیلان': { cost: 60000, time: '۴۸ ساعت' },
    'زنجان': { cost: 60000, time: '۴۸ ساعت' },
    'اردبیل': { cost: 70000, time: '۴۸ ساعت' },
    'آذربایجان شرقی': { cost: 75000, time: '۴۸ ساعت' },
    'آذربایجان غربی': { cost: 70000, time: '۴۸ ساعت' },
    'خراسان رضوی': { cost: 70000, time: '۴۸ ساعت' },
    'خراسان جنوبی': { cost: 65000, time: '۴۸ ساعت' },
    'خراسان شمالی': { cost: 70000, time: '۴۸ ساعت' },
};


// ================================================================
// 2. STATE
// ================================================================

let cart = [];
let currentFishFilter = 'all';
let currentAccFilter = 'all';
let selectedPayment = 'online';
let discountAmount = 0;
let shippingCostVal = 0;


// ================================================================
// 3. UTILITY FUNCTIONS
// ================================================================

function toFa(n) {
    const d = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(n).replace(/\d/g, c => d[c]);
}

function formatPrice(p) {
    return toFa(p.toLocaleString('en-US')) + ' تومان';
}

function getSubtotal() {
    return cart.reduce((s, c) => s + c.price * c.qty, 0);
}


// ================================================================
// 4. RENDER FUNCTIONS
// ================================================================

function renderFish() {
    const grid = document.getElementById('products-grid');
    const filtered = currentFishFilter === 'all' ?
        fishProducts :
        fishProducts.filter(p => {
            if (currentFishFilter === 'shrimp') return p.type === 'shrimp';
            return p.freshness === currentFishFilter;
        });

    grid.innerHTML = filtered.map((p, i) => `
        <div class="fish-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 reveal reveal-delay-${(i % 3) + 1}" onclick="openProductDetail(${p.id},'fish')" style="cursor:pointer">
            <div class="relative overflow-hidden h-52 md:h-56">
                <img src="${p.img}" alt="${p.name}" class="fish-img w-full h-full object-cover">
                <div class="absolute top-3 right-3">
                    <span class="freshness-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${p.catchDate === 'امروز' ? 'bg-green-500 text-white' : p.catchDate === 'منجمد' ? 'bg-sky-500 text-white' : 'bg-yellow-500 text-white'}">
                        <i class="fa-solid fa-${p.catchDate === 'امروز' ? 'check-circle' : p.catchDate === 'منجمد' ? 'snowflake' : 'clock'} text-[9px]"></i>
                        ${p.catchDate === 'امروز' ? 'صید امروز' : p.catchDate === 'منجمد' ? 'منجمد' : 'صید دیروز'}
                    </span>
                </div>
                <div class="absolute top-3 left-3">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-deep-blue/90 text-white backdrop-blur-sm">
                        <i class="fa-solid fa-snowflake text-sky-300 text-[9px]"></i>ارسال یخی
                    </span>
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-deep-blue text-sm mb-2">${p.name}</h3>
                <div class="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span><i class="fa-solid fa-weight-hanging ml-1"></i>${p.weight}</span>
                    <span><i class="fa-solid fa-calendar-day ml-1"></i>${p.catchDate}</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                    <div class="text-coral font-black text-base whitespace-nowrap">${formatPrice(p.price)}</div>
                    <button onclick="event.stopPropagation();addToCart(${p.id},'fish')" class="add-to-cart-btn text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap">
                        <i class="fa-solid fa-cart-plus text-sm"></i>افزودن به سبد
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    observeReveals();
}

function renderAccessories() {
    const grid = document.getElementById('accessories-grid');
    const filtered = currentAccFilter === 'all' ?
        accessories :
        accessories.filter(a => a.cat === currentAccFilter);

    grid.innerHTML = filtered.map((a, i) => `
        <div class="accessory-card rounded-2xl overflow-hidden reveal reveal-delay-${(i % 4) + 1}" onclick="openProductDetail(${a.id},'acc')" style="cursor:pointer">
            <div class="relative overflow-hidden h-64">
                <img src="${a.img}" alt="${a.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute bottom-3 right-3">
                    <span class="text-gold text-[10px] font-bold">${a.cat === 'shell' ? 'صدف' : a.cat === 'pearl' ? 'مروارید' : 'سنگ دریایی'}</span>
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-white text-sm mb-3">${a.name}</h3>
                <div class="flex items-center justify-between gap-2">
                    <div class="text-gold font-black text-sm whitespace-nowrap">${formatPrice(a.price)}</div>
                    <button onclick="event.stopPropagation();addToCart(${a.id},'acc')" class="add-acc-btn text-deep-blue px-3 py-2 rounded-lg text-[11px] font-bold flex items-center gap-1.5 whitespace-nowrap">
                        <i class="fa-solid fa-cart-plus text-xs"></i>افزودن
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    observeReveals();
}


// ================================================================
// 5. CART FUNCTIONS
// ================================================================

function addToCart(id, type) {
    const allProducts = [...fishProducts, ...accessories];
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${product.name} به سبد اضافه شد`, 'success');
    flyFish(type);
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    showToast('محصول از سبد حذف شد', 'info');
}

function updateCartUI() {
    // Sync with localStorage
    localStorage.setItem('khalijtaze_cart', JSON.stringify(cart));

    const count = cart.reduce((s, c) => s + c.qty, 0);
    const countEl = document.getElementById('cart-count');
    countEl.textContent = toFa(count);
    countEl.classList.toggle('hidden', count === 0);

    const itemsEl = document.getElementById('cart-items');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-footer');

    if (!cart.length) {
        itemsEl.classList.add('hidden');
        itemsEl.innerHTML = '';
        emptyEl.classList.remove('hidden');
        footerEl.classList.add('hidden');
        document.getElementById('cart-subtotal').textContent = '۰ تومان';
        return;
    }

    emptyEl.classList.add('hidden');
    itemsEl.classList.remove('hidden');
    footerEl.classList.remove('hidden');

    itemsEl.innerHTML = cart.map(c => `
        <div class="flex gap-3 mb-4 bg-white rounded-xl p-3 border border-gray-100">
            <img src="${c.img}" alt="" class="w-16 h-16 rounded-lg object-cover flex-shrink-0">
            <div class="flex-1 min-w-0">
                <div class="font-bold text-deep-blue text-xs leading-relaxed truncate">${c.name}</div>
                <div class="text-coral text-xs font-bold mt-1">${formatPrice(c.price * c.qty)}</div>
                <div class="flex items-center justify-between mt-2">
                    <div class="flex items-center gap-2 bg-gray-100 rounded-lg">
                        <button onclick="changeQty(${c.id},-1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-coral transition-colors text-xs">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="text-xs font-bold text-deep-blue w-5 text-center">${toFa(c.qty)}</span>
                        <button onclick="changeQty(${c.id},1)" class="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-coral transition-colors text-xs">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button onclick="removeFromCart(${c.id})" class="text-gray-300 hover:text-red-500 transition-colors p-1">
                        <i class="fa-solid fa-trash-can text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('cart-subtotal').textContent = formatPrice(getSubtotal());
}

function openCart() {
    document.getElementById('cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    const o = document.getElementById('mobile-overlay');
    o.classList.toggle('active');
    document.body.style.overflow = o.classList.contains('active') ? 'hidden' : '';
}

function flyFish(type) {
    const ci = document.querySelector('#cart-count').parentElement;
    const r = ci.getBoundingClientRect();

    const f = document.createElement('div');
    f.className = 'flying-fish';
    f.textContent = type === 'fish' ? '🐟' : '💎';
    f.style.left = (r.left - 80) + 'px';
    f.style.top = (r.top - 30) + 'px';
    document.body.appendChild(f);

    requestAnimationFrame(() => {
        f.style.left = r.left + 'px';
        f.style.top = r.top + 'px';
        f.style.transform = 'scale(.3) rotate(45deg)';
        f.style.opacity = '.5';
    });

    setTimeout(() => f.remove(), 750);
}


// ================================================================
// 6. TOAST SYSTEM
// ================================================================

function showToast(msg, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');

    const colors = {
        success: 'bg-deep-blue',
        info: 'bg-gray-700',
        error: 'bg-red-600'
    };
    const icons = {
        success: 'fa-check-circle text-green-400',
        info: 'fa-info-circle text-sky-400',
        error: 'fa-exclamation-circle text-red-300'
    };

    t.className = `toast-enter ${colors[type]} text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm pointer-events-auto`;
    t.innerHTML = `<i class="fa-solid ${icons[type]}"></i><span>${msg}</span>`;
    c.appendChild(t);

    setTimeout(() => {
        t.classList.remove('toast-enter');
        t.classList.add('toast-exit');
    }, 2500);

    setTimeout(() => t.remove(), 2900);
}


// ================================================================
// 7. SHIPPING / PROVINCE FUNCTIONS
// ================================================================

function initProvinces() {
    const sel = document.getElementById('chk-province');
    Object.keys(provincesData).sort().forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        sel.appendChild(opt);
    });
}

function onProvinceChange() {
    const province = document.getElementById('chk-province').value;
    const citySel = document.getElementById('chk-city');
    citySel.innerHTML = '';

    if (!province) {
        citySel.disabled = true;
        const o = document.createElement('option');
        o.textContent = 'ابتدا استان را انتخاب کنید';
        citySel.appendChild(o);
        document.getElementById('shipping-info-card').classList.add('hidden');
        document.getElementById('checkout-price-card').classList.add('hidden');
        return;
    }

    citySel.disabled = false;
    const def = document.createElement('option');
    def.value = '';
    def.textContent = 'انتخاب شهر...';
    citySel.appendChild(def);

    provincesData[province].forEach(c => {
        const o = document.createElement('option');
        o.value = c;
        o.textContent = c;
        citySel.appendChild(o);
    });

    updateShippingInfo();
}

function updateShippingInfo() {
    const province = document.getElementById('chk-province').value;
    const card = document.getElementById('shipping-info-card');
    const priceCard = document.getElementById('checkout-price-card');

    if (!province) {
        card.classList.add('hidden');
        priceCard.classList.add('hidden');
        return;
    }

    card.classList.remove('hidden');
    priceCard.classList.remove('hidden');

    const rate = shippingByProvince[province] || { cost: 85000, time: '۴۸ تا ۷۲ ساعت' };
    const sub = getSubtotal();
    const free = sub >= 1000000;
    shippingCostVal = free ? 0 : rate.cost;

    document.getElementById('delivery-time').textContent = rate.time;
    document.getElementById('shipping-cost').textContent = free ? 'رایگان!' : formatPrice(rate.cost);
    document.getElementById('free-shipping-msg').classList.toggle('hidden', !free);

    document.getElementById('chk-subtotal').textContent = formatPrice(sub);
    document.getElementById('chk-shipping').textContent = free ? 'رایگان' : formatPrice(rate.cost);
    document.getElementById('chk-total').textContent = formatPrice(sub + shippingCostVal);
}


// ================================================================
// 8. CHECKOUT FUNCTIONS
// ================================================================

function validateCheckout() {
    let ok = true;
    const checks = [
        { id: 'chk-fname', err: 'err-fname', min: 2 },
        { id: 'chk-lname', err: 'err-lname', min: 2 },
        { id: 'chk-phone', err: 'err-phone', min: 11 },
        { id: 'chk-postal', err: 'err-postal', min: 10 },
        { id: 'chk-province', err: 'err-province' },
        { id: 'chk-city', err: 'err-city' },
        { id: 'chk-address', err: 'err-address', min: 5 },
    ];

    checks.forEach(f => {
        const el = document.getElementById(f.id);
        const er = document.getElementById(f.err);
        const v = el.value.trim();

        if (!v || v.length < (f.min || 1)) {
            el.classList.add('error');
            er.classList.add('show');
            ok = false;
        } else {
            el.classList.remove('error');
            er.classList.remove('show');
        }
    });

    return ok;
}

function goToCheckout() {
    if (!cart.length) {
        showToast('سبد خرید خالی است', 'error');
        return;
    }
    closeCart();
    document.getElementById('checkout-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function backToCart() {
    document.getElementById('checkout-overlay').classList.remove('active');
    document.body.style.overflow = '';
    openCart();
}

function goToPayment() {
    if (!validateCheckout()) {
        showToast('لطفاً اطلاعات را کامل کنید', 'error');
        return;
    }

    document.getElementById('checkout-overlay').classList.remove('active');
    buildPaymentPage();
    document.getElementById('payment-overlay').classList.add('active');
    window.scrollTo(0, 0);
}

function backToCheckout() {
    document.getElementById('payment-overlay').classList.remove('active');
    document.getElementById('checkout-overlay').classList.add('active');
    window.scrollTo(0, 0);
}


// ================================================================
// 9. PAYMENT FUNCTIONS
// ================================================================

function buildPaymentPage() {
    const sub = getSubtotal();
    const ship = shippingCostVal;
    const total = sub + ship - discountAmount;

    document.getElementById('pay-summary-items').innerHTML = cart.map(c => `
        <div class="flex items-center gap-3">
            <img src="${c.img}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0">
            <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-deep-blue truncate">${c.name}</div>
                <div class="text-[10px] text-gray-400">${toFa(c.qty)} عدد</div>
            </div>
            <div class="text-xs font-bold text-deep-blue whitespace-nowrap">${formatPrice(c.price * c.qty)}</div>
        </div>
    `).join('');

    document.getElementById('pay-order-items').innerHTML = cart.map(c => `
        <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <img src="${c.img}" class="w-14 h-14 rounded-lg object-cover flex-shrink-0">
            <div class="flex-1 min-w-0">
                <div class="text-sm font-bold text-deep-blue">${c.name}</div>
                <div class="text-xs text-gray-400 mt-0.5">${toFa(c.qty)} عدد · واحد ${formatPrice(c.price)}</div>
            </div>
            <div class="text-sm font-bold text-deep-blue whitespace-nowrap">${formatPrice(c.price * c.qty)}</div>
        </div>
    `).join('');

    document.getElementById('pay-subtotal').textContent = formatPrice(sub);
    document.getElementById('pay-shipping').textContent = ship === 0 ? 'رایگان' : formatPrice(ship);

    if (discountAmount > 0) {
        document.getElementById('pay-discount-row').classList.remove('hidden');
        document.getElementById('pay-discount-amount').textContent = '−' + formatPrice(discountAmount);
    } else {
        document.getElementById('pay-discount-row').classList.add('hidden');
    }

    document.getElementById('pay-total').textContent = formatPrice(total);

    const province = document.getElementById('chk-province').value;
    document.getElementById('pay-delivery-time').textContent = province ? (shippingByProvince[province] || { time: '۴۸ تا ۷۲ ساعت' }).time : '—';
    document.getElementById('pay-address').textContent = (document.getElementById('chk-province').value + '، ' +
        document.getElementById('chk-city').value + '، ' +
        document.getElementById('chk-address').value) || '—';
}

function selectPayment(el) {
    document.querySelectorAll('#payment-methods .radio-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedPayment = el.dataset.method;
}

function toggleDiscount() {
    const b = document.getElementById('discount-body');
    b.classList.toggle('open');
    document.getElementById('discount-arrow').style.transform = b.classList.contains('open') ? 'rotate(180deg)' : '';
}

function toggleOrderDetails() {
    const b = document.getElementById('order-details-body');
    b.classList.toggle('open');
    document.getElementById('details-arrow').style.transform = b.classList.contains('open') ? 'rotate(180deg)' : '';
}

function applyDiscount() {
    const code = document.getElementById('discount-input').value.trim();
    const r = document.getElementById('discount-result');

    if (!code) {
        r.className = 'hidden';
        return;
    }

    if (code === 'TAZE20') {
        discountAmount = Math.round(getSubtotal() * 0.2);
        r.className = 'bg-green-50 text-green-700 border border-green-200';
        r.classList.remove('hidden');
        r.innerHTML = '<i class="fa-solid fa-check-circle ml-1"></i>کد TAZE20 اعمال شد — ۲۰٪ تخفیف';
        buildPaymentPage();
        showToast('کد تخفیف اعمال شد!', 'success');
    } else {
        discountAmount = 0;
        r.className = 'bg-red-50 text-red-600 border border-red-200';
        r.classList.remove('hidden');
        r.innerHTML = '<i class="fa-solid fa-times-circle ml-1"></i>کد تخفیف نامعتبر است';
        buildPaymentPage();
    }
}

function finalizePayment() {
    showToast('در حال اتصال به درگاه پرداخت...', 'info');
    setTimeout(() => {
        showToast('پرداخت با موفقیت انجام شد!', 'success');
        cart = [];
        discountAmount = 0;
        updateCartUI();
        document.getElementById('payment-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }, 2000);
}


// ================================================================
// 10. GENERAL / UI FUNCTIONS
// ================================================================

function updateCountdown() {
    const now = new Date();
    const cutoff = new Date(now);
    cutoff.setHours(14, 0, 0, 0);
    if (now >= cutoff) cutoff.setDate(cutoff.getDate() + 1);

    const diff = cutoff - now;
    const h = Math.floor(diff / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1e3);

    document.getElementById('cd-hours').textContent = toFa(String(h).padStart(2, '0'));
    document.getElementById('cd-minutes').textContent = toFa(String(m).padStart(2, '0'));
    document.getElementById('cd-seconds').textContent = toFa(String(s).padStart(2, '0'));
    document.getElementById('countdown-msg').classList.toggle('hidden', now.getHours() < 14);
}

function observeReveals() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(en => {
                if (en.isIntersecting) en.target.classList.add('revealed');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

function handleHeaderScroll() {
    document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 80);
    document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 600);
}

function createBubbles() {
    const container = document.getElementById('bubbles');
    for (let i = 0; i < 15; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        const s = Math.random() * 20 + 5;
        b.style.width = s + 'px';
        b.style.height = s + 'px';
        b.style.left = Math.random() * 100 + '%';
        b.style.animationDuration = (Math.random() * 8 + 6) + 's';
        b.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(b);
    }
}




// ================================================================
// PRODUCT DETAIL FUNCTIONS
// ================================================================

let currentPDProduct = null;
let currentPDQty = 1;

function openProductDetail(id, type) {
    const allProducts = [...fishProducts, ...accessories];
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    currentPDProduct = product;
    currentPDQty = 1;

    // Fill modal data
    document.getElementById('pd-img').src = product.img;
    document.getElementById('pd-img').alt = product.name;
    document.getElementById('pd-name').textContent = product.name;
    document.getElementById('pd-price').textContent = formatPrice(product.price);
    document.getElementById('pd-qty').textContent = toFa(currentPDQty);

    // Category
    const catEl = document.getElementById('pd-category');
    if (type === 'fish') {
        catEl.textContent = product.type === 'shrimp' ? 'میگو' : product.freshness === 'frozen' ? 'منجمد' : 'ماهی تازه';
    } else {
        catEl.textContent = product.cat === 'shell' ? 'زیورآلات صدفی' : product.cat === 'pearl' ? 'مروارید' : 'سنگ دریایی';
    }

    // Weight / Catch date
    const weightEl = document.getElementById('pd-weight');
    const catchEl = document.getElementById('pd-catch');
    if (type === 'fish') {
        weightEl.textContent = product.weight;
        catchEl.textContent = product.catchDate;
        document.getElementById('pd-nutrition').classList.remove('hidden');
    } else {
        weightEl.parentElement.classList.add('hidden');
        catchEl.parentElement.classList.add('hidden');
        document.getElementById('pd-nutrition').classList.add('hidden');
    }

    // Freshness badge
    const badgeEl = document.getElementById('pd-freshness-badge');
    if (type === 'fish') {
        badgeEl.innerHTML = `<span class="freshness-badge inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${product.catchDate === 'امروز' ? 'bg-green-500 text-white' : product.catchDate === 'منجمد' ? 'bg-sky-500 text-white' : 'bg-yellow-500 text-white'}"><i class="fa-solid fa-${product.catchDate === 'امروز' ? 'check-circle' : product.catchDate === 'منجمد' ? 'snowflake' : 'clock'}"></i>${product.catchDate === 'امروز' ? 'صید امروز' : product.catchDate === 'منجمد' ? 'منجمد' : 'صید دیروز'}</span>`;
    } else {
        badgeEl.innerHTML = `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gold text-deep-blue"><i class="fa-solid fa-gem"></i>اکسسوری دریایی</span>`;
    }

    // Detail page link
    const detailLink = document.getElementById('pd-detail-link');
    detailLink.href = `product-detail.html?id=${product.id}&type=${type}`;

    // Description
    const descEl = document.getElementById('pd-desc');
    if (type === 'fish') {
        descEl.textContent = `${product.name} یکی از بهترین و تازه‌ترین محصولات خلیج فارس است. این محصول مستقیماً از بندرعباس و با بسته‌بندی یخی اختصاصی ارسال می‌شود. کیفیت و تازگی این محصول تضمین شده و در صورت نارضایتی، امکان بازگشت وجه وجود دارد.`;
    } else {
        descEl.textContent = `${product.name} از بهترین مواد اولیه دریایی ساخته شده است. هر قطعه با دقت و ظرافت طراحی شده و مناسب برای هدیه دادن یا استفاده شخصی است.`;
    }

    // Show modal
    document.getElementById('product-detail-overlay').classList.remove('hidden');
    document.getElementById('product-detail-overlay').classList.add('flex', 'active');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    document.getElementById('product-detail-overlay').classList.remove('active');
    setTimeout(() => {
        document.getElementById('product-detail-overlay').classList.add('hidden');
        document.getElementById('product-detail-overlay').classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}

function changePDQty(delta) {
    currentPDQty += delta;
    if (currentPDQty < 1) currentPDQty = 1;
    if (currentPDQty > 99) currentPDQty = 99;
    document.getElementById('pd-qty').textContent = toFa(currentPDQty);
}

function addPDToCart() {
    if (!currentPDProduct) return;

    const existing = cart.find(c => c.id === currentPDProduct.id);
    if (existing) {
        existing.qty += currentPDQty;
    } else {
        cart.push({ ...currentPDProduct, qty: currentPDQty });
    }

    updateCartUI();
    showToast(`${currentPDProduct.name} (${toFa(currentPDQty)} عدد) به سبد اضافه شد`, 'success');
    closeProductDetail();
    flyFish(currentPDProduct.id < 100 ? 'fish' : 'acc');
}

// ================================================================
// 11. EVENT LISTENERS
// ================================================================

document.addEventListener('click', function(e) {
    // Fish filter buttons
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(function(b) {
            b.classList.remove('bg-deep-blue', 'text-white', 'active');
            b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        });
        e.target.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        e.target.classList.add('bg-deep-blue', 'text-white', 'active');
        currentFishFilter = e.target.dataset.filter;
        renderFish();
    }

    // Accessory filter buttons
    if (e.target.classList.contains('acc-tab')) {
        document.querySelectorAll('.acc-tab').forEach(function(b) {
            b.classList.remove('bg-gold', 'text-deep-blue', 'active');
            b.classList.add('bg-white/10', 'text-white/70', 'border', 'border-white/10');
        });
        e.target.classList.remove('bg-white/10', 'text-white/70', 'border', 'border-white/10');
        e.target.classList.add('bg-gold', 'text-deep-blue', 'active');
        currentAccFilter = e.target.dataset.cat;
        renderAccessories();
    }
});

// Close cart on overlay click
document.getElementById('cart-overlay').addEventListener('click', function(e) {
    if (e.target === document.getElementById('cart-overlay')) {
        closeCart();
    }
});

// Close mobile menu on overlay click
document.getElementById('mobile-overlay').addEventListener('click', function(e) {
    if (e.target === document.getElementById('mobile-overlay')) {
        toggleMobileMenu();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ================================================================
// 12. INITIALIZATION
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('khalijtaze_cart');
    if (savedCart) {
        try {
            const parsed = JSON.parse(savedCart);
            if (Array.isArray(parsed)) cart = parsed;
        } catch(e) {}
    }

    // Product detail modal - close on backdrop click
    const pdOverlay = document.getElementById('product-detail-overlay');
    if (pdOverlay) {
        pdOverlay.addEventListener('click', function(e) {
            if (e.target === pdOverlay) closeProductDetail();
        });
    }

    renderFish();
    renderAccessories();
    initProvinces();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createBubbles();
    observeReveals();
    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    updateCartUI();
});