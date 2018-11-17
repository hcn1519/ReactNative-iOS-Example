import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet, SafeAreaView } from 'react-native'
import TableView from 'react-native-tableview'

const { Section, Item } = TableView


export default class MySubscribeTableView extends Component {
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

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.loading && <ActivityIndicator />}

        <TableView
          style={{ flex: 1 }}
          reactModuleForCell="MySubscribeCell"
          cellSeparatorInset={{top: 0, left: 0, bottom: 0, right: 0}}
          tableViewStyle={TableView.Consts.Style.Plain}
        >
          <Section>
            {this.state.subscribeData.map(item =>
              <Item key={item.title}
                    title={item.title}
                    imgURL={item.imgURL}
                    action={item.action}
                    height={200} />
            )}
          </Section>
        </TableView>
    </SafeAreaView>
    );
  }
}
