import { Suspense } from 'react';
import CategoriesList from './_components/categories-list';

//* [1] server Render on demand 🔽
// export const dynamic = 'force-dynamic';
//* ISR 🔽
// *export const revalidate = 60;
export default function Page() {
  /* 
  * بتخلى الصفحه dynamic عافيه
  cookies();
  headers(); */
  //console.log(params, searchParams);

  console.log('🔽 Categories Page Rendered');

  return (
    <main>
      <h1 className="font-bold text-violet-700 text-center">Categories</h1>
      <Suspense fallback="loading ....">
        <CategoriesList />
      </Suspense>
    </main>
  );
}

//* لو هتستخدم route Handler
// 'use client';

// import { useEffect, useState } from 'react';
// // import { Suspense, useEffect, useState } from 'react';
// // import CategoriesList from './_components/categories-list';
// // import { map } from 'zod';
// import { CardWithForm } from '../_components/Card/Card';

// //* [1] server Render on demand 🔽
// // export const dynamic = 'force-dynamic';
// //* ISR 🔽
// // *export const revalidate = 60;
// export default function Page() {
//   const [data, setData] = useState<category[]>([]);

//   /*
//   * بتخلى الصفحه dynamic عافيه
//   cookies();
//   headers(); */
//   //console.log(params, searchParams);

//   //& ----------------------

//   //~لو عايز احول route لى client واشغل get على server حلها route Handler
//   useEffect(() => {
//     (async () => {
//       const response = await fetch(`${process,env.NEXT_PUBLIC_API}/get-categories`, {});
//       const payload: { categories: category[] } = await response.json();
//       setData(payload.categories);
//     })();
//   }, []);
//   console.log('🔽 Categories Page Rendered');

//   return (
//     <main>
//       <h1 className="font-bold text-violet-700 text-center">Categories</h1>

//       <div className="grid grid-cols-12 gap-2 py-5">
//         {data.map((category) => (
//           <CardWithForm key={category._id} dataInfo={category} />
//         ))}
//       </div>
//       {/* //* لو هشتغل على server */}
//       {/* <Suspense fallback="loading ....">
//         <CategoriesList />
//       </Suspense> */}
//     </main>
//   );
// }
