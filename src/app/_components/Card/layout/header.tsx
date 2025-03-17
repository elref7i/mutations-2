import Link from 'next/link';

export default function Header() {
  const navigation = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/products',
      name: 'Products',
    },
    {
      href: '/categories',
      name: 'Categories',
    },
    {
      href: '/categories/add-category',
      name: 'Add Category',
    },
  ];
  return (
    <header className="mb-5">
      <nav className="shadow py-5">
        <ul className=" flex gap-2 justify-center items-center text-2xl">
          {navigation.map((link) => (
            <li key={link.href}>
              <Link
                className="hover:text-violet-500 font-bold"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
