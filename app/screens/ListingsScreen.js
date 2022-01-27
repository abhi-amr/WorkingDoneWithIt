import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listing';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const getListings = useApi(listingsApi.getPhotos);

    useEffect(() => {
        getListings.request();  
    }, []);

    
    return (
        <Screen style={styles.screen}>
            {getListings.error && 
                <>
                    <AppText>Couldnt retrieve listing at this moment</AppText>
                    <AppButton title='Retry' onPress={getListings.request}/>
                </>}
            <ActivityIndicator visible={getListings.loading} />
            <FlatList
                data={getListings.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        subTitle={'$' + item.albumId*100 } //harcoding because the api doesnt have price field
                        imageUrl={item.url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
        backgroundColor : colors.light,
    }
})

export default ListingsScreen;