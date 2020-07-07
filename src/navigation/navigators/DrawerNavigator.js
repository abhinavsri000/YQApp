import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import {StackNav} from '../navigators/StackNavigator';
const Drawer = createDrawerNavigator();

export function DrawerNav()
{
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={StackNav} />
        </Drawer.Navigator>
    );
}
