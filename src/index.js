import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { persistor, store } from './app/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    
   <PersistGate  persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>

);

