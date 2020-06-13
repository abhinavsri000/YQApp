import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Title extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row", alignItems: "flex-start", justifyContent: 'flex-start'
                }}>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.option}>{this.props.option}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        width: wp('90%')
    },

    title: {
        marginLeft: '5%',
        fontWeight: "bold",
        fontSize: 22
    },

    option: {
        color: '#bdbdbd',
        fontWeight: "bold",
        fontSize: 18,
        marginRight: '5%'
    }
});
