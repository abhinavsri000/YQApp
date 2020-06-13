import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const width = Dimensions.get('window').width;

export default class TrendingOffers extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.cardcontainer}>
                    <Image
                        source={require('../../../assets/Image_1.png')}
                        style={styles.image} />
                    <TouchableOpacity style={styles.badge} >
                        <Text style={styles.BadgeText}>
                            SEE MORE
                        </Text>
                        <Icon
                            reverse
                            name='chevron-right'
                            color='#ff0000'
                            size={16}
                            iconStyle={{ fontSize: 30, fontWeight: '700' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    cardcontainer: {
        width: width * 0.9,
        height: 200
    },

    image: {
        width: width * 0.9,
        height: 200,
        borderRadius: 10
    },

    badge: {
        position: 'absolute',
        left: 30,
        bottom: 25,
        borderRadius: 25,
        height: 50,
        width: 140,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },

    BadgeText: {
        fontSize: 16,
        color: '#808080',
        fontWeight: '600',
        paddingLeft: 15,
        paddingVertical: 15
    }
});
