import React from 'react'
import { StyleSheet } from 'react-native'

import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput    
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
             />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
