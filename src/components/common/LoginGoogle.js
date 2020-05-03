import React from 'react';
import {Text,TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const LoginGoogle = ({buttonText , backgroundStyle, iconName, iconColor, textColor, iconSize}) => {

  return (
    <TouchableOpacity style = {[styles.button, {backgroundColor: backgroundStyle}]} activeOpacity={.7}>
    <Text style= {[styles.textStyle, {color:textColor}]}> {buttonText}
      <Text style = {[styles.textStyle, {color: textColor}]}> <Icon name={iconName}  size= {iconSize} color={iconColor}/> </Text>
    </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 button: {
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'stretch',
   marginLeft: 30,
   marginRight: 30,
   marginTop: 10,
   borderRadius: 26,
   elevation: 6,
   shadowOffset: {width: 0,height: 3},
   shadowOpacity: 0.2,
   shadowRadius: 0.6,
   shadowColor: '#000000',
   height:44,
   //backgroundColor: '#FFFFFF',
   padding: 10
 },
 textStyle: {
   alignItems:'center',
   justifyContent:'center',
   fontFamily: 'Segoe UI',
   fontSize: 16,
 }
});

export { LoginGoogle };
