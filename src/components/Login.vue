<template>
  <div class="login-form">
    <transition name="fade">
      <Loader v-if="isLoading" />
    </transition>
    <form v-on:submit.prevent="submit" class="pure-form">
      <legend :class="{'error-message': errorMessage}">Auth form{{errorMessage}}</legend>
      
      <fieldset class="icon icon--email">
        <input v-model="username" v-on:focus="handleFocus" type="email" placeholder="Email">
      </fieldset>

      <fieldset class="icon icon--pass">
        <input v-model="password" v-on:focus="handleFocus" type="password" name="pass" placeholder="Password">
      </fieldset>

      <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import Loader from './Loader.vue';

  export default {
    components: {
      Loader
    },
    data: function() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      isLoading: function() {
        return this.$store.getters.isLoading;
      },
      errors: function() {
        return this.$store.getters.getErrors;
      },
      errorMessage: function() {
        return this.errors && (this.errors.message || this.errors.info)
            ? ' - ' + (this.errors.message || this.errors.info)
            : null;
      },
      submitData: function() {
        return {
          'username': this.username,
          'password': this.password
        }
      }
    },
    methods: {
      handleFocus: function() {
        this.$store.dispatch('clearErrors')
      },
      handleErrors: function() {
      },
      submit: function() {
        this.handleErrors();
        this.$store.dispatch('login', this.submitData);
      }
    }
  }
</script>

<style>
  .login-form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 480px;
    width: calc(100% - 20px);
    margin: auto;
    padding: 15px;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    transform: translateY(-3em);
    box-sizing: border-box;
  }
  .icon {
    position: relative;
  }
  .icon:before {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #DADADA;
    pointer-events: none;
    z-index: 5;
  }
  .icon--email:before {content: '✉'}
  .icon--pass:before  {content: '✎'}
  .login-form .icon input {
    padding-left: 35px;
  }
  samp.error {
    color: #b94a48;
  }
  .login-form legend {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
    padding-bottom: 0.85em;
  }
  .login-form input.error {
    color: #b94a48;
    border-color: #b94a48;
  }
  .login-form input,
  .login-form button {
    width: 100%;
  }
  .login-form .error-message {
    color: #b94a48;
  }
</style>
