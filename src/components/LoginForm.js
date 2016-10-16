import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Card, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true, });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
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
          { this.renderButton() }
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
