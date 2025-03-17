type category = {
  _id: string; // معرف الفئة (مطلوب)
  name: string; // اسم الفئة (مطلوب)
  slug: string; // الرابط المختصر للفئة (مطلوب)
  image: string; // رابط صورة الفئة (مطلوب)
  createdAt: string; // تاريخ الإنشاء (مطلوب)
  updatedAt: string; // تاريخ التحديث (مطلوب)
  productsCount: number; // عدد المنتجات في الفئة (مطلوب)
};
