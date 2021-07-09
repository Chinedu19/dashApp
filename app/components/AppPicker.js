import React, {useState} from 'react'
import { Button, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppHeading from './AppHeading'
import Screen from './Screen'
const AppTextInput = ({ icon, placeholder,...otherProps}) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
            <AppHeading style={styles.text}>{placeholder}</AppHeading>
            <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} style={styles.icon}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
            </Screen>
        </Modal>
        </>
    )
}   

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1
    }
})
