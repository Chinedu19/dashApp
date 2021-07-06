import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons} from '@expo/vector-icons'
const ListItemDeleteAction = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons size={35} name='delete' color={colors.white}/>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default ListItemDeleteAction


