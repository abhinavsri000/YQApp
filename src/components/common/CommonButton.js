import React from 'react';
import { Button } from 'react-native-elements';

const CommonButton = () => {
  return(
    <Button buttonStyle= {styles.button}

      title="Login"
      titleStyle= { { fontSize:20, fontFamily: 'Segeo UI' }}
    />
  );
};

const styles = {
  button : {
    marginLeft: 20,
    marginRight: 20,
    marginTop:45,
    marginBottom: 20,
    height:50,
    borderRadius:24,
    elevation: 7,
    shadowOffset: {width:0,height:3},
    shadowRadius: 3,
    shadowOpacity: 0.9,
    shadowColor: '#000000'
  }
}

export {CommonButton};
