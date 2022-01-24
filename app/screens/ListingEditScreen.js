import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    title : Yup.string().required().min(1).label('Title'),
    price : Yup.number().required().min(1).max(1000).label('Price'),
    description : Yup.string().label('Description'),
    category : Yup.object().required().nullable().label('Category'),
});

const categories = [
    {label : 'Furniture', value : 1, backgroundColor:'red', icon:'email'},
    {label : 'Cars', value : 2, backgroundColor:'green', icon:'car'},
    {label : 'Drinks', value : 3, backgroundColor:'blue', icon:'lock'},
    {label : 'Tools', value : 4, backgroundColor:'orange', icon:'apps'},
]

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title : '',
                    price : '',
                    description : '',
                    category : null,
                }}
                onSubmit={ (values) => console.log(values)}
                validationSchema={validationSchema}
            >
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