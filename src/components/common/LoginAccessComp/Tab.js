import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class Tab extends Component<{}> {
    render() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                height: 60,
                width: wp('90%'),
                marginVertical: '2%',
                borderBottomWidth: 2,
                borderBottomColor: '#808080'
            }}>
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginVertical: '1%'
                    }}>
                        {this.props.heading}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#808080',
                        marginVertical: '1%'
                    }}>
                        {this.props.subtext}
                    </Text>
                </View>
                <Icon
                    name='chevron-right'
                    size={30}
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 10
                    }} />
            </TouchableOpacity>
        );
    }
}