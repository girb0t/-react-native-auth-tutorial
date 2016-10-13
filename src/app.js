import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { firebase } from 'firebase';

import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhSGzitMFdMNNEYuSbksrRV9CA-f-Liks',
      authDomain: 'react-native-auth-tutorial.firebaseapp.com',
      databaseURL: 'https://react-native-auth-tutorial.firebaseio.com',
      storageBucket: 'react-native-auth-tutorial.appspot.com',
      messagingSenderId: '587398671555'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
