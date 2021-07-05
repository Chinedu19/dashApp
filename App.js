import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {
  
  return (
    <MessagesScreen/>
  );
}
const styles = StyleSheet.create({
  home : {
    backgroundColor : 'grey'
  }
})
