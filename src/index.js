// Fonts start ----------------
import "./Assets/Fonts/Gilroy/Gilroy-Black.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-BlackItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Bold.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-BoldItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-ExtraBold.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Heavy.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-HeavyItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Light.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-LightItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Medium.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-MediumItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Regular.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-RegularItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-SemiBold.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-SemiBoldItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-Thin.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-ThinItalic.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-UltraLight.ttf";
import "./Assets/Fonts/Gilroy/Gilroy-UltraLightItalic.ttf";
// Fonts end -------------------

import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./New/Context/AuthContext";
import { extendTheme } from "@chakra-ui/react";
import { CategoryProvider } from "./New/Context/CategoryContext";
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import rootReducer from './Reducers'

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
  "3xl": "121em",
};

const theme = extendTheme({ breakpoints });

const store = createStore(rootReducer,composeWithDevTools()); 
// fonts

ReactDOM.render(
  <Provider store={store}>
  <AuthContextProvider>
    <>
      <ChakraProvider theme={theme}>
        <CategoryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryProvider>
      </ChakraProvider>
    </>
  </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
