'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { FiArrowUpRight } from 'react-icons/fi';

interface INavigate {
	label: string;
	href: string;
	external: boolean;
}

export default function Navigation() {
	const pathname = usePathname();

	const navigate: INavigate[] = [
		{ label: 'Home', href: '/', external: false },
		{ label: 'Products', href: '/products', external: false },
		{ label: 'About', href: '/about', external: false },
		{ label: 'Blog', href: 'https://www.csdvietnam.com', external: true },
		{
			label: 'Contact',
			href: 'https://www.facebook.com/haiduong004',
			external: true,
		},
	];

	return (
		<ul className='flex items-center justify-center'>
			{navigate.map((link, index) => (
				<li
					key={index}
					className={`mx-3 group relative font-semibold transition duration-200
					${pathname === link.href && 'text-primary transition duration-200'}`}
				>
					<Link
						href={link.href}
						className='block px-2 pt-2 pb-1 group-hover:text-primary transition duration-200'
						target={link.external ? '_blank' : ''}
					>
						<p className='text-base'>{link.label}</p>
						<div className='absolute top-2 right-[-5px] opacity-60 !text-black'>
							{link.external === true ? <FiArrowUpRight size={11} /> : null}
						</div>
					</Link>
					<div
						className={`w-[50%] h-[3px] bg-primary-900 mx-auto rounded-full opacity-0 transition duration-200 ${pathname === link.href && 'opacity-90 transition duration-200'
							}`}
					></div>
				</li>
			))}
		</ul>
	);
}
