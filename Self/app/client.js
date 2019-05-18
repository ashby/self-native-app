import ApolloClient from 'apollo-boost';
import config from './config';

const buildApolloClient = ( accessToken: string ) => new ApolloClient( {
  uri: config.HIGHER_POWER_API_URL,
  headers: {}
} );
export default buildApolloClient;