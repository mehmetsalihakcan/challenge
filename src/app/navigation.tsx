import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {COLORS} from '../constants/index';

//screens
import Home from '../scenes/home/home';

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
  container: {flex: 1, backgroundColor: COLORS.white},
});

export default App;
