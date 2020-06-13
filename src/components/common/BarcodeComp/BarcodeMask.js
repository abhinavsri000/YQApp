import React from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BarcodeMask({  frameColor, frameFlexHeight, frameWidth}) {
    return(
        <View style={{ flex: 1, width: frameWidth }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, borderTopWidth: 2, borderLeftWidth: 2, borderLeftColor: frameColor, borderTopColor: frameColor }} />
                <View style={{ flex: 2 }} />
                <View style={{ flex: 1, borderTopWidth: 2, borderRightWidth: 2, borderRightColor: frameColor, borderTopColor: frameColor }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, borderBottomWidth: 2, borderLeftWidth: 2, borderLeftColor: frameColor, borderBottomColor: frameColor }} />
                <View style={{ flex: 2 }} />
                <View style={{ flex: 1, borderBottomWidth: 2, borderRightWidth: 2, borderRightColor: frameColor, borderBottomColor: frameColor }} />
            </View>
        </View>
    );
}