import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Title from '../HomeComp/Title';

export default class Carousel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title title={this.props.title} option={this.props.option} />
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}>
                    <Card containerStyle={styles.cardcontainer}>
                        <Image
                            source={require('../../../assets/Image_3.png')}
                            style={styles.image} />
                    </Card>
                    <Card containerStyle={styles.cardcontainer}>
                        <Image
                            source={require('../../../assets/Image_1.png')}
                            style={styles.image} />
                    </Card>
                    <Card containerStyle={styles.cardcontainer}>
                        <Image
                            source={require('../../../assets/Image_3.png')}
                            style={styles.image} />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-5%',
        height: hp('35%'),
        width: wp('90%')
    },

    cardcontainer: {
        padding: 0
    },

    image: {
        width: wp('80%'),
        height: hp('26%'),
        resizeMode: 'stretch'
    }
});
