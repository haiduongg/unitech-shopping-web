import Image from 'next/image';
import Link from 'next/link';

import Hero from '@/components/landing/hero';
import Benefit from '@/components/landing/benefit';
import TrendingProduct from '@/components/landing/trending-product';
import TopCategories from '@/components/landing/top-categories';
import Brands from '@/components/landing/brands';
import CustomersReviews from '@/components/landing/customers-reviews';

export default function Home() {
	return (
		<div id='page'>
			<Hero />
			<Brands />
			<TopCategories />
			<TrendingProduct />
			<Benefit />
			<CustomersReviews />
		</div>
	);
}
