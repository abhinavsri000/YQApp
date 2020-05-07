import React, {Component} from 'react';
import {ScrollView} from 'react-native'
import {RegisterHeader, RegisterCard, RegisterForm, CommonButton, RegisterFooter} from '../common';


class Signup extends Component {
  render() {
    return (
      <ScrollView>
        <RegisterHeader headerTitle="Register" headerText="Please sign up to Become a Member"/>
        <RegisterCard marginSample={30} googleText="Sign up with" sampleText="Signup via social networks" bottomText="or signup with email"/>
        <RegisterForm />
        <CommonButton  marginButton={30} buttonTitle = "Sign Up"/>
        <RegisterFooter footerText="Already have an acoount ?" footerButton="Login" marginView={0} />
      </ScrollView>
    );
  }
}

export default Signup;
