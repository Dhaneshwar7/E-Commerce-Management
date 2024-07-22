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
import { useDispatch, useSelector } from 'react-redux';
import { NavFilter } from '.';
import { Profile } from '../admin';
function AppAppBar({ isScrolledDown, mode, toggleColorMode }) {
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = newOpen => () => {
		setOpen(newOpen);
	};
	const { isAuth } = useSelector(state => state.adminReducer);
	// console.log(isAuth);

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
					zIndex: '45',
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
								<SiteMarkImg width="100%" height="auto" />
							</NavLink>

							{/* It Navigation Filter */}
							{isAuth && <NavFilter mode={mode} />}

							{isAuth && (
								<div className='max-sm:hidden flex'>
									<NavLink
										to="/admin/filter"
										className="nmwbtn w-auto mr-2 px-4 "
									>
										<Typography variant="body2" color="text.primary">
											Store
										</Typography>
									</NavLink>
									<NavLink
										to="/admin/filter"
										className="nmwbtn w-auto mr-2 px-4 "
									>
										<Typography variant="body2" color="text.primary">
											Filter
										</Typography>
									</NavLink>
									<NavLink to="/admin/homepage" className="nmwbtn w-auto px-4">
										<Typography variant="body2" color="text.primary">
											Products
										</Typography>
									</NavLink>
								</div>
							)}
						</Box>
						<Box
							sx={{
								width: 'auto',
								display: { xs: 'none', md: 'flex' },
								gap: 0.5,
								margin: '0 20px',
								alignItems: 'center',
							}}
						>
							<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
							{isAuth ? (
								<Profile />
							) : (
								<>
									<NavLink
										to="/admin/auth/signin"
										className="nmwbtn w-auto px-4 mr-2 text-sm"
									>
										SIGN IN
									</NavLink>
									<NavLink
										to="/admin/auth/signup"
										className="nmwbtn w-auto px-4 bg-blue-900 text-white text-sm"
									>
										SIGN UP
									</NavLink>
								</>
							)}
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
										Featur
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
										<NavLink to="/admin/auth/signup" className="nmbtn nbtn">
											SIGN UP
										</NavLink>
									</MenuItem>
									<MenuItem>
										<NavLink to="/admin/auth/signin" className="nmwbtn">
											SIGN IN
										</NavLink>
									</MenuItem>
								</Box>
							</Drawer>
						</Box>
					</Toolbar>
				</Container>


			</AppBar>
		</div>
	);
}

AppAppBar.propTypes = {
	mode: PropTypes.oneOf(['dark', 'light']).isRequired,
	toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
