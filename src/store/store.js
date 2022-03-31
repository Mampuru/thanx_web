import {createStore} from 'vuex';
import  axios  from "axios";

const store =  createStore({
  state: {
    userData: {},
    isAuthenticated: false 
  },
  getters: {
    //Getters
    getUser(state) {
        return state.userData
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated
  }

 },
    mutations: {
      //Setters
        setUserData(state, val){
            state.userData = val
        },
        setIsAuthenticated(state, val){
          state.isAuthenticated = val
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
                   commit("setIsAuthenticated",true)
                   commit("setUserData",userData)

                }).catch(function (error){
                    console.log(error)
                   return 403
                })
        },

        register({commit},payload){
          let url = 'http://api.mythanx.xyz/auth/signup';
          const payload2 = JSON.stringify({
            username: payload.username,
            password: payload.password,
            name: payload.name,
            country: payload.country,
            phone: payload.phone,
            email: payload.email
          });

              axios.post(url,payload2,{
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
                 console.log(userData)
                 //Saving the userData from to state
                 commit("setIsAuthenticated",true)
                 commit("setUserData",userData)
              }).catch(function (error){
                  console.log(error)
              })
      }
        
    },
});

export default store;