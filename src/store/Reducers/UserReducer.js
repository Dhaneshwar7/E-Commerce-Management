import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	isUserAuth: false,
	cartProduct: null,
	message: null,
	success: false,
	errors: null,
	isLoading: false,
	searchedProducts: null,
};

export const userReducer = createSlice({
	name: 'user-slice',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isUserAuth = true;
			state.isLoading = false;
			state.errors = null;
		},
		removeUser: (state, action) => {
			state.user = null;
			state.isUserAuth = false;
			state.errors = [];
			state.cartProduct = null;
			state.message = null;
			state.success = false;
			state.isLoading = false;
		},
		isError: (state, action) => {
			state.errors = action.payload;
		},
		removeError: (state, action) => {
			state.errors = [];
		},
		isLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setAllCartProducts: (state, action) => {
			state.cartProduct = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		setSuccess: (state, action) => {
			state.success = action.payload;
		},
		setSearchedProducts: (state, action) => {
			state.cartProduct = action.payload;
		},
	},
});

export const {
	setUser,
	removeUser,
	isError,
	removeError,
	isLoading,
	setAllCartProducts,
	setMessage,
	setSuccess,
	setSearchedProducts,
} = userReducer.actions;

export default userReducer.reducer;
