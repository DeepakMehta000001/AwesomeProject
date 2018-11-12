import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource : null
    }
  }

  componentDidMount(){
    return fetch('http://www.uttarakhandtraveller.com/api/place/45',{
      method: 'GET',
      headers: {
        'Authorization': 'Token c0f23c79f7cdfdd3f1063033afaeb89609e3039c',
      }})
      .then( (response) => response.json() )
      .then( (responseJson) => {

        this.setState ({
          isLoading : false,
          dataSource : responseJson.name,
        })
      })
     .catch( (error) => {
        console.log(error)
    })
  }

  render(){
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text> {this.state.dataSource} </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent: 'center'
  }
});

/*
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 370, height: 220}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
*/
