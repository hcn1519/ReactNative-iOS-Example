import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RNHighScores from './src/components/RNHighScores'
import FlatListBasic from './src/components/FlatListBasic'

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
AppRegistry.registerComponent('FlatListBasic', () => FlatListBasic);
