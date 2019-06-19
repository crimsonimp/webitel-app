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

