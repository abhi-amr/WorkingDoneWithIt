import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listing';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title : Yup.string().required().min(1).label('Title'),
    price : Yup.number().required().min(1).max(1000).label('Price'),
    description : Yup.string().label('Description'),
    category : Yup.object().required().nullable().label('Category'),
    images : Yup.array().min(1, "Please select at least one image"),
});

const categories = [
    {label : 'Furniture', value : 1, backgroundColor:'red', icon:'email'},
    {label : 'Cars', value : 2, backgroundColor:'green', icon:'car'},
    {label : 'Drinks', value : 3, backgroundColor:'blue', icon:'lock'},
    {label : 'Tools', value : 4, backgroundColor:'orange', icon:'apps'},
]

function ListingEditScreen(props) {
    const [uploadScreenVisible, setUploadScreenVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const location = useLocation();
    const handleSubmit = async (photoNData, { resetForm }) => {    //formikbag
        setProgress(0);
        setUploadScreenVisible(true);
        // await listingsApi.addPhotos({...photoNData, location});
        const result = await listingsApi.addDummy({...photoNData, location}, 
            (progress) => setProgress(progress));

        if(!result.ok){
            setUploadScreenVisible(false);
            return alert('Couldnt save the details');
        }    

        //everything goes well then reset
        resetForm();
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen 
                onDone={() => setUploadScreenVisible(false)}
                progress={progress} 
                visible={uploadScreenVisible} />
            <AppForm
                initialValues={{
                    title : '',
                    price : '',
                    description : '',
                    category : null,
                    images : [],
                }}
                onSubmit={ handleSubmit }
                validationSchema={validationSchema}
            >
                <FormImagePicker 
                    name='images' 
                />

                <AppFormField
                    maxLength={255} 
                    name='title'
                    placeholder='Title'

                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8} 
                    name='price'
                    placeholder='Price'
                    width={125}

                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder='Category'
                    width='50%'
                />
                <AppFormField
                    maxLength={255} 
                    multiline={true}
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'

                />
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
    }
})

export default ListingEditScreen;