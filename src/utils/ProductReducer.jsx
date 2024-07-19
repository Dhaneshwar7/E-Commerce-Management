import { createContext, useContext, useMemo, useReducer } from 'react';

const initialState = {
	products:[],
	isAuth: [],
	searchText: '',
	error: '',
	date: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'WEATHER_DATA':
			return {
				...state,
				data: action.weatherData,
			};
		case 'FORECAST_DATA':
			return {
				...state,
				forecastData: action.forecastData,
			};
		case 'SET_TIMEZONE':
			// console.log(state.timezone);
			return {
				...state,
				timezone: action.timezone,
			};
		case 'ADD_CURRENT_LOCATION':
			return {
				...state,
				currentLocation: action.currentLocation,
			};

		case 'SET_ERROR':
			return {
				...state,
				error: action.error,
			};
		case 'SET_DATE':
			return {
				...state,
				date: action.edate,
			};
		case 'SET_SEARCH_TERM':
			return {
				...state,
				searchText: action.searchTxt,
			};

		default:
			return state;
	}
};

export const ProductContext = createContext();

export const useProductContext = () => {
	const wrapperContext = useContext(ProductContext);
	return wrapperContext;
};

export const ProductDataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const productsValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<ProductContext.Provider value={productsValue}>
			{children}
		</ProductContext.Provider>
	);
};
