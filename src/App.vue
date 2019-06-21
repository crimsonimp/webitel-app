<template>
  <div class="page">
    <AppHeader :is-logged="isLogged" />
    <transition name="fade">
      <Loader v-if="isLoading" />
      <LoginForm v-if="!isLogged && !isLoading" />
    </transition>
  </div>
</template>

<script>
  import Loader from './components/Loader.vue';
  import AppHeader from './components/Header.vue';
  import LoginForm from './components/Login.vue';

  export default {
    components: {
      AppHeader,
      LoginForm,
      Loader
    },
    data: function(){
      return {
        isLoading: true
      }
    },
    computed: {
      isLogged: function(){
        return this.$store.getters.isLogged;
      },
    },
    methods: {},
    mounted: function(){
      this.isLoading = false;
      this.$store.dispatch('clearErrors')
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
