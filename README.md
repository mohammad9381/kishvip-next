# KishVIP Next

سایت تخصصی رزرو رستوران و تفریحات کیش با تخفیف‌های دائمی. ساخته‌شده با Next.js 12 و Sequelize ORM.

## 🚀 شروع سریع

### پیش‌نیازها
- Node.js (نسخه ۱۸ یا بالاتر)
- Docker (برای دیتابیس محلی) یا MySQL نصب‌شده

### نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install --legacy-peer-deps

# راه‌اندازی دیتابیس (با Docker)
npm run db:start             # docker compose up -d (MySQL روی پورت 3370)
sleep 15                     # صبر برای آماده شدن MySQL
npm run db:reset             # ساخت جداول + دیتای نمونه

# اجرای پروژه
npm run dev                  # http://localhost:7654
```

### ورود به پنل مدیریت
- **شماره:** `09171000000`
- **رمز عبور:** `123456`

## 📜 دستورات موجود

| دستور | توضیح |
|-------|-------|
| `npm run dev` | اجرای سرور توسعه روی پورت ۷۶۵۴ |
| `npm run build` | build تولید |
| `npm run start` | اجرای سرور تولید |
| `npm run lint` | بررسی lint |
| `npm run db:start` | راه‌اندازی دیتابیس MySQL با Docker |
| `npm run db:stop` | توقف دیتابیس |
| `npm run db:reset` | بازسازی جداول + درج دیتای نمونه |
| `npm run db:seed` | فقط درج دیتای نمونه |

## ⚙️ تنظیمات محیط

فایل `.env` را از روی `.env.example` کپی کنید و مقادیر را پر کنید:

```bash
cp .env.example .env
```

متغیرهای مورد نیاز:
- `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_DATABASE`, `DB_PORT` — دیتابیس
- `REACT_APP_ZIBAL_MERCHENT` — درگاه پرداخت زیبال
- `REACT_APP_KAVE_API_KEY` — سرویس پیامک کاوه‌نگار
- `NEXT_PUBLIC_2RIST_*` — API سرویس گردشگری 2Rist
- `SECRET_JWT` — رمز توکن JWT (باید رشته‌ی تصادفی طولانی باشد)

## 🗂️ ساختار پروژه

```
kishvip-next/
├── pages/                  # مسیرهای Next.js
│   ├── api/                # ۲۲ اندپوینت API
│   ├── panel/              # پنل مدیریت
│   ├── services/           # صفحات خدمات
│   └── [title].js          # صفحه‌ی نمایش سرویس
├── src/
│   ├── backend/            # کنترلرها، مدل‌ها، میدلور
│   │   ├── controllers/    # منطق API
│   │   ├── model/          # مدل‌های Sequelize (۹ مدل)
│   │   └── middleware/     # احراز هویت JWT
│   ├── components/         # کامپوننت‌های React
│   ├── containers/         # صفحات منطقی
│   ├── services/           # ارتباط با API خارجی (2Rist)
│   └── store/              # Redux (auth, register, router)
├── scripts/
│   └── db-init.js          # اسکریپت دیتابیس
├── docker-compose.yml      # MySQL محلی
└── .env.example            # نمونه تنظیمات
```

## 🎯 ویژگی‌ها

- 🔐 ورود و ثبت‌نام با JWT
- 🎫 رزرو تفریحات و رستوران‌ها (مودال چندمرحله‌ای)
- 💳 پرداخت آنلاین با درگاه زیبال
- 📱 پیامک تأیید با کاوه‌نگار
- 🛠️ پنل مدیریت برای آژانس‌ها
- 🔍 پیگیری سفارش و بلیط

## 🛠️ تکنولوژی‌ها

- **Frontend:** Next.js 12, React 16, Bootstrap 4 (RTL), Sass
- **State:** Redux + Redux Thunk + next-redux-wrapper
- **Backend:** Next.js API Routes + Sequelize ORM + MySQL
- **Form:** Formik + Yup
- **Payment/SMS/Auth:** Zibal, Kavenegar, JWT, bcrypt

## 📝 نکات

- سرویس‌های خارجی (API 2Rist، درگاه زیبال، کاوه‌نگار) باید با مقادیر واقعی در `.env` تنظیم شوند.
- فایل `.env` هرگز در گیت کامیت نمی‌شود (در `.gitignore` است).
- برای تغییر پورت دیتابیس، مقدار `DB_PORT` در `.env` و `docker-compose.yml` را همزمان تغییر دهید.

## 📄 لایسنس

این پروژه خصوصی است.
