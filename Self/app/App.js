import React, { Component } from 'react';
import { View, Text } from 'react-native';
import get from 'lodash/get';
// components
import StackNavigator from './stacks';
// enhancer
import appEnhancer from './enhancer';

export const getRouteForProps = ( { hasAuthentication } ) => {
    if ( !hasAuthentication ) {
        return 'UnauthStack';
    }
    return 'AuthStack';
};

class App extends Component{
    state = {
        stackRoute: ''
    }
    static getDerivedStateFromProps( props, state ) {
        const {
            hasAuthentication
        } = props;
        const stackRoute = getRouteForProps( {
            hasAuthentication
        } );
        return stackRoute === state.stackRoute ? null : { stackRoute };
    }
    componentDidUpdate( prevProps, prevState ) {
        const { stackRoute } = this.state;
        const currentRoute = this.getCurrentRoute( prevState.stackRoute );
        if ( currentRoute !== stackRoute ) {
            this.navigateTo( stackRoute );
        }
    }
    navigateTo( routeName ) {
        navigateTo( routeName, this.navigator.current );
    }

    getCurrentRoute( prevStackRoute ) {
        const routes = get( this, 'navigator.current.state.nav.routes', [] );
        const route = routes.find( r => r.routeName === prevStackRoute );
        return route && route.routeName;
    }
    render() {
        return <View />
        return(
            <StackNavigator ref={this.navigator} />
        );
    }
}

export default appEnhancer( App );
