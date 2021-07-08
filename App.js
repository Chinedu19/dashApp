import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  
  return (
    <AccountScreen/>
  );
}
const styles = StyleSheet.create({
  home : {
    backgroundColor : 'grey'
  }
})
