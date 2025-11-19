# Learn Page Template Guide

## 📋 نظرة عامة

تم إنشاء نظام template موحد لصفحات التعلم (Learn Pages) لتسهيل إنشاء الفصول الجديدة.

## 🎨 الملفات المطلوبة

### 1. `glassmorphism.css`
- يحتوي على تصميم Glass Mode مع ألوان futuristية
- ألوان cosmic/space theme
- تأثيرات زجاجية شفافة مع glow effects

### 2. `learn-template.js`
- JavaScript template موحد لجميع صفحات التعلم
- يتعامل مع:
  - تحميل معلومات الفصل
  - Smooth scrolling
  - Back to top button
  - Glass mode toggle

### 3. `learn-template.html`
- HTML template كمرجع لإنشاء صفحات جديدة

## 🚀 كيفية إنشاء فصل جديد

### الخطوة 1: انسخ الملف
```bash
# انسخ learn-template.html إلى ملف جديد
cp learn-template.html learn-kalite-chapter2.html
```

### الخطوة 2: عدّل المحتوى
1. غيّر العنوان في `<title>`
2. أضف الأقسام في `table-of-contents`
3. أضف المحتوى في `<section>` tags

### الخطوة 3: حدّث JavaScript
في نهاية الملف، غيّر:
```javascript
const courseId = localStorage.getItem('currentCourse') || 'kalite-guvenilirlik';
const chapterId = localStorage.getItem('currentChapter') || 'kalite-chapter-2';
```

### الخطوة 4: أضف إلى courses-data.js
```javascript
{
    id: "kalite-chapter-2",
    title: "Chapter 2 Title",
    description: "Chapter description",
    quizFile: "quiz.html",
    questionsFile: "Kurslar/Kalite güvenilirlik bölümler/2bölümsorular.js",
    learnFile: "learn-kalite-chapter2.html"
}
```

## 🎨 Glass Mode

### الألوان المستخدمة:
- **Cosmic Black**: `#0a0e1a`
- **Cosmic Dark**: `#1a1f35`
- **Cosmic Violet**: `#6b46c1`
- **Neon Cyan**: `#00d9ff`
- **Electric Purple**: `#a855f7`
- **Soft Magenta**: `#ec4899`
- **Cosmic Blue**: `#1e3a8a`
- **Nebula Pink**: `#f472b6`

### الميزات:
- ✅ زر toggle في الزاوية اليمنى العلوية
- ✅ تأثيرات glassmorphism مع backdrop-filter
- ✅ Glow effects على العناصر
- ✅ تدرجات لونية futuristية
- ✅ حفظ التفضيل في localStorage

## 📝 العناصر المتاحة

### Cards:
- `.concept-card` - بطاقة مفهوم أساسية
- `.formula-box` - صندوق للصيغ والمعلومات المهمة
- `.example-box` - صندوق للأمثلة
- `.note-box` - صندوق للملاحظات
- `.quick-summary-box` - صندوق ملخص سريع

### Tables:
- `.comparison-table` - جدول مقارنة

### Layout:
- `.comparison-box` - صندوق مقارنة جانبي
- `.agent-type-card` - بطاقة نوع وكيل
- `.env-property-card` - بطاقة خاصية بيئة

## 🔧 الوظائف المتاحة

### `LearnTemplate.init()`
تهيئة الصفحة (يتم استدعاؤها تلقائياً)

### `LearnTemplate.updateChapterInfo(courseId, chapterId)`
تحديث عنوان ووصف الفصل

### `LearnTemplate.setupSmoothScroll()`
إعداد smooth scrolling للروابط

### `LearnTemplate.setupBackToTop()`
إعداد زر العودة للأعلى

### `LearnTemplate.setupGlassMode()`
إعداد زر Glass Mode toggle

## 📱 Responsive Design

التصميم متجاوب ويعمل على:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🎯 مثال سريع

```html
<section id="my-section" class="learn-section">
    <h2>1. My Section</h2>
    
    <div class="concept-card">
        <h3>🔹 Subsection</h3>
        <p><strong>Tanım:</strong> Definition here</p>
        
        <div class="formula-box">
            <strong>Key Points:</strong><br>
            • Point 1<br>
            • Point 2
        </div>
        
        <div class="example-box">
            <strong>Örnek:</strong> Example here
        </div>
    </div>
</section>
```

## ✨ نصائح

1. استخدم نفس البنية الموجودة في `learn-kalite-chapter1.html`
2. احتفظ بنفس أسماء الـ classes للحفاظ على التصميم
3. استخدم emojis في العناوين لجعلها أكثر جاذبية
4. أضف روابط في table of contents لكل section
5. استخدم `.quick-summary-box` في نهاية الفصل للملخص

## 🐛 استكشاف الأخطاء

إذا لم يظهر المحتوى:
- تأكد من تحميل `courses-data.js` قبل `learn-template.js`
- تحقق من أن `courseId` و `chapterId` صحيحين في `courses-data.js`
- افتح Console في المتصفح للتحقق من الأخطاء

