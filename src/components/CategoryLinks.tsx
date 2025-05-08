import Link from "next/link";

const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

export default function CategoryLinks() {
  return (
    <ul className="flex gap-4 mb-6">
      {categories.map((c) => (
        <li key={c}>
          <Link href={`/categories/${c}`} className="text-blue-600 hover:underline">
            {c}
          </Link>
        </li>
      ))}
    </ul>
  );
}
