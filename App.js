import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ShoppingList from './src/components/ShoppingList';
import Header from './src/components/Header';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Shopping Cart" />
        <ShoppingList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    top: 24
  },
});
