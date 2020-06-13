import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PayButton extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.btn} >
                <View style={{ flexDirection: "row", marginVertical: hp('2%'), marginHorizontal: wp('8%'), alignItems:"center" }}>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 16, color:'#e0e0e0' }}>Amount: ₹ {this.props.total}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }} >
                        <View style={{flexDirection: "row", alignItems:"baseline"}}>
                            <Text style={{ fontSize: 20, color: '#FFF', marginRight: wp('5%') }}>Pay</Text>
                            <Icon name="ios-arrow-forward" color="#FFF" size={20} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    btn: {
        bottom: 0,
        backgroundColor: '#1565c0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: hp('10%'),
        alignItems:"center",
        justifyContent:"center",
    }
});