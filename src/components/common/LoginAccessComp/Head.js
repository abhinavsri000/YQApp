import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Head extends Component<{}> {

    render() {
        return (
            <View style={{
                position: "absolute",
                top: 0,
                backgroundColor: this.props.backcolor || '#ffffff',
                height: '8%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    position: 'absolute',
                    left: '5%'
                }}>
                    <Icon
                        name='arrowleft'
                        size={25} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}