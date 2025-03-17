import { Suspense } from 'react';
import CategoriesList from './_components/categories-list';

export default async function Page() {
  return (
    <main>
      <h1 className="font-bold text-violet-700 text-center">Categories</h1>
      <Suspense fallback="loading ....">
        <CategoriesList />
      </Suspense>
    </main>
  );
}
