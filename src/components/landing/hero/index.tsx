import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Button } from '../../ui/button';
import { TbArrowBigRightFilled } from "react-icons/tb";
import ProductsShow from '@/components/landing/hero/products-show';

export default function Hero() {
	return (
		<div className='container pt-24 pb-40 flex items-start justify-between bg-white'>
			<div className='w-[670px] mt-6'>
				<div className='max-w-fit py-3 px-5 bg-primary-50 rounded-full'>
					<p className='text-primary-600 font-semibold'>
						Disruptive Technology
					</p>
				</div>
				<h1 className='my-6 text-6xl font-extrabold leading-snug drop-shadow-md'>
					{`Unleash Possibilities, `}
					<span className='bg-gradient-to-b from-primary-500 to-primary-600 inline-block text-transparent bg-clip-text'>{`Explore Technology's`}</span>
					{` Realm.`}
				</h1>
				<h2 className='mb-7 opacity-85'>
					{`Discover incredible savings of up to 70% off on your first purchase at our phone shop. Don't miss out on this opportunity to upgrade your phone collection at unbeatable prices.`}
				</h2>
				<div className='flex items-center justify-start gap-7'>
					<Link href={'/products'}>
						<Button
							className='flex items-center justify-start gap-4 hover:drop-shadow-md transition duration-200 px-10 py-7 rounded-full text-white'
							size={'lg'}
						>
							<span className='text-lg uppercase font-bold'>
								Shop Now
							</span>
							<TbArrowBigRightFilled size={20} />
						</Button>
					</Link>
					<Link href={'/about-us'}>
						<Button
							className='flex items-center justify-start gap-4 px-10 py-7 text-black rounded-full'
							size={'lg'}
							variant={'outline'}
						>
							<span className='group-hover:text-hover-normal text-lg uppercase font-bold text-black'>
								More Detail
							</span>
						</Button>
					</Link>
				</div>
			</div>

			<div className='relative w-[calc(100%-670px) flex items-center justify-end mt-9'>
				<ProductsShow />
			</div>
		</div>
	);
}
