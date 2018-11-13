import React, {Component} from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class SettingsSectionLists extends Component {

  sectionList() {
    return([
      {title: 'Title1', data: ['item1', 'item2']},
    {title: 'Title2', data: ['item3', 'item4']},
    {title: 'Title3', data: ['item5', 'item6']},
    ])
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
