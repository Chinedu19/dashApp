import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
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
