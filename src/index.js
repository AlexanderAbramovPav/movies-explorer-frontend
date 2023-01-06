import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider  } from 'react-cookie';
import { Provider } from 'react-redux'
import { store } from './store/store.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CookiesProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </CookiesProvider> 
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();