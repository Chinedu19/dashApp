import React from 'react'
import { StyleSheet, Text,Platform, View, Image, SafeAreaView, TouchableOpacity, Button, Alert } from 'react-native'

const PracticeScreen = (props) => {

    const txtPressed = () => {
        console.log("Text has been pressed")
      }

    return (
        <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={txtPressed} style={{color: "#fff"}}>Wow wu!!!, This is my first application with react native and I'm loving it, I also love working at technezz</Text>
      <StatusBar style="auto" />
      {/* Loading image locally */}
      <TouchableOpacity onPress={() => console.log("Image Pressed")}>
      <Image source={require('./assets/favicon.png')}/>
      </TouchableOpacity>
      <Button title="click me" color="orange" onPress={() => Alert.alert("Heading","ACE is cool with react native", [{text: "Yes"}, {text: "Lovely"}])}/>

      {/* <Button title="Hey boy" color={"dodgerBlue"} onPress={() => Alert.prompt("Tv Presenter", "Question: Why are you gay?", (text) => console.log(text))}/> */}
      {/* Loading Image from web */}
      {/* <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}
      loadingIndicatorSource={require('./assets/icon.png')}
      /> */}
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === "android" ? "#3e5cb7" : "#fff",
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default PracticeScreen


