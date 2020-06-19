import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ContinueButton({ title, buttonColor, iconName, iconSize, iconColor, width }) {
    return (
        <Button
            title={title}
            type="solid"
            containerStyle={{ position: "absolute", bottom: 20, borderRadius: 30, width: width, elevation: 2}}
            buttonStyle={{ backgroundColor: buttonColor, paddingVertical: hp('2.2%')}}
            icon={
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                    style={{paddingRight: 15}}
                />
            }
        />
    );
}