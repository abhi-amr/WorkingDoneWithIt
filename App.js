import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from './app/config/colors';
import MessageScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ImageInput from './app/components/ImageInput';
import AppButton from './app/components/AppButton';
import ImageInputList from './app/components/ImageInputList';


export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter( imageUri => imageUri!== uri));
  }
  
  return (
    <Screen>
      <ImageInputList 
      imageUris={imageUris} 
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});
