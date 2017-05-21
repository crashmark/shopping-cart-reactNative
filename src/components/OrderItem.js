import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail';
import Thumbnail from './Thumbnail';
import QuantityManager from './QuantityManager';

class OrderItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.wrapper}>
        <Thumbnail img={this.props.img} />
        <ProductDetail
          title={this.props.title}
          desc={this.props.desc}
          price={this.props.price}
        />
        <QuantityManager
          onQuantityUpdate={this.props.onQuantityUpdate}
          basePrice={this.props.price}
        />

      </TouchableOpacity>
    );
  }
}

OrderItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.number,
  onQuantityUpdate: PropTypes.func
};

export default OrderItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 200
  }
});
