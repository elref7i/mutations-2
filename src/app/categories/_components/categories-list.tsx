import { CardWithForm } from '@/app/_components/Card/Card';
import React from 'react';

export default async function CategoriesList() {
  const response = await fetch(`${process.env.API!}/categories?limit=50`);
  const payload: { categories: category[] } = await response.json();
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
