import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class QuantityManager extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.onQuantityChange.bind(this);
  }
  onQuantityChange(decrease) {
    if (decrease && this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });

      this.props.onQuantityUpdate(-this.props.basePrice);
    } else if (!decrease) {
      this.setState({ quantity: this.state.quantity + 1 });

      this.props.onQuantityUpdate(this.props.basePrice);
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Quantity: { this.state.quantity }</Text>
        <View style={styles.buttons}>
          <Button title=" + " onPress={() => this.onQuantityChange(false)} />
          <Button title=" - " onPress={() => this.onQuantityChange(true)} />
        </View>

      </View>
    );
  }
}

QuantityManager.propTypes = {
  onQuantityUpdate: PropTypes.func,
  basePrice: PropTypes.number
};
export default QuantityManager;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center'
  },
  buttons: {
    width: 50,
    flex: 1,
    justifyContent: 'center'
  }
});
