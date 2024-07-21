import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import SiteMarkImg from '../../assets/svgs/sitemark.svg';
import { Link, NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from '@headlessui/react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
const logoStyle = {
	width: '140px',
	height: 'auto',
	cursor: 'pointer',
};

const navigation = {
	categories: [
		{
			id: 'women',
			name: 'Women',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
					imageAlt:
						'Models sitting back to back, wearing Basic Tee in black and bone.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
			],
			sections: [
				{
					id: 'clothing',
					name: 'Clothing',
					items: [
						{ name: 'Tops', href: '#' },
						{ name: 'Dresses', href: '#' },
						{ name: 'Pants', href: '#' },
						{ name: 'Denim', href: '#' },
						{ name: 'Sweaters', href: '#' },
					],
				},
				{
					id: 'accessories',
					name: 'Accessories',
					items: [
						{ name: 'Watches', href: '#' },
						{ name: 'Wallets', href: '#' },
						{ name: 'Bags', href: '#' },
						{ name: 'Sunglasses', href: '#' },
						{ name: 'Hats', href: '#' },
					],
				},
				{
					id: 'brands',
					name: 'Brands',
					items: [
						{ name: 'Full Nelson', href: '#' },
						{ name: 'My Way', href: '#' },
						{ name: 'Re-Arranged', href: '#' },
						{ name: 'Counterfeit', href: '#' },
						{ name: 'Significant Other', href: '#' },
					],
				},
			],
		},
		{
			id: 'men',
			name: 'Men',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
					imageAlt:
						'Drawstring top with elastic loop closure and textured interior padding.',
				},
				{
					name: 'Artwork Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
					imageAlt:
						'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
				},
			],
			sections: [
				{
					id: 'clothing',
					name: 'Clothing',
					items: [
						{ name: 'Tops', href: '#' },
						{ name: 'Pants', href: '#' },
						{ name: 'Sweaters', href: '#' },
						{ name: 'T-Shirts', href: '#' },
						{ name: 'Jackets', href: '#' },
						{ name: 'Activewear', href: '#' },
						{ name: 'Browse All', href: '#' },
					],
				},
				{
					id: 'accessories',
					name: 'Accessories',
					items: [
						{ name: 'Watches', href: '#' },
						{ name: 'Wallets', href: '#' },
						{ name: 'Bags', href: '#' },
						{ name: 'Sunglasses', href: '#' },
						{ name: 'Hats', href: '#' },
						{ name: 'Belts', href: '#' },
					],
				},
				{
					id: 'brands',
					name: 'Brands',
					items: [
						{ name: 'Re-Arranged', href: '#' },
						{ name: 'Counterfeit', href: '#' },
						{ name: 'Full Nelson', href: '#' },
						{ name: 'My Way', href: '#' },
					],
				},
			],
		},
	],
	pages: [
		{ name: 'Company', href: '#' },
		{ name: 'Stores', href: '#' },
	],
};
function AppAppBar({ mode, toggleColorMode }) {
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = newOpen => () => {
		setOpen(newOpen);
	};

	const scrollToSection = sectionId => {
		const sectionElement = document.getElementById(sectionId);
		const offset = 128;
		if (sectionElement) {
			const targetScroll = sectionElement.offsetTop - offset;
			sectionElement.scrollIntoView({ behavior: 'smooth' });
			window.scrollTo({
				top: targetScroll,
				behavior: 'smooth',
			});
			setOpen(false);
		}
	};

	return (
		<div>
			<AppBar
				position="fixed"
				sx={{
					boxShadow: 0,
					bgcolor: 'transparent',
					backgroundImage: 'none',
					mt: 2,
				}}
			>
				<Container maxWidth="lg">
					<Toolbar
						variant="regular"
						sx={theme => ({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexShrink: 0,
							borderRadius: '999px',
							bgcolor:
								theme.palette.mode === 'light'
									? 'rgba(255, 255, 255, 0.4)'
									: 'rgba(0, 0, 0, 0.4)',
							backdropFilter: 'blur(24px)',
							maxHeight: 40,
							border: '1px solid',
							borderColor: 'divider',
							boxShadow:
								theme.palette.mode === 'light'
									? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
									: '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
						})}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
								alignItems: 'center',
								ml: '-18px',
								px: 0,
							}}
						>
							<NavLink to="/">
								<SiteMarkImg  width={'auto'} height={'auto'} />
							</NavLink>
							<Container>
								<nav
									aria-label="Top"
									className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
								>
									<div
										className={`border-b ${
											mode === 'light' ? 'border-gray-600' : 'border-gray-200'
										} `}
									>
										<div className="flex h-16 items-center">
											<button
												type="button"
												onClick={() => setOpen(true)}
												className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
											>
												<span className="absolute -inset-0.5" />
												<span className="sr-only">Open menu</span>
												<Bars3Icon aria-hidden="true" className="h-6 w-6" />
											</button>

											{/* Flyout menus */}
											<PopoverGroup className="hidden  lg:block lg:self-stretch">
												<Container
													sx={{ display: 'flex' }}
													className="flex w-[70%] h-full space-x-9"
												>
													{navigation.categories.map(category => (
														<Popover key={category.name} className="flex">
															<Typography className="relative flex">
																<PopoverButton
																	className={`relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm duration-200 ease-out ${
																		mode === 'light'
																			? 'text-black/70 hover:text-black/100 font-bold'
																			: 'text-white'
																	} font-semibold hover:text-gray-20 hover:border-indigo-600  data-[open]:border-indigo-600 data-[open]:text-indigo-600`}
																>
																	<Typography>{category.name}</Typography>
																</PopoverButton>
															</Typography>

															<PopoverPanel
																transition
																className={`absolute mt-[0.8px] inset-x-0 top-full  text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in`}
															>
																<div
																	className={`relative backdrop-blur-xl rounded-md ${
																		mode === 'light' ? 'bg-nav-l' : 'bg-nav-d'
																	}`}
																>
																	<div className="mx-auto max-w-full px-8">
																		<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
																			<div className="col-start-2 grid grid-cols-2 gap-x-8">
																				{category.featured.map(item => (
																					<div
																						key={item.name}
																						className="group relative text-base sm:text-sm"
																					>
																						<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																							<img
																								alt={item.imageAlt}
																								src={item.imageSrc}
																								className="object-cover object-center"
																							/>
																						</div>
																						<Link
																							href={item.href}
																							className="mt-6 block font-medium"
																						>
																							<Typography
																								aria-hidden="true"
																								className="absolute inset-0 z-10"
																							/>
																							{item.name}
																						</Link>
																						<p
																							aria-hidden="true"
																							className="mt-1"
																						>
																							Shop now
																						</p>
																					</div>
																				))}
																			</div>
																			<div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
																				{category.sections.map(section => (
																					<div key={section.name}>
																						<Typography
																							color={'text.primary'}
																							id={`${section.name}-heading`}
																						>
																							{section.name}
																						</Typography>
																						<ul
																							role="list"
																							aria-labelledby={`${section.name}-heading`}
																							className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																						>
																							{section.items.map(item => (
																								<li
																									key={item.name}
																									className="flex"
																								>
																									<Link href={item.href}>
																										<Typography
																											color={'text.primary'}
																										>
																											{item.name}
																										</Typography>
																									</Link>
																								</li>
																							))}
																						</ul>
																					</div>
																				))}
																			</div>
																		</div>
																	</div>
																</div>
															</PopoverPanel>
														</Popover>
													))}
												</Container>
											</PopoverGroup>

											{/* Search */}
											<div className="flex lg:ml-6">
												<a
													href="#"
													className="p-2 text-gray-400 hover:text-gray-500"
												>
													<span className="sr-only">Search</span>
													<MagnifyingGlassIcon
														aria-hidden="true"
														className="h-6 w-6"
													/>
												</a>
											</div>

											{/* Cart */}
											<div className="ml-4 flow-root lg:ml-6">
												<a
													href="#"
													className="group -m-2 flex items-center p-2"
												>
													<ShoppingBagIcon
														aria-hidden="true"
														className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
													/>
													<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
														0
													</span>
													<span className="sr-only">
														items in cart, view bag
													</span>
												</a>
											</div>
										</div>
									</div>
								</nav>
							</Container>
							<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
								<MenuItem
									onClick={() => scrollToSection('features')}
									sx={{ py: '6px', px: '12px' }}
								>
									<Typography variant="body2" color="text.primary">
										Store
									</Typography>
								</MenuItem>
							</Box>
							<NavLink
								to="/admin/homewrap"
								className="nmwbtn w-auto px-2 text-sm"
							>
								Wrap
							</NavLink>
							<NavLink
								to="/admin/homepage"
								className="nmwbtn w-auto px-2 text-sm"
							>
								HOMEPAGE
							</NavLink>
						</Box>
						<Box
							sx={{
								width: 'auto',
								display: { xs: 'none', md: 'flex' },
								gap: 0.5,
								alignItems: 'center',
							}}
						>
							<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

							<NavLink
								to="/admin/signin"
								className="nmwbtn w-auto px-2 text-sm"
							>
								SIGN IN
							</NavLink>
							<NavLink to="/admin/signup" className="nbtn w-auto py-2	 text-sm">
								SIGN UP
							</NavLink>
						</Box>
						<Box sx={{ display: { sm: '', md: 'none' } }}>
							<Button
								variant="text"
								color="primary"
								aria-label="menu"
								onClick={toggleDrawer(true)}
								sx={{ minWidth: '30px', p: '4px' }}
							>
								<MenuIcon />
							</Button>
							<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
								<Box
									sx={{
										minWidth: '60dvw',
										p: 2,
										backgroundColor: 'background.paper',
										flexGrow: 1,
									}}
								>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'end',
											flexGrow: 1,
										}}
									>
										<ToggleColorMode
											mode={mode}
											toggleColorMode={toggleColorMode}
										/>
									</Box>
									<MenuItem onClick={() => scrollToSection('features')}>
										Features
									</MenuItem>
									<MenuItem onClick={() => scrollToSection('testimonials')}>
										Testimonials
									</MenuItem>
									{/* <MenuItem onClick={() => scrollToSection('highlights')}>
                    Highlights
                  </MenuItem> */}
									<MenuItem onClick={() => scrollToSection('pricing')}>
										Pricing
									</MenuItem>
									<MenuItem onClick={() => scrollToSection('faq')}>
										FAQ
									</MenuItem>
									<Divider />
									<MenuItem>
										<NavLink to="/signup" className="nmbtn nbtn">
											SIGN UP
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink to="/signin" className="nmwbtn">
											SIGN IN
										</NavLink>
									</MenuItem>
								</Box>
							</Drawer>
						</Box>
					</Toolbar>
				</Container>

				{/* Mobile menu */}
				<Dialog
					open={open}
					onClose={setOpen}
					className="relative z-40 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
						>
							<div className="flex px-4 pb-2 pt-5">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
								>
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Close menu</span>
									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
								</button>
							</div>

							{/* Links */}
							<TabGroup className="mt-2">
								<div className="border-b border-gray-200">
									<TabList className="-mb-px flex space-x-8 px-4">
										{navigation.categories.map(category => (
											<Tab
												key={category.name}
												className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
											>
												{category.name}
											</Tab>
										))}
									</TabList>
								</div>
								<TabPanels as={Fragment}>
									{navigation.categories.map(category => (
										<TabPanel
											key={category.name}
											className="space-y-10 px-4 pb-8 pt-10"
										>
											<div className="grid grid-cols-2 gap-x-4">
												{category.featured.map(item => (
													<div
														key={item.name}
														className="group relative text-sm"
													>
														<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
															<img
																alt={item.imageAlt}
																src={item.imageSrc}
																className="object-cover object-center"
															/>
														</div>
														<a
															href={item.href}
															className="mt-6 block font-medium text-gray-900"
														>
															<span
																aria-hidden="true"
																className="absolute inset-0 z-10"
															/>
															{item.name}
														</a>
														<p aria-hidden="true" className="mt-1">
															Shop now
														</p>
													</div>
												))}
											</div>
											{category.sections.map(section => (
												<div key={section.name}>
													<p
														id={`${category.id}-${section.id}-heading-mobile`}
														className="font-medium text-gray-900"
													>
														{section.name}
													</p>
													<ul
														role="list"
														aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
														className="mt-6 flex flex-col space-y-6"
													>
														{section.items.map(item => (
															<li key={item.name} className="flow-root">
																<a
																	href={item.href}
																	className="-m-2 block p-2 text-gray-500"
																>
																	{item.name}
																</a>
															</li>
														))}
													</ul>
												</div>
											))}
										</TabPanel>
									))}
								</TabPanels>
							</TabGroup>
						</DialogPanel>
					</div>
				</Dialog>
			</AppBar>
		</div>
	);
}

AppAppBar.propTypes = {
	mode: PropTypes.oneOf(['dark', 'light']).isRequired,
	toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
