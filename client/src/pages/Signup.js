import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' color='pink' textAlign='center'>
          Sign Up for an account
        </Header>
        {data ? (
          <Message>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </Message>
        ) : (
          <Form size='large' onSubmit={handleFormSubmit}>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='Your username'
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <Form.Input
                fluid icon='mail'
                iconPosition='left'
                placeholder='Your email'
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid icon='lock'
                iconPosition='left'
                placeholder='******'
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <Button color='pink' fluid size='large' type="submit">
                Signup
              </Button>
            </Segment>
          </Form>
        )}
        {error && (
          <Message negative>
            {error.message}
          </Message>
        )}
        <Message>
          Already with us? <Link to="/login">Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
