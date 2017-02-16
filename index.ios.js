/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import SignIn from './components/setCredentials/signIn'
import Chat from './components/chatWindow/chatWindow'

export default class reactNativeTutorial extends Component {
    constructor (props) {
        super(props)

        this._signInSuccess = this._signInSuccess.bind(this)

        this.state = {
            signedIn: false
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Gravy Baby - its wavy
                </Text>
                { this._renderHome() }
            </View>
        );
    }

    _renderHome () {
        if (this.state.signedIn) {
            return (<Chat />)
        }
        return (
            <SignIn
                onSuccess={ this._signInSuccess }
            />
        )
    }

    _signInSuccess () {
        this.setState({ signedIn: true })
    }
}

const styles = StyleSheet.create({
    container:    {
        flex:            1,
        justifyContent:  'center',
        alignItems:      'center',
        backgroundColor: '#F5FCFF',
    },
    welcome:      {
        fontSize:  20,
        textAlign: 'center',
        margin:    10,
    },
    instructions: {
        textAlign:    'center',
        color:        '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('reactNativeTutorial', () => reactNativeTutorial);
