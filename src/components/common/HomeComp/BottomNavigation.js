import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CenterSemicircle from './CenterSemicircle';
import FloatButton from '../ShoppingListComp/FloatButton';

export default class BottomNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.Container, { borderTopRightRadius: 10 }]}>
                    <View style={ styles.ContainerItems }>
                        <Icon
                            name='home'
                            size={23}
                            color="#5565f8" />
                        <Text style={{ color: '#5565f8' }}>Home</Text>
                    </View>
                    <View style={ styles.ContainerItems }>
                        <Icon
                            name='calendar-text'
                            size={23}
                            color="#bdbdbd" />
                        <Text style={{ color: '#bdbdbd' }}>Todo</Text>
                    </View>
                </View>
                <FloatButton icon={this.props.icon} screenName={this.props.navigation} />
                <CenterSemicircle />
                <View style={[styles.common, styles.Filler_1]}></View>
                <View style={[styles.common, styles.Filler_2]}></View>
                <View style={[styles.common, styles.Filler_3]}></View>
                <View style={[styles.common, styles.Filler_4]}></View>
                <View style={[styles.common, styles.Filler_5]}></View>
                <View style={[styles.common, styles.Filler_4]}></View>
                <View style={[styles.common, styles.Filler_3]}></View>
                <View style={[styles.common, styles.Filler_2]}></View>
                <View style={[styles.common, styles.Filler_1]}></View>

                
                <View style={[styles.Container, { borderTopLeftRadius: 10 }]}>
                    <View style={ styles.ContainerItems }>
                        <Icon
                            name={this.props.icon3}
                            size={23}
                            color="#bdbdbd" />
                        <Text style={{ color: '#bdbdbd' }}>{this.props.option3}</Text>
                    </View>
                    <View style={ styles.ContainerItems }>
                        <Icon
                            name='account'
                            size={23}
                            color="#bdbdbd" />
                        <Text style={{ color: '#bdbdbd' }}>Profile</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // height: hp('8%'),
        // width: wp('100%'),
        height: '8%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white'
    },

    Container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        //height: hp('8%'),
        //width: wp('41.5%'),
        width: '41.2%',
        elevation: 100
    },

    ContainerItems: {
        flexDirection: 'column',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    common: {
        backgroundColor: '#ffffff',
        elevation: 100
    },

    Filler_1: {
        width: wp('0.5% '),
        height: hp('6.55%'),
        marginTop: hp('1.45%')
    },

    Filler_2: {
        width: wp('0.7%'),
        height: hp('5.9%'),
        marginTop: hp('2.1%')
    },

    Filler_3: {
        width: wp('1.5%'),
        height: hp('5.18%'),
        marginTop: hp('2.85%')
    },
    
    Filler_4: {
        width: wp('3.7%'),
        height: hp('4.25%'),
        marginTop: hp('3.75%')
    },

    Filler_5: {
        width: wp('6.7%'),
        height: hp('3.1%'),
        marginTop: hp('4.94%')
    }
});
