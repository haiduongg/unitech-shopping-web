import Image from 'next/image';
import React from 'react';

import avt from '@/assets/img/customers/haiduong.jpg';

export default function CustomerCard() {
	return (
		<div className='flex items-start justify-start gap-5'>
			<Image src={avt} alt='avt customer' width={56} height={56} className='size-14 object-cover rounded-full ring-2 ring-yellow-500' />
			<div className='h-14 flex flex-col justify-center items-start gap-1'>
				<p className='text-xl font-bold'>Cao Hai Duong</p>
				<p className='text-sm opacity-70'>Viet Nam</p>
			</div>
		</div>
	);
}