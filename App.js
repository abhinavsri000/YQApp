import React from 'react';
import {View,Text} from 'react-native';
import Main from './src/components/layout/Main';
import Splash from './src/components/layout/Splash';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading : true }
}

performTimeConsumingTask = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      3000
    )
  );
}

async componentDidMount() {
const data = await this.performTimeConsumingTask();

if (data !== null) {
  this.setState({ isLoading: false });
}
}
  render(){
    if (this.state.isLoading) {
      return <Splash/>;
    }
  return (
     <Main/>
  );}
}