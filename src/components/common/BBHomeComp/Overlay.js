import React, { Component, useState } from 'react';
import {
    Text,
    Image
} from 'react-native';
import { Overlay } from 'react-native-elements';
import CustomButton from '../LoginAccessComp/Button';
import { Button } from 'react-native-elements';

export default function CustomOverlay({ store, image, image_height, image_width }) {
        const [visible, setVisible] = useState(true);

        const toggleOverlay = () => {
            setVisible(!visible);
        };
        return (
            <Overlay isVisible={visible} >
                <Image
                    source={image}
                    style={{
                        height: image_height || 100,
                        width: image_width || 200,
                        alignSelf: 'center'
                    }}
                    resizeMode='stretch' />
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold"
                }}>
                    Welcome to {store}
                </Text>
                <CustomButton
                    title="Continue"
                    length={110}
                    size={35}
                    onPress={toggleOverlay} />
            </Overlay>
        );
    
}