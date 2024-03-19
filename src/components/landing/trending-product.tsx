import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { Button } from '../ui/button';

import { FaArrowRightLong } from 'react-icons/fa6';

import { moneyFormat } from '@/utils/moneyFormat';

import Test from '@/assets/img/products/honor.webp';
import Airpod from '@/assets/img/products/airpod.webp';

interface ITrendingProducts {
	id: number;
	img: StaticImageData;
	href: string;
	title: string;
	price: number;
}

export default function TrendingProduct() {
	const trendingProducts: ITrendingProducts[] = [
		{
			id: 1,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 2,
			img: Airpod,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 3,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 4,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 5,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 6,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 7,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
		{
			id: 8,
			img: Test,
			href: '/products/test',
			title: 'iPhone 11 Pro Max',
			price: 500,
		},
	];
	return (
		<div className='py-28 bg-white'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between'>
					<h2
						id='trending-product'
						className='text-center text-4xl font-bold leading-normal'
					>
						<p>Trending Product</p>
					</h2>
					<Link href={'/products'} className='grid place-items-center mt-6'>
						<Button
							variant={'ghost'}
							className='group flex items-center justify-between gap-5 hover:shadow-md transition duration-300'
						>
							<span>Show All</span>
							<FaArrowRightLong className='hidden group-hover:block' />
						</Button>
					</Link>
				</div>
				<ul className='grid grid-cols-4 gap-6 mt-8'>
					{trendingProducts.map((product) => (
						<li
							key={product.id}
							className='border-[1px] #f1f1f1 flex flex-col items-center justify-start py-6 px-3 rounded-lg hover:shadow-xl'
						>
							<Link href={product.href} className='group w-40 h-40 grid place-items-center my-1'>
								<Image
									src={product.img}
									alt={`${product.title}`}
									width={200}
									height={300}
									className='group-hover:scale-105'
								/>
							</Link>
							<Link href={product.href} className='text-lg font-bold mt-5 hover:text-primary'>
								{product.title}
							</Link>
							<p className='text-base font-semibold text-red-500'>{moneyFormat(product.price)}</p>
							<Button className='mt-2 z-10'>Add to cart</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
