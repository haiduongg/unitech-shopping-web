import Image from "next/image";
import Navbar from '@/components/landing/navbar';

export default function Products() {
	return (
		<div className="container pt-8">
			<h1 className="text-3xl uppercase font-bold">Products</h1>
			<div className="mt-8 pt-8 border-t-[1px] flex items-start justify-start gap-5">
				<div className="w-96 bg-red-200 min-h-[500px]">

				</div>
				<div className="w-full bg-blue-200 min-h-[500px]">

				</div>
			</div>
		</div>
	);
}
