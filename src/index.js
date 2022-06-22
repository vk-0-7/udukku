// Fonts start ----------------
import './Fonts/Gilroy/Gilroy-Black.ttf';
import './Fonts/Gilroy/Gilroy-BlackItalic.ttf';
import './Fonts/Gilroy/Gilroy-Bold.ttf';
import './Fonts/Gilroy/Gilroy-BoldItalic.ttf';
import './Fonts/Gilroy/Gilroy-ExtraBold.ttf';
import './Fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf';
import './Fonts/Gilroy/Gilroy-Heavy.ttf';
import './Fonts/Gilroy/Gilroy-HeavyItalic.ttf';
import './Fonts/Gilroy/Gilroy-Light.ttf';
import './Fonts/Gilroy/Gilroy-LightItalic.ttf';
import './Fonts/Gilroy/Gilroy-Medium.ttf';
import './Fonts/Gilroy/Gilroy-MediumItalic.ttf';
import './Fonts/Gilroy/Gilroy-Regular.ttf';
import './Fonts/Gilroy/Gilroy-RegularItalic.ttf';
import './Fonts/Gilroy/Gilroy-SemiBold.ttf';
import './Fonts/Gilroy/Gilroy-SemiBoldItalic.ttf';
import './Fonts/Gilroy/Gilroy-Thin.ttf';
import './Fonts/Gilroy/Gilroy-ThinItalic.ttf';
import './Fonts/Gilroy/Gilroy-UltraLight.ttf';
import './Fonts/Gilroy/Gilroy-UltraLightItalic.ttf';
// Fonts end -------------------

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import rootReducer from './Reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ChakraProvider } from '@chakra-ui/react';
const store = createStore(rootReducer, composeWithDevTools());

// fonts

ReactDOM.render(
	<Provider store={store}>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
