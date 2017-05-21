import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

class ProductDetail extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.desc}>{this.props.desc}</Text>
        <Text style={styles.price}>{this.props.price}</Text>
      </View>
    );
  }
}

ProductDetail.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '400'
  },
  desc: {
    fontSize: 12
  }
});

export default ProductDetail;
