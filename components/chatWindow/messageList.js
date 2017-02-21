import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

import Row from './messageRow'



class ListViewDemo extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
        //Here is where the message data will go
        dataSource: ds.cloneWithRows([
          { message: 'message1' },
          { message: 'message2' }
          ]),
    };
  }
    render() {
        return (
          <ListView
            style={ styles.container }
            dataSource={ this.state.dataSource }
            renderRow={ (data) => <Row {...data}/> }
          />
        );
    }
}

export default ListViewDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});