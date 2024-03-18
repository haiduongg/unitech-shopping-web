'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { IoClose } from 'react-icons/io5';

export default function SearchingFor() {
	const [searchFor, setSearchFor] = useState<string[]>([]);
	const searchingTags: { name: string; color: string }[] = [
		{ name: 'Accessory', color: 'bg-violet-100' },
		{ name: 'Laptop', color: 'bg-orange-100' },
		{ name: 'Tablet', color: 'bg-green-100' },
		{ name: 'PC', color: 'bg-yellow-100' },
		{ name: 'Phone', color: 'bg-blue-100' },
		{ name: 'PC Components', color: 'bg-red-100' },
	];

	return (
		<div className='mb-5'>
			<p className='font-semibold text-sm opacity-70 mb-3'>Seaching for</p>
			<ul className='flex flex-wrap items-center justify-start gap-2'>
				{searchingTags.map((tag, index) => (
					<div key={index}>
						{searchFor.indexOf(tag.name) === -1 && (
							<li
								key={index}
								className={`cursor-pointer flex items-center justify-start gap-2 border-[1px] rounded-full pl-4 pr-3 py-1 opacity-65 hover:${tag.color} hover:opacity-100 hover:border-gray-400 transition duration-300`}
								onClick={() =>
									setSearchFor((oldArray) => [...oldArray, tag.name])
								}
							>
								<p className='text-sm font-medium'>{tag.name}</p>
							</li>
						)}
						{searchFor.indexOf(tag.name) !== -1 && (
							<li
								key={index}
								className={`group cursor-pointer flex items-center justify-start gap-2 border-[1px] rounded-full pl-4 pr-3 py-1 ${tag.color} hover:border-gray-400 transition duration-300`}
								onClick={() => {
									setSearchFor(searchFor.filter(e => e !== tag.name))
								}}
							>
								<p className='text-sm font-medium'>{tag.name}</p>
								<IoClose size={16} className='group-hover:text-red-400 transition duration-300' />
							</li>
						)}
					</div>
				))}
				{/* {searchingTags.map((tag, index) => (
					<li
						key={index}
						className={`cursor-pointer flex items-center justify-start gap-2 border-[1px] rounded-full pl-4 pr-3 py-1 opacity-65`}
					>
						<p className='text-sm font-medium'>{tag.name}</p>
					</li>
				))} */}

				{/* {searchingTags.map((tag, index) => (
					<li
						key={index}
						className={`cursor-pointer flex items-center justify-start gap-2 border-[1px] rounded-full pl-4 pr-3 py-1 ${tag.color}`}
					>
						<p className='text-sm font-medium'>{tag.name}</p>
						<IoClose size={16} />
					</li>
				))} */}
			</ul>
		</div>
	);
}
