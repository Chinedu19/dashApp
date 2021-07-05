import React from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import AppHeading from './AppHeading'

import { Swipeable } from 'react-native-gesture-handler'

const ListItem = ({title, subTitle, image, onPress, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <View style={styles.container}>
                <Image source={image} style={styles.image}/>
                <View>
                    <AppHeading style={styles.title}>{title}</AppHeading>
                    <AppHeading style={styles.subTitle}>{subTitle}</AppHeading>
                </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding: 10
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title:{
        fontWeight: '500'
    },
    subTitle:{
        color: colors.medium
    }
})
