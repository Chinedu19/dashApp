import React from 'react'
import { Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../components/Forms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            
            <AppForm initialValues={{email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                     <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        name="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                        />

                        <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        name="password"
                        secureTextEntry
                        textContentType="password"
                        />
                    <SubmitButton title="Login"/> 
            </AppForm>
            
           
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
