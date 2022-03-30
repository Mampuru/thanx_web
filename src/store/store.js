import {createStore} from 'vuex';
import  axios  from "axios";

const store =  createStore({
  state: {
    userData: {}
  },
  getters: {
    //Getters
    user(state) {
        return state.userData
    }
 },
    mutations: {
      //Setters
        setUserData(state, val){
            state.userData = val
        }
    },
    actions: {
        //methods
          login({commit},payload){
            const payload2 = JSON.stringify({
                     username: payload.username,
                     password: payload.password,});
        
            let url = 'http://api.mythanx.xyz/auth/login';
                axios.post(url,payload2,{
                    headers: {
                      'Content-Type': 'application/json'
                    }
                }).then(function (response){
                    let userData = {
                        token: response.data.data.token,
                        name: response.data.data.user.name,
                        username: response.data.data.user.username,
                        email: response.data.data.user.email,
                        phone: response.data.data.user.phone,
                        country: response.data.data.user.country,
                    }
                   //Saving the userData from to state
                   commit("setUserData",userData)
                   return 200
                }).catch(function (error){
                    console.log(error)
                   return 403
                })
        }
        
    },
});

export default store;