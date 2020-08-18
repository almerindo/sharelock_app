import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
export const ImageView = styled.Image`
  width: ${deviceWidth} / 2;
  height: ${deviceWidth} / 2;
`;
