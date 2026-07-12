/**
 * اسکریپت راه‌اندازی دیتابیس محلی
 *
 * این اسکریپت:
 *   - جداول را بر اساس مدل‌های Sequelize می‌سازد (force: جدول موجود را بازنویسی می‌کند)
 *   - دیتای نمونه (ادمین، سرویس، محصول) درج می‌کند
 *
 * دستور اجرا:
 *   npm run db:reset      ساخت مجدد جداول + دیتای نمونه
 *   npm run db:seed       فقط دیتای نمونه (در صورت وجود جداول)
 *
 * نکته: قبل از اجرا مطمئن شو دیتابیس بالا است:  npm run db:start
 */

// لود متغیرهای محیطی از فایل .env
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const sequelize = require("../src/backend/db/Sequelize-config");
const db = require("../src/backend/model");
const bcrypt = require("bcryptjs");

// رنگ‌های ساده برای خروجی کنسول
const c = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
};

async function syncDatabase(force = false) {
  console.log(c.cyan("→ اتصال به دیتابیس..."));
  await sequelize.authenticate();
  console.log(c.green("✓ اتصال برقرار شد"));

  console.log(
    c.cyan(`→ ${force ? "بازسازی" : "ساخت"} جداول از روی مدل‌ها...`)
  );
  await sequelize.sync({ force });
  console.log(c.green("✓ جداول ساخته شدند"));
}

async function seed() {
  console.log(c.cyan("→ درج دیتای نمونه..."));

  // --- کاربر ادمین ---
  // موبایل: 09171000000  |  رمز عبور: 123456
  const adminPass = await bcrypt.hash("123456", 8);
  await db.user.findOrCreate({
    where: { cellphone: "09171000000" },
    defaults: {
      username: "admin",
      password: adminPass,
      name: "مدیر سیستم",
      cellphone: "09171000000",
      role: "Admin",
    },
  });
  console.log(c.green("  ✓ کاربر ادمین: 09171000000 / 123456"));

  // --- کاربر عادی پنل ---
  const superPass = await bcrypt.hash("123456", 8);
  await db.user.findOrCreate({
    where: { cellphone: "09172000000" },
    defaults: {
      username: "agency",
      password: superPass,
      name: "آژانس نمونه",
      cellphone: "09172000000",
      role: "SuperUser",
    },
  });
  console.log(c.green("  ✓ کاربر آژانس: 09172000000 / 123456"));

  // --- سرویس‌های نمونه ---
  const services = [
    {
      serviceUniqueId: "SRV-001",
      title: "تفریح دریای کیش",
      description: "تفریحات آبی کیش شامل جت‌اسکی، پاراسل و قایق‌سواری.",
      rules: "لطفاً ۱۵ دقیقه قبل از زمان سانس حاضر باشید.",
      eventCategory: "تفریحات آبی",
      enumEventCategory: "1",
      coverImage: "/images/services/default.jpg",
      gallery: "[]",
      stateCode: "35",
      CityCode: "351",
      price: "0",
      priceDiscount: "0",
      isManifestNeeded: 0,
      isManifestUniqueNumberNeeded: 0,
      is_trashed: 0,
    },
    {
      serviceUniqueId: "SRV-002",
      title: "رستوران سنتی کیش",
      description: "بهترین رستوران‌های کیش با غذای سنتی و دریایی.",
      rules: "رزرو میز تا ۲ ساعت قبل معتبر است.",
      eventCategory: "رستوران",
      enumEventCategory: "2",
      coverImage: "/images/services/default.jpg",
      gallery: "[]",
      stateCode: "35",
      CityCode: "351",
      price: "0",
      priceDiscount: "0",
      isManifestNeeded: 0,
      isManifestUniqueNumberNeeded: 0,
      is_trashed: 0,
    },
    {
      serviceUniqueId: "SRV-003",
      title: "پارک‌ها و شهربازی کیش",
      description: "بلیط ورود پارک‌ها و شهربازی‌های کیش.",
      rules: "کودکان زیر ۳ سال رایگان.",
      eventCategory: "پارک و شهربازی",
      enumEventCategory: "3",
      coverImage: "/images/services/default.jpg",
      gallery: "[]",
      stateCode: "35",
      CityCode: "351",
      price: "0",
      priceDiscount: "0",
      isManifestNeeded: 0,
      isManifestUniqueNumberNeeded: 0,
      is_trashed: 0,
    },
  ];

  for (const s of services) {
    await db.service.findOrCreate({
      where: { serviceUniqueId: s.serviceUniqueId },
      defaults: s,
    });
  }
  console.log(c.green(`  ✓ ${services.length} سرویس نمونه`));

  // --- محصول نمونه (برای پنل/رزرو) ---
  await db.product.findOrCreate({
    where: { id: 1 },
    defaults: {
      is_trashed: 0,
      title: "بلیط جت‌اسکی",
      description: "۵ دقیقه سواری جت‌اسکی",
      owner_name: "مرکز تفریحات کیش",
      capacity: 50,
      img_tmp: "/images/services/default.jpg",
      is_enable: 1,
      addr: "کیش - ساحل",
      price: 250000,
      type: "ticket",
      is_etebar: 0,
      ticket_comment: "بلیط تفریح",
      ticket_logo: "",
      tel: "09171000000",
      mob: "09171000000",
      website: "",
      email: "",
      parent_id: 0,
    },
  });
  console.log(c.green("  ✓ محصول نمونه: بلیط جت‌اسکی"));

  console.log(c.green("\n✅ دیتای نمونه با موفقیت درج شد"));
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");

  try {
    await syncDatabase(force);
    if (args.includes("--no-seed")) return;
    await seed();
    console.log(c.green("\n🎉 راه‌اندازی دیتابیس کامل شد"));
    process.exit(0);
  } catch (err) {
    console.error(c.red("\n❌ خطا در راه‌اندازی دیتابیس:"));
    console.error(c.red("  نام خطا:"), err.name || err.code || "نامشخص");
    console.error(c.red("  توضیح:"), err.message || err.original?.message || err.parent?.message || "بدون توضیح");
    if (err.original) console.error(c.red("  جزئیات:"), JSON.stringify(err.original));
    process.exit(1);
  }
}

main();
