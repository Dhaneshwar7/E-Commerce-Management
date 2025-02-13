import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { createAxiosInstance } from 'src/axios';
import { asyncSetMessage } from '../../store/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { asyncSignInUser } from '../../store/Actions/userActions';
import { LinearBg } from '../landingpage';

const axiosInstance = createAxiosInstance();

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function UserSignIn() {
	const { isUserAuth, message, success, errors } = useSelector(
		state => state.userReducer
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [error, setError] = React.useState(null);
	const [formValues, setFormValues] = React.useState({
		email: '',
		password: '',
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

		// SignIn Api code
		try {
			dispatch(asyncSignInUser(formValues));
			if (success) {
				setFormValues({
					email: '',
					password: '',
				});
			}
		} catch (error) {
			console.error('Error during SignIn:', error.message);
		}
	};

	return (
		<>
			<LinearBg />
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						pt: { xs: 15, md: 12 },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						User Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							value={formValues.email}
							onChange={handleChange}
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							value={formValues.password}
							onChange={handleChange}
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<Typography
							sx={{
								mt: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								backgroundColor: 'rgba(202, 100, 100, 0.836)',
								borderRadius: 1,
							}}
							color="initial"
							component="h3"
							variant="body1"
						>
							{error}
						</Typography>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid
							container
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', lg: 'row' },
								justifyItems: 'center',
								alignItems: 'center',
								gap: { xs: 2, lg: 2 },
								mt: { xs: 2, lg: 2 },
							}}
						>
							<Grid item xs>
								<Link
									className="text-blue-500"
									to="/admin/auth/forget-password"
									variant="body2"
								>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link
									className="text-blue-500"
									to="/admin/auth/signup"
									variant="body2"
								>
									{"Don't have an account? Sign Up"}
								</Link>
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
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	);
}
