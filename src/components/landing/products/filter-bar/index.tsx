import React from 'react';

import { Input } from '@/components/ui/input';
import { Slider } from "@/components/ui/slider"
import { Button } from '@/components/ui/button';

import { RiDeleteBin5Line } from "react-icons/ri";

import FilterCombobox from '@/components/landing/products/filter-bar/filter-combobox';

export default function FilterBar() {
	const categories: string[] = [
		'All',
		'Mobile',
		'Laptop',
		'Computer',
		'Accessories',
	];
	const company: string[] = [
		'Apple',
		'Xiaomi',
		'Realme',
		'Oppo',
		'Asus',
		'Acer',
		'Lenovo',
		'Dell',
	];

	return (
		<div>
			<Input type='text' placeholder='Search...' />

			<div className='mt-10'>
				<h3 className='text-base font-semibold mb-3'>
					Category
				</h3>
				<ul className='flex flex-col items-start'>
					{categories.map((category, idx) => (
						<li key={idx}>
							<Button
								variant={'link'}
								className='text-black text-sm p-0 opacity-70 hover:opacity-100'
							>
								<p>{category}</p>
							</Button>
						</li>
					))}
				</ul>
			</div>

			<div className='mt-12'>
				<h3 className='text-base font-semibold mb-3'>
					Company
				</h3>
				<FilterCombobox />
			</div>

			<div className='mt-12'>
				<h3 className='text-base font-semibold mb-3'>
					Price
				</h3>
				<div>
					<Slider />
				</div>
			</div>

			<div className='my-12 flex items-center justify-center'>
				<Button variant={'destructive'} className='flex items-center justify-center gap-3'>
					<RiDeleteBin5Line size={18} />
					<span>Clear all filter</span>
				</Button>
			</div>
		</div>
	);
}