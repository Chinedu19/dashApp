import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';



export default function App() {
  
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}
const styles = StyleSheet.create({
  home : {
    backgroundColor : 'grey'
  }
})
