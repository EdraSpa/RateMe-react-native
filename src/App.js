import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import styles from './style.js';
import {StackNavigator} from 'react-navigation';
import Login from './screens/login.js';
import Main from './screens/main.js';

const RateMe = StackNavigator({
  Login: {screen: Login},
  Main: {screen: Main}
});

AppRegistry.registerComponent('RateMe', () => RateMe);
