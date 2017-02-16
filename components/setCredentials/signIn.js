/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class signInForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text style={style.label}>First Name:</Text>
        <TextInput style={styles.input}/>
        <Text style={style.label}>Last Name:</Text>
        <TextInput style={styles.input}/>
        <Text style={style.label}>Number of this Device:</Text>
        <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('signInForm', () => signInForm);
