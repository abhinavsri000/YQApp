import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { InputField, RadioButton } from '.';

class Form extends Component {
  render() {
  const {container} = styles;
  return (
    <View style={container} >
      <InputField hintText = 'Email' mar={0} inputHeight={45} secureEnable = {false} />
      <InputField hintText = 'Password'mar={16} inputHeight={45} secureEnable = {true} />
      <RadioButton radioText = "Remember Me" forgotText= "Forgot Password?" flexValue = {0.7} flexforgotValue={0.7}/>
    </View>

  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      marginLeft: 10,
      marginRight: 10
    }
});


export { Form };
