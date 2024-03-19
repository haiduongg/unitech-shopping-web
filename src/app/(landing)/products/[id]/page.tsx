import React from 'react';

import BreadCrumbs from '@/components/landing/product-detail/breadcrumbs';
import ProductInformation from '@/components/landing/product-detail/product-information';
import ProductReviews from '@/components/landing/product-detail/product-reviews';

function ProductDetailPage() {
	return (
		<div className='pt-7 mb-20 container'>
			<BreadCrumbs />
			<ProductInformation />
			<ProductReviews />
		</div>
	);
}

export default ProductDetailPage;