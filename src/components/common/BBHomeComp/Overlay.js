import React, { Component, useState } from 'react';
import {
    Text,
    Image
} from 'react-native';
import { Overlay } from 'react-native-elements';
import CustomButton from '../LoginAccessComp/Button';

export default class CustomOverlay extends Component {
    render() {
        return (
            <Overlay isVisible={true} >
                <Image
                    source={this.props.image}
                    style={{
                        height: this.props.image_height || 100,
                        width: this.props.image_width || 200,
                        alignSelf: 'center'
                    }}
                    resizeMode='stretch' />
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}>
                    Welcome to {this.props.title}
                </Text>
                <CustomButton title="Continue" length={110} size={35} />
            </Overlay>
        );
    }
}