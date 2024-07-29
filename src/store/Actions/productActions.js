import { createAxiosInstance } from 'src/axios';
const axiosInstance = createAxiosInstance();

import { isError, setMessage, setSuccess } from '../Reducers/AdminReducer';

export const asyncUpdateProductDetails =
	(productForm, productId) => async (dispatch, getState) => {
		try {
			const data = await axiosInstance.put(
				`/admin/product/update/${productId}`,
				productForm
			);
			console.log(data);
			// dispatch(setAdmin(data.data.currentAdmin));
			dispatch(setMessage(data.data.message));
			dispatch(setSuccess(data.data.success));
            console.log(data.data.message);
            console.log(data.data.success);
		} catch (error) {
			console.log(error);
			dispatch(isError(error.response.data.message));
		}
	};
