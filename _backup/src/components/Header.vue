<template>
  <header class="header">
    <div class="pure-menu pure-menu-horizontal">
      <a href="" class="pure-menu-heading pure-menu-link">BRAND</a>
      <ul v-if="isLogged" class="pure-menu-list">
        <li class="pure-menu-item">
          <a href="#" v-on:click.prevent="LogOut" class="pure-menu-link">Log Out</a>
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
      isLogged: function(){
        return false
      }
    },
    methods: {
      LoginOut: function(){
        alert('Log out!')
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
</style>
