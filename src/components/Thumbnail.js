import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';

class Thumbnail extends Component {
  render() {
    return (
      <Image
        source={{ uri: this.props.img }}
        resizeMode="contain"
        style={styles.thumbnail}
      />
    );
  }
}

Thumbnail.propTypes = {
  imgsrc: PropTypes.string
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 100

  }
});

export default Thumbnail;
