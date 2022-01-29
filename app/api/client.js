import { create } from 'apisauce';

import authStorage from '../auth/storage';
import cache from '../utility/cache';

const apiClient = create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
});

//sending token with every request---
apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if(!authToken) return;

    request.headers['x-auth-token'] = authToken;    //the key server expecting
});

//---

//for caching ----images not cached... fast-images is now in expo-sdk
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {

    const response = await get(url, params, axiosConfig);

    if(response.ok){
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? {ok : true, data} : response;
}
//------

export default apiClient;