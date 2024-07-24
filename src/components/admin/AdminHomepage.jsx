import {
	Box,
	Container,
	CssBaseline,
	IconButton,
	Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddProductForm from './AddProduct';
import NavBarBox from './NavBarBox';
import { useDispatch, useSelector } from 'react-redux';
import noProductImg from '../../assets/images/noProducts.webp';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
	asyncDeleteProduct,
} from '../../store/Actions/adminActions';

export default function Homepage({ mode }) {
	const {
		products: allProducts,
		isAuth,
		errors,
		message,
	} = useSelector(state => state.adminReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [navFilterbtn, setNavFilterbtn] = useState(false);
	const handleAddCartMenu = () => {
		setAddProductMenu(prev => !prev);
	};
	const [addProductMenu, setAddProductMenu] = useState(false);
	const handleDeleteProduct = productId => {
		dispatch(asyncDeleteProduct(productId));
		setTimeout(() => {
			dispatch(asyncAllProduct());
		}, 1000);
	};

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
										<Box className="">
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
															backgroundColor: 'rgb(177, 174, 174)',
															px: 2,
															borderRadius: '2px',
															flexDirection: { xs: 'column', md: 'row' },
															alignSelf: 'center',
															textAlign: 'center',
															fontSize: 'clamp(1.2rem, 1vw, 2rem)',
															fontWeight: '600',
															opacity: '.9',
														}}
													>
														{product?.productName}
													</Typography>
												</Link>
											</Typography>

											<Typography sx={{ fontWeight: '600' ,mt:1,}}>
												Price :&nbsp;
												{product?.price}
											</Typography>
										</Box>
										<Box className="flex flex-col justify-between">
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
												Quantity :&nbsp;
												{product?.quantity}
											</Typography>

											<IconButton
												color="secondary"
												onClick={() => handleDeleteProduct(product._id)}
												sx={{
													':hover': {
														backgroundColor: '#dd7367c1',
														borderRadius:'10px'
													},
												}}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													color="black"
													viewBox="0 0 24 24"
													width="20"
													height="20"
													fill="currentColor"
												>
													<path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
												</svg>
											</IconButton>
										</Box>
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
