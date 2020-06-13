import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class BottomButton extends Component {
    render() {
        return (
            <>
                <View style={{
                    position: 'absolute',
                    height: hp('10.2%'),
                    width: hp('10.2%'),
                    left: wp('41.2%'),
                    top: -hp('5%'),
                    borderColor: '#ffffff',
                    borderRadius: hp('5.1%'),
                    borderRightWidth: 8,
                    elevation: 100,
                    transform: [
                        { rotate: '90deg' }
                    ]
                }}>
                </View>
                <View style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp('8%'),
                    width: wp('20%'),
                    left: wp('41%') ,
                    top: -hp('6%'),
                    elevation: 100
                }}>
                    <Button
                        raised
                        buttonStyle={{
                            backgroundColor: '#5663fe',
                            borderRadius: 100,
                            height: wp('18%'),
                            width: wp('18%')
                        }}
                        icon={
                            <Icon
                                name={this.props.icon}
                                size={wp('10%')}
                                color='#ffffff'
                            />
                        }
                    />
                </View>
            </>
        );
    }
}