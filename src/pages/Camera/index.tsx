import React from 'react';

import {Image, View, StyleSheet, Dimensions} from 'react-native';

import img from '../../assets/tux2.png';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Camera: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={img} style={styles.image} />
          <Button>Enviar</Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 0,
    // paddingBottom: 30,
  },

  image: {
    resizeMode: 'contain',
    width: deviceWidth,

    height: deviceHeight - 95,
  },
});

export default Camera;
