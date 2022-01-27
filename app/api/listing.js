import client from './client';

const photosEndpoint = '/photos'

const getPhotos = () => client.get(photosEndpoint);


const addPhotos = (photos, onUploadProgress) => {
    const data = new FormData();
    data.append('title', photos.title);
    data.append('price', photos.price);
    data.append('categoryId', photos.category.value);
    data.append('description', photos.description);

    photos.images.forEach((image, index) => data.append('images', {
        name : 'image' + index,
        type : 'image/jpeg',
        uri : image
    }));

    if(photos.location) 
        data.append('location', JSON.stringify(photos.location));
    
    console.log('Request sent : \n', data);     
    return client.post(photosEndpoint, data, {
        onUploadProgress : (progress) => 
            onUploadProgress(progress.loaded/ progress.total)
    });    //uncomment when have real apis
}

const addDummy = (listing, onUploadProgress) => {
    const data = {
        id: 101,
        title: 'foo',
        body: 'bar',
        userId: 1
      };
      
    console.log('Request sent : \n', data);     
    return client.post(photosEndpoint, data, {
        onUploadProgress : (progress) => 
            onUploadProgress(progress.loaded/ progress.total)
    });
}

export default {
    addDummy,
    addPhotos,
    getPhotos,
};