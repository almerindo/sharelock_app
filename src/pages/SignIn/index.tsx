import React from 'react';
import {Image} from 'react-native';
import logoImg from '../../assets/ladyjusticelogo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Marker, {
  Position,
  ImageFormat,
  TextBackgroundType,
} from 'react-native-image-marker';

import {Container, Title} from './styles';
const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={async () => {
          console.log('Entrou');
          const marker = await Marker.markText({
            src: require('/mnt/REPOS/ESTUDOS/SHARELOCK_HOLMES/sharelock_app/assests/images/img.jpg'),
            quality: 100,
            text: 'JJ É PHODA!',
            color: '#FF0000',
            fontName: 'Arial-BoldItalicMT',
            fontSize: 44,
            scale: 1,
            shadowStyle: {
              dx: 10.5,
              dy: 20.8,
              radius: 20.9,
              color: '#00F0FF',
            },
            textBackgroundStyle: {
              type: TextBackgroundType.stretchX,
              paddingX: 10,
              paddingY: 10,
              color: '#0f0',
            },
          });

          console.log(marker);
        }}>
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
