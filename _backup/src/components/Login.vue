<template>
  <div class="login-form">
    <form v-on:submit.prevent="submitForm" class="pure-form">
      <legend>Auth form</legend>
      
      <fieldset class="pure-group icon icon--email">
        <input v-model="usermail" type="email" placeholder="Email">
      </fieldset>

      <fieldset class="pure-group icon icon--pass">
        <input v-model="password" type="text" placeholder="Password">
      </fieldset>

      <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    data: function(){
      return {
        isLogged: false,
        usermail: '',
        password: '',
        errors: null
      }
    },
    computed: {
      submitData: function() {
        return {
          "username": this.usermail,
          "password": this.password
        }
      }
    },
    methods: {
      submitForm: function(){
        alert(this.submitData)
      }
    }
  }
</script>

<style>
  .login-form {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 480px;
    width: calc(100% - 20px);
    margin: auto;
    padding: 15px;
    border-radius: 2px;
    background-color: red;
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
    z-index: 2;
  }
  .icon--email:before {content: '✉'}
  .icon--pass:before  {content: '✎'}
  .login-form .icon input {
    padding-left: 30px;
  }
  .login-form legend {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
    padding-bottom: 0.85em;
  }
  .login-form input,
  .login-form button {
    width: 100%;
  }
</style>