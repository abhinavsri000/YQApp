import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';

export default class ListTab extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: '2.5%'
            }}>
                <View style={{
                    marginTop: '5%',
                    marginRight: '5%'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        alignSelf: 'center'
                    }}>
                        {this.props.date}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        alignSelf: 'center'
                    }}>
                        {this.props.month}
                    </Text>
                </View>
                <TouchableOpacity>
                    <LinearGradient
                        colors={[this.props.startcolor, this.props.endcolor]}
                        start={{ x: 0, y:0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{
                            paddingTop: 10,
                            paddingLeft: 25,
                            borderRadius: 10,
                            height: 125,
                            width: wp('75%'),
                            elevation: 10
                        }}>
                        <Icon1
                            name='ios-list-box'
                            size={90}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 20,
                                color: '#dfdfdf7f',
                                transform: [{ rotate: '-45deg' }]
                            }} />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: "#ffffff"
                        }}>
                            {this.props.items} Items
                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 22,
                            marginTop: 25,
                            color: "#ffffff"
                        }}>
                            {this.props.listname}
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 5
                        }}>
                            <Icon
                                name='people'
                                size={18}
                                style={{
                                    
                                }} />
                            <Text style={{
                                fontSize: 14,
                                color: "#ffffff"
                            }}>
                                {"  "}{this.props.people}
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}