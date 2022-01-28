import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';

import colors from '../config/colors';
import AppText from './AppText';


function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No internet connection</AppText>
            </View>
        );
    
    return null;
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : colors.primary,
        justifyContent : 'center',
        height : 80,
        // position : 'absolute',   //this is not working for me //weird ui
        top : Constants.statusBarHeight,
        width : '100%',
        zIndex : 1,
    },
    text : {
        color : colors.white,
    }
})

export default OfflineNotice;