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
        <TouchableOpacity style={styles.container}>
          <Image source={img} style={styles.image} />
        </TouchableOpacity>
        <Button>Enviar</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: 'blue',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },

  image: {
    resizeMode: 'contain',
    width: deviceWidth,

    height: deviceHeight - 120,
  },
});

export default Camera;
