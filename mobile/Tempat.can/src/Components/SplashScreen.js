import React, { Component } from 'react';
import { View, Image } from 'react-native';

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
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/hasimy-as/Tempat.can/blob/develop/mobile/Tempat.can/src/Assets/tempatcan.png'
          }}
          style={{ width: 100, height: 100 }}
        />
        </View>
    );
  }
};
