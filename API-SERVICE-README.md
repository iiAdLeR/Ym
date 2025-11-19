# API Service Documentation

## 📋 نظرة عامة

`api-service.js` هو طبقة خدمة موحدة لمعالجة جميع طلبات Firebase Firestore مع:
- ✅ Error handling محسّن
- ✅ Retry logic مع exponential backoff
- ✅ Caching تلقائي
- ✅ Rate limiting
- ✅ Request timeout
- ✅ Input validation & sanitization
- ✅ User-friendly error messages

## 🚀 الاستخدام الأساسي

### 1. إضافة مستند جديد

```javascript
// إضافة feedback
const feedbackData = {
    rating: 5,
    name: 'Ahmed',
    message: 'Çok güzel bir sistem!'
};

try {
    const docRef = await window.apiService.addDocument('feedbacks', feedbackData);
    console.log('Document ID:', docRef.id);
} catch (error) {
    console.error('Error:', error.userMessage);
}
```

### 2. جلب المستندات

```javascript
// جلب جميع feedbacks
try {
    const feedbacks = await window.apiService.getDocuments('feedbacks');
    console.log('Feedbacks:', feedbacks);
} catch (error) {
    console.error('Error:', error.userMessage);
}

// جلب مع query options
const queryOptions = {
    where: [
        { field: 'rating', operator: '>=', value: 4 }
    ],
    orderBy: [
        { field: 'createdAt', direction: 'desc' }
    ],
    limit: 10
};

const topFeedbacks = await window.apiService.getDocuments('feedbacks', queryOptions);
```

### 3. تحديث مستند

```javascript
try {
    await window.apiService.updateDocument('feedbacks', 'docId123', {
        rating: 5,
        message: 'Updated message'
    });
    console.log('Document updated successfully');
} catch (error) {
    console.error('Error:', error.userMessage);
}
```

### 4. حذف مستند

```javascript
try {
    await window.apiService.deleteDocument('feedbacks', 'docId123');
    console.log('Document deleted successfully');
} catch (error) {
    console.error('Error:', error.userMessage);
}
```

## ⚙️ الخيارات المتاحة

### addDocument Options

```javascript
await window.apiService.addDocument('collection', data, {
    useCache: false,        // استخدام cache (default: false)
    timeout: 15000,        // timeout بالمللي ثانية (default: 15000)
    clearCache: true       // مسح cache بعد الإضافة (default: true)
});
```

### getDocuments Options

```javascript
await window.apiService.getDocuments('collection', queryOptions, {
    useCache: true,        // استخدام cache (default: true)
    timeout: 15000         // timeout بالمللي ثانية (default: 15000)
});
```

## 🔒 Input Validation

### استخدام Validation Schema

```javascript
const schema = {
    rating: {
        type: 'number',
        required: true,
        min: 1,
        max: 5
    },
    name: {
        type: 'string',
        required: false,
        maxLength: 100,
        sanitize: true  // إزالة HTML tags
    },
    message: {
        type: 'string',
        required: false,
        maxLength: 1000,
        sanitize: true
    }
};

const validation = window.apiService.validateInput(data, schema);

if (validation.valid) {
    // استخدام validation.data
    const sanitizedData = validation.data;
} else {
    // عرض الأخطاء
    console.error(validation.errors);
}
```

## 📊 Cache Management

### مسح Cache

```javascript
// مسح cache محدد
window.apiService.clearCache('feedbacks-');

// مسح جميع cache
window.apiService.clearCache();
```

### الحصول على Cache

```javascript
const cached = window.apiService.getCached('feedbacks-query123');
if (cached) {
    console.log('Using cached data:', cached);
}
```

## 🛡️ Rate Limiting

الـ API Service يدير rate limiting تلقائياً:
- الحد الأقصى: 10 طلبات في الدقيقة
- عند تجاوز الحد: رسالة خطأ مع وقت الانتظار

```javascript
const rateCheck = window.apiService.checkRateLimit();
if (!rateCheck.allowed) {
    console.log(`Please wait ${rateCheck.waitTime} seconds`);
}
```

## 🔄 Retry Logic

الـ API Service يعيد المحاولة تلقائياً عند:
- `unavailable` - الخدمة غير متاحة
- `deadline-exceeded` - انتهى الوقت
- `resource-exhausted` - الموارد مستنفدة
- `aborted` - تم الإلغاء
- `network-error` - خطأ في الشبكة
- `timeout` - انتهى الوقت

**Exponential Backoff**: التأخير يزداد بشكل أسي (1s, 2s, 4s...)

## 📝 Error Handling

جميع الأخطاء تحتوي على `userMessage` للعرض للمستخدم:

