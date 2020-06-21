import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Search from '../HomeComp/SearchBar';

export default class ItemHead extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginHorizontal: '7%',
                marginTop: '5%',
                marginBottom: '5%'
            }}>
                <Text style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                    {this.props.itemtype} ({this.props.quantity} Items)
                </Text>
                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <Icon1
                        name="trash-can-outline"
                        size={18} />
                    <Text style={{
                        fontSize: 14
                    }}>
                        Empty
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}