import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
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
