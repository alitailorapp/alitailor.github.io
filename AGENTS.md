# AGENTS.md — Ali Tailor Website Update Plan

**تاریخ:** 31 اگست 2026  
**پروجیکٹ:** alitailor.top  
**مقصد:** ویب سائٹ کو مزید خوبصورت، پروفیشنل اور user-friendly بنانا

---

## موجودہ حالت (Current Status)

| فائل | حالت | نوٹ |
|------|------|-----|
| `index.html` | ✅ موجودہ | بنیادی ہوم پیج |
| `AboutUs.html` | ✅ موجودہ | About Us پیج |
| `ContactUs.html` | ✅ موجودہ | رابطہ پیج |
| `PrivacyPolicy.html` | ✅ موجودہ | پرائیویسی پالیسی |
| `Terms&Condition.html` | ✅ موجودہ | شرائط و ضوابط |
| `DeleteAccount.html` | ✅ موجودہ | اکاؤنٹ حذف |
| `app-ads.txt` | ✅ موجودہ | AdMob پبلشر ID کے لیے (9 ستمبر 2026 کو شامل) |
| `advanced.html` | ❌ حذف | 5 ستمبر 2026 کو GitHub سے حذف ہو گیا |
| `styles.css` | ❌ نہیں | الگ CSS فائل نہیں ہے |

---

## اپڈیٹ پلان (Update Plan)

### فیز 1: بنیادی ڈھانچہ (Phase 1: Infrastructure)

- [ ] **1.1** الگ `styles.css` فائل بنائیں (مشترکہ CSS)
- [ ] **1.2** `index.html` میں shared CSS لنک کریں
- [ ] **1.3** باقی تمام HTML فائلوں میں shared CSS استعمال کریں

### فیز 2: نیویگیشن (Phase 2: Navigation)

- [ ] **2.1** ہر پیج پر responsive navigation menu شامل کریں
- [ ] **2.2** Mobile hamburger menu بنائیں
- [ ] **2.3** Active page highlight کریں

### فیز 3: ہوم پیج بہتری (Phase 3: Homepage Improvements)

- [ ] **3.1** Hero Section میں اپلیکیشن کی اسکرین شاٹ شامل کریں
- [ ] **3.2** Features cards میں animations شامل کریں
- [ ] **3.3** Scroll animations (reveal on scroll) شامل کریں
- [ ] **3.4** Social proof section (testimonials) بنائیں
- [ ] **3.5** Stats counter (downloads, users) شامل کریں

### فیز 4: مخصوص صفحات (Phase 4: Dedicated Pages)

- [ ] **4.1** `advanced.html` کو مکمل بنائیں (Advanced Features page)
- [ ] **4.2** `PrivacyPolicy.html` کا ڈیزائن اپڈیٹ کریں
- [ ] **4.3** `Terms&Condition.html` کا ڈیزائن اپڈیٹ کریں

### فیز 5: فٹر اور سوشل میڈیا (Phase 5: Footer & Social)

- [ ] **5.1** مکمل footer بنائیں (سائٹ میپ، لنکس، سوشل میڈیا)
- [ ] **5.2** Facebook, Instagram, Twitter/X لنکس شامل کریں
- [ ] **5.3** Play Store button مزید prominent بنائیں

### فیز 6: SEO اور ٹیکنیکل (Phase 6: SEO & Technical)

- [x] **6.1** سبھی پیجز میں `noindex, nofollow` ہٹائیں ✅ (5 ستمبر 2026 کو مکمل)
- [ ] **6.2** Open Graph meta tags شامل کریں
- [ ] **6.3** Structured data (JSON-LD) شامل کریں
- [ ] **6.4** Sitemap اپڈیٹ کریں

### فیز 7: UI/UX بہتری (Phase 7: UI/UX Enhancements)

