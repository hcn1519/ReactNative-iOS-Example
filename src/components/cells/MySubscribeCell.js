import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class MySubscribeCell extends Component {

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {this.props.data.title}
              action: {this.props.data.action}
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={{uri: this.props.data.imgURL}}
                   style={styles.image} />
          </View>

        </View>
    );
  }
}

MySubscribeCell.propTypes = {
  title: PropTypes.string,
  imgURL: PropTypes.string,
  action: PropTypes.string
}

MySubscribeCell.defaultProps = {
  title: null,
  imgURL: null,
  action: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 3,
    marginLeft: 8
  },
  text: {
    flex: 1,
    fontWeight: 'bold'
  },
  imageContainer: {
    flex: 1,
    margin: 4
  },
  image: {
    flex: 1
  }
})
