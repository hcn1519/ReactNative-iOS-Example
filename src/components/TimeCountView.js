import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules, NativeEventEmitter } from 'react-native'

const logger = new NativeEventEmitter(NativeModules.TimeLogger)
console.log("Time Log", logger);

logger.addListener(
  'onLogCountIncrease',
  res => console.log("sadfas", res)
)

export default class TimeCountView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 10
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countStyle}>
          {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  countStyle: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: 'center'
  }
})
