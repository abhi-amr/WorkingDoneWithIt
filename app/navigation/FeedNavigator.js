import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        animation : 'slide_from_bottom',
        presentation : 'modal', //check with phone... is it sliding down
        headerShown : false
    }}>
        <Stack.Screen name="Listings" component={ListingsScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;