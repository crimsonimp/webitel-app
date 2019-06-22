<template>
  <section class="login-form">
    <transition name="fade">
      <Loader v-if="isLoading" />
    </transition>
    <form v-on:submit.prevent="submit" class="pure-form">
      <legend>Auth form</legend>

      <fieldset class="icon icon--email">
        <input v-model="username" v-on:focus="handleFocus" :class="{error : validationEmail}" type="email" name="username" placeholder="Email">
        <transition name="fade">
          <small v-if="validationEmail" class="error">{{validationEmail}}</small>
        </transition>
      </fieldset>

      <fieldset class="icon icon--pass">
        <input v-model="password" v-on:focus="handleFocus" :class="{error : validationPassword}" type="password" name="password" placeholder="Password">
          <small v-if="validationPassword" class="error">{{validationPassword}}</small>
      </fieldset>

      <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    </form>
  </section>
</template>

<script>
  import Loader from './Loader.vue';

  export default {
    components: {
      Loader
    },
    data: function(){
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      isLoading: function(){
        return this.$store.getters.authStatus == 'loading';
      },
      errors: function(){
        return this.$store.getters.errors;
      },
      validationMessage: function(){
        return this.errors && (this.errors.info || this.errors.message)
             ? (this.errors.info || this.errors.message) : null;
      },
      validationEmail: function(){
        return this.validationMessage && this.validationMessage.indexOf('secret') == -1 ? this.validationMessage : null;
      },
      validationPassword: function(){
        return this.validationMessage && this.validationMessage.indexOf('secret') != -1 ? this.validationMessage : null;
      },
      submitData: function(){
        return {
          'username': this.username,
          'password': this.password
        }
      }
    },
    methods: {
      handleFocus: function(){
        this.clearErrors();
      },
      clearErrors: function(error){
        this.$store.dispatch('clearErrors', error || '');
      },
      submit:  function(){
        this.$store.dispatch('login', this.submitData);
      }
    },
    mounted: function(){
      this.clearErrors()
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
    transform: translateY(-2em);
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
  .error {
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