- [ ] **7.1** Back-to-top button شامل کریں
- [ ] **7.2** Dark mode toggle شامل کریں (optional)
- [ ] **7.3** Smooth scroll effects شامل کریں
- [ ] **7.4** Loading animations شامل کریں

---

## ڈیزائن رہنمائی (Design Guidelines) — ✅ منظور شدہ (24 نومبر 2026)

### تھیم: "Calm & Cozy" + Claymorphism
- **یہی تھیم حتمی ہے — اِسی پر عمل کریں، کوئی اور رنگ/اسٹائل نہیں بدلیں گے**
- انداز: نرم، پرسکون، دوستانہ اور قابلِ اعتبار — آنکھ کو آرام دینے والا
- Claymorphism: موٹے گول کونے، سفید ہلکی سرحد، باہر نرم سایہ + اندر ہلکی چمک (inset highlight)
- پرانی **انڈگو/وایلیٹ (`#4f46e5`, `#7c3aed`, `#9333ea`, `#f4f6fb`)** سکیم **ختم** — اُس کی جگہ یہ نئی پیسٹل سکیم ہے
- مکمل بصری حوالہ: `palette-preview.html` (ڈبل کلک سے کھول کر دیکھیں)

### رنگ سکیم (Color Palette) — حتمی
| رنگ | کوڈ | استعمال |
|-----|-----|---------|
| Pastel Orange | `#FFDCC0` | بٹنز، ہائی لائٹس، گرمی |
| Pastel Green | `#D9EFDD` | فیچر کارڈز، success |
| Pastel Blue | `#D8EAFB` | اطلاعاتی بلاکس، سکون |
| Pastel Purple (صرف ٹچ) | `#E8E2F7` | بیجز، ٹائم لائن |
| Pastel Coral / Light Red | `#FFDCD6` | اہم یاد دہانیاں |
| Butter Yellow (اضافی) | `#FFF0C9` | خوش آمدید، چھوٹے highlights |
| Soft Mint (اضافی) | `#D6EFEA` | گرین/بلو کے درمیان تازگی |
| Dusty Rose (اضافی) | `#F5DDE7` | پروفائل / نرم ٹچ |
| Cream Base | `#FAF8F6` | بیک گراؤنڈ |
| Muted Ink | `#4F4F5A` | متن (نرم گرے) |
| Soft Line | `#ECE7E2` | کارڈز کی سرحدیں |

### Claymorphism ترکیب (دوبارہ استعمال کریں)
- Element: `background: var(--color)` + `border: 2px solid rgba(255,255,255,.78)` + `border-radius: 30px` (بٹنز `999px`)
- Shadow: `10px 10px 22px rgba(120,110,130,.16)`, `-9px -9px 20px rgba(255,255,255,.95)`,
  `inset 2px 2px 5px rgba(255,255,255,.70)`, `inset -4px -4px 10px rgba(120,110,130,.07)`
- Inset فیلڈ: `inset 5px 5px 10px rgba(120,110,130,.13)` + `inset -5px -5px 10px rgba(255,255,255,.95)`
- بیک گراؤنڈ: Cream Base `#FAF8F6` + بہت ہلکے پیسٹل radial gradients (دکھائی نہ دیں، بس نرمی آئے)

### بٹنز اور اینیمیشن — حتمی
- **`outline: none`** اور **`-webkit-tap-highlight-color: transparent`** — دبانے پر **نیلی پٹی بالکل نہیں** آئے گی
- کی بورڈ فوکس صرف `:focus-visible` پر نرم گرے رنگ (`rgba(120,110,130,.35)`) — نیلا نہیں
- دبانے پر (`:active`): `transform: translateY(5px) scale(.98)` + اندرونی inset سائے → نرم اندرونی دھنساؤ
- `transition: transform .12s ease, box-shadow .12s ease`
- ہر بٹن اپنے رنگ کا clay بٹن ہو (orange / green / blue / coral / yellow / mint / rose)

### فونٹ (Typography)
- Primary: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Hero: 42px → 30px (mobile)
- Headings: 26-30px
- Body: 15-16px

