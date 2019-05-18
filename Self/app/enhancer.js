import React from 'react';
// components
import App from './App';
// utils
import { getAsyncStorageItem, setAsyncStorageItem } from './utils/async-storage-item';

function appEnhancer( App ) {
    return class Self extends React.Componnt {
        render () {
            return <App {...this.props } />
        }
    }
}

export default appEnhancer;