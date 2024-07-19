import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	admin: null,
	errors: [],
	isAuthenticated: false,
};

export const adminReducer = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		currentAdmin: (state,) => {
			state.admin = action.payload;
		},
		addAdmin: (state, action) => {
			state.admin = action.payload;
			state.isAuthenticated = true;
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
	},
});

// Action creators are generated for each case reducer function
export const { currentAdmin, addAdmin, removeAdmin, isError, removeError } =
	adminReducer.actions;

export default adminReducer.reducer;
