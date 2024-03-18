import React from 'react';

import Image from 'next/image';

import CustomersFeedbackVector from '@/assets/img/vector/customers-reviews.webp';
import CustomersReviewsCard from '@/components/landing/customers-reviews/customers-reviews-card';

export default function CustomersReviews() {
	return (
		<div className='py-20'>
			<div className='container grid grid-cols-2'>
				<Image
					src={CustomersFeedbackVector}
					alt='vector customers feedback'
					width={700}
					height={700}
					className='object-cover'
					quality={100}
				/>
				<div className='mt-16 pl-24 pr-10'>
					<h2 className='text-center text-4xl font-bold leading-normal'>
						Customers Reviews
					</h2>
					<CustomersReviewsCard />
				</div>
			</div>
		</div>
	);
}
