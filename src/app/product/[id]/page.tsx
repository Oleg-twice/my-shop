import { getProduct, getProducts, STORE_API } from "@/lib/products";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import AddToCartButton from "@/components/AddToCartButton";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return {};

  return {
    title: product.title,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: p.id.toString() }));
}


export default async function Product({ params }: Params) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-contain mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-lg font-semibold mb-4">{product.price} $</p>
      <p>{product.description}</p>

      <div className="flex content-between justify-between flex-wrap mt-2">
        <BackButton />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}