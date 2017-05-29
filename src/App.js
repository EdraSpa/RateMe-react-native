import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from "react-navigation";
import Login from './screens/login.js';
import Main from './screens/me.js';
import Vote from './screens/vote.js';
import Search from './screens/search.js';
import Shop from './screens/shop.js';

const MainScreenNavigator = TabNavigator({
  Main: {screen: Main},
  Vote: {screen: Vote},
  Search: {screen: Search},
  Shop: {screen: Shop}
},{
  tabBarPosition:'bottom',
  tabBarOptions:{
    activeTintColor: '#333',
    showIcon:true,
    showLabel:false,
    style:{
      backgroundColor:'#ccc',
      height:50
    }
  }
});

const RateMe = StackNavigator({
  Login: {screen: Login},
  Main: {screen: MainScreenNavigator}
});

AppRegistry.registerComponent('RateMe', () => RateMe);
