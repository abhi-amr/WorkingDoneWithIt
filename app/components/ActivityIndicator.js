import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

function ActivityIndicator({visible = false}) {
    if(!visible) return null;

    return (
        <AnimatedLottieView 
            autoPlay={true}
            loop={true}
            source={require('../assets/animations/loader.json')}
        />
    );
}


export default ActivityIndicator;