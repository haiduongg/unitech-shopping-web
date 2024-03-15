import React from 'react';
import PropTypes from 'prop-types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

import Laptop from '@/assets/img/laptop-asus-tuf-gaming-f15.jpg';
import Phone from '@/assets/img/iphone-12.jpg';
import Tablet from '@/assets/img/tablet.webp';
import PC from '@/assets/img/pc-components.jpg';
import Accessory from '@/assets/img/accessory.jpg';

import { FaArrowRightLong } from 'react-icons/fa6';

interface ICategories {
	image: StaticImageData;
	label: string;
	href: string;
}

export default function SelectCategories() {
	const categories: ICategories[] = [
		{ label: 'Phone', image: Laptop, href: '/products/phone' },
		{ label: 'Laptop', image: Phone, href: '/products/laptop' },
		{ label: 'Tablet', image: Tablet, href: '/products/table' },
		{ label: 'PC / Components', image: PC, href: '/products/pc-components' },
		{ label: 'Accessory', image: Accessory, href: '/products/accessory' },
	];
	return (
		<div className='py-20 bg-bgWhite'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between'>
					<h2
						id='select-categories'
						className='text-3xl font-semibold leading-normal text-center text-secondary-700'
					>
						<p>Select Categories</p>
					</h2>
					<Link
						href={'/products'}
						className='grid place-items-center mt-6'
					>
						<Button
							variant={'ghost'}
							className='group flex items-center justify-between gap-5 hover:shadow-md transition duration-300'
						>
							<span>Show all</span>
							<FaArrowRightLong className='hidden group-hover:block' />
						</Button>
					</Link>
				</div>
				<ul className='grid grid-cols-5 gap-4 mt-4'>
					{categories.map((category, index) => (
						<li
							key={index}
							className='group hover:bg-white rounded-lg border-2 border-transparent hover:border-2 hover:border-[#f1f1f1] hover:shadow-sm'
						>
							<Link href={category.href}>
								<div className='w-full h-36 overflow-hidden object-cover rounded-lg'>
									<Image
										src={category.image}
										alt={`Image for ${category.label}`}
										sizes='100vw'
										style={{ width: '100%', height: '100%' }}
										objectFit='cover'
										className='rounded-lg group-hover:scale-110 transition-all duration-500'
									/>
								</div>
								<p className='text-center mt-5 mb-3 font-semibold text-base'>
									{category.label}
								</p>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
