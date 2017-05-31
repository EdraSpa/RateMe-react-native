import React from 'react';
import {AppRegistry,Text} from 'react-native';

export class Txt extends React.Component {
  render() {
    let testo=this.props.txt;
    let clr=this.props.color;
    return(
      <Text style={{fontSize: 17,fontFamily:'Raleway-Regular',color:clr}}>
        {testo}
      </Text>
    );
  }
}
AppRegistry.registerComponent('Txt', () => Txt);


export class Title extends React.Component {
  render() {
    let testo=this.props.txt;
    let clr=this.props.color;
    return(
      <Text style={{fontSize: 27,fontFamily:'Raleway-Regular',color:clr}}>
        {testo}
      </Text>
    );
  }
}
AppRegistry.registerComponent('Title', () => Title);
