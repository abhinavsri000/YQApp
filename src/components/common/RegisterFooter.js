import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';

const RegisterFooter = ({footerText,footerButton}) => {
  return (
    <View style = {{margin:10, justifyContent:'center', alignItems:'center',flexDirection:'row'}}>
    <TouchableOpacity >
    <View style = {{flexDirection:'row'}}>
      <Text style= {[styles.textStyle, {color: '#A3A3A3'}]}>
       {footerText}
       </Text>
       <Text style= {[styles.textStyle, {color: '#3C82FF', marginLeft: 4}]}> {footerButton} </Text></View>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle : {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  }
}

export {RegisterFooter};
