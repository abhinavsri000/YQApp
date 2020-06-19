import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

export default class UpiButton extends Component {
    render() {
        return(
            <Button
                title={this.props.title}
                titleStyle={{ marginLeft: wp('3%'), color: '#000' }}
                type="outline"
                icon={<Image
                    source={this.props.image_url}
                    style={{ height: 20, width: 20 }}
                />}
                buttonStyle={{ borderRadius: 5, borderWidth: 1, borderColor: '#000' }}
            />
        );
    }
}