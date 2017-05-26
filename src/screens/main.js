import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import styles from '../style.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      triggerStep:0,
      dots:{0:1,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},
      activeDots:{0:0,1:1,2:0,3:1,4:0,5:1,6:0,7:1,8:0,9:1,10:0,11:1,12:0,13:1,14:0,15:1},
      overlayStart:1,
      lastDice:0,
      activeDice:1
    };

    /*this.rollDice = this.rollDice.bind(this);*/
  }

  static navigationOptions = {
    title: this.props.titolo,
  }

  render() {
    return (
      <View style={[styles.container,styles.bgblue]}>

      </View>
    );
  }
}

AppRegistry.registerComponent('Main', () => Main);
