import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default class ListViewBasics extends Component {
  
  render() {
    const { data } = this.props
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <ListView containerStyle={{ marginBottom: 20 }}>
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
          
        </ListView>
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);