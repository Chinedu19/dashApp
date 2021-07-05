import React from 'react'
import { StyleSheet, Text} from 'react-native'

const AppHeading = ({children, style}) => {
    return (
        <Text style={[styles.headings, style]}>{children}</Text>
    )
}

export default AppHeading

const styles = StyleSheet.create({
    headings : {
        fontSize: 20,
    }
})
