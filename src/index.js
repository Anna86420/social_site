import reportWebVitals from './reportWebVitals';
import state from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { subscribe } from './redux/state';
let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
