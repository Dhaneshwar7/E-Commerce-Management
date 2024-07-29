import { CssBaseline, IconButton, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { NavBarBox } from '../admin';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncDeleteProduct,
} from '../../store/Actions/adminActions';
import { useState } from 'react';
import { useEffect } from 'react';
import noProductImg from '../../assets/images/noProducts.webp';
import { alpha } from '@mui/material';
import { RenderProductView } from '.';

const AllProducts = ({ allProducts, mode }) => {
	// const { allProducts } = useSelector(state => state.adminReducer);
	// console.log(allProducts);
	const { isAuth, errors, message, success } = useSelector(
		state => state.adminReducer
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [navFilterbtn, setNavFilterbtn] = useState(false);
	const [addProductMenu, setAddProductMenu] = useState(false);
	const handleDeleteProduct = productId => {
		dispatch(asyncDeleteProduct(productId));
		setTimeout(() => {
			dispatch(asyncAllProduct());
		}, 1000);
	};
	useEffect(() => {
		if (success) {
			dispatch(asyncAllProduct());
		}
	}, [success]);

	const [open, setOpen] = useState(false);
	const [productViewDetails, setProductViewDetails] = useState(null);
	const handleProductPreviewBtn = product => {
		setOpen(true);
		setProductViewDetails(product);
	};

	return (
		<div>
			{' '}
			<Box
				id="hero"
				sx={theme => ({
					width: '100%',
					backgroundImage:
						theme.palette.mode === 'light'
							? 'linear-gradient(180deg, #b0d2f6, #c4ddf24c)'
							: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
					backgroundSize: '100% 80%',
					backgroundRepeat: 'no-repeat',
				})}
			>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						pt: { xs: 14, sm: 0 },
						pb: { xs: 8, sm: 12 },
					}}
				>
					<RenderProductView
						open={open}
						setOpen={setOpen}
						productViewDetails={productViewDetails}
					/>
					<Container className="mx-auto pt-24	 sticky top-0 max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
						<CssBaseline />
						{allProducts && allProducts.length > 0 ? (
							<div className="Product-Container mt-6 grid grid-cols-1 max-sm:grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{allProducts.map(product => (
									<Box
										key={product._id}
										className="group relative"
										sx={{
											'&:hover .view-details-button': {
												opacity: 1,
											},
										}}
									>
										<div className="acha aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 max-sm:h-52">
											<img
												alt={product?.productName}
												src={product?.productImageUrl.url}
												className="h-full w-full object-cover object-center lg:h-full lg:w-full"
											/>
										</div>

										<Box className="mt-2 flex justify-between">
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
																backgroundColor: '#c8f7fab1',
																px: 2,
																borderRadius: '2px',
																flexDirection: { xs: 'column', md: 'row' },
																alignSelf: 'center',
																textAlign: 'center',
																fontSize: 'clamp(1rem, 1vw, 2rem)',
																fontWeight: '600',
																opacity: '.9',
															}}
														>
															{product?.productName}
														</Typography>
													</Link>
												</Typography>

												<Typography sx={{ fontWeight: '500', mt: '4px' }}>
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

											</Box>
										</Box>
										<Button
											className="bottom-20 absolute px-3 w-full z-50  view-details-button"
											sx={{ opacity: 0, transition: 'opacity 0.3s' }}
											onClick={() => handleProductPreviewBtn(product)}
										>
											<Typography
												className="w-full m-auto rounded-lg py-1 "
												sx={{
													backgroundColor: 'rgba(240, 248, 255, 0.393)',
													fontSize: { xs: 2, md: 20 },
													backdropFilter: 'blur(2px)',
													WebkitBackdropFilter: 'blur(2px)',
													color: 'black',
												}}
											>
												View Details
											</Typography>
										</Button>
									</Box>
								))}
							</div>
						) : (
							<Box
								sx={{
									height: '60vh',
									width: '100%',
									margin: 'auto',
									display: 'flex',
									flexDirection: { xs: 'column', md: 'row' },
									alignItems: 'center',
									justifyContent: 'center',
								}}
								className="gray"
							>
								<Typography
									variant="h5"
									sx={{
										textAlign: 'center',
										fontSize: 'clamp(.6rem, 4vw, 2rem)',
										fontWeight: '600',
									}}
								>
									<img
										src={noProductImg}
										width="300"
										className="m-auto"
										height="200"
										alt=""
									/>
									NO PRODUCTS !! ADD PRODUCTS
								</Typography>
							</Box>
						)}
					</Container>
				</Container>
			</Box>
		</div>
	);
};

export default AllProducts;
