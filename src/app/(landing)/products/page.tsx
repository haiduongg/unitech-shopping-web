import FilterBar from '@/components/landing/products/filter-bar';
import ProductsList from '@/components/landing/products/products-list';

export default function Products() {
	return (
		<div className='container pt-12 pb-20 min-h-[calc(100vh-80px)]'>
			<div className='grid grid-cols-12 gap-5'>
				<div id='filter-bar' className='col-span-2'>
					<FilterBar />
				</div>
				<div id='products' className='col-span-10'>
					<ProductsList />
				</div>
			</div>
		</div>
	);
}
