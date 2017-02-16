import React, { Component } from 'react';
import {
  AppRegistry,
  AsynchStorage,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class InputForm extends Component ({


  render () {
    return (
      <View style={ styles.container }>
        <Text>Free ReEntry</Text>
        <Text 
        style={ styles.label } >First Name:</Text>
        <TextInput
        style={ styles.input }
        onChangeText={ (firstName) => this.setState({ firstName }) }/>
        <Text style={ styles.label }>Last Name:</Text>
        <TextInput 
        style={ styles.input }
        onChangeText={ (lastName) => this.setState({ lastName }) }/>
        
        <Text style={ styles.label }>Number of this Device:</Text>
        <TextInput 
        style={ styles.input }
        onChangeText={ (number) => this.setState({ number }) }/>
        <Button onPress={this._validateAndSave}></Button>  
      </View>
    );
  }

  asynch _validateAndSave() {
    const { firstName, lastName, number } = this.state

    if (firstName == null) {
        Alert.alert('Please input your First Name')
    }
    if (lastName == null) {
        Alert.alert('Please input your Last Name')
    }
    if (number == null) {
        Alert.alert('Please input the number to this device')
    }
  }

  if (firstName && lastName && number) {
    try {
    await AsynchStorage.setItem('username', [firstName, lastName].join(' '))
    await AsynchStorage.setItem('number', number)

    } catch (error) {
      throw error
    }
  }
});

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: 'blue'
  },
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
AppRegistry.registerComponent('reactNativeTutorial', () => InputForm);