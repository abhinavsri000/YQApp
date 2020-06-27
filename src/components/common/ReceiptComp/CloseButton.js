import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function CloseButton ({ screenName }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName)} >
            <Icon
                name="close"
                size={hp('5%')}
                style={{ alignSelf: "center" }}
            />
        </TouchableOpacity>
    );
}