import React from 'react';
import PropTypes from 'prop-types';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

import Laptop from '@/assets/img/categories-thumbnail/laptop.jpg';
import Mobile from '@/assets/img/categories-thumbnail/phone.jpg';
import Tablet from '@/assets/img/categories-thumbnail/tablet.webp';
import PC from '@/assets/img/categories-thumbnail/pc-components.jpg';
import Accessory from '@/assets/img/categories-thumbnail/accessory.jpg';

import { FaArrowRightLong } from 'react-icons/fa6';

interface ICategories {
	image: StaticImageData;
	name: string;
	href: string;
}

export default function TopCategories() {
	const categories: ICategories[] = [
		{ name: 'Mobile', image: Mobile, href: '/products/mobile' },
		{ name: 'Laptop', image: Laptop, href: '/products/laptop' },
		{ name: 'Tablet', image: Tablet, href: '/products/table' },
		{ name: 'Computer', image: PC, href: '/products/computer' },
		{ name: 'Accessory', image: Accessory, href: '/products/accessory' },
	];
	return (
		<div className='py-20 bg-white'>
			<div className='container mx-auto'>
				<h2
					id='top-categories'
					className='text-center text-4xl font-bold leading-normal'
				>
					<span>Top Categories</span>
				</h2>
				<ul className='grid grid-cols-5 gap-8 mt-8'>
					{categories.map((category, index) => (
						<li
							key={index}
							className='bg-primary rounded-md hover:scale-105 transition duration-200 ease-in-out'
						>
							<Link href={category.href}>
								<div className='relative h-64'>
									<Image src={category.image} alt={`category ${category.name}`} width={200} height={200} className='w-full h-full object-cover rounded-md' />
									<div className='absolute top-0 left-0 w-full h-full bg-[#00000080] rounded-md grid place-items-center'>
										<p className='text-white font-semibold text-xl'>{category.name}</p>
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
