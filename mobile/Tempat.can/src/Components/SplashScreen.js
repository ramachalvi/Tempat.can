import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SplashScreen extends Component {
  render() {

    return (
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#121212'
      }}>
        {/* <Image
          source={{
            uri: 'https://github.com/hasimy-as/Tempat.can/blob/develop/mobile/Tempat.can/src/Assets/tempatcan.png?raw=true'
          }}
          style={{ width: 100, height: 100 }}
        /> */}
        <Text style={{color: 'white', fontSize: 44}}>
          Tempatcan kuy!
        </Text>
        </View>
    );
  }
};
