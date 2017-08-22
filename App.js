import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuid from "uuid/v1";
import realm from './realm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: null,
      found: null,
    };
  }

  componentDidMount() {
    const id = uuid();
    const saved = realm.dog.save({ id, name: 'Coda' });
    const found = realm.dog.getById(id);
    this.setState({ saved, found });
  }

  render() {
    const { saved, found } = this.state;
    return (
      <View style={styles.container}>
        <Text>{saved ? `Saved: ${JSON.stringify(saved)}` : "Not Saved"}</Text>
        <Text>{found ? `Found: ${JSON.stringify(found)}` : "Not Found"}</Text>
      </View>
    );
  }
}
