import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ActivityIndicator({visible = false}) {
    if(!visible) return null;

    return (
        <View style={styles.overlay}>
            <AnimatedLottieView 
                autoPlay={true}
                loop={true}
                source={require('../assets/animations/loader.json')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay : {
        backgroundColor : 'white',
        height : '100%',
        opacity : 0.8,
        position : 'absolute',
        width : '100%',
        zIndex : 1
    }
})


export default ActivityIndicator;