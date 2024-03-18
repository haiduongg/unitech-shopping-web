"use client"
import React from 'react';

import { IconType } from 'react-icons';
import {
	SiApple,
	SiXiaomi,
	SiSamsung,
	SiAsus,
	SiAcer,
	SiLenovo,
	SiArstechnica,
	SiBaidu,
	SiItchdotio,
} from 'react-icons/si';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function Brands() {
	const brands: {
		name: string;
		logo: IconType;
	}[] = [
			{ name: 'Apple', logo: SiApple },
			{ name: 'Xiaomi', logo: SiXiaomi },
			{ name: 'Samsung', logo: SiSamsung },
			{ name: 'Asus', logo: SiAsus },
			{ name: 'Acer', logo: SiAcer },
			{ name: 'Lenovo', logo: SiLenovo },
			{ name: 'Arstechnica', logo: SiArstechnica },
			{ name: 'Baidu', logo: SiBaidu },
			{ name: 'Itchdotio', logo: SiItchdotio },
		];

	return (
		<div className='py-16 bg-bgWhite'>
			<div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards
					items={brands}
					direction="right"
					speed="normal"
				/>
			</div>
		</div>
	);
}
