<template>
  <div class="page">
    <AppHeader />
    <LoginForm />
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import LoginForm from './components/Login.vue';
  export default {
    components: {
      AppHeader,
      LoginForm
    },
    data: function(){
      return {}
    }
  }
</script>
