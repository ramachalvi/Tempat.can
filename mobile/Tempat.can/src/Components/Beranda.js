import React, { Component } from 'react';
import HeadAwal from '../HeadAwal'
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Beranda extends Component {
  tombolKembali(){
    <HeadAwal />
  }

  render(){
    return (
      <View style={ styles.container }>
        <Text style={ styles.mainTextColor }>Tempat ini yurod gan</Text>
        <Button onPress={this.tombolKembali} title="Kembali"/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  mainTextColor: {
    fontSize: 44,
    color: '#FCF8E8',
    position: 'relative',
    top: -25
  }
});
