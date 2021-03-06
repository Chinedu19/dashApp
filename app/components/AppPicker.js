import React, {useState} from 'react'
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppHeading from './AppHeading'
import Screen from './Screen'
import PickerItem from './PickerItem'
const AppPicker = ({ icon,items,onSelectItem, selectedItem, placeholder}) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => {
            setModalVisible(true)
            }}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
            { selectedItem ? (<AppHeading style={styles.text}>{selectedItem.label}</AppHeading>)
             : (<AppHeading style={styles.placeholder}>{placeholder}</AppHeading>)
             }

            <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} style={styles.icon}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
                <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={
                    ({ item }) => <PickerItem label={item.label} onPress={() => {
                        setModalVisible(false);
                        onSelectItem(item);
                    }}/>
                }
                />
            </Screen>
        </Modal>
        </>
    )
}   

export default AppPicker

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
    },
    placeholder:{
        color: colors.medium,
        flex: 1
    }
})