### Border Radius
- Cards: 30px (claymorphism)
- Buttons / Badges: 999px (پل / pill)
- چھوٹے swatch: 24px

---

## فائل ڈائیگرام (File Structure)

```
alitailor.top/
├── index.html          # ہوم پیج
├── AboutUs.html        # ہمارے بارے میں
├── ContactUs.html      # رابطہ
├── PrivacyPolicy.html  # پرائیویسی پالیسی
├── Terms&Condition.html # شرائط و ضوابط
├── DeleteAccount.html  # اکاؤنٹ حذف
├── advanced.html       # جدید صفات
├── app-ads.txt         # AdMob پبلشر ID (9 ستمبر 2026)
├── .gitignore          # غیر ضروری فائلز ریپو سے باہر (24 نومبر 2026)
├── palette-preview.html # ✅ منظور شدہ تھیم کا بصری حوالہ (24 نومبر 2026)
├── styles.css          # مشترکہ CSS (نئی)
├── icon.png            # فیویکن
├── CNAME               # ڈومین
├── robots.txt          # سرچ انجنوں کے لیے
├── sitemap.xml         # سائٹ میپ
├── _config.yml         # Jekyll کنفگ
└── AGENTS.md           # یہ فائل
```

---

## نوٹس (Notes)

- یہ پلان تبدیل ہو سکتا ہے according to priority
- ہر فیز مکمل ہونے کے بعد test کریں
- CSS shared رکھنے سے maintain کرنا آسان ہوگا
- Mobile-first approach استعمال کریں

---

---

## گفتگو کے نتائج (Discussion Notes) — 31 اگست 2026

### 1. ویب سائٹ کا مقصد اور انداز
- ویب سائٹ **پروفیشنل** نظر آئے، اور صارف کو **آسان / سمجھنے میں آسان** لگے
- **پوری ویب سائٹ یکساں (uniform)** ہو — ہر پیج کی اسٹائلنگ ایک جیسی
- مستقل مزاجی (Consistency) برقرار رکھیں

### 2. سوشل میڈیا
- فی الحال **کوئی سوشل اکاؤنٹ نہیں** ہے (Facebook, Instagram, Twitter/X)
- اس لیے فی الحال سوشل لنکس نہیں ڈالیں گے؛ بعد میں جب اکاؤنٹس بنیں تو شامل کر سکتے ہیں

### 3. سکرین شاٹس / ایڈیٹنگ
- صارف کے پاس صرف **سمپل (بغیر ایڈیٹنگ کے) سکرین شاٹس** ہیں
- صارف کے پاس **کوئی ایڈیٹر یا AI** تصویر ایڈیٹ کرنے کے لیے موجود نہیں
- کوئی **گائیڈ ویڈیو یا How-to سکرین شاٹس** موجود نہیں
- ایجنٹ **تصویر ایڈیٹنگ نہیں کر سکتا** (تیر/اریو بنانا، اؤٹ لائن، وغیرہ) — یہ صرف کوڈ سے کام کرتا ہے

### 4. "How to Use" کا حل (طے شدہ)
- بجائے ایڈیٹ شدہ سکرین شاٹس کے، **How to Use** سیکشن کو **آئیکونز + صاف ٹیکسٹ گائیڈ + قدم بہ قدم** طریقے سے بنایا جائے
- اس میں یہ سمجھایا جائے گا:
  - ایپ استعمال کرنے کا طریقہ
  - رجسٹریشن فارم کیسے فل کریں / کون سی ڈیٹیل ضروری ہے
  - بیک اپ کیسے بنائیں
  - رجسٹریشن فارم کو کیسے ایڈٹ کریں
  - آرڈر ٹریکنگ کیسے ہوتی ہے
  - اور دیگر اہم مراحل

