import React, {useState} from 'react'
import { Image, StyleSheet} from 'react-native'

import { Formik } from 'formik'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            
            <Formik initialValues={{email: "", password: ""}}
                onSubmit={(vlaues) => console.log(values)}>
                {({handleChange, handleSubmit}) => (
                    <>
                     <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        onChangeText={handleChange("email")}
                        textContentType="emailAddress"
                        />
                        
                        <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        onChangeText={handleChange("password")}
                        secureTextEntry
                        textContentType="password"
                        />
                    <AppButton title='Login' onPress={handleSubmit} />
                    </>
                )} 
            </Formik>
            
           
        </Screen>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    }
})
