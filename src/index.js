import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

import ssrPrepass from 'react-ssr-prepass'

import App from './App';

const renderApp = async App => {
  const element = createElement(App)
  await ssrPrepass(element)

  return renderToString(element)
}

ssrPrepass(<App />, (_element, instance) => {

  if (instance !== undefined && typeof instance.fetchData === 'function') {
    return instance.fetchData()
  }
})

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

