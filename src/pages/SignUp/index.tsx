import React from 'react';
import {Image} from 'react-native';
import {Container} from './styles';
import logoImg from '../../assets/ladyjusticelogo.png';
const SignUp: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default SignUp;
