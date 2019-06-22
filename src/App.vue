<template>
  <div class="page">
    <Header />
    <main class="main">
      <Loader v-if="isLoading" />

      <transition name="fade">
        <Login v-if="!isLogged" />
      </transition>

      <transition name="fade">
        <Users v-if="isLogged" />
      </transition>
    </main>
  </div>
</template>

<script>
  import Loader from './components/Loader.vue';
  import Header from './components/Header.vue';
  import Login  from './components/Login.vue';
  import Users  from './components/Users.vue';

  export default {
    components: {
      Loader,
      Header,
      Login,
      Users
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
    mounted: function(){
      this.$store.dispatch('clearErrors');
      this.isLoading = false;
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
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding-left: 1em;
    padding-right: 1em;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    overflow: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
