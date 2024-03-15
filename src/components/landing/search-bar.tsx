import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FaRegClock } from "react-icons/fa6";

import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

function SearchBar() {
	const searchingTags: { name: string; color: string }[] = [
		{ name: 'Phone', color: 'bg-blue-50' },
		{ name: 'Laptop', color: 'bg-orange-50' },
		{ name: 'Tablet', color: 'bg-green-50' },
		{ name: 'PC', color: 'bg-yellow-50' },
		{ name: 'PC Components', color: 'bg-red-50' },
		{ name: 'Accessory', color: 'bg-violet-50' },
	];

	const recentsSearch: string[] = [
		'iPhone 12 128GB',
		'iPhone 11 pro max',
		'samsung 12 ultra',
		'oppo neo 5',
		'redmi note 9',
		'oppo neo 8',
		'samsung red 8',
	]

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='secondary'
					size='icon'
					className='gird place-items-center rounded-full bg-black text-white hover:bg-hover-normal'
				>
					<FiSearch size={18} />
				</Button>
			</DialogTrigger>
			<DialogContent className='p-0 gap-2'>
				<DialogHeader className='px-6 pt-2'>
					<div className='flex items-center justify-start gap-1'>
						<FiSearch size={18} />
						<Input
							className='w-[80%] border-none shadow-none focus:border-none focus-visible:ring-0 text-sm'
							autoFocus
							placeholder='Search...'
						/>
					</div>
				</DialogHeader>
				<div className='border-t-[1px] px-6 py-4'>
					<div className='mb-5'>
						<p className='font-semibold text-sm opacity-70 mb-3'>Seaching for</p>
						<ul className='flex flex-wrap items-center justify-start gap-2'>
							{searchingTags.map((tag, index) => (
								<li
									key={index}
									className={`cursor-pointer flex items-center justify-start gap-2 border-[1px] rounded-full pl-4 pr-3 py-1 ${tag.color}`}
								>
									<p className='text-sm font-medium'>{tag.name}</p>
									<IoClose size={16} />
								</li>
							))}
						</ul>
					</div>
					<div className='border-t-[1px] pt-4'>
						<p className='font-semibold text-sm opacity-70 mb-2'>Recent</p>
						<ul className='ml-1 flex flex-col items-start justify-start max-h-48 overflow-y-auto'>
							{recentsSearch.map((item, index) => (
								<li key={index} className='w-full flex items-center justify-between gap-3 opacity-60 hover:bg-slate-100 rounded-lg hover:opacity-100 cursor-pointer'>
									<div className='flex items-center justify-start gap-4 px-3 py-2 hover:text-primary'>
										<FaRegClock size={16} />
										<p className='text-sm'>{item}</p>
									</div>
									<Button variant={'destructive'} size={'icon'}><IoClose size={16} className='text-white' /></Button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default SearchBar;
