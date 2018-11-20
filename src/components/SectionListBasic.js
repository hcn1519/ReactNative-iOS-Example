import React, {Component} from 'react';
import { ActivityIndicator,
         SectionList,
         StyleSheet,
         Text,
         View,
         SafeAreaView,
         TouchableWithoutFeedback,
         NativeModules } from 'react-native';

import SubscribeCell from './cells/SubscribeCell';
import SubscribeHeader from './cells/SubscribeHeader';

export default class SectionListBasic extends Component {

  state = {
      loading: true,
      userData: {},
      subscribeData: []
  }

  async componentWillMount() {
    const response = await fetch('https://pages.oss.navercorp.com/changnam-hong/ReactNativeStudy/mySubscriptionEasy.json')
    const data = await response.json()

    this.setState({
      loading: false,
      userData: data.userData,
      subscribeData: data.MySubscription.map(item => ({
        panTitle: item.panTitle,
        panImgURL: item.panImgURL,
        title: item.title,
        imgURL: item.imgURL,
        action: item.action,
        likeCount: item.likeCount,
        commentCount: item.commentCount
      })),
    });
  }

  sectionList() {
    return([
      {userData: this.state.userData, data: this.state.subscribeData}
    ])
  }

  onPress(item, index) {

    NativeModules.RNTableViewListener.didSelectSectionListCell(item, 0, index);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <SectionList
        onPress={(event) => {this.onPress(event)}}
        renderItem={({item, index, section}) => (
          <TouchableWithoutFeedback onPress={() => this.onPress(item, index)}>
            <View style={{height: 200}}>
              <SubscribeCell
                panTitle={item.panTitle}
                panImgURL={item.panImgURL}
                title={item.title}
                imgURL={item.imgURL}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
                action={item.action}
                />
            </View>
          </TouchableWithoutFeedback>
        )}
        renderSectionHeader={({section: {userData}}) => (
          <View style={{flex: 1, height: 100}}>
            <SubscribeHeader
              userName={userData.userName}
              profileImgURL={userData.profileImgURL}
              blogCount={userData.blogCount}
              postCount={userData.postCount}
              cafeCount={userData.cafeCount}
              tvCount={userData.tvCount}
              />
          </View>
        )}
        sections={this.sectionList()}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={false}
      />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: "#fff"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
