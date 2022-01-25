import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();    //despite denying... gallery can be accessed //see other than alert if not granted
    }, []);
    const handlePress = () => {
        if(!imageUri) selectImage();
        else{
            Alert.alert("Delete","Are you sure want to delete?", [
                {text : 'Yes', onPress : () => onChangeImage(null)},
                {text : 'No'},
            ]);
        }
    };

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert("You need to enable permission to access library");    
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                quality : 0.5 //0 lowest... 1 highest  
            });
            if(!result.cancelled) onChangeImage(result.uri);
            
        } catch (error) {
            console.log('Error selecting image', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons color={colors.medium} name='camera' size={40} />)}
                {imageUri && <Image source={{ uri : imageUri}} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : colors.light,
        borderRadius : 15,
        justifyContent : 'center',
        height : 100,
        overflow : 'hidden',
        width : 100,
    },
    image : {
        height : '100%',
        width : '100%',
    }
})

export default ImageInput;