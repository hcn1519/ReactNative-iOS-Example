import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';


export default class MySubscribeCell extends Component {

  render() {
    return (
      <View style={styles.cellContainer}>
        <View style={styles.titleContainer}>

        </View>
        <View style={styles.contentContainer}>
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

        <View style={styles.replyContainer}>

          <View style={styles.btnBox}>
            <TouchableHighlight style={styles.likeBtn}>
              <Text>좋아요</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.commentBtn}>
              <Text>댓글</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight style={styles.shareBtn}>
            <Text>공유</Text>
          </TouchableHighlight>
        </View>
        <View>

        </View>
        <View style={styles.separator}>
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
  cellContainer: {
    flex: 1
  },
  separator: {
    flex: 0.3,
    height: 12,
    backgroundColor: "#f2f2f2"
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "blue"
  },
  contentContainer: {
    flex: 2.5,
    flexDirection: 'row',
    margin: 8
  },
  replyContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'yellow',
    borderTopWidth: 1,
    borderTopColor: "rgb(247, 247, 247)",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    flex: 3
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
  },
  btnBox: {
    flexDirection: 'row'
  },
  likeBtn: {
    marginLeft: 16
  },
  commentBtn: {
    marginLeft: 16
  },
  shareBtn: {

  }
})
