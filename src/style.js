import {StyleSheet} from 'react-native';
module.exports = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
    height: null,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    height:60,
  },
  logo:{
    height:40,
    width:40,
    margin:10,
  },
  headerImg:{
    flex:1,
    height:50,
    marginHorizontal:60,
  },
  headerBtn:{
    marginRight:0,
    marginTop:15,
    height:40,
    width:40,
    color:'#fafafa'
  },

  separator:{
    marginHorizontal:20,
    borderColor: '#fafafa',
    borderBottomWidth: 1,
  },

  content:{
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  card:{
    backgroundColor:'#fafafa',
    height:320,
    width:240,
    elevation:6
  },
  cardHead:{
    flex:1,
    alignItems:'center',
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingTop:20
  },
  cardHeadText:{

  },
  cardBody:{
    flex:6,
    flexDirection:'column',
    justifyContent:'space-around',
  },
  fbButton: {
    alignSelf:'center',
    width:200,
    height:50,
    backgroundColor:'#3B5998',
    elevation:3
  },
  twButton: {
    alignSelf:'center',
    width:200,
    height:50,
    backgroundColor:'#1DA1F2',
    elevation:3
  },
  gButton: {
    alignSelf:'center',
    width:200,
    height:50,
    backgroundColor:'#DB4437',
    elevation:3
  },
  btnText:{
    color:'#fafafa'
  }
});
