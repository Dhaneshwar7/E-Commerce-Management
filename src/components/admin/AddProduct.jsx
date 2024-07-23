import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCreateProduct,
	asyncCurrentAdmin,
} from '../../store/Actions/adminActions';
import { alpha, Box } from '@mui/material';
import { validImageTypes } from '../../utils/FnCollection';

export default function AddProductForm({ addProductMenu, handleAddCartMenu }) {
	const { products, admin } = useSelector(state => state.adminReducer);
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [productForm, setProductForm] = useState({
		productName: '',
		price: '',
		quantity: '',
		description: '',
		status: 'Available',
	});

	const handleSubmitProduct = async e => {
		e.preventDefault();
		const formData = new FormData();
		Object.keys(productForm).forEach(key => {
			formData.append(key, productForm[key]);
		});
		if (selectedImage) {
			formData.append('image', selectedImage);
		}

		try {
			dispatch(asyncCreateProduct(formData));
			setTimeout(() => {
				dispatch(asyncAllProduct());
			}, 3000);
			if (formData) {
				// Handle successful upload
				setProductForm({
					productName: '',
					price: '',
					quantity: '',
					description: '',
					status: 'Available',
				}); // Clear form data
				setSelectedImage(null);
			} else {
				setErrorMessage(response.data.message || 'Submission failed.'); // Handle API error messages
			}
		} catch (error) {
			console.error('Submission error:', error);
			setErrorMessage(
				'An error occurred during submission. Please try again later.'
			);
		}
	};

	const handleChange = e => {
		setProductForm({ ...productForm, [e.target.name]: e.target.value });
	};
	const handleImageUpload = e => {
		const file = e.target.files[0];
		if (!file || !validImageTypes.includes(file.type)) {
			setErrorMessage('⚠️ Please select a valid image file');
			return;
		}
		setSelectedImage(file);
		setErrorMessage(null);
	};
	useEffect(() => {
		if (!admin) {
			dispatch(asyncCurrentAdmin());
		}
		if (products <= 0) {
			dispatch(asyncAllProduct());
		}
		// console.log('add product clicked ');
	}, [dispatch]);
	return (
		<Box
			className={`w-2/5 max-sm:w-full h-full rounded-md bottom-0  max-sm:h-4/6 max-sm:bottom-0  max-h-screen flex items-center justify-center transition-[right] max-sm:transition-[bottom] duration-100 ease-in-out ${
				addProductMenu
					? 'right-0 max-sm:bottom'
					: '-right-full max-sm:-bottom-full'
			} bg-white fixed z-50`}
		>
			{/* Linear Bg Backgroung */}
			<Box
				id="hero"
				sx={theme => ({
					width: '100%',
					height: '100%',
					zIndex: '-10',
					pointerEvents: 'none',
					position: 'absolute',
					top: '30',
					backgroundImage:
						theme.palette.mode === 'light'
							? 'linear-gradient(180deg, #bad4f0, #FFF)'
							: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
					backgroundSize: '100% 200%',
					backgroundRepeat: 'no-repeat',
				})}
			></Box>
			{/* Linear Bg Backgroung */}
			<form
				className="z-50 py-20 max-sm:py-2 max-sm:-mt-16 px-4 w-3/4 max-sm:w-full"
				onSubmit={handleSubmitProduct}
			>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-2">
						<div className="w-full max-sm:hidden mb-5 -mt-5 flex justify-end">
							<button
								onClick={handleAddCartMenu}
								className="bg-orange-400 w-fit py-2 flex items-center justify-center px-4 rounded"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									width="24"
									height="24"
								>
									<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
								</svg>

								<h1>Close</h1>
							</button>
						</div>
						<h2 className="text-xl font-extrabold text-center leading-7 text-gray-900">
							ADD PRODUCT INFORMATION
						</h2>
						<div className="mt-2 grid grid-rows-3 grid-flow-col max-sm:gap-1 gap-2">
							<div className="col-span-1">
								<label
									htmlFor="productName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Product Name
								</label>
								<div className="mt-2">
									<input
										id="productName"
										name="productName"
										type="text"
										onChange={handleChange}
										value={productForm.productName}
										required
										autoComplete="productName"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="Price"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Price
								</label>
								<div className="mt-2">
									<input
										id="Price"
										name="price"
										type="number"
										onChange={handleChange}
										value={productForm.price}
										required
										autoComplete="price"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="row-span-1 col-span-1">
								<label
									htmlFor="quantity"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Quatitiy
								</label>
								<div className="mt-2">
									<input
										id="quantity"
										name="quantity"
										type="number"
										onChange={handleChange}
										value={productForm.quantity}
										autoComplete="quantity"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="row-span-2 col-span-2">
								<label
									htmlFor="description"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Description
								</label>
								<div className="mt-2">
									<textarea
										id="description"
										name="description"
										onChange={handleChange}
										value={productForm.description}
										rows={4}
										minLength={5}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="row-span-1 col-span-1">
								<label
									htmlFor="status"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Select Status
								</label>
								<div className="mt-2">
									<select
										id="status"
										name="status"
										onChange={handleChange}
										value={productForm.status}
										autoComplete="status"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>Available</option>
										<option>Out of Stock</option>
										<option>Discontinued</option>
									</select>
								</div>
							</div>
						</div>
						{/* --------- Photo Upload -------*/}
						<div className="col-span-4 row-span-4 mt-4">
							{/* <label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Cover photo
							</label> */}
							<div className="mt-2 max-sm:h-22 max-sm:p-0 max-sm:pb-2 max-sm:w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-2 max-sm:py-34">
								<div className="text-center max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-2">
									{selectedImage ? (
										<img
											src={URL.createObjectURL(selectedImage)}
											alt="Selected image preview"
											className="mx-auto max-sm:h-18 max-sm:w-18 h-32 w-32 object-contain rounded"
										/>
									) : (
										<img
											src="https://billcust.devasena.biz/assets-shop/images/icons/no-product-image.png"
											alt="Selected image preview"
											className="mx-auto max-sm:h-18 max-sm:w-18 h-32 w-32 object-contain rounded"
										/>
									)}
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input
												accept="image/*"
												id="file-upload"
												name="image"
												onChange={handleImageUpload}
												type="file"
												className="sr-only max-sm:w-10 max-sm:h-5"
											/>
											<p className="text-xs max-sm:block hidden leading-5 text-gray-600">
												PNG, JPG, GIF up to 10MB
											</p>
										</label>

										{/* <p className="pl-1">or drag and drop</p> */}
									</div>
									<p className="text-xs max-sm:hidden leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
						<div className="mt-6 max-sm:mt-2 flex items-center justify-end gap-x-6">
							<button
								type="button"
								onClick={handleAddCartMenu}
								className="text-sm font-semibold max-sm:text-base leading-6 text-gray-900"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3 py-2 max-sm:text-base text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Save
							</button>
						</div>
						{errorMessage && (
							<div className="mt-2 w-full flex justify-end">
								<button
									onClick={handleAddCartMenu}
									className="bg-red-400 text-sm w-full p-2 rounded"
								>
									{errorMessage}
								</button>
							</div>
						)}
					</div>
				</div>
			</form>
		</Box>
	);
}
