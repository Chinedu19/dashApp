import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  


  return (
    <LoginScreen/>
  );
}
const styles = StyleSheet.create({
  home : {
    backgroundColor : 'grey'
  }
})
