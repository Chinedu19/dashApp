import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = (props) => {
    return (
        <View style={styles.background}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' size={35} color={colors.white}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color={colors.white}/>
            </View>
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
        position: 'absolute',
        top: 10,
        left: 10
    },
    deleteIcon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
