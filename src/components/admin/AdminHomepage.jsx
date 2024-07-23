import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddProductForm from './AddProduct';
import NavBarBox from './NavBarBox';
import { useDispatch, useSelector } from 'react-redux';
import noProductImg from '../../assets/images/noProducts.webp';
import { asyncCurrentAdmin } from '../../store/Actions/adminActions';

const demoProducts = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://ik.imagekit.io/deltaimg/productImage-url-1721638177832_imLvG__JHm.jpeg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	// More products...
];

export default function Homepage({ mode, toggleColorMode }) {
	const { products: allProducts, isAuth } = useSelector(
		state => state.adminReducer
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [navFilterbtn, setNavFilterbtn] = useState(false);
	const [isScrolledDown, setIsScrolledDown] = useState({
		isScroll: false,
		isScrolllVaue: 0,
	});
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
		};
		window.addEventListener('scroll', handleScroll);
	}, []);
	const handleAddCartMenu = () => {
		setAddProductMenu(prev => !prev);
	};
	const [addProductMenu, setAddProductMenu] = useState(false);

	useEffect(() => {
		if (!isAuth) {
			dispatch(asyncCurrentAdmin());
			navigate('/admin/auth/signin');
		}
	}, []);

	return (
		<>
			<div className="relative min-h-screen min-w-screen">
				<AddProductForm
					addProductMenu={addProductMenu}
					handleAddCartMenu={handleAddCartMenu}
				/>

				<Container className="mx-auto pt-24	 sticky top-0 max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<CssBaseline />
					<NavBarBox
						mode={mode}
						isScrolledDown={isScrolledDown}
						handleAddCartMenu={handleAddCartMenu}
						addProductMenu={addProductMenu}
						navFilterbtn={navFilterbtn}
					/>
					{allProducts && allProducts.length > 0 ? (
						<div className="Product-Container mt-6 grid grid-cols-1 max-sm:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
							{allProducts.map(product => (
								<Box key={product._id} className="group relative">
									<div className="acha aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 max-sm:h-52">
										<img
											alt={product?.productName}
											src={product?.productImageUrl.url}
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
														{product?.productName}
													</Typography>
												</Link>
											</Typography>
											<Typography
												sx={{ backgroundColor: 'rgb(177, 174, 174)' }}
											>
												{product?.price}
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
					) : (
						<Box
							sx={{
								backgroundColor: 'gray',
								height: '60vh',
								width: '100%',
								margin: 'auto',
								display: 'flex',
								flexDirection: { xs: 'column', md: 'row' },
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								variant="h5"
								sx={{
									textAlign: 'center',
									fontSize: 'clamp(.6rem, 4vw, 2rem)',
									fontWeight: '600',
								}}
							>
								<img src={noProductImg} alt="" />
								NO PRODUCTS !! ADD PRODUCTS
							</Typography>
						</Box>
					)}
				</Container>
			</div>
		</>
	);
}
