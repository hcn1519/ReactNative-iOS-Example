import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import LoadingCheckView from './src/components/LoadingCheckView';
import RNHighScores from './src/components/RNHighScores'
import FlatListBasic from './src/components/FlatListBasic'
import SectionListBasic from './src/components/SectionListBasic';
import SettingTableView from './src/components/SettingTableView';


AppRegistry.registerComponent('LoadingCheckView', () => LoadingCheckView);
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
AppRegistry.registerComponent('FlatListBasic', () => FlatListBasic);
AppRegistry.registerComponent('SectionListBasic', () => SectionListBasic);
AppRegistry.registerComponent('SettingTableView', () => SettingTableView);
