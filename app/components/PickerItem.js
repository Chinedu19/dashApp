import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppHeading from './AppHeading'

const PickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppHeading>{label}</AppHeading>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container:{
        padding: 20
    }
})
