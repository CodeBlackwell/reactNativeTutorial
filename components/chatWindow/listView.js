import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class ListViewBasics extends Component {
  
  render() {
    { data } = this.props
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          { data.map((data, i) => (
              <ListItem
                key={ i }
                title={ data.name }
              >
                <Text>
                  { data.message }
                </Text>
              </ListItem>
            ))
          }
          
        </List>
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);