import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class MySubscribeCell extends Component {

  render() {
    return (
      <View style={styles.cellContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={{width: 30, height: 30, marginRight: 4, borderRadius: 15}}
            source={{uri: this.props.data.imgURL}}
            />
          <Text>{this.props.panTitle}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {this.props.data.cellTitle}
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={{uri: this.props.data.imgURL}}
                   style={styles.image} />
          </View>
        </View>

        <View style={styles.replyContainer}>

          <View style={styles.btnBox}>
            <TouchableOpacity>
              <View style={styles.likeBtn}>
                <Image
                  style={styles.iconStyle}
                  source={require('../../../resources/img/like.png')} />
                <Text style={{color: "#b0b0b0"}}>{this.props.likeCount}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.commentBtn}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={styles.iconStyle}
                  source={require('../../../resources/img/comment.png')} />
                <Text style={{color: "#b0b0b0"}}>{this.props.commentCount}</Text>
              </View>
            </TouchableOpacity>

          </View>

          <TouchableOpacity>
              <View style={styles.shareBtn}>
                <Image
                  style={styles.iconStyle}
                  source={require('../../../resources/img/share.png')} />
              </View>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}>
        </View>
      </View>
    );
  }
}

MySubscribeCell.propTypes = {
  cellTitle: PropTypes.string,
  imgURL: PropTypes.string,
  action: PropTypes.string
}

MySubscribeCell.defaultProps = {
  cellTitle: null,
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
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 4,
    tintColor: '#b0b0b0'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    alignItems: "center"
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
    fontSize: 18
  },
  imageContainer: {
    flex: 1,
    margin: 4
  },
  image: {
    flex: 1
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row'
  },
  likeBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentBtn: {
    marginLeft: 16
  },
  shareBtn: {
    flex: 1,
    justifyContent: 'center'
  }
})
