import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import LoadingCheckView from './src/components/LoadingCheckView';

import RNHighScores from './src/components/RNHighScores'
import FlatListBasic from './src/components/FlatListBasic'
import SettingsSectionLists from './src/components/SettingsSectionLists';
import SettingTableView from './src/components/SettingTableView';


AppRegistry.registerComponent('LoadingCheckView', () => LoadingCheckView);

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
AppRegistry.registerComponent('FlatListBasic', () => FlatListBasic);
AppRegistry.registerComponent('SettingsSectionLists', () => SettingsSectionLists);
AppRegistry.registerComponent('SettingTableView', () => SettingTableView);
