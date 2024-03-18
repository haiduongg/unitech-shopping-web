import React from 'react';

import { PiQuotesFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

import CustomerCard from '@/components/landing/customers-reviews/customer-card';

export default function CustomersReviewsCard() {
	const stars: number[] = Array(5).fill(0);
	return (
		<div className='mt-14'>
			<div className='relative'>
				<PiQuotesFill size={80} className='absolute -top-8 -left-14 rotate-180 text-primary opacity-25' />
				<p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam debitis alias nisi rerum sunt id sed soluta, labore, culpa commodi repudiandae perspiciatis reprehenderit et recusandae saepe explicabo voluptatum veniam!
				</p>
				<div className='mt-5 mb-7 flex items-center justify-start gap-2'>
					{stars.map((star, index) => (
						<FaStar key={index} className='cursor-pointer text-yellow-500' size={23} />
					))}
				</div>

				<CustomerCard />
			</div>
		</div>
	);
}