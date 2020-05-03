// Description Login Page
import React, {Component} from 'react';
import {ScrollView} from 'react-native'
import {RegisterHeader, RegisterCard, Form,CommonButton,RegisterFooter} from '../common';


class Login extends Component {
  render() {
    return (
      <ScrollView>
        <RegisterHeader headerTitle="Login" headerText="Please login to continue using our app"/>
        <RegisterCard sampleText="Login via social networks" bottomText="or login with email"/>
        <Form />
        <CommonButton />
        <RegisterFooter footerText='Don’t have an acoount ?' footerButton='Signup' />
      </ScrollView>
    );
  }
}

export default Login;
