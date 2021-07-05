import React from 'react'
import { StyleSheet, Text} from 'react-native'

const AppHeading = ({children}) => {
    return (
        <Text style={styles.headings}>{children}</Text>
    )
}

export default AppHeading

const styles = StyleSheet.create({
    headings : {
        fontSize: 20,
        fontWeight: "800",
    }
})
