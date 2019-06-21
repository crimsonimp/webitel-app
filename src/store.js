import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiUrl = 'https://cloud-ua1.webitel.com/engine/login';

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    status: '',
    users: null,
    user: null,
    errors: null,
  },
  mutations: {
    authRequest: function(state) {
      state.status = 'loading';
    },
    authSuccess: function(state, token, user) {
      state.status = 'success';
      state.token  = token;
      state.user   = user;
    },
    authError: function(state, errors) {
      state.status = 'error';
      state.errors = errors
    },
    clearError: function(state, error) {
      if(error) delete state.errors[error];
      else state.errors = null;
    },
    logout: function(state) {
      state.status = '';
      state.token  = '';
    }
  },
  actions: {
    getUsers: function({commit}, data) {},
    login: function({commit}, data) {
      commit('authRequest');
      axios({
        url: apiUrl,
        method: 'POST',
        data: data
      }).then(function(resp) {
        const { token, role, roleName, username } = resp.data;
        const user = {role: resp.data.role, name: resp.data.roleName, email: resp.data.username};
        localStorage.setItem('token', token);
        commit('authSuccess', token, user);
      }).catch(function(err) {
        localStorage.removeItem('token');
        commit('authError', err.response.data);
      })
    },
    logout: function({commit}) {
      localStorage.removeItem('token');
      commit('logout');
    },
    clearErrors: function({commit}, data) {
      commit('clearError')
    }
  },
  getters: {
    isLogged: function(state) {
      return state.token;
    },
    isLoading: function(state) {
      return state.status == 'loading'
    },
    authStatus: function(state) {
      return state.status;
    },
    user: function(state) {
      return state.user;
    },
    getErrors: function(state) {
      return state.errors;
    }
  }
})