### 5. ٹیسٹیمونیئلز / ریویوز (Testimonials — مشروط)
- ویب سائٹ پر **Testimonials/Ratings** سیکشن **اس وقت** شامل کریں گے جب **حقیقی Play Store ریویوز** ملیں گے
- صارف کو یقین ہے کہ ایپ بہت اچھی بنی ہے اور یوزر 5-star ریویوز ضرور دیں گے
- جیسے ہی **5-6 حقیقی ریویوز** آ جائیں، یہ سیکشن بنایا جائے گا
- یہ سیکشن **روٹیٹنگ** ہوگا — ایک ایک کر کے ریویوز خود بخود گھومتے رہیں گے (auto-rotate)
- ریویوز **حقیقی/سچے** ہونے چاہئیں؛ جعلی ریویوز نہیں بنائیں گے
- اس کے لیے ہر ریویو کی تفصیل چاہیے: **نام، ریٹنگ (stars)، جملہ/تبصرہ**

### 6. کام کی ترتیب (Workflow Agreement)
- **ابھی ویب سائٹ پر کچھ نہیں لکھنا** — صرف پلان تیار رکھنا ہے
- کام اس وقت شروع ہوگا جب **سکرین شاٹس مکمل** ہو جائیں
- گفتگو کے دوران جو نئی معلومات/فیصلے آئیں، وہ **AGENTS.md** میں اپڈیٹ ہوتے رہیں گے

---

## آئندہ اٹھائے جانے والے اقدامات (Pending Items)
- [ ] `styles.css` مشترکہ فائل بنانا (فیز 1)
- [ ] سکرین شاٹس مکمل ہونے کا انتظار
- [ ] How to Use گائیڈ بنانا (آئیکونز + ٹیکسٹ)
- [ ] باقی تمام فیز کام کرنا

---

---

## گفتگو کے نتائج (Discussion Notes) — 5 ستمبر 2026

### GitHub Pages / ڈومین منتقلی (مکمل شدہ)

- پرانی رپازٹری `alitailorapp/alitailorapp.github.io` کا نام تبدیل کر کے `alitailorapp/alitailor.github.io` کر دیا گیا
- **گوگل verification فائل** (`googlee5237038150a404d.html`) رپازٹری سے حذف کر دی گئی (معمول کے مطابق)
- **`advanced.html`** (خالی فائل) رپازٹری سے حذف کر دی گئی
- **اس کا نتیجہ:** `alitailorapp.github.io` اور `alitailor.github.io` دونوں **404** دیتے ہیں → گوگل چند ہفتوں میں پرانے انڈیکس شدہ github.io URLs کو مستقل ہٹا دے گا
- **بنیادی ویب سائٹ `alitailor.top`** CNAME کی وجہ سے صحیح کام کر رہی ہے (5 ستمبر کو تصدیق کی گئی)
- **لوکل git remote** کو نئے مقام `https://github.com/alitailorapp/alitailor.github.io.git` پر اپڈیٹ کر دیا گیا
- **تمام 5 پیجز** (AboutUs, ContactUs, DeleteAccount, Terms&Condition, PrivacyPolicy) سے `noindex, nofollow` ہٹا کر `index, follow` کر دیا گیا — اب تمام پیجز Google انڈیکس ہوں گے (commit: "Remove noindex tag from all pages")

### آئندہ اقدام (منصوبہ)

- **2–4 ماہ بعد:** GitHub اکاؤنٹ کا نام `alitailorapp` کو `alitailor` میں تبدیل کرنا ہے (جب وہ username دستیاب ہو جائے)
- اس وقت `alitailor.github.io` بطور user pages کام کرے گا
- اکاؤنٹ کا نام بدلنے کے بعد لوکل git remote دوبارہ اپڈیٹ کرنا ہوگا

---

## گفتگو کے نتائج (Discussion Notes) — 9 ستمبر 2026

### AdMob app-ads.txt شامل (مکمل شدہ)

