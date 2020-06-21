import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Search from '../HomeComp/SearchBar';

export default class Name extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#bdbdbd',
                marginHorizontal: 5
            }}>
                <Text style={{
                    fontSize: 16,
                    padding: 5,
                    paddingLeft: 15,
                    color: '#a0a0a0'
                }}>
                    {this.props.person}
                </Text>
                <TouchableOpacity>
                    <Icon
                        name='close'
                        size={18}
                        color='#a0a0a0'
                        style={{
                            paddingRight: 10
                        }} />
                </TouchableOpacity>
            </View>
        );
    }
}