'use client'
import * as React from "react"

import Image, { StaticImageData } from 'next/image';

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"

import iPhone13Green from '@/assets/img/hero-products-show/iphone-13-green.webp';
import iPhone13Pink from '@/assets/img/hero-products-show/iphone-13-pink.webp';
import iPhone13Black from '@/assets/img/hero-products-show/iphone-13-black.webp';

export default function ProductImageSlider() {
	const imageSlider: StaticImageData[] = [
		iPhone13Green, iPhone13Pink, iPhone13Black
	]
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			console.log("current")
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<div className="flex items-center justify-center">
			<Carousel setApi={setApi} className="w-[80%]">
				<CarouselContent>
					{imageSlider.map((image, index) => (
						<CarouselItem key={index}>
							<Card className="flex items-center justify-center py-5">
								<Image src={image} alt="image" width={400} height={400} className="max-w-96 max-h-96" />
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
