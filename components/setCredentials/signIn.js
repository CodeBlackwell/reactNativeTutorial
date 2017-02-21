/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { 
    AppRegistry,
    AsyncStorage,
    Alert,
    Button,
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class SignInForm extends Component {

    constructor (props) {
        super(props)

        this._saveInfo = this._saveInfo.bind(this)

        this.state = {
            fullName: null,
            number:   null
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to the Get Help App by Freedom House ReEntry
                </Text>
               
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(fullName) => this.setState({fullName})}
                    value={this.state.fullName}
                />
                <Text style={styles.label}>This Device's Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                />
                <Button
                    onPress={ this._saveInfo }
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    async _saveInfo () {
        const { fullName, number } = this.state
        if (!fullName) {
            Alert.alert('Input your Full Name')
        }
        else if (!validatePhoneNumber(number)) {
            return
        }
        else {
            try{
                await AsyncStorage.setItem('username', fullName)
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
    welcome:      {
        fontSize:  24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin:    10,
        marginBottom: 50
    },
    input:     {
        padding:      4,
        height:       40,
        borderColor:  'gray',
        borderWidth:  1,
        borderRadius: 5,
        margin:       5,
        width:        300,
        alignSelf:    'center'
    },
    label:     {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 34,
        fontSize: 18
    }
});

AppRegistry.registerComponent('signInForm', () => SignInForm);
