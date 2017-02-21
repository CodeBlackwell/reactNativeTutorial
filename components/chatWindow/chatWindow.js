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

import MessageList from './messageList'

export default class ChatWindow extends Component {

    constructor (props) {
        super(props)

        this_sendMessage = this._sendMessage.bind(this)

        this.state = {
            chatHistory: [{username: 'steven', message: 'Sweet holy red rims!'}],
            unsentMessage: null
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <MessageList
                listItems={this.state.chatHistory}
                 />
                <TextInput
                style={ styles.input }
                onChangeText={ (unsentMessage) => this.setState({unsentMessage})}
                value={this.state.unsentMessage}
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
        justifyContent: 'flex-end',
        alignItems:     'center',

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
    }
});

AppRegistry.registerComponent('chatWindow', () => ChatWindow);
