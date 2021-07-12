import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeading from './AppHeading'

const ErrorMessage = ({error, visible}) => {
    if (!visible || !error) return null;
    return (
        <AppHeading style={styles.error}>{error}</AppHeading>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error:{
        color: 'red'
    }
})
