import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';

import { Button } from '../ui/button';
import { FaSquareFacebook, FaGithub, FaYoutube } from 'react-icons/fa6';

import Logo from '/public/whiteLogo.png';

interface IFooterLinks {
	id: number;
	category: string;
	links: { label: string; href: string; external: boolean }[];
}

interface ISocails {
	label: string;
	href: string;
	icon: IconType;
}

function Footer() {
	const footerLinks: IFooterLinks[] = [
		{
			id: 1,
			category: 'About',
			links: [
				{ label: 'Introduce', href: '/about/introduce', external: false },
				{ label: 'Carrer', href: '/about/carrer', external: false },
			],
		},
		{
			id: 2,
			category: 'Policy',
			links: [
				{
					label: 'Warranty policy',
					href: '/policy/warranty-policy',
					external: false,
				},
				{
					label: 'Payment policy',
					href: '/policy/payment-policy',
					external: false,
				},
				{
					label: 'Delivery policy',
					href: '/policy/delivery-policy',
					external: false,
				},
				{
					label: 'Privacy Policy',
					href: '/policy/privacy-policy',
					external: false,
				},
			],
		},
		{
			id: 3,
			category: 'Information',
			links: [
				{
					label: 'Shop system',
					href: '/information/shop-systems',
					external: false,
				},
				{
					label: 'Service Center',
					href: '/information/service-center',
					external: false,
				},
				{
					label: 'Look up warranty address',
					href: '/information/look-up-warranty-address',
					external: false,
				},
			],
		},
	];
	const socials: ISocails[] = [
		{ label: 'Github', href: 'https://github.com/haiduongg', icon: FaGithub },
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/haiduong004',
			icon: FaSquareFacebook,
		},
		{
			label: 'Youtube',
			href: 'https://www.youtube.com/caohaiduong',
			icon: FaYoutube,
		},
	];

	return (
		<footer className='bg-[#121212] text-white'>
			<div className='container mx-auto'>
				<div className='py-14 flex items-start justify-between'>
					<Link
						href={'/'}
						className='hover:opacity-80 flex items-center justify-start gap-3'
					>
						<Image src={Logo} alt='logo' width={60} height={60} />
						<h1 className='text-3xl font-bold'>
							<span className='text-white'>Uni</span>
							Tech
						</h1>
					</Link>
					<div className='pr-5'>
						<ul className='grid grid-cols-3 gap-14'>
							{footerLinks.map((category) => (
								<li key={category.id}>
									<div>
										<p className='text-lg font-semibold'>{category.category}</p>
										<ul className='mt-7'>
											{category.links.map((link, index) => (
												<li key={index} className='mt-2'>
													<Button
														variant={'link'}
														className='p-0 text-white opacity-50 text-base font-normal hover:opacity-100'
													>
														<Link href={link.href}>{link.label}</Link>
													</Button>
												</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='pt-4 pb-3 border-t-[1px] border-[#b4b4b4] flex justify-between'>
					<Button
						variant={'link'}
						className='p-0 text-white opacity-50 text-base font-normal hover:opacity-100'
					><Link href={'https://www.facebook.com/haiduong004'} className='opacity-70 hover:opacity-100'><p>Cao Hai Duong © 2024</p></Link></Button>
					<ul className='flex items-start justify-start gap-5'>
						{socials.map((social, index) => (
							<li key={index} title={social.label}>
								<Link href={social.href} className='opacity-70 hover:opacity-100'>
									<social.icon size={25} />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
