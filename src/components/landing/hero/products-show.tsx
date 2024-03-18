'use client';
import React from 'react';
import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import IPhone13Black from '@/assets/img/hero-products-show/iphone-13-black.webp';
import IPhone13White from '@/assets/img/hero-products-show/iphone-13-white.webp';
import IPhone13Pink from '@/assets/img/hero-products-show/iphone-13-pink.webp';
import IPhone13Red from '@/assets/img/hero-products-show/iphone-13-red.webp';
import IPhone13Blue from '@/assets/img/hero-products-show/iphone-13-blue.webp';
import IPhone13Green from '@/assets/img/hero-products-show/iphone-13-green.webp';

interface IProducts {
	name: string;
	color?: string;
	img: StaticImageData;
}

export default function ProductsShow() {
	const [image, setImage] = useState<StaticImageData>(IPhone13Pink);
	const products: IProducts[] = [
		{ name: 'IPhone 13', color: 'black', img: IPhone13Black },
		{ name: 'IPhone 13', color: 'white', img: IPhone13White },
		{ name: 'IPhone 13', color: 'pink', img: IPhone13Pink },
		{ name: 'IPhone 13', color: 'red', img: IPhone13Red },
		{ name: 'IPhone 13', color: 'blue', img: IPhone13Blue },
		{ name: 'IPhone 13', color: 'green', img: IPhone13Green },
	];

	return (
		<div>
			{/* <div className='absolute top-20 left-40 size-80 bg-primary-500 rounded-full blur-[200px]'></div> */}
			<div className='flex flex-col items-center justify-center gap-6'>
				<div className='w-[27rem] h-[29rem] border-[1px] bg-slate-50 shadow-sm flex items-center justify-center rounded-3xl'>
					<Image
						src={image}
						alt='IPhone 13'
						width={380}
						height={380}
						className='object-cover select-none'
					/>
				</div>
				<ul className='flex items-center justify-start gap-3'>
					{products.map((product, index) => (
						<li key={index}
							className={`size-6 bg-${product.color === 'black' || product.color === 'white'
								? product.color
								: `${product.color}-500`
								} rounded-sm border-[1px] cursor-pointer ${image === product.img && 'ring-gray-700 ring-2'}`}
							onClick={() => setImage(product.img)}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
