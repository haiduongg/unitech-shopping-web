'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus, X } from 'lucide-react';

import { FaChevronDown, FaRegStar, FaStar } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function ProductReviews() {
	const customerReviews: {
		createAt: string;
		name: string;
		rating: number;
		review: string;
	}[] = [
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 5,
				review: 'nice camera',
			},
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 4,
				review: 'nice camera',
			},
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 3,
				review: 'nice camera',
			},
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 1,
				review: 'nice camera',
			},
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 3,
				review: 'nice camera',
			},
			{
				createAt: '19 Febuary 2024',
				name: 'Cao Hai Duong',
				rating: 5,
				review: 'nice camera',
			},
		];
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className='mt-11 border-[2px] rounded-lg'>
			<Collapsible open={isOpen} onOpenChange={setIsOpen} className='w-full'>
				<CollapsibleTrigger asChild>
					<div className='w-full cursor-pointer flex items-center justify-between p-8'>
						<h3 className='font-bold text-2xl'>Reviews</h3>
						<Button variant='ghost' size='icon'>
							<FaChevronDown
								size={25}
								className={`${isOpen ? 'rotate-180' : ''
									} transition duration-300`}
							/>
						</Button>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent className='space-y-2 px-8 pb-12'>
					<div className='mb-9'>
						<h4 className='text-sm font-medium'>Review this product</h4>
						<h5 className='text-xs'>
							Help other customers make their decision
						</h5>
						<Button className='mt-4 px-20 border-black' variant={'outline'}>
							Wrie a Review
						</Button>
					</div>
					<div className='border-t-[2px] pt-7'>
						<h4 className='text-xl font-medium'>Customer Reviews</h4>
						<div className='mt-9'>
							{customerReviews.map((customer, index) => (
								<div key={index} className='my-8'>
									<div className='flex items-center justify-start gap-2 divide-x-2 divide-gray-500'>
										<p className='font-bold text-lg'>{customer.name}</p>
										<p className='text-sm pl-2'>{customer.createAt}</p>
									</div>
									<div className='flex items-center justify-start gap-1 text-yellow-500 my-2'>
										{Array(customer.rating)
											.fill(0)
											.map((_, idx) => (
												<div key={idx}>
													<FaStar size={20} />
												</div>
											))}
										{Array(5 - customer.rating)
											.fill(0)
											.map((_, idx) => (
												<div key={idx}>
													<FaRegStar size={20} />
												</div>
											))}
										<p className='!text-black text-sm ml-1 font-medium'>
											({customer.rating.toFixed(1)})
										</p>
									</div>
									<p className='text-lg'>{customer.review}</p>
								</div>
							))}
						</div>

						<div className='flex items-center justify-center'>
							<Button
								variant={'outline'}
								className='text-base border-black'
								size={'lg'}
							>
								View all Reviews
							</Button>
						</div>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}
