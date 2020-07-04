import React, { Component, useState } from 'react';
import { Button } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function CustomButton({ title, titlesize, size, titlecolor, length, buttoncolor, onPress }) {
        // const [visible, setVisible] = useState(true);

        // const toggleOverlay = () => {
        //     setVisible(!visible);
        // };
        return (
            <Button
                raised
                title={title}
                titleStyle={{
                    fontSize: titlesize || 18,
                    color: titlecolor || '#ffffff'
                }}
                containerStyle={{
                    alignSelf: 'center',
                    marginVertical: '2%',
                    width: length || wp('80%'),
                    marginHorizontal: '2%'
                }}
                buttonStyle={{
                    height: size || 50,
                    backgroundColor: buttoncolor || '#5663ff',
                    borderRadius: 25
                }}
                onPress={() => onPress } />
        );
    
}