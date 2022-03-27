import { axios } from "axios";


export function login({commit},payload){
    let url = 'http://api.mythanx.xyz/auth/login';
    
    // const payload = JSON.stringify({
    //     username: this.username,
    //     password: this.password,});
        axios.post(url,payload,{
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(function (response){
           let userData = {
               token: response.data.token,
               name: response.data.user.name,
               username: response.data.user.username,
               email: response.data.user.email,
               phone: response.data.user.phone,
               country: response.data.user.country,
           }
        
           //Saving the userData from to state
           commit("setUserData",userData)
        //    router.push('/')
        }).catch(function (error){
            console.log(error)
        })
}

export function register({commit},payload){
    let url = 'http://api.mythanx.xyz/auth/signup';

    // const payload = JSON.stringify({
    //     name: this.name,
    //     username: this.username,
    //     email: this.email,
    //     phone: this.phone,
    //     country: this.country,
    //     password: this.password,});
        axios.post(url,payload,{
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(function (response){
           let userData = {
               token: response.data.token,
               name: response.data.user.name,
               username: response.data.user.username,
               email: response.data.user.email,
               phone: response.data.user.phone,
               country: response.data.user.country,
           }
        
           //Saving the userData from to state
           commit("setUserData",userData)
        //    router.push('/')
        }).catch(function (error){
            console.log(error)
        })
}