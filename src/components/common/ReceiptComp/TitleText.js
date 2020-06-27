import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';


export default function TitleText ({ userName}) {
    return(
        <View style={{ padding: 20 }}>
            <Text>Hi {userName}{'\n'}</Text>
            <Text>Thanks for buying our product. This is your receipt information.</Text>
        </View>
    );
}