import React from 'react';

import Button from '../../components/Button';

import {Container} from './styles';
const Camera: React.FC = () => {
  return (
    <Container>
      <Button
        onPress={() => {
          console.log('Entrou');
        }}>
        Entrar
      </Button>
    </Container>
  );
};

export default Camera;
