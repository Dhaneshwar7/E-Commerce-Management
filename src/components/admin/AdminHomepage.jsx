import {
	Box,
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { AppAppBar, LinearBg } from '../landingpage';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 4,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 5,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 6,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 7,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 8,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},

	// More products...
];

export default function Homepage() {
	return (
		<Container className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<Typography
				variant="h1"
				color={'text.primary'}
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					alignSelf: 'center',
					textAlign: 'center',
					fontSize: 'clamp(1.7rem, 2vw, 2rem)',
					fontWeight: '600',
				}}
			>
				Your Listed Products
			</Typography>
			<div className="mt-6 grid grid-cols-1 max-sm:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map(product => (
					<Box key={product.id} className="group relative">
						<div className="acha aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 max-sm:h-52">
							<img
								alt={product.imageAlt}
								src={product.imageSrc}
								className="h-full w-full object-cover object-center lg:h-full lg:w-full"
							/>
						</div>
						<Box className="mt-4 flex justify-between">
							<Box>
								<Typography>
									<Link href={product.href}>
										<span aria-hidden="true" className="absolute inset-0" />
										<Typography
											component={'span'}
											variant={'body2'}
											sx={{
												display: 'flex',
												flexDirection: { xs: 'column', md: 'row' },
												alignSelf: 'center',
												textAlign: 'center',
												fontSize: 'clamp(1rem, .8vw, 1rem)',
												fontWeight: '600',
												opacity: '.9',
											}}
										>
											{product.name}
										</Typography>
									</Link>
								</Typography>
								<Typography sx={{ backgroundColor: 'rgb(177, 174, 174)' }}>
									{product.color}
								</Typography>
							</Box>
							<Typography
								variant="h5"
								sx={{
									display: 'flex',
									flexDirection: { xs: 'column', md: 'row' },
									alignSelf: 'center',
									textAlign: 'center',
									fontSize: 'clamp(.6rem, 4vw, 1rem)',
									fontWeight: '600',
								}}
							>
								{product.price}
							</Typography>
						</Box>
					</Box>
				))}
			</div>
		</Container>
	);
}
