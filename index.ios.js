import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignInForm from './components/setCredentials/signIn'

export default class reactNativeTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Gravy Baby - its wavy
        </Text>
        <SignInForm />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  _renderHome () {
    //if the user has not been defined, render sign in
    if (0) {
      return
    }
    //else render the messaging screen with custom greeting
     else {
      return
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});

AppRegistry.registerComponent('reactNativeTutorial', () => reactNativeTutorial);
