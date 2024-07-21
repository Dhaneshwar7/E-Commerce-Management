'use client';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import NavBarBox from './NavBarBox';
import AddProductForm from './AddProduct';

const subCategories = [
	{ name: 'Totes', href: '#' },
	{ name: 'Backpacks', href: '#' },
	{ name: 'Travel Bags', href: '#' },
	{ name: 'Hip Bags', href: '#' },
	{ name: 'Laptop Sleeves', href: '#' },
];
const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'white', label: 'White', checked: false },
			{ value: 'beige', label: 'Beige', checked: false },
			{ value: 'blue', label: 'Blue', checked: true },
			{ value: 'brown', label: 'Brown', checked: false },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'purple', label: 'Purple', checked: false },
		],
	},
	{
		id: 'category',
		name: 'Category',
		options: [
			{ value: 'new-arrivals', label: 'New Arrivals', checked: false },
			{ value: 'sale', label: 'Sale', checked: false },
			{ value: 'travel', label: 'Travel', checked: true },
			{ value: 'organization', label: 'Organization', checked: false },
			{ value: 'accessories', label: 'Accessories', checked: false },
		],
	},
	{
		id: 'size',
		name: 'Size',
		options: [
			{ value: '2l', label: '2L', checked: false },
			{ value: '6l', label: '6L', checked: false },
			{ value: '12l', label: '12L', checked: false },
			{ value: '18l', label: '18L', checked: false },
			{ value: '20l', label: '20L', checked: false },
			{ value: '40l', label: '40L', checked: true },
		],
	},
];

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
	{
		id: 9,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 10,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 11,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 12,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 13,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 14,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 15,
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

export default function FilterProductPage({ mode }) {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [isScrolledDown, setIsScrolledDown] = useState({
		isScroll: false,
		isScrolllVaue: 0,
	});
	const [addProductMenu, setAddProductMenu] = useState(false);

	const handleAddCartMenu = () => {
		setAddProductMenu(prev => !prev);
	};

	useEffect(() => {
		let lastScroll = 0;
		let isScrolled = false;
		const handleScroll = () => {
			let currentScroll =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;
			let scrollDirection = currentScroll < lastScroll;
			let shouldToggle = isScrolled && scrollDirection;
			isScrolled = currentScroll > 100;
			lastScroll = currentScroll;
			setIsScrolledDown({
				isScroll: scrollDirection,
				isScrolllVaue: currentScroll,
			});
			// console.log(currentScroll);
		};
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="relative">
			<div className="bg-red-400 h-screen fixed top-0 z-40 auto">
				<AddProductForm
					addProductMenu={addProductMenu}
					handleAddCartMenu={handleAddCartMenu}
				/>
			</div>
			<Container sx={{}}>
				{/* Mobile filter dialog */}
				<Dialog
					open={mobileFiltersOpen}
					onClose={setMobileFiltersOpen}
					className="relative z-40 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative ml-auto bg-slate-600 flex h-full w-full max-w-xs transform flex-col overflow-y-auto py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
						>
							<div className="flex items-center justify-between px-4">
								<h2 className="text-lg font-medium text-gray-900">Filters</h2>
								<button
									type="button"
									onClick={() => setMobileFiltersOpen(false)}
									className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
								</button>
							</div>

							{/* Filters */}
							<form className="mt-4 border-t border-gray-200 z-50">
								<h3 className="sr-only">Categories</h3>
								<ul role="list" className="px-2 py-3 font-medium text-gray-900">
									{subCategories.map(category => (
										<li key={category.name}>
											<a href={category.href} className="block px-2 py-3">
												{category.name}
											</a>
										</li>
									))}
								</ul>

								{filters.map(section => (
									<Disclosure
										key={section.id}
										as="div"
										className="border-t border-gray-200 px-4 py-6"
									>
										<h3 className="-mx-2 -my-3 flow-root">
											<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
												<span className="font-medium text-gray-900">
													{section.name}
												</span>
												<span className="ml-6 flex items-center">
													<PlusIcon
														aria-hidden="true"
														className="h-5 w-5 group-data-[open]:hidden"
													/>
													<MinusIcon
														aria-hidden="true"
														className="h-5 w-5 [.group:not([data-open])_&]:hidden"
													/>
												</span>
											</DisclosureButton>
										</h3>
										<DisclosurePanel className="pt-6">
											<div className="space-y-6">
												{section.options.map((option, optionIdx) => (
													<div key={option.value} className="flex items-center">
														<input
															defaultValue={option.value}
															defaultChecked={option.checked}
															id={`filter-mobile-${section.id}-${optionIdx}`}
															name={`${section.id}[]`}
															type="checkbox"
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label
															htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
															className="ml-3 min-w-0 flex-1 text-gray-500"
														>
															{option.label}
														</label>
													</div>
												))}
											</div>
										</DisclosurePanel>
									</Disclosure>
								))}
							</form>
						</DialogPanel>
					</div>
				</Dialog>

				<Container className="mx-auto max-w-full  max-sm:px-0 px-6 lg:px-0">
					{/* Navbar for Homepage and Filter Page Same componet */}
					<NavBarBox
						mode={mode}
						isScrolledDown={isScrolledDown}
						handleAddCartMenu={handleAddCartMenu}
						addProductMenu={addProductMenu}
					/>
					{/* Navbar for Homepage and Filter Page Same componet */}

					<section
						aria-labelledby="products-heading"
						className="relative pb-24 pt-28"
					>
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						<div className="grid grid-cols-1 gap-x-8 gap-y-10 relative lg:grid-cols-4">
							{/* Filters */}
							<div>
								<form className="SideBar sticky top-0 Filter hidden lg:block  rounded bg-slate-100/70 z-50">
									<h3 className="sr-only">Categories</h3>
									<ul
										role="list"
										className={`space-y-4 border-b text-black px-2 py-2 border-gray-200 pb-6 text-sm font-semibold `}
									>
										{subCategories.map(category => (
											<li
												className="hover:bg-slate-200 w-fit py-1 hover:px-2 rounded transition-all delay-50 duration-100"
												key={category.name}
											>
												<Link to={category.href}>{category.name}</Link>
											</li>
										))}
									</ul>

									{filters.map(section => (
										<Disclosure
											key={section.id}
											as="div"
											className="border-b border-gray-200 py-6"
										>
											<h3 className="-my-3 flow-root">
												<DisclosureButton className="group flex w-full items-center justify-between bg-slate-50  py-3 text-sm text-gray-400 hover:text-gray-500">
													<span className="font-medium ml-2 text-gray-950">
														{section.name}
													</span>
													<span className="ml-6 flex items-center">
														<PlusIcon
															aria-hidden="true"
															className="h-5 w-5 group-data-[open]:hidden"
														/>
														<MinusIcon
															aria-hidden="true"
															className="h-5 w-5 [.group:not([data-open])_&]:hidden"
														/>
													</span>
												</DisclosureButton>
											</h3>
											<DisclosurePanel className="pt-6">
												<div className="space-y-4">
													{section.options.map((option, optionIdx) => (
														<div
															key={option.value}
															className="flex items-center ml-2"
														>
															<input
																defaultValue={option.value}
																defaultChecked={option.checked}
																id={`filter-${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
															/>
															<label
																htmlFor={`filter-${section.id}-${optionIdx}`}
																className="ml-3 text-sm text-gray-900"
															>
																{option.label}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</Disclosure>
									))}
								</form>
							</div>

							{/* Product grid */}
							<div className="lg:col-span-3">
								<div className="Product-Container grid grid-cols-1 max-sm:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
															<span
																aria-hidden="true"
																className="absolute inset-0"
															/>
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
													<Typography
														sx={{ backgroundColor: 'rgb(177, 174, 174)' }}
													>
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
							</div>
						</div>
					</section>
				</Container>
			</Container>
		</div>
	);
}
