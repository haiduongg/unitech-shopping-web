import Image from 'next/image';
import React from 'react';

import { moneyFormat } from '@/utils/moneyFormat';
import ProductImageSlider from '@/components/landing/product-detail/product-image-slider';
import { Button } from '@/components/ui/button';

export default function ProductInformation() {
	return (
		<div className='mt-6 grid grid-cols-12 gap-10'>
			<div className='col-span-5'>
				<ProductImageSlider />
			</div>
			<div className='col-span-7'>
				<p className='font-semibold text-2xl'>Apple iPhone 13 (128GB,Pink)</p>
				<div className='flex items-center justify-start gap-2 my-4'>
					<p className='text-xs px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold'>1000 off at Payment OTP page</p>
					<p className='text-xs px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold'>6 Month No Cost EMI</p>
				</div>
				<p className='font-extrabold text-red-500 text-3xl mt-3'>{moneyFormat(7500000)}</p>
				<div className='mt-5'>
					<p className='font-medium text-base mb-4'>Internal Storage</p>
					<div className='flex items-center justify-start gap-4'>
						<Button variant={'outline'}>128GB</Button>
						<Button variant={'outline'}>256GB</Button>
					</div>
				</div>
				<div className='mt-5'>
					<p className='font-medium text-base mb-4'>Color</p>
					<div className='flex items-center justify-start gap-4'>
						<Button variant={'outline'}>White</Button>
						<Button variant={'outline'}>Black</Button>
						<Button variant={'outline'}>Pink</Button>
						<Button variant={'outline'}>Red</Button>
						<Button variant={'outline'}>Blue</Button>
						<Button variant={'outline'}>Green</Button>
					</div>
				</div>
				<Button variant={'destructive'} className='mt-10'>Add to cart</Button>
			</div>
		</div>
	);
}
