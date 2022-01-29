import apiClient from './client';

const login = async (email, password) => {
    console.log(`email : ${email} and password : ${password}`);
    // apiClient.post('/auth', {email, password});
    if(email === 'meme@gmail.com' && password === 'passme') 
        return { ok : true, data : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' };

    return { ok : false, data : {error : 'Invalid username and/or password'}};

    
}

export default {
    login,
}