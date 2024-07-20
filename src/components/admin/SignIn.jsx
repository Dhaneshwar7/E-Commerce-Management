import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { createAxiosInstance } from 'src/axios';
import {
	asyncLogoutAdmin,
	asyncSignInAdmin,
} from '../../store/Actions/adminActions';
import { useDispatch } from 'react-redux';

const axiosInstance = createAxiosInstance();

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
	const dispatch = useDispatch();
	const [error, setError] = React.useState(null);
	const [formValues, setFormValues] = React.useState({
		email: '',
		password: '',
	});
	const handleChange = event => {
		setFormValues({ ...formValues, [event.target.name]: event.target.value });
		// console.log(formValues);
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

		// SignIn Api code likhunga
		try {
			dispatch(asyncSignInAdmin(formValues));
			setFormValues({
				email: '',
				password: '',
			});
		} catch (error) {
			console.error('Error during signup:', error.message);
		}
	};
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Button
						onClick={() => dispatch(asyncLogoutAdmin())}
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Logg out
					</Button>
					<Typography component="h1" variant="h5">
						Sign in
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
							component="h3"
							variant="h6"
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
						<Grid container>
							<Grid item xs>
								<Link
									className="text-blue-500"
									to="/admin/forget"
									variant="body2"
								>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link
									className="text-blue-500"
									to="/admin	/signup"
									variant="body2"
								>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
