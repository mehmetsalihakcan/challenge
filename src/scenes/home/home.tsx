import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SIZES} from '../../constants/index';

const Home = () => {
  //console.log('props : ', props.navigate);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
  },
});

export default Home;
