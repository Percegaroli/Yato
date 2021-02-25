import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactElement
}

const ActiveWindowContainer: React.FC = (props: Props) => {
  const { children } = props;
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ActiveWindowContainer;
