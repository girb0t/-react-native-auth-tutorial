import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhSGzitMFdMNNEYuSbksrRV9CA-f-Liks',
      authDomain: 'react-native-auth-tutorial.firebaseapp.com',
      databaseURL: 'https://react-native-auth-tutorial.firebaseio.com',
      storageBucket: 'react-native-auth-tutorial.appspot.com',
      messagingSenderId: '587398671555'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
