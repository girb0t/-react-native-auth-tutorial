import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
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
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
