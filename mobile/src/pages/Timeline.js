import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Timeline extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight:<Icon name="add-circle-outline"
      size={24}
      color="#4bb0ee"/>
  };
  render() {
    return <View style={styles.container}>
    <Text>Timeline</Text>
    
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
