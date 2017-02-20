import React, { Component } from 'react'
import { AppRegistry, AsyncStorage, Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native'

import ListView from './listView'

export default class ChatWindow extends Component {

    constructor (props) {
        super(props)

        this_sendMessage = this._sendMessage.bind(this)

        this.state = {
            chatHistory: [],
            unsentMessage: null
        }
    }

    render () {
        return (
            <View style={ styles.container }>
                <ListView 
                data={this.state.chatHistory}
                />
                <TextInput
                style={ styles.input }
                onChangeText={ (unsentMessage) => this.setState({ unsentMessage })}
                value={ this.state.unsentMessage }
                />

                <Button
                    onPress={ this._sendMessage }
                    title="Send"
                    color="#841584"
                    accessibilityLabel="Send your message!"
                />
            </View>
        );
    }

    _sendMessage () {
        const prev = this.state.chatHistory
        this.setState({ chatHistory: prev.concat(unsentMessage) })  
    }
}

const styles = StyleSheet.create({
    container: {
        flex:           1,
        justifyContent: 'center',
        alignItems:     'center',
    },
    listContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'gray',
        height: 400,
        width: 300,
        alignSelf: 'center'
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
    }
});

AppRegistry.registerComponent('chatWindow', () => ChatWindow);






////*** for testing

function generateData() {
    const splitData = {
    names: ['oscar', 'luisa', 'ronald', 'davinci', 'cicero', 'g-eazy'],
    messages: ['Hi', 'Goodbye', 'South Park is Great', 'I love Breaking Bad', 
    'If that\'s the case, this doesn\'t even matter' ]
    }
    return splitData.names.map( name => {
        let index = Math.random() * splitData.messages.length
        index = index.floor
        return { name, message: splitData.messages[index] }
    })
}



