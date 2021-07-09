import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';


const list = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Luxury", value: 3},
]
export default function App() {
  
const [category, setCategory] = useState(list[0])

  return (
    <Screen>
      <AppPicker icon="apps" items={list} selectedItem={category} onSelectItem={(item) => setCategory(item)} placeholder="Category"/>
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}
const styles = StyleSheet.create({
  home : {
    backgroundColor : 'grey'
  }
})
