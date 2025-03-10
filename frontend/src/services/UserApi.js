import { AuthService } from "./AuthService"

export const UserApi = {
    login:async(data)=>{
        return await AuthService.post('/login',data)
    },
    logout:async()=>{
        return await AuthService.post('/logout')
    },
    getUser:async()=>{
        return await AuthService.get('/user')
    },

}
export default UserApi