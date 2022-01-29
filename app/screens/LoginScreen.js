import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label('Email'), //label is for showing this field name when not valid...read more
    password : Yup.string().required().min(4).label('Password')
});


function LoginScreen(props) {
    const auth = useAuth();
    // const loginApi = useApi();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);

        setLoginFailed(false);

        await auth.login(result.data);
        
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logoV3.png')}/>
            <AppForm
                initialValues={ {email : '', password : ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error='Invalid Username and/or password' visible={loginFailed}/>
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress' //only for iOS
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry={true}
                    textContentType='password' //only for iOS
                />
                <SubmitButton title='Login'/>
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
    },
    logo : {
        width : 100,
        height : 100,
        alignSelf : 'center',
        marginTop : 50,
        marginBottom : 20,
    }
})

export default LoginScreen;