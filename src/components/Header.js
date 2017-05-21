import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={[styles.wrapper, this.props.style]}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>

    );
  }
}
export default Header;
const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
