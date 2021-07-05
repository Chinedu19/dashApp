import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppButton from '../components/AppButton'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={7} style={styles.background} source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
        <AppButton title='Login' color='primary'/>
        <AppButton title='Register' color='secondary'/>
        
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    logo:{
        width: 100,
        height: 100
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
        alignSelf: 'center'
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
    buttonContainer:{
        padding: 20,
        width: '100%'
    },
    tagline:{
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 20
    }
})
