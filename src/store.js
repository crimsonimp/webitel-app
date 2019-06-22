import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiUrl = 'https://cloud-ua1.webitel.com/engine/';

export default new Vuex.Store({
  state: {
    auth_token: localStorage.getItem('token') || '',
    auth_status: null,
    errors: null,
    users: null,
    user: localStorage.getItem('user') || '',
  },
  mutations: {
    authRequest: function(state){
      state.auth_status = 'loading';
    },
    authSuccess: function(state, token, user){
      state.auth_status = 'success';
      state.auth_token  = token;
      state.user        = user;
    },
    authErrors: function(state, errors){
      state.auth_status = 'error';
      state.errors      = errors;
    },
    logout: function(state){
      state.auth_status = '';
      state.auth_token  = '';
    },
    setUsers: function(state, data){
      state.users = data;
    },
    clearError: function(state, error) {
      if(error) delete state.errors[error];
      else state.errors = null;
    },
  },
  actions: {
    login: function({commit}, data){
      commit('authRequest');
      axios({
        url: `${apiUrl}login`,
        method: 'POST',
        data: data
      }).then(function(res){
        let data  = res.data;
        let token = res.data.token;
        let key   = res.data.key;
        let user  = res.data.roleName;
        localStorage.setItem('token', token);
        localStorage.setItem('key', key);
        localStorage.setItem('user', user);
        commit('authSuccess', token, data);
      }).catch(function(err){
        let error = err.response.data;
        localStorage.removeItem('token');
        localStorage.removeItem('key');
        commit('authErrors', error);
      })
    },
    logout: function({commit}){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('key');
      commit('logout');
    },
    getUsers: function({commit}){
      let xToken = localStorage.getItem('token');
      let xKey = localStorage.getItem('key');
      axios({
        url: `${apiUrl}api/v2/accounts`,
        headers: {
          'X-Access-Token': xToken,
          'X-Key': xKey
        }
      }).then(function(res){
        commit('setUsers', res.data.info)
      })
    },
    clearErrors: function({commit}, data) {
      commit('clearError')
    }
  },
  getters: {
    isLogged: function(state){
      return state.auth_token;
    },
    authStatus: function(state){
      return state.auth_status;
    },
    users: function(state){
      return state.users;
    },
    user: function(state){
      return state.user;
    },
    errors: function(state){
      return state.errors;
    }
  }
});