// Description Login Page
import React, {Component} from 'react';
import {ScrollView} from 'react-native'
import {RegisterHeader, RegisterCard, Form,CommonButton,RegisterFooter} from '../common';


class Login extends Component {
  constructor({navigation}){
    super({navigation})
  }
  render() {
    return (
      <ScrollView>
        <RegisterHeader headerTitle="Login" headerText="Please login to continue using our app"/>
        <RegisterCard marginSample= {45} googleText="Login with" sampleText="Login via social networks" bottomText="or login with email"/>
        <Form />
        <CommonButton marginButton={45} buttonTitle = "Login"/>
        <RegisterFooter footerText="Don’t have an acoount ?" footerButton="Signup" marginView = {10} />
      </ScrollView>
    );
  }
}

export default Login;
