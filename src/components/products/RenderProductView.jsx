'use client';
import { useEffect, useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Radio,
	RadioGroup,
	Textarea,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { StarIcon } from '@heroicons/react/20/solid';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import {
	asyncCreateReview,
	asyncRemoveErrors,
	asyncSetMessage,
} from '../../store/Actions/userActions';
import { asyncRenderAllProducts } from '../../store/Actions/productActions';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ProductView({ open, setOpen, productViewDetails }) {
	const dispatch = useDispatch();
	const { isUserAuth, user, message, success, errors } = useSelector(
		state => state.userReducer
	);
	const [reviewBox, setReviewBox] = useState(false);
	const [msg, setMsg] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState('');
	const handleChangeRating = (event, newValue) => {
		setRating(newValue);
	};
	const handleChangeReview = event => {
		setReview(event.target.value);
	};
	const handleSubmitReview = async e => {
		e.preventDefault();
		if (isUserAuth) {
			const productId = await productViewDetails._id;
			const reviewData = {
				rating: Number(rating),
				review,
			};
			dispatch(asyncCreateReview(reviewData, productId));
		} else {
			setErrorMsg('For Review Login First !');
		}
	};

	const handleCancelReviewBtn = () => {
		setReviewBox(prev => !prev);
		setRating(0);
		setReview('');
		setErrorMsg(null);
		dispatch(asyncSetMessage());
		dispatch(asyncRemoveErrors());
	};
	useEffect(() => {
		if (success) {
			setRating(0);
			setReview('');
			dispatch(asyncRenderAllProducts());
		}
		setMsg(message);
	}, [success, message, errors]);

	return (
		<Dialog open={open} onClose={setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
					<DialogPanel
						transition
						className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
					>
						<div className="relative flex w-full items-center overflow-hidden bg-white px-10 pb-8 pt-14 max-sm:pt-20 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="absolute max-sm:hidden -mt-5 -mr-5 right-0 top-0 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
							>
								<span className="sr-only">Close</span>
								<XMarkIcon aria-hidden="true" className="h-8 w-8" />
							</button>

							<div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
								<div className="aspect-h-2 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
									<img
										alt={productViewDetails?.productImageUrl?.url}
										src={productViewDetails?.productImageUrl?.url}
										className="object-cover object-center"
									/>
								</div>
								<div className="sm:col-span-8 lg:col-span-7 h-full flex flex-col justify-between">
									<section
										aria-labelledby="information-heading"
										className="mt-2 relative"
									>
										<div className="text-xl flex max-sm:text-lg items-center font-bold text-gray-900 sm:pr-12 ">
											<h3 className="text-base text-gray-600">
												Product Name :
											</h3>
											<h2 className="ml-2">
												{productViewDetails?.productName}
											</h2>
										</div>
										<h3 id="information-heading" className="sr-only">
											Product information
										</h3>

										<div className="text-xl max-sm:text-lg my-2  max-sm:my-2 flex items-center font-bold text-gray-900 sm:pr-12 ">
											<h2 className="text-base text-gray-600">Price :</h2>
											<h1 className="ml-2 ">
												₹&nbsp;
												{productViewDetails?.price}
											</h1>
										</div>
										<div className="text-xl flex items-center font-bold text-gray-900 sm:pr-12 max-sm:text-lg">
											<h2 className="text-base text-gray-600">Quantity :</h2>
											<h1 className="ml-2 ">{productViewDetails?.quantity}</h1>
										</div>
										<div className="text-xl my-2 max-sm:my-2 flex items-center font-bold text-gray-900 max-sm:text-lg sm:pr-12 ">
											<h2 className="text-base text-gray-600">Category :</h2>
											<h1 className="ml-2 ">{productViewDetails?.category}</h1>
										</div>
										<div className="text-xl mt-2 flex items-center font-bold text-gray-900 sm:pr-12 max-sm:text-lg">
											<h2 className="text-base text-gray-600">Status :</h2>
											<h1 className="ml-2 ">{productViewDetails?.status}</h1>
										</div>
									</section>
									<section className="relative">
										{/* Reviews */}
										<div className="mt-6 max-sm:mt-4">
											<h4 className="sr-only">Reviews</h4>
											<div className="flex items-center">
												<div className="flex items-center">
													{[0, 1, 2, 3, 4].map(rating => (
														<StarIcon
															key={rating}
															aria-hidden="true"
															className={classNames(
																productViewDetails?.rating > rating
																	? 'text-gray-900'
																	: 'text-gray-200',
																'h-5 w-5 flex-shrink-0'
															)}
														/>
													))}
												</div>
												<p className="sr-only">
													{productViewDetails?.rating} out of 5 stars
												</p>
												<a
													href="#"
													className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
												>
													{productViewDetails?.reviews.length} reviews
												</a>
												<button
													onClick={() => setReviewBox(prev => !prev)}
													className="ml-3 flex items-center justify-center text-sm bg-blue-300 px-2 rounded"
												>
													Write Review{' '}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														width="12"
														height="12"
														fill="currentColor"
													>
														<path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path>
													</svg>
												</button>
												{reviewBox && (
													<>
														<div className="bg-white  w-full absolute">
															<form
																onSubmit={handleSubmitReview}
																className=" flex items-center  justify-center gap-2"
															>
																<div className="flex flex-col items-center gap-2">
																	<Rating
																		name="rating"
																		value={rating}
																		defaultValue={2.5}
																		precision={0.5}
																		onChange={handleChangeRating}
																	/>
																	<textarea
																		value={review}
																		onChange={handleChangeReview}
																		name="review"
																		className="rounded"
																		aria-label="empty textarea"
																		placeholder="Write review ..."
																	/>
																</div>
																<div className="flex gap-3 mt-2">
																	<button
																		onClick={handleCancelReviewBtn}
																		className=" flex w-fit max-sm:text-base whitespace-nowrap items-center justify-center rounded-md border border-transparent max-sm:bg-red-600 bg-red-500 px-2 max-sm:h-fit py-1 text-base font-medium text-white hover:bg-red-600"
																	>
																		Cancel
																	</button>
																	<button
																		type="submit"
																		className=" flex w-[47%] items-center max-sm:h-fit whitespace-nowrap justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white hover:bg-indigo-700"
																	>
																		Submit
																	</button>
																</div>
															</form>
															{errorMsg && (
																<>
																	<div className="bg-red-400 text-center w-fit m-auto mt-2 rounded px-3">
																		! {errorMsg} !
																		<Link
																			to="/user/auth/signi n"
																			className="bg-blue-500 px-2 py-1 ml-1 rounded"
																		>
																			LOG IN
																		</Link>
																	</div>
																</>
															)}
															{success && (
																<>
																	<div className="bg-green-400 text-center w-fit m-auto mt-2 rounded px-3">
																		{message}
																	</div>
																</>
															)}
															{errors && (
																<>
																	<div className="bg-red-400 text-center w-fit m-auto mt-2 rounded px-3">
																		{errors}
																	</div>
																</>
															)}
														</div>
													</>
												)}
											</div>
										</div>
									</section>
									<section className="w-full max-sm:flex hidden justify-end">
										<button
											onClick={() => setOpen(false)}
											className="mt-2 flex w-1/4 items-center max-sm:h-fit whitespace-nowrap justify-center rounded-md border border-transparent bg-gray-600 py-2 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
										>
											{/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												fill="currentColor"
											>
												<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
											</svg>
										</button>
									</section>

									<section aria-labelledby="options-heading" className="mt-10">
										<h3 id="options-heading" className="sr-only">
											Product options
										</h3>
									</section>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
