import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect } from 'react';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
	const [mount, setMount] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);

	//   const handleMouseDownPassword = (
	// 		event: React.MouseEvent<HTMLButtonElement>
	// 	) => {
	// 		event.preventDefault();
	// 	};

	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	useEffect(() => {
		setMount(true);
	}, []);

	if (!mount) return null;
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
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item="true" xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item="true" xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item="true" xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item="true" xs={12}>
								{/* <TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/> */}
								<FormControl sx={{ width: '45ch' }} xs={12} variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">
										Password
									</InputLabel>
									<OutlinedInput
										autoComplete="true"
										id="outlined-adornment-password"
										type={showPassword ? 'text' : 'password'}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													edge="end"
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										}
										label="Password"
									/>
								</FormControl>
							</Grid>

							<Grid item="true" xs={12}>
								<TextField
									required
									fullWidth
									id="contactNumber"
									label="Contact Number"
									name="contact"
									type="number"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item="true" xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="cityName"
									label="City Name"
									name="city"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item="true" xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="gender"
									label="Gender"
									name="gender"
									autoComplete="family-name"
								/>
							</Grid>
							{/* <Grid item="true" xs={12}>
								<FormControlLabel
									control={
										<Checkbox value="allowExtraEmails" color="primary" />
									}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid> */}
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid item={true} container justifyContent="flex-end">
							<Grid item="true">
								<Link sx={{ cursor: 'pointer' }} variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
