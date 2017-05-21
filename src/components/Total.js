import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Total extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Total: {this.props.total}</Text>
      </View>
    );
  }

}

Total.propTypes = {
  total: PropTypes.number
};

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    //alignSelf: 'stretch',
    alignItems: 'center',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '300'
  }
});
export default Total;
