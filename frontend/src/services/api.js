import customApi from "./axios"

export const Api = {
    login:async(data)=>{
        return await customApi.post('/login',data) 
    },
    getUser:async()=>{
        return await customApi.get('/user')
    },
    logout:()=>{
        return customApi.post('/logout')
    }
}