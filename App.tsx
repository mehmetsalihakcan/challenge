/**
 * Mehmet Salih Akcan
 * challenge
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';
import {COLORS} from './src/constants/index';
import Navigation from './src/app/navigation';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10, backgroundColor: COLORS.gray},
});

export default App;
