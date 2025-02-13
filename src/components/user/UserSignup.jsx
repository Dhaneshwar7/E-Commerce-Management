import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncSetMessage,
	asyncSignUpUser,
} from '../../store/Actions/userActions';
import { useEffect } from 'react';
import { LinearBg } from '../landingpage';
export default function UserSignUp() {
	const { isUserAuth, user, message, success, errors } = useSelector(
		state => state.userReducer
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [error, setError] = React.useState(null);
	const [formValues, setFormValues] = React.useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		contact: '',
		city: '',
		gender: '',
	});
	const handleChange = e => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
		setError(null);
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const hasError = Object.keys(formValues).reduce((acc, field) => {
			if (formValues[field].trim() === '') {
				acc = true;
			}
			return acc;
		}, false);
		if (hasError) {
			setError('All fields must be Filled !.');
			return;
		}
		// SignUP Api code likhunga
		try {
			dispatch(asyncSignUpUser(formValues));
			if (success) {
				setFormValues({
					firstname: '',
					lastname: '',
					email: '',
					password: '',
					contact: '',
					city: '',
					gender: '',
				});
			}
		} catch (error) {
			console.error('Error during SignUp:', error.message);
		}
	};
	return (
		<>
			<LinearBg />

			<Container component="main" maxWidth="xs" xs={{ height: '100%' }}>
				<CssBaseline />
				<Box
					sx={{
						pt: { xs: 10, md: 12 },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						User Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item={true} xs={12} sm={6}>
								<TextField
									value={formValues.firstname}
									onChange={handleChange}
									autoComplete="given-name"
									name="firstname"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item={true} xs={12} sm={6}>
								<TextField
									value={formValues.lastname}
									onChange={handleChange}
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastname"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item={true} xs={12}>
								<TextField
									value={formValues.email}
									onChange={handleChange}
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item={true} xs={12}>
								<TextField
									value={formValues.password}
									onChange={handleChange}
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item={true} xs={12}>
								<TextField
									value={formValues.contact}
									onChange={handleChange}
									required
									fullWidth
									id="contactNumber"
									label="Contact Number"
									name="contact"
									type="number"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item={true} xs={12} sm={6}>
								<TextField
									value={formValues.city}
									onChange={handleChange}
									required
									fullWidth
									id="cityName"
									label="City Name"
									name="city"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item={true} xs={12} sm={6}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">
										Gender *
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={formValues.gender}
										label="Age"
										name="gender"
										onChange={handleChange}
									>
										<MenuItem value={'Male'}>Male</MenuItem>
										<MenuItem value={'Female'}>Female</MenuItem>
									</Select>
								</FormControl>
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
							{error}
						</Typography>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 2, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item={true}>
								<Link to="/user/auth/signin" variant="body2">
									Already have an account? <b>Sign in</b>
								</Link>
							</Grid>
						</Grid>
						<Typography
							sx={{
								pt: 2,
								fontWeight: '800',
								color: 'green',
								textAlign: 'center',
							}}
							component="h5"
							variant="body"
						>
							{message && message}
							{errors && errors === 'Please Login to access this resource'
								? ''
								: errors}
						</Typography>
					</Box>
				</Box>
			</Container>
		</>
	);
}
