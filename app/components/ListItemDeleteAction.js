import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons} from '@expo/vector-icons'
const ListItemDeleteAction = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons size={35} name='delete' color={colors.white}/>
        </View>
    )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems:'center'
    }
})
