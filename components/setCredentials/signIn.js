/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class signInForm extends Component {

    constructor (){
        super()

        this._saveInfo = this._saveInfo.bind(this)
    }

  render () {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text style={styles.label}>First Name:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.label}>Number of this Device:</Text>
        <TextInput style={styles.input}/>
          <Button
              onPress={ this._saveInfo }
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
  _saveInfo () {

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
