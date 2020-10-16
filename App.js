import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    validate: false ,
    nameValadate:true,
    password:""
  }

  validate = (text) => {
    
    console.log(text);
    let reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (reg.test(text) === false) {
      console.warn("Email is Not Correct");
      this.setState({
        nameValadate:false
      });       
      return false;
    }
    else {
      console.warn("Email is Correct");
      this.setState({
        nameValadate:true
      });    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Test</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={[styles.inputText,
            !this.state.nameValadate? styles.error:null]}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.validate(text)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"60%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  error:{
      borderWidth:3,
      borderRadius:25,
      borderColor:'red'
  }
});
