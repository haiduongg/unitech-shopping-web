import Image from 'next/image';
import Link from 'next/link';

import Hero from '@/components/landing/hero';
import Benefit from '@/components/landing/benefit';
import TrendingProduct from '@/components/landing/trending-product';
import SelectCategories from '@/components/landing/select-categories';

export default function Home() {
	return (
		<div id='page'>
			<Hero />
			<SelectCategories />
			<TrendingProduct />
			<Benefit />
		</div>
	);
}
