/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';

import reportWebVitals from './reportWebVitals';
import { App } from './components';

// fonts
import '@fontsource/roboto';
import '@fontsource/milonga';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
