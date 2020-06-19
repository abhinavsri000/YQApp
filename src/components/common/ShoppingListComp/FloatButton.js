import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class FloatButton extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: hp('8%'),
                width: wp('20%'),
                left: wp('40%'),
                bottom: hp('6%'),
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
        );
    }
}