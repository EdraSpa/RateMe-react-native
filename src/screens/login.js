import React from 'react';
import {AppRegistry, StyleSheet, Image, View} from 'react-native';
import {Container, Content, Header, Title, Card, CardItem, Text, Button, Body, Icon, Left, Right} from 'native-base';
import styles from '../style.js';

export default class Login extends React.Component {
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

  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    header: null
  })


  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Image source={require('../bg.jpg')} style={StyleSheet.flatten([styles.bg])}>
          <Content contentContainerStyle={StyleSheet.flatten(styles.content)}>
            <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Body>
                  <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Card style={StyleSheet.flatten(styles.card)}>
              <CardItem header>
                  <Text>LOGIN</Text>
              </CardItem>
              <CardItem>
                  <Body>
                    <Button onPress={() => navigate('Main', {titolo:'Lucy'})} title="schiacciami tutto"/>
                    <Button iconLeft>
                        <Icon name='logo-facebook' />
                        <Text style={StyleSheet.flatten(styles.fbButton)}>Login with Facebook</Text>
                    </Button>
                  </Body>
              </CardItem>
            </Card>

          </Content>
        </Image>
      </Container>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
