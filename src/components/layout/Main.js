import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNav} from '../../navigation/navigators/DrawerNavigator';
export default class Main extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <DrawerNav/>
            </NavigationContainer>
        );
    }
}
