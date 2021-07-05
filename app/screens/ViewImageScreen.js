import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = (props) => {
    return (
        <View style={styles.background}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
        
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 10,
        left: 10
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 10,
        right: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
