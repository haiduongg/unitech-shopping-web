import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';

import { Button } from '../../ui/button';
import { Input } from '@/components/ui/input';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogClose,
	DialogTrigger,
} from '@/components/ui/dialog';

import SearchingFor from '@/components/landing/search-bar/searching-for';
import Link from 'next/link';

export default function SearchBar() {
	const recentsSearch: string[] = [
		'iPhone 12 128GB',
		'iPhone 11 pro max',
		'samsung 12 ultra',
		'oppo neo 5',
		'redmi note 9',
		'oppo neo 8',
		'samsung red 8',
	];

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
						<DialogClose asChild>
							<FiSearch size={18} className='cursor-pointer' />
						</DialogClose>
						<Input
							className='w-[80%] border-none shadow-none focus:border-none focus-visible:ring-0 text-sm'
							autoFocus
							placeholder='Search...'
						/>
					</div>
				</DialogHeader>
				<div className='border-t-[1px] px-6 py-4'>
					<SearchingFor />
					<div className='border-t-[1px] pt-4'>
						<p className='font-semibold text-sm opacity-70 mb-2'>Recent</p>
						<ul className='ml-1 flex flex-col items-start justify-start max-h-48 overflow-y-scroll no-scrollbar'>
							{recentsSearch.map((item, index) => (
								<li
									key={index}
									className='group w-full flex items-center justify-between gap-3 opacity-60 hover:bg-slate-100 rounded-lg hover:opacity-100 cursor-pointer pr-3'
								>
									<div className='flex items-center justify-start gap-4 px-3 py-2'>
										<FaRegClock size={16} />
										<p className='text-sm group-hover:text-primary'>{item}</p>
									</div>
									<IoClose size={16} className='hover:text-red-500' />
								</li>
							))}
						</ul>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
