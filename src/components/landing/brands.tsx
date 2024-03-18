import React from 'react';

import { IconType } from 'react-icons';
import { SiApple } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiAsus } from "react-icons/si";
import { SiAcer } from "react-icons/si";
import { SiLenovo } from "react-icons/si";
import { SiArstechnica } from "react-icons/si";
import { SiBaidu } from "react-icons/si";
import { SiItchdotio } from "react-icons/si";

interface IBrands {
	name: string,
	logo: IconType,
}

export default function Brands() {
	const brands: IBrands[] = [
		{ name: 'Apple', logo: SiApple },
		{ name: 'Xiaomi', logo: SiXiaomi },
		{ name: 'Samsung', logo: SiSamsung },
		{ name: 'Asus', logo: SiAsus },
		{ name: 'Acer', logo: SiAcer },
		{ name: 'Lenovo', logo: SiLenovo },
		{ name: 'Arstechnica', logo: SiArstechnica },
		{ name: 'Baidu', logo: SiBaidu },
		{ name: 'Itchdotio', logo: SiItchdotio },
	]

	return (
		<div className='py-16 bg-bgWhite'>
			<ul className='animation-slider flex items-center justify-start gap-32 opacity-70'>
				{brands.map((brand, index) => (
					<li key={index}>
						<brand.logo size={100} />
					</li>
				))}
			</ul>
		</div>
	);
}