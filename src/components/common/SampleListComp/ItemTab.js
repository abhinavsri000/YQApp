import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import UIStepper from 'react-native-ui-stepper';

const qty = 0;

export default class ItemTab extends Component<{}> {
    setValue = (value) => {
        value: qty+100
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                width: wp('85%'),
                marginVertical: '2%',
                alignSelf: 'center',
                padding: 10,
                backgroundColor: '#ffffff',
                elevation: 5
            }}>
                <Image
                    source={this.props.image}
                    style={{
                        height: 80,
                        width: 100
                    }}
                    resizeMode='stretch' />
                <View style={{
                    marginLeft: '2%'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginVertical: '2%',
                        color: '#808080'
                    }}>
                        {this.props.itemname}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#bdbdbd'

                    }}>
                        {this.props.itemprice}
                    </Text>
                </View>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: '2%',
                    marginTop: '3%'
                }}>
                    <Text style={{

                    }}>
                        {this.props.itemweight}{" "}gms{" "}
                    </Text>
                    <View>
                        <UIStepper
                            borderWidth={2}
                            maximumvalue={1000}
                            initialValue={100}
                            steps={100}
                            vertical={true}
                            height={150}
                            width={50}
                            borderRadius={25}
                            onIncrement={(value) => { this.setValue(value) }}
                        />
                    </View>
                </View>
                <View style={{
                    opacity: this.props.badge || 0,
                    position: 'absolute',
                    top: '2%',
                    left: '2%',
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e80057'
                }} >
                    <Text style={{
                        fontSize: 10,
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}>
                        {this.props.discount}
                    </Text>
                    <Text style={{
                        fontSize: 10,
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}>
                        OFF
                    </Text>
                </View>
            </View>
        );
    }
}