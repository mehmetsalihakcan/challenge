import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//constants
import {COLORS, SIZES} from '../../constants/index';
const SCREEN_WIDTH = SIZES.width;
const SCREEN_HEIGHT = SIZES.height;

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <Text style={styles.description}>Açıklama</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  image: {
    //position: 'absolute',
    height: SCREEN_HEIGHT * 0.7,
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 20,
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    margin: 10,
  },
  description: {color: COLORS.primary, fontSize: SIZES.h4, margin: 10},
});

export default Settings;
