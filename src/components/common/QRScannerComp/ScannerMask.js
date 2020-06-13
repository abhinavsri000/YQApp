import React from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ScannerMask({ overlayColor, frameColor, frameFlexHeight, frameFlexWidth, titleText, subtitleText, textBelow}) {
    return(
        <View style={{ flex: 1, width: wp('100%'), alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, backgroundColor: overlayColor, width: wp('100%'), alignItems: "center" }}>
               <View style={{width: wp('70%')}}>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'white', textAlign: "center" }}>{titleText}</Text>
                    <Text style={{ fontSize: 12, marginTop: 5, color: 'white', textAlign: "center" }} >{subtitleText}</Text>
               </View>
            </View>
            <View style={{ flex: frameFlexHeight, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: overlayColor }} />
                <View style={{ flex: frameFlexWidth }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1, borderTopWidth: 2, borderLeftWidth: 2, borderLeftColor: frameColor, borderTopColor: frameColor }} />
                            <View style={{ flex: 1, }} />
                            <View style={{ flex: 1, borderTopWidth: 2, borderRightWidth: 2, borderRightColor: frameColor, borderTopColor: frameColor }} />
                        </View>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1, borderBottomWidth: 2, borderLeftWidth: 2, borderLeftColor: frameColor, borderBottomColor: frameColor }} />
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1, borderBottomWidth: 2, borderRightWidth: 2, borderRightColor: frameColor, borderBottomColor: frameColor }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: overlayColor }} />
            </View>
            <View style={{ flex: 1, backgroundColor: overlayColor, width: wp('100%'), alignItems: "center" }} >
                <Text style={{ fontSize: 12, marginTop: 15, color: 'white' }} >{textBelow}</Text>
            </View>
        </View>
    );
}