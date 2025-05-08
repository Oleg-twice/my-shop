'use client'
import { Product } from "@/types/products";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
	const { push } = useRouter();

	const openProductDetails = () => push(`/product/${product.id.toString()}`);

	return (
		<div className="border rounded p-4 shadow hover:shadow-lg transition cursor-pointer" onClick={openProductDetails}>
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-48 object-contain mb-4"
			/>
			<h2 className="text-lg font-semibold">{product.title}</h2>
			<p className="text-gray-500">{product.price} $</p>
		</div>
	);
}
