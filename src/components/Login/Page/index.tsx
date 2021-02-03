import React from 'react';
import { Container, Card } from './styles';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import Divisor from '../../UI/Divisor';

const Login: React.FC = () => (
  <Container>
    <Card>
      <LoginForm />
      <Divisor orientation="vertical" />
      <SignUpForm />
    </Card>
  </Container>
);

export default Login;
