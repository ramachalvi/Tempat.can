import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HeadAwal extends Component {

  render(){
    return (
      <View style={ styles.container }>
        <Text style={ styles.mainText }>Tempat.can</Text>
        <Text style={ styles.secondaryText }>Aplikasi Peminjam Tempat</Text>
        <Button onPress={this.tombolHead} title="Masuk"/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 44,
    color: '#FCF8E8',
    position: 'relative',
    top: -25
  },
  secondaryText: {
    color: 'white',
    fontSize: 11,
    fontStyle: 'normal',
    top: -23
  }
});
