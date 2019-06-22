<template>
  <header class="header">
    <div class="pure-menu pure-menu-horizontal">
      <a href="" class="pure-menu-heading">BRAND APP</a>
      <ul v-if="isLogged" class="pure-menu-list">
        <li class="pure-menu-item">
          <small>Welcome, <strong>{{user}}</strong></small>
        </li>
        <li class="pure-menu-item">
          <a href="#" v-on:click.prevent="logout" class="pure-menu-link">Log Out</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    data: function(){
      return {}
    },
    computed: {
      user: function(){
        return this.$store.getters.user;
      },
      isLogged: function(){
        return this.$store.getters.isLogged;
      }
    },
    methods: {
      logout: function(){
        this.$store.dispatch('logout');
      }
    }
  }
</script>

<style>
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.15);
    z-index: 1;
  }
  .header .pure-menu {
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  line-height: 2;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
}
.header .pure-menu-list {
  margin-left: auto;
}
.header .pure-menu-list,
.header .pure-menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header .pure-menu-link {
  font-size: 0.8em;
  line-height: 2.75;
  color: rgb(66, 184, 221);
}
</style>