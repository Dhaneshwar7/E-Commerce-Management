import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductDataProvider } from './utils/ProductReducer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ProductDataProvider>
			<App />
		</ProductDataProvider>
	</React.StrictMode>
);
