<template>
  <div class="login-form">
    <form v-on:submit.prevent="submitForm" class="pure-form">
      <legend>Auth form</legend>
      
      <fieldset class="pure-group">
        <span class="icon">✉</span>
        <input type="email" placeholder="Email">
      </fieldset>

      <fieldset class="pure-group">
        <input type="text" placeholder="Password">
      </fieldset>

      <button type="submit" class="pure-button pure-button-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {}
    },
    methods: {
      submitForm: function(){
        alert('submit form')
      }
    }
  }
</script>
