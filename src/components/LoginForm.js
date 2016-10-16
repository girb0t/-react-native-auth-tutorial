import React, { Component } from 'react';
import { Button, CardSection, Card, Input } from './common';

class LoginForm extends Component {
  state = {
    email: ''
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
