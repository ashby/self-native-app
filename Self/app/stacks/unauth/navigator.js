// libs
import React, { Component } from 'react';
import { View } from 'react-native';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
// screens
import SignUpScreen from './sign-up';
import LoginScreen from './login';
import PrivacyPolicyScreen from './privacy-policy';
// utils
import navigateTo from 'utils/navigate-to';

class UnauthStackWrapper extends Component {
    componentDidUpdate( prevProps ) {
        // If a user has logged out...
        if ( prevProps.hasAuthentication && !this.props.hasAuthentication ) {
            this.navigateTo( 'Login' );
        }
    }

    navigateTo = routeName => this.navigator && navigateTo( routeName, this.navigator )

    render() {
        return (
            <UnauthStackNavigator navigation={navigation} ref={nav => { this.navigator = nav; }} />
        );
    }
}

const UnauthStackNavigator = createStackNavigator( {
    SignUp: {
        path: '/sign-up',
        screen: SignUpScreen,
        navigationOptions: () => ( { header: null } )
    },
    Login: {
        path: '/login',
        screen: LoginScreen,
        navigationOptions: () => ( { header: null } )
    },
    PrivacyPolicy: {
        path: '/privacy-policy',
        screen: PrivacyPolicyScreen,
        navigationOptions: () => ( { header: null } )
    }
}, {
    mode: 'card',
    cardStyle: {
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        shadowOpacity: 0
    },
    transitionConfig: ( transitionProps, prevTransitionProps ) => ( {
        containerStyle: {
            backgroundColor: 'transparent'
        },
        isModal: true
    } )
} );


UnauthStackWrapper.router = UnauthStackNavigator.router;
