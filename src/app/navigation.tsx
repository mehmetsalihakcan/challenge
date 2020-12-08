import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';

import Home from '../scenes/home/home';
//import HomeDetails from '../scenes/homeDetails/HomeDetails';
import {COLORS} from '../constants/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Home />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10, backgroundColor: COLORS.gray},
});

export default App;
