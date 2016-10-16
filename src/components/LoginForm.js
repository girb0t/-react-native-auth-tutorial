import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            label='Email'
            onChangeText={text => this.setState({ text })}
            placeholder="cookie_dough@gmail.com"
          />
        </CardSection>

        <CardSection />
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
