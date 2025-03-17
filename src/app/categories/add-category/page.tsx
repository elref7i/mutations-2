import AddCategoryForm from './_components/add-category-form';

export default function Page() {
  return (
    <div>
      {' '}
      <h1 className="font-bold text-violet-700 text-center text-5xl mb-5">
        Add Categories
      </h1>
      <AddCategoryForm />
    </div>
  );
}
