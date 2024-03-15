import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Button } from '../ui/button';

import IPhone12 from '@/assets/img/iphone12.png';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className='container mx-auto pt-28 pb-40 flex items-start justify-between bg-white'>
			<div className='max-w-[780px] mt-6'>
				<h1 className='text-7xl font-extrabold leading-snug drop-shadow-md'>
					{`Unleash Possibilities, Explore `}
					<span className='bg-gradient-to-br from-primary-600 to-secondary-500 inline-block text-transparent bg-clip-text'>{`Technology's`}</span>
					{` Realm.`}
				</h1>
				<p className='mt-7 mb-11 opacity-85'>
					{`Discover incredible savings of up to 70% off on your first purchase at our phone shop! Don't miss out on this opportunity to upgrade your phone collection at unbeatable prices.`}
				</p>
				<div className='flex gap-6'>
					<Link href={'/products'}>
						<Button className='relative hover:drop-shadow-md transition-all' size={'lg'}>
							<span className='group-hover:text-hover-normal text-base'>
								Shop Now
							</span>
						</Button>
					</Link>
					<Link href={'/about-us'}>
						<Button className='relative hover:drop-shadow-md transition-all' size={'lg'} variant={'outline'}>
							<span className='group-hover:text-hover-normal text-base'>
								More Detail
							</span>
						</Button>
					</Link>
				</div>
			</div>

			<div className='max-w-[400px]'>
				<Image src={IPhone12} alt='IPhone 12' width={350} />
			</div>
		</div>
	);
}