import React from 'react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import { IoGrid } from 'react-icons/io5';

import { moneyFormat } from '@/utils/moneyFormat';

import IPhone13Black from '@/assets/img/hero-products-show/iphone-13-black.webp';
import IPhone13White from '@/assets/img/hero-products-show/iphone-13-white.webp';
import IPhone13Pink from '@/assets/img/hero-products-show/iphone-13-pink.webp';
import IPhone13Red from '@/assets/img/hero-products-show/iphone-13-red.webp';
import IPhone13Blue from '@/assets/img/hero-products-show/iphone-13-blue.webp';
import IPhone13Green from '@/assets/img/hero-products-show/iphone-13-green.webp';

export default function ProductsList() {
	const productsList: {
		img: StaticImageData;
		name: string;
		price: number;
		company: string;
		category: string;
	}[] = [
			{
				img: IPhone13Black,
				name: 'iPhone 13 Black',
				price: 1850000,
				company: 'Apple',
				category: 'Mobile',
			},
			{
				img: IPhone13White,
				name: 'iPhone 13 White',
				price: 2850000,
				company: 'Apple',
				category: 'Laptop',
			},
			{
				img: IPhone13Pink,
				name: 'iPhone 13 Pink',
				price: 3850000,
				company: 'Apple',
				category: 'Computer',
			},
			{
				img: IPhone13Red,
				name: 'iPhone 13 Red',
				price: 4850000,
				company: 'Apple',
				category: 'Accessory',
			},
			{
				img: IPhone13Blue,
				name: 'iPhone 13 Blue',
				price: 5850000,
				company: 'Apple',
				category: 'Tablet',
			},
			{
				img: IPhone13Green,
				name: 'iPhone 13 Green',
				price: 6850000,
				company: 'Apple',
				category: 'Mobile',
			},
		];
	return (
		<div className='ml-20'>
			<div id='products-sort' className='grid grid-cols-4'>
				<div className='p-2 bg-black max-w-fit cursor-pointer rounded-sm'>
					<IoGrid size={20} className='col-span-1 text-white' />
				</div>
				<div className='col-span-2 grid place-items-center'>
					<p>{productsList.length} total products</p>
				</div>
				<div className='col-span-1 flex justify-end items-center'>
					<Select>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder='Sort by price' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Sort by price</SelectLabel>
								<SelectItem value='lowest'>Lowest Price</SelectItem>
								<SelectItem value='highest'>Highest Price</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div id='products-list' className='mt-10'>
				<ul className='grid grid-cols-4 gap-4'>
					{productsList.map((product, idx) => (
						<li
							key={idx}
							className='group border-[1px] border-transparent hover:border-gray-200 hover:shadow-sm flex flex-col items-center justify-center rounded-lg py-5 transition duration-200'
						>
							<Link href={`/products/${product.name}`}>
								<Image
									src={product.img}
									alt={product.name}
									width={200}
									height={200}
									className='group-hover:scale-105 object-cover transition duration-300'
								/>
							</Link>
							<div className='px-4 mt-6 flex flex-col items-center justify-center'>
								<Link
									href={`/products/${product.name}`}
									className='hover:text-primary-600'
								>
									<p className='font-bold text-lg'>{product.name}</p>
								</Link>
								<p className='text-red-500 font-bold mt-1'>
									{moneyFormat(product.price)}
								</p>
							</div>
							<div className='mt-6'>
								<Button variant={'destructive'}>Add to cart</Button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
