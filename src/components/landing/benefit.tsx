import React from 'react';
import PropTypes from 'prop-types';

import { IconType } from 'react-icons';

import { FaRegStar } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBadgeCheck } from "react-icons/lu";

interface IBenefits {
	title: string,
	icon: IconType,
	content: string,
}

export default function Benefit() {
	const benefits: IBenefits[] = [
		{ title: 'Best Quality', content: 'All of We provides your dream with modern and compact designers.', icon: FaRegStar },
		{ title: 'Free Shipping', content: 'All of We provides your dream with modern and compact designers.', icon: LiaShippingFastSolid },
		{ title: 'Warranty', content: 'All of We provides your dream with modern and compact designers.', icon: LuBadgeCheck },
	]
	return (
		<div className='py-28 bg-bgWhite'>
			<div className='container mx-auto'>
				<div className='flex items-center justify-start gap-12'>
					<div className='w-64 h-[3px] bg-primary -ml-20'></div>
					<h2 className='text-4xl font-semibold max-w-[430px] leading-normal text-secondary-700'>Benefits You Get When Using Our Sevices</h2>
				</div>
				<div className='mt-20'>
					<ul className='grid grid-cols-3'>
						{benefits.map((benefit, index) => (
							<li key={index}>
								<div className='flex items-start justify-start gap-9 text-primary'>
									<benefit.icon size={50} />
									<div className='pt-3'>
										<span className='text-2xl font-medium'>{benefit.title}</span>
										<p className='text-black max-w-[70%] mt-5 font-medium'>{benefit.content}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}