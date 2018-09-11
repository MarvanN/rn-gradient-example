/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, StatusBar} from 'react-native';
var windowSize = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#027cfe', '#219cf6', '#55cfea']} style={styles.linearGradient}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.insideContainer}>

        </View>
        </LinearGradient>
        <StatusBar 
        translucent 
        barStyle="light-content"
        backgroundColor="transparent" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  linearGradient: {
    width: windowSize.width,
    height: windowSize.height,
    paddingTop: 40
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  text:{
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 20,
    paddingLeft: 20
  },
  insideContainer:{
   flex: 1,
   backgroundColor: '#fff',
   borderTopLeftRadius: 12,
   borderTopRightRadius: 12
  }
});
