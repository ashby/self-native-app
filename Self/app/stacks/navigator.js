import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import get from 'lodash/get';
// stacks
//import AuthStack from './auth';
import UnauthStack from './unauth';

export const unauthToAuthTransition = ( transitionProps, prevTransitionProps ) => {
    const isTransitioningFromUnauthStack = get( prevTransitionProps, 'scene.index', null ) !== 1;
    const isTransitionToAuthStack = get( transitionProps, 'scene.index', null ) !== 0;
    if ( isTransitioningFromUnauthStack && isTransitionToAuthStack ) {
        return {
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0
            }
        };
    }
};

const EmptyScreen = () => <View />;

export default createStackNavigator(
    {
        EmptyScreen: {
            path: '/empty',
            screen: EmptyScreen
        },
        // AuthStack: {
        //     path: '/auth',
        //     screen: AuthStack
        // },
        UnauthStack: {
            path: '/unauth',
            screen: UnauthStack
        }
    },
    {
        headerMode: 'none',
        transitionConfig: ( transitionProps, prevTransitionProps ) =>
            unauthToAuthTransition( transitionProps, prevTransitionProps ),
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);