- **`app-ads.txt`** فائل بنائی گئی اور GitHub رپازٹری میں شامل کی گئی
- **AdMob Publisher ID:** `pub-9933123158331505`
- **Committer ID:** `f08c47fec0942fa0`
- فائل کا مقصد: AdMob کی اجازت یافتہ فروخت کنندگان کی تصدیق
- **Commit:** "Add app-ads.txt for AdMob verification"

---

## گفتگو کے نتائج (Discussion Notes) — 24 نومبر 2026

### 1. Ali Tailor ایپ مکمل ✅
- ایپ کا کام مکمل ہو چکا ہے (ایک ماہ سے زائد محنت کے بعد) اور **Production / Play Store** پر لائیو کر دی گئی ہے
- اب توجہ **ویب سائٹ** کی طرف ہے — ایک منظم (systematic) انداز میں، مل کر، پہلے بات چیت → پھر فیصلہ → پھر عمل

### 2. ریپو کی صفائی ✅
- `.gitignore` بنایا گیا اور commit ہوا: `4975c33` — "Add .gitignore to keep repo clean"
- `alitailor.top.zip` اور بیک اپ/ٹیمپ/OS جھکڑ/ڈیزائن سورسز (.psd/.ai) ریپو سے باہر
- `.png / .jpg` سکرین شاٹس جان بوجھ کر **ignore نہیں** کیے — وہ ویب سائٹ میں استعمال ہوں گے
- `PrivacyPolicy.html` میں صارف کی اپنی تبدیلیاں ہیں — **uncommitted، اُسی طرح چھوڑی گئی** (ہاتھ نہیں لگایا)

### 3. تھیم کا پلان مکمل ✅ (حتمی فیصلہ)
- صارف کو **"Calm & Cozy" + Claymorphism** تھیم چاہیے — ہلکا، نرم، دھندلا (muted) پیسٹل انداز
- رنگ: ہلکا اورنج، ہلکا گرین، ہلکا بلو، ہلکا پرپل (صرف ٹچ)، ہلکا ریڈ/کورل
- ایجنٹ کی طرف سے 3 اضافی مماثل رنگ: Butter Yellow `#FFF0C9`, Soft Mint `#D6EFEA`, Dusty Rose `#F5DDE7` — **منظور**
- **`palette-preview.html`** بنا کر دکھایا گیا — صارف نے کہا: *"یہ بہت خوبصورت ہے، مجھے بہت پسند آیا، بس اسی کو ڈن کریں"*
- بٹنوں میں نیلی فوکس پٹی ہٹائی گئی (`outline: none`, `-webkit-tap-highlight-color: transparent`)؛ دبانے پر نرم اندرونی دھنساؤ (`translateY(5px) scale(.98)` + inset سائے) — **یہی اثر حتمی ہے**
- مکمل تفصیل اوپر **"ڈیزائن رہنمائی"** سیکشن میں درج ہے — وہی حوالہ مان لیں

### 4. اگلے مراحل (طے شدہ نہیں — اگلی بات چیت میں)
- سکرین شاٹس اب بھی فولڈر میں موجود نہیں — ایپ لائیو ہے، اس لیے صارف سے 4–6 اصل سکرین شاٹس مانگنے ہیں
- "How to Use" کا مقام (الگ صفحہ بمقابلہ ہوم سیکشن)، پہلے عمل کے دائرے اور Play Store لنک کی تصدیق — باقی ہیں
- Dark mode اور Testimonials ابھی چھوڑے ہوئے ہیں (ریویوز حقیقی ہونے کے بعد)

---

**آخری اپڈیٹ:** 24 نومبر 2026  
**_status:** تھیم/ڈیزائن پلان **مکمل اور حتمی** (Calm & Cozy + Claymorphism)؛ `.gitignore` مکمل؛ ایپ لائیو؛ اگلا مرحلہ = فاؤنڈیشن (`styles.css` + نیویگیشن + فوٹر) اور سکرین شاٹس — اگلی بات چیت میں طے ہوگا
