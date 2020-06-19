import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GradientButton from '../common/GradientButton';

export default class MyOrders extends Component {
    render() {
        return (
            <Card containerStyle={{ padding: 5, elevation: 3, marginTop: hp('0.5%') }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Icon name="file-invoice" size={40} color='#42a5f5' />
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <Text style={{ fontSize: 16 }}>Invoice {this.props.date}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#9e9e9e', fontSize: 16 }}>{this.props.shop_name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#667eea', fontSize: 16 }}>Rs. {this.props.total}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: hp('2%'), marginBottom: hp('1%') }}>
                            <GradientButton
                                title="View"
                                startcolor='#667eea'
                                endcolor='#65b6ff'
                                length={wp('30%')}
                                height={hp('5%')}
                            />
                        </View>
                    </View>
                </View>
            </Card>      
        );
    }
}