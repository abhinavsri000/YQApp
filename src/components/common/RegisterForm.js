import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { InputField, RadioButton } from '.';

class RegisterForm extends Component {
  render() {
  const {container} = styles;
  return (
    <View style={container} >
      <InputField hintText = 'Name' mar={-8} inputHeight={42} secureEnable = {false} />
      <InputField hintText = 'Email' mar={8} inputHeight={42} secureEnable = {false} />
      <InputField hintText = 'Password' mar={8} inputHeight={42} secureEnable = {true} />
      <InputField hintText = 'Confirm Password' inputHeight={42} mar={8}  secureEnable = {true} />
      <RadioButton radioText = "I agree to Terms & Condition" flexValue = {1} flexforgotValue = {0}/>
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


export { RegisterForm };
