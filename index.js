/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './src/contexts/reducers';



const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default DemoApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

AppRegistry.registerComponent(appName, () => DemoApp);
