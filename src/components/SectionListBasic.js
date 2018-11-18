import React, {Component} from 'react';
import { ActivityIndicator, SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SubscribeCell from './cells/SubscribeCell';
import SubscribeHeader from './cells/SubscribeHeader';

export default class SectionListBasic extends Component {

  state = {
      loading: true,
      subscribeData: []
  }

  async componentWillMount() {
    const response = await fetch('https://pages.oss.navercorp.com/changnam-hong/ReactNativeStudy/mySubscriptionEasy.json')
    const data = await response.json()

    this.setState({
      loading: false,
      subscribeData: data.MySubscription.map(item => ({
        title: item.title,
        imgURL: item.imgURL,
        action: item.action
      })),
    });
  }

  sectionList() {
    return([
      {title: 'Title1', data: this.state.subscribeData}
    ])
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <SectionList
        renderItem={({item, index, section}) => (

          <View style={{height: 200}}>
            <SubscribeCell
              title={item.title}
              imgURL={item.imgURL}
              action={item.action}
              />
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={{flex: 1, height: 100, backgroundColor: "#fafcfd"}}>
            <SubscribeHeader />
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
