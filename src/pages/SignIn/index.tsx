import React from 'react';
import {Image, KeyboardAvoidingView, Platform, View} from 'react-native';
import logoImg from '../../assets/ladyjusticelogo.png';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Marker, {TextBackgroundType} from 'react-native-image-marker';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />
            {/* <Image
        source={require('/data/user/0/com.appsharelockholmes/cache/f1aff572-81fd-4a48-a6f5-613d2bf08974imagemarker.jpg')}
      /> */}
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button
              onPress={async () => {
                console.log('Entrou');

                const marker = await Marker.markText({
                  src: require('/mnt/REPOS/ESTUDOS/SHARELOCK_HOLMES/sharelock_app/assests/images/img.jpg'),
                  quality: 100,
                  filename: 'teste.jpg',
                  text: 'JJ É PHODA!',
                  color: '#FF0000',
                  fontName: 'Arial-BoldItalicMT',
                  fontSize: 44,
                  scale: 1,
                  X: 0,
                  Y: 0,
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

                console.log(`Marker -> ${marker}`);
              }}>
              Entrar
            </Button>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
