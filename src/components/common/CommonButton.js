import React from 'react';
import { Button } from 'react-native-elements';

const CommonButton = ({marginButton, buttonTitle}) => {
  return(
    <Button buttonStyle= {[styles.button, {marginTop: marginButton }]} color = "#5663FF"
      title={buttonTitle}
      titleStyle= { { fontSize:16, fontFamily: 'Montserrat-Bold' }}
    />
  );
};

const styles = {
  button : {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height:50,
    borderRadius:24,
    elevation: 7,
    shadowOffset: {width:0,height:3},
    shadowRadius: 3,
    shadowOpacity: 0.9,
    shadowColor: '#000000',

  }
}

export {CommonButton};
