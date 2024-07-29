import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './Reducers/AdminReducer';
import userReducer from './Reducers/UserReducer';

export const store = configureStore({
	reducer: {
		adminReducer,
		userReducer,
	},
});
