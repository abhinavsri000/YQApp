import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ContinueButton({ title, titleColor, buttonColor, bottom, iconName, iconSize, iconColor, width, elevation }) {
    return (
        <Button
            title={title}
            titleStyle={{color: titleColor || "#fff"}}
            type="solid"
            containerStyle={{ position: "absolute", bottom: bottom || hp('3%'), borderRadius: 30, width: width, elevation: elevation || 2}}
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