```javascript
try {
    await window.apiService.addDocument('feedbacks', data);
} catch (error) {
    // رسالة خطأ صديقة للمستخدم
    showMessage(error.userMessage, 'error');
    
    // تفاصيل الخطأ للتطوير
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
}
```

### Error Codes المتاحة

- `permission-denied` - خطأ في الصلاحيات
- `unavailable` - الخدمة غير متاحة
- `deadline-exceeded` - انتهى الوقت
- `resource-exhausted` - الموارد مستنفدة
- `not-found` - المستند غير موجود
- `already-exists` - المستند موجود مسبقاً
- `network-error` - خطأ في الشبكة
- `timeout` - انتهى الوقت

## ⚡ Performance Tips

1. **استخدم Cache**: عند جلب البيانات التي لا تتغير كثيراً
   ```javascript
   await window.apiService.getDocuments('feedbacks', {}, { useCache: true });
   ```

2. **قلل Timeout**: للطلبات السريعة
   ```javascript
   await window.apiService.addDocument('feedbacks', data, { timeout: 5000 });
   ```

3. **استخدم Query Options**: لتقليل البيانات المسترجعة
   ```javascript
   const queryOptions = {
       where: [{ field: 'rating', operator: '>=', value: 4 }],
       limit: 10
   };
   ```

## 🔧 Configuration

يمكن تعديل الإعدادات:

```javascript
window.apiService.config = {
    timeout: 20000,              // 20 seconds
    retryAttempts: 5,            // 5 attempts
    retryDelay: 2000,            // 2 seconds
    cacheDuration: 60 * 60 * 1000, // 1 hour
    rateLimitDuration: 60000,    // 1 minute
    maxRequestsPerMinute: 20     // 20 requests
};
```

## 📚 أمثلة متقدمة

### مثال كامل: إضافة Feedback مع Validation

```javascript
async function submitFeedback(rating, name, message) {
    // Validation schema
    const schema = {
        rating: {
            type: 'number',
            required: true,
            min: 1,
            max: 5
        },
        name: {
            type: 'string',
            required: false,
            maxLength: 100,
            sanitize: true
        },
        message: {
            type: 'string',
            required: false,
            maxLength: 1000,
            sanitize: true
        }
    };
    
    // Validate
    const validation = window.apiService.validateInput(
        { rating, name, message },
        schema
    );
    
    if (!validation.valid) {
        throw new Error(validation.errors[0]);
    }
    
    // Submit
    try {
        const docRef = await window.apiService.addDocument(
            'feedbacks',
            validation.data,
            { useCache: false }
        );
        
        return docRef.id;
    } catch (error) {
        throw new Error(error.userMessage);
    }
}
```

### مثال: جلب Feedbacks مع Pagination

```javascript
async function getFeedbacks(page = 1, pageSize = 10) {
    const queryOptions = {
        orderBy: [
            { field: 'createdAt', direction: 'desc' }
        ],
        limit: pageSize
    };
    
    try {
        const feedbacks = await window.apiService.getDocuments(
            'feedbacks',
            queryOptions,
            { useCache: true }
        );
        
        return feedbacks;
    } catch (error) {
        console.error('Error:', error.userMessage);
        return [];
    }
}
```

## 🐛 استكشاف الأخطاء

### المشكلة: Firebase not initialized

**الحل**: تأكد من تحميل `firebase-config.js` قبل `api-service.js`

```html
<script src="firebase-config.js"></script>
<script src="api-service.js"></script>
```

### المشكلة: Rate limit exceeded

**الحل**: انتظر الوقت المحدد أو قلل عدد الطلبات

```javascript
const rateCheck = window.apiService.checkRateLimit();
if (!rateCheck.allowed) {
    console.log(`Wait ${rateCheck.waitTime} seconds`);
}
```

### المشكلة: Cache not working

**الحل**: تأكد من استخدام `useCache: true` في options

```javascript
await window.apiService.getDocuments('feedbacks', {}, { useCache: true });
```

## ✨ الميزات الجديدة

- ✅ **Automatic Retry**: إعادة المحاولة التلقائية مع exponential backoff
- ✅ **Smart Caching**: تخزين مؤقت ذكي مع انتهاء الصلاحية
- ✅ **Rate Limiting**: منع الإفراط في الطلبات
- ✅ **Input Validation**: التحقق من المدخلات تلقائياً
- ✅ **Error Messages**: رسائل خطأ صديقة للمستخدم
- ✅ **Request Timeout**: منع الطلبات المعلقة
- ✅ **Request Cancellation**: إمكانية إلغاء الطلبات

