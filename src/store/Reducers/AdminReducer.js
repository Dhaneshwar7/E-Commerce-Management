import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	admin: null,
	errors: [],
	isAuth: false,
	isLoading: false,
	products: null,
};

export const adminReducer = createSlice({
	name: 'admin-slice',
	initialState,
	reducers: {
		setAdmin: (state, action) => {
			state.admin = action.payload;
			state.isAuth = true;
			state.isLoading = false;
			state.errors = null;
		},
		removeAdmin: (state, action) => {
			state.admin = null;
			state.isAuth = false;
		},
		isError: (state, action) => {
			state.errors.push(action.payload);
		},
		removeError: (state, action) => {
			state.errors = [];
		},
		isLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setAllProducts: (state, action) => {
			state.products=action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
	setAllProducts,
} = adminReducer.actions;

export default adminReducer.reducer;
