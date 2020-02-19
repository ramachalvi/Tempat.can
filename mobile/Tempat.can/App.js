import React, { Component } from 'react';
import SplashScreen from './src/Components/SplashScreen';
import Head from './src/HeadAwal'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      align: 'center'
    }
}

performTimeConsumingTask = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      2000
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
      return <SplashScreen />;
    }

    return (
      <Head />
    );
  }
}