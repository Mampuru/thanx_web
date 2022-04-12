import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
	state() {
		return {
			userData: {},
			profile: {},
			isAuthenticated: false,
			country: {},
			followers: [],
			following: [],
			showLoading: false,
		};
	},
	getters: {
		//Getters
		getUser(state) {
			return state.userData;
		},
		getIsAuthenticated(state) {
			return state.isAuthenticated;
		},
		getCountry(state) {
			return state.country;
		},
		getProfile(state) {
			return state.profile;
		},
		getFollowers(state) {
			return state.followers;
		},
		getFollowing(state) {
			return state.following;
		},
	},
	mutations: {
		//Setters
		setUserData(state, val) {
			state.userData = val;
		},
		setIsAuthenticated(state, val) {
			state.isAuthenticated = val;
		},
		setCountry(state, val) {
			state.country = val;
		},
		setShowLoader(state, val) {
			state.country = val;
		},
		setProfile(state, val) {
			state.profile = val;
		},
		setFollowing(state, val) {
			state.following = val;
		},
		setFollowers(state, val) {
			state.followers = val;
		},
	},
	actions: {
		//methods
		async login({ commit }, payload) {
			const payload2 = JSON.stringify({
				username: payload.username,
				password: payload.password,
			});

			let url = "https://api.mythanx.xyz/auth/login";
			axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
			await axios
				.post(url, payload2, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(function (response) {
					const { user, token } = response.data.data;

					let userData = {
						token: token,
						name: user.name,
						username: user.username,
						email: user.email,
						phone: user.phone,
						country: user.country,
						metadata: user.metadata,
					};

					//Saving the userData from to state
					commit("setIsAuthenticated", true);
					commit("setUserData", userData);
					localStorage.setItem("userData", JSON.stringify(userData));
					localStorage.setItem("IsAuthenticated", true);
				})
				.catch(function (error) {
					console.log(error);
					throw "No user found to match your credentials.";
				});
		},

		async register({ commit }, payload) {
			let url = "https://api.mythanx.xyz/auth/signup";
			const payload2 = JSON.stringify({
				username: payload.username,
				password: payload.password,
				name: payload.name,
				country: payload.country,
				phone: payload.phone,
				email: payload.email,
			});
			axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
			await axios
				.post(url, payload2, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(function (response) {
					let userData = {
						token: response.data.data.token,
						name: response.data.data.user.name,
						username: response.data.data.user.username,
						email: response.data.data.user.email,
						phone: response.data.data.user.phone,
						country: response.data.data.user.country,
					};
					//Saving response to state
					commit("setIsAuthenticated", true);
					commit("setUserData", userData);
					localStorage.setItem("userData", JSON.stringify(userData));
					localStorage.setItem("IsAuthenticated", true);
				})
				.catch(function (error) {
					throw error.response.data.error;
				});
		},

		async fetchCountry({ commit }) {
			let url = "https://api.mythanx.xyz/data/countries";
			axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
			await axios
				.get(url, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(function (response) {
					//Saving response to state
					commit("setCountry", response.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		},

		async fetchUser(_, username) {
			return fetch(`https://api.mythanx.xyz/users/${username}`);
		},

		async fetchFollowers(_, data) {
			if (data.authenticated) {
				const headers = { Authorization: `Bearer ${data.token}` };
				return fetch(`https://api.mythanx.xyz/users/me/followers`, {
					headers,
				});
			}

			return fetch(
				`https://api.mythanx.xyz/users/${data.username}/followers`
			);
		},

		async fetchFollowing(_, data) {
			if (data.authenticated) {
				const headers = { Authorization: `Bearer ${data.token}` };
				return fetch(`https://api.mythanx.xyz/users/me/following`, {
					headers,
				});
			}

			return fetch(
				`https://api.mythanx.xyz/users/${data.username}/following`
			);
		},

		logout({ commit }) {
			commit("setUserData", null);
			commit("setIsAuthenticated", false);
			localStorage.removeItem("userData");
			localStorage.removeItem("IsAuthenticated");
		},

		autoLogin({ commit }) {
			let userDataString = localStorage.getItem("userData");
			let isAuthenticated = localStorage.getItem("IsAuthenticated");

			if (userDataString) {
				let userData = JSON.parse(userDataString);
				commit("setIsAuthenticated", JSON.parse(isAuthenticated));
				commit("setUserData", userData);
			}
		},
	},
});

export default store;
