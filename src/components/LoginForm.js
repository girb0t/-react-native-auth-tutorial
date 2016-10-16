import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label='Email'
            onChangeText={email => this.setState({ email })}
            placeholder="cookie_dough@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            label='Password'
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

export default LoginForm;
