import React, { useEffect, useState } from 'react';
import WarningPng from '../../assets/images/warning.png';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncAllProduct,
	asyncCurrentAdmin,
	asyncSetMessage,
} from '../../store/Actions/adminActions';
import { Box } from '@mui/system';
import {
	Button,
	FormControl,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { asyncUpdateProductDetails } from '../../store/Actions/productActions';

const EditProductForm = ({
	editProductForm,
	setEditProductForm,
	product,
	setOpen,
	open,
}) => {
	const dispatch = useDispatch();
	const { isAuth, message, success, admin, products } = useSelector(
		state => state.adminReducer
	);
	// console.log(success);
	// console.log(message);
	// console.log(editProductForm);
	const [errorMessage, setErrorMessage] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [productForm, setProductForm] = useState({
		productName: product?.productName,
		price: product?.price,
		quantity: product?.quantity,
		description: product?.description,
		category: product?.category,
		status: product?.status,
	});
	const handleSubmitEditProductForm = async e => {
		// console.log('yaha data aaraha');
		e.preventDefault();
		// console.log(productForm);
		dispatch(asyncUpdateProductDetails(productForm, product._id));
		if (success) {
			dispatch(asyncAllProduct());
			dispatch(asyncCurrentAdmin());
		}
	};
	useEffect(() => {
		// console.log('ye chala ');
		setErrorMessage(message)
		if (success) {
			setTimeout(() => {
				setEditProductForm(prev => !prev);
				setOpen(prev => !prev);
				// console.log('yaha tak settimeout tak');
				dispatch(asyncSetMessage());
			}, 1500);
		}
	}, [success]);

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
	}, [dispatch]);
	return (
		<div
			className={`bg-slate-50 px-3 py-5 ${
				editProductForm ? 'block' : 'hidden'
			} transition-all absolute flex items-center justify-center w-full h-fit top-0 left-0`}
		>
			<Box
				component="form"
				noValidate
				sx={{ mt: 3 }}
				onSubmit={handleSubmitEditProductForm}
			>
				<Grid container spacing={1}>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							name="productName"
							variant="filled"
							size="small"
							helperText="Edit Product Name"
							onChange={handleChange}
							value={productForm.productName}
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							name="price"
							type="number"
							variant="filled"
							size="small"
							helperText="Edit Price"
							onChange={handleChange}
							value={productForm.price}
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							name="quantity"
							type="number"
							variant="filled"
							size="small"
							helperText="Edit Quantity"
							onChange={handleChange}
							value={productForm.quantity}
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							name="description"
							variant="filled"
							size="small"
							helperText="Edit Description"
							onChange={handleChange}
							value={productForm.description}
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<TextField
							hiddenLabel
							id="filled-hidden-label-small"
							name="category"
							variant="filled"
							size="small"
							helperText="Edit Category"
							onChange={handleChange}
							value={productForm.category}
						/>
					</Grid>
					<Grid item xs={5} sm={6}>
						<div className="">
							<select
								id="status"
								name="status"
								onChange={handleChange}
								value={productForm.status}
								autoComplete="status"
								className="block w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							>
								<option>Available</option>
								<option>Out of Stock</option>
								<option>Discontinued</option>
							</select>
							<label
								htmlFor="status"
								className="block ml-3 text-xs leading-6 text-gray-900"
							>
								Edit Status
							</label>
						</div>
					</Grid>
				</Grid>
				<Typography
					sx={{
						mt: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						backgroundColor: 'rgba(202, 100, 100, 0.836)',
						borderRadius: 1,
					}}
					component="h3"
					variant="h6"
				>
					{/* {error} */}
				</Typography>
				<button
					type="submit"
					className=" flex w-full items-center max-sm:h-fit whitespace-nowrap justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Changed Details Submit
				</button>

				<Typography
					sx={{
						pt: 2,
						fontWeight: '800',
						color: 'green',
					}}
					component="h3"
					variant="h6"
				>
					{message && message}
				</Typography>
				<Typography
					sx={{
						pt: 2,
						fontWeight: '800',
						color: 'green',
					}}
					component="h3"
					variant="h6"
				>
					{errorMessage && errorMessage}
				</Typography>
			</Box>
		</div>
	);
};

export default EditProductForm;
