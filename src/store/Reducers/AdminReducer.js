import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	admin: null,
	errors: [],
	isAuthenticated: false,
	isLoading: false,
};

export const adminReducer = createSlice({
	name: 'admin-slice',
	initialState,
	reducers: {
		setAdmin: (state, action) => {
			state.admin = action.payload;
			state.isAuthenticated = true;
			state.isLoading = false;
			state.errors = null;
		},
		removeAdmin: (state, action) => {
			state.admin = null;
			state.isAuthenticated = false;
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
	},
});

// Action creators are generated for each case reducer function
export const {
	setAdmin,
	removeAdmin,
	isError,
	removeError,
	isLoading,
} = adminReducer.actions;

export default adminReducer.reducer;
