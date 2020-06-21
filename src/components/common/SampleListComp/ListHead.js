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

export default class ListHead extends Component {
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
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Icon
                            name="arrowleft"
                            color="#ffffff"
                            size={33} />
                    </TouchableOpacity>
                    <Search placeholder={this.props.placeholder} length={wp('80%')} />
                </View>
                <View>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#ffffff",
                        marginTop: '5%',
                        marginLeft: '5%'
                    }}>
                        {this.props.listname}
                    </Text>
                </View>
            </View>
        );
    }
}