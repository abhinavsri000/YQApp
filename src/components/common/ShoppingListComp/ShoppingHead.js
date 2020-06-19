import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Search from '../HomeComp/SearchBar';

export default class ShoppingHead extends Component {
    render() {
        return (
            <View>
                <View style={{
                    width: wp('90%'),
                    flexDirection: 'row',
                    marginTop: '2%',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <TouchableOpacity style={{ marginRight: 10, backgroundColor: 'red' }}>
                        <Icon
                            name="arrowleft"
                            size={33} />
                    </TouchableOpacity>
                    <Text style={{
                        alignSelf: 'baseline',
                        fontSize: 25,
                        fontWeight: "bold"
                    }}>
                        Shopping List
                </Text>
                </View>
            </View>
        );
    }
}