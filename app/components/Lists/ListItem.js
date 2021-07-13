import React from 'react'
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native'
import colors from '../../config/colors'
import AppHeading from '../AppHeading'

import { Swipeable } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ListItem = ({title, subTitle, image, onPress, IconComponent, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image}/>}
                <View style={styles.detailsContainer}>
                    <AppHeading style={styles.title} numberOfLine={1}>{title}</AppHeading>
                    {subTitle && <AppHeading style={styles.subTitle} numberOfLine={2}>{subTitle}</AppHeading>}
                </View>
                <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection:'row',
        padding: 10,
        backgroundColor : colors.light
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title:{
        fontWeight: '500'
    },
    subTitle:{
        color: colors.medium
    },
    detailsContainer:{
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    }
})
