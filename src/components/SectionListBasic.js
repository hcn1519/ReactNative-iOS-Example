import React, {Component} from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class SectionListBasic extends Component {

  sectionList() {
    return([
      {title: 'Title1', data: ['RN의 SectionList 예시입니다.', 'item2']},
    {title: 'Title2', data: ['item3', 'item4']},
    {title: 'Title3', data: ['item5', 'item6']},
    ])
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <SectionList
        renderItem={({item, index, section}) => (
          <View style={{flex: 1, backgroundColor: "rgb(247, 247, 247)"}}>
            <Text style={{fontSize: 15, padding: 10 }} key={index}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={{flex: 1, backgroundColor: "#202020"}}>
          <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
        sections={this.sectionList()}
        keyExtractor={(item, index) => item + index}
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
