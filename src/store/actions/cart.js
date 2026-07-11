// اکشن‌های مربوط به سبد خرید
// نکته: در حال حاضر سبد خرید فعال نیست، این فایل برای حفظ سازگاری با importهای موجود ساخته شده

export const CART_SET_USER = "CART_SET_USER";

export const cartSetUser = (userId) => {
  return {
    type: CART_SET_USER,
    userId: userId,
  };
};

export const changeCartId = (cartId) => {
  return {
    type: "CHANGE_CART_ID",
    cartId: cartId,
  };
};
