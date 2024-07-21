import React from 'react';
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
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const sortOptions = [
	{ name: 'Most Popular', href: '#', current: true },
	{ name: 'Best Rating', href: '#', current: false },
	{ name: 'Newest', href: '#', current: false },
	{ name: 'Price: Low to High', href: '#', current: false },
	{ name: 'Price: High to Low', href: '#', current: false },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const NavBarBox = ({
	isScrolledDown,
	mode,
	handleAddCartMenu,
}) => {
	return (
		<Box className="AllProduct-Heading  -mt-24 pt-20 flex items-baseline justify-between sticky top-0 z-50">
			<Toolbar
				variant="regular"
				sx={theme => ({
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexShrink: 0,
					bgcolor:
						theme.palette.mode === 'light'
							? 'rgba(255, 255, 255, 0.4)'
							: 'rgba(0, 0, 0, 0.4)',
					backdropFilter: 'blur(24px)',
					maxHeight: 20,
					border: '1px solid',
					borderColor: 'divider',
					boxShadow:
						theme.palette.mode === 'light'
							? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
							: '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
				})}
				className={`ToolbarNav flex  px-6 absolute ${
					isScrolledDown.isScroll ? 'top-auto opacity-100' : 'top-5 opacity-0'
				} ${
					isScrolledDown.isScrolllVaue === 0 && 'top-auto opacity-100'
				} top-0 w-[76vw] m-auto justify-between transition items-center`}
			>
				<Typography
					sx={{
						color: theme =>
							theme.palette.mode === 'light' ? 'black' : 'white',
						fontSize: '1.2rem',
						fontWeight: 'bold',
						zIndex: '50',
					}}
				>
					All Products
				</Typography>

				<div className="flex items-center">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton
								className={`group z-50 bg-slate-300 py-1 px-2 rounded inline-flex justify-center text-sm font-medium ${
									mode === 'light' ? 'text-green-500' : 'text-zinc-900'
								}`}
							>
								Sort
								<ChevronDownIcon
									aria-hidden="true"
									className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-800 group-hover:text-gray-500"
								/>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							<div className="py-1">
								{sortOptions.map(option => (
									<MenuItem key={option.name}>
										<Link
											href={option.href}
											className={classNames(
												option.current
													? 'font-medium text-gray-900'
													: 'text-gray-500',
												'block px-4 py-2 text-sm data-[focus]:bg-gray-100'
											)}
										>
											{option.name}
										</Link>
									</MenuItem>
								))}
							</div>
						</MenuItems>
					</Menu>

					<Button
						type="button"
						onClick={handleAddCartMenu}
						className=" ml-6 p-2 text-white hover:bg-slate-100  sm:ml-7"
					>
						{' '}
						<span className="sr-only">View grid</span>
						<Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
						<span>Add Product</span>
					</Button>
					<button
						type="button"
						onClick={() => setMobileFiltersOpen(true)}
						className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
					>
						<span className="sr-only">Filters</span>
						<FunnelIcon aria-hidden="true" className="h-5 w-5" />
					</button>
				</div>
			</Toolbar>
		</Box>
	);
};

export default NavBarBox;
