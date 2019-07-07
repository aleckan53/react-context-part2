import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { LangProvider } from './context/LangContext';


const tree = (
  <LangProvider>
    <App/>
  </LangProvider>
)

ReactDOM.render(tree, document.getElementById('root'));
