import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={20}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logoV3.png")}/>
                <Text style={styles.tagline}>Your One Stop Solution</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='login' />
                <AppButton title='register' color='secondary' />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
    },
    buttonsContainer : {
        width : '100%',
        padding : 20,
    },
    logo : {
        height : 100,
        width : 100,
    },
    logoContainer : {
        position : "absolute",
        top : 90,
        alignItems : 'center'
    },
    tagline : {
        fontSize : 20,
        fontWeight : 'bold',
        padding : 20
    },
})


export default WelcomeScreen;

