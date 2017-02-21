import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

import Row from './messageRow'



class ListViewDemo extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
    render() {
        return (
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => <Row {...data} />}
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