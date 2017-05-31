import React from 'react';
import {AppRegistry, StyleSheet, Image, View} from 'react-native';
import {Txt, Title} from '../text.js';
import {Container, Button, Icon, Left, Right} from 'native-base';
import styles from '../style.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    header: null
  })


  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Image source={require('../bg.jpg')} style={StyleSheet.flatten([styles.bg])}>
          <View style={StyleSheet.flatten(styles.header)}>
            <Image source={require('../logo.png')} style={StyleSheet.flatten(styles.logo)}/>
            <Image source={require('../head.png')} style={StyleSheet.flatten(styles.headerImg)}/>
            <Icon name='md-settings' onPress={() => navigate('Main', {titolo:'Lucy'})} style={StyleSheet.flatten(styles.headerBtn)}/>
          </View>
          <View style={StyleSheet.flatten(styles.separator)}/>


          <View style={StyleSheet.flatten(styles.content)}>
            <View style={StyleSheet.flatten(styles.card)}>
              <View style={StyleSheet.flatten(styles.cardHead)}>
                <Title style={StyleSheet.flatten(styles.cardHeadText)} color="#333333" txt="LOGIN"/>
              </View>
              <View style={StyleSheet.flatten(styles.cardBody)}>
                <Button iconLeft onPress={() => navigate('Main', {titolo:'Lucy'})} style={StyleSheet.flatten(styles.fbButton)}>
                  <Icon name='logo-facebook'/>
                  <Txt style={StyleSheet.flatten(styles.btnText)} color="#fafafa" txt="Login with Facebook"/>
                </Button>
                <Button iconLeft onPress={() => navigate('Main', {titolo:'Lucy'})} style={StyleSheet.flatten(styles.twButton)}>
                  <Icon name='logo-twitter'/>
                  <Txt style={StyleSheet.flatten(styles.btnText)} color="#fafafa" txt="Login with Twitter"/>
                </Button>
                <Button iconLeft onPress={() => navigate('Main', {titolo:'Lucy'})} style={StyleSheet.flatten(styles.gButton)}>
                  <Icon name='logo-google'/>
                  <Txt style={StyleSheet.flatten(styles.btnText)} color="#fafafa" txt="Login with Google"/>
                </Button>
              </View>
            </View>
          </View>
        </Image>
      </Container>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
