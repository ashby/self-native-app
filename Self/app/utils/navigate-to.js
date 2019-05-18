import { NavigationActions } from 'react-navigation';

const navigateTo = ( routeName, navigator ) => navigator.dispatch( NavigationActions.navigate( { routeName } ) );

export default navigateTo;
