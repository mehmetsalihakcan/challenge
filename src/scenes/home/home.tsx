import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SIZES, COLORS} from '../../constants/index';
import {useSelector, useDispatch} from 'react-redux';
import {ICustomer} from '../../modules/home/reducers/reducers';
import {saveUserId} from '../../modules/home/actions/actions';

export default () => {
  //Global state
  const dispatch = useDispatch();
  const home = useSelector((state: {home: ICustomer}) => state.home);

  const changeUserID = () => {
    dispatch(saveUserId(21));
    console.log('home : ', home);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{home.userId}</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttonContainer} onPress={changeUserID}>
          <Text style={styles.textStyle}>Change userID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
  },
  content: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
