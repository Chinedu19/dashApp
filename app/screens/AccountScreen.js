import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icon from '../components/Icon'

import ListItem from '../components/Lists/ListItem'
import ListItemSeparator from '../components/Lists/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'




const menuItems = [
    {
        title : "A message",
        icon : {
            name : "format-list-bulleted",
            backgroundColor : colors.primary
        }
    },
    {
        title : "My message",
        icon : {
            name : "email",
            backgroundColor : colors.secondary
        }
    }
]

const AccountScreen = () => {
    return (
        <Screen>
            <View style={styles.container}>
            <ListItem
            title='Austine Ezeh'
            subTitle='Programming geek'
            image={require("../assets/fineboy.jpg")}
            />
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={(menuItem) => menuItem.title}
                
                renderItem = {({item }) => (
                    <ListItem
                        title = {item.title}
                        IconComponent = {
                            <Icon
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                            />
                        }
                            />
                )
                }
                ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <ListItem 
            title="Log Out"
            IconComponent={<Icon name='logout' backgroundColor='#ffe66d'/>}
            />
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen :{
        backgroundColor : colors.light
    },
    container : {
        marginVertical : 20
    }
})
