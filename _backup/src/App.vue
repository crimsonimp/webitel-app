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

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #DADADA;
    background-image: url('https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg');
    background-repeat: no-repeat;
    background-position: left center;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
