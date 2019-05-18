import React, { Component } from 'react';
import { View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// component
import App from './App';
// client
import buildApolloClient from './client';

type Props = {};
export default class SelfApp extends Component<Props> {
    render() {
        return(
            <ApolloProvider client={buildApolloClient()}>
                <App />
            </ApolloProvider>
        );
    }
};
