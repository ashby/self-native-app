import { AsyncStorage } from 'react-native';

export async function setAsyncStorageItem( key, data ) {
    try {
        const dataString = JSON.stringify( data );
        await AsyncStorage.setItem( key, dataString );
        return true;
    } catch ( event ) {
        console.warn( 'setAsyncStorageItem failed' );
        throw event;
    }
}

export async function getAsyncStorageItem( key ) {
    let dataString;
	try {
        dataString = await AsyncStorage.getItem( key );
        if ( dataString !== null && typeof dataString !== 'undefined' ) {
            return JSON.parse( dataString );
        } else {
			return false;
        }
    } catch ( event ) {
        console.log( 'failed to retrieve async storage item', dataString, event );
        return false;
    }
}
