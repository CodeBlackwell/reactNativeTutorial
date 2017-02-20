/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { AppRegistry, AsyncStorage, Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native'

export default class SignInForm extends Component {

    constructor (props) {
        super(props)

        this._saveInfo = this._saveInfo.bind(this)

        this.state = {
            firstName: null,
            lastName:  null,
            number:    null
        }
    }

    render () {
        return (
            <View style={ styles.container }>
                <Text style={ styles.subtitle }>Let's get started!</Text>
                <Text style={ styles.label }>First Name:</Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={(firstName) => this.setState({ firstName })}
                    value={ this.state.firstName }
                />
                <Text style={styles.label}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
                />
                <Text style={styles.label}>Number of this Device:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                />
                <Button
                    onPress={ this._saveInfo }
                    title="Receive Assistance"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    async _saveInfo () {
        const { firstName, lastName, number } = this.state
        if (!firstName) {
            Alert.alert('Input your First Name')
        }
        else if (!lastName) {
            Alert.alert('Input your First Name')
        }
        else if (!validatePhoneNumber(number)) {
            validatePhoneNumber(number)
        }
        else {
            try{
                await AsyncStorage.setItem('username', [firstName, lastName].join(' '))
                await AsyncStorage.setItem('number', number)
            } catch (error) {
                console.log(error)
            }
            this.props.onSuccess()
        }
    }

}

function validatePhoneNumber (number) {
    number = number.toString().replace(/[^0-9]/g, '')
    if (number.length !== 10) {
        Alert.alert('Please enter the 10-digit number to this device. No special characters')
        return false
    }
    return true
}
const styles = StyleSheet.create({
    container: {
        flex:           1,
        justifyContent: 'center',
        alignItems:     'center',
    },
    input:     {
        padding:      4,
        height:       40,
        borderColor:  'gray',
        borderWidth:  1,
        borderRadius: 5,
        margin:       5,
        width:        200,
        alignSelf:    'center'
    },
    label:     {
        fontSize: 18
    },
    subtitle: {
      marginBottom: 70,
      fontSize: 16
    }
});

AppRegistry.registerComponent('signInForm', () => SignInForm);
