import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules, NativeEventEmitter} from 'react-native'

class CounterTester {
  
  counterExternExample() {
    console.log(NativeModules.Counter);
    NativeModules.Counter.increment()
    NativeModules.Counter.increment()

    NativeModules.Counter.getCount(value => {
      console.log("From Native: count is ", value)
    })
    NativeModules.Counter.increment()
    NativeModules.Counter.increment()

    NativeModules.Counter.getCount(value => {
      console.log("From Native: count is ", value)
    })

    NativeModules.Counter.passMultipleData((first, ...others) => {
      console.log("count is ", first)
      console.log("other arguments ", others)
    })
  }

  counterPromiseExample() {
    NativeModules.Counter.decrement()
    .then(res => console.log(res))
    .catch(e => console.log(e.message, e.code))
  }
}

// instantiate the event emitter
const CounterEvents = new NativeEventEmitter(NativeModules.Counter)

// subscribe to event
CounterEvents.addListener(
  "onIncrement",
  res => console.log("onIncrement event", res)
)

export default class RNHighScores extends Component {
  constructor(props) {
    super(props)

    let tester = new CounterTester();
    tester.counterExternExample();
    tester.counterPromiseExample();
    tester.counterPromiseExample();
    tester.counterPromiseExample();
    tester.counterPromiseExample();
    tester.counterPromiseExample();

    NativeModules.Counter.increment();
  }

  render() {
    let contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\n'}
      </Text>
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
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
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
