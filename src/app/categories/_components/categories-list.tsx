import 'server-only';
import { CardWithForm } from '@/app/_components/Card/Card';

//* Type Caching => [Request Memoization , Data Cache, Full Route Cache , Router Cache]
export default async function CategoriesList() {
  const response = await fetch(`${process.env.API!}/categories?limit=100`, {
    // cache: 'no-store',
    // ** next: { revalidate: 60 }, //* الداتا هتتحدث بعد 60 ثاميه من عدم الاستخدام
  });
  const payload: { categories: category[] } = await response.json();
  // console.log(payload);

  return (
    <div>
      <div className="grid grid-cols-12 gap-2 py-5">
        {payload.categories.map((category) => (
          <CardWithForm key={category._id} dataInfo={category} />
        ))}
      </div>
    </div>
  );
}
