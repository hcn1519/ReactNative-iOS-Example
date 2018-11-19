import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity, Button } from 'react-native';


export default class SubscribeHeader extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={{flex: 1}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fafcfd"}}>
                <Image
                  style={{width: 40, height: 40, borderRadius: 20}}
                  source={{uri: this.props.profileImgURL}} />
                <Text style={{textAlign: 'center', fontSize: 12, marginTop: 4}}>
                    {this.props.userName}
                  </Text>
              </View>
          </TouchableOpacity>

        </View>
        <View style={{flex: 3}}>

          <View style={{flex: 1.2, flexDirection: 'row'}}>
            <View style={{marginLeft: 24, marginRight: 24, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

              <TouchableOpacity>
              <View>
                <Text style={styles.count}>{this.props.blogCount}</Text>
                <Text style={styles.category}>블로그</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View>
                <Text style={styles.count}>{this.props.postCount}</Text>
                <Text style={styles.category}>포스트</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View>
                <Text style={styles.count}>{this.props.cafeCount}</Text>
                <Text style={styles.category}>내 카페</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View>
                <Text style={styles.count}>{this.props.tvCount}</Text>
                <Text style={styles.category}>네이버 TV</Text>
              </View>
              </TouchableOpacity>

            </View>
          </View>

          <View style={{flex: 1, alignItems: 'stretch', marginLeft: 20, marginRight: 20}}>
            <TouchableOpacity>

              <Text style={{ padding: 10, textAlign: 'center', borderWidth: 1, borderColor: '#f2f2f2'}}>
                나의 구독 관리
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    );
  }
}

SubscribeHeader.propTypes = {
  userName: PropTypes.string,
  profileImgURL: PropTypes.string,
  blogCount: PropTypes.number,
  postCount: PropTypes.number,
  cafeCount: PropTypes.number,
  tvCount: PropTypes.number,
  subscribeManagingAction: PropTypes.string
}

SubscribeHeader.defaultProps = {
  userName: "",
  profileImgURL: '../../../resources/img/profile.png',
  blogCount: 0,
  postCount: 0,
  cafeCount: 0,
  tvCount: 0,
  subscribeManagingAction: null
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fafcfd"
  },
  count: {
    textAlign: 'center',
    fontSize: 16
  },
  category: {
    color: "#a8a8a8",
    textAlign: 'center',
    fontSize: 12
  }
});
