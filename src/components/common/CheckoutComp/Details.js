import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Header, Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Details({ title_left, subTitle_left, title_right, subTitle_right}) {
    return(
        <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 4, alignItems: "flex-start"}}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>{title_left}</Text>
                    <Text style={styles.subTitle}>{subTitle_left}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }} >
                <View style={{ alignItems: "center" }} >
                    <Text style={styles.title}>{title_right}</Text>
                    <Text style={styles.subTitle}>{subTitle_right}</Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    title: {
        color: '#979797',
    },
    subTitle: {
        fontSize: 16
    }
});