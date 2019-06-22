<template>
  <section class="users">
    <h2>Accounts</h2>
    <table class="pure-table users-list">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
          <th>Domain</th>
          <th>Online</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" v-bind:key="i">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.role}}</td>
          <td>{{user.status}}</td>
          <td>{{user.domain}}</td>
          <td><span class="status" :class="user.online ? 'status-online' : 'status-offline'"></span></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    data: function(){ return {} },
    computed: {
      users: function(){
        return this.$store.getters.users;
      }
    },
    mounted: function(){
      this.$store.dispatch('getUsers');
    }
  }
</script>

<style>
  .users {
    color: #2a2a2a;
  }
  .users-list {
    width: 100%;
    max-height: 100vh;
    margin-bottom: 1em;
    color: #333;
    background-color: #fff;
    overflow: auto;
  }
  .users-list thead {
    color: #2a2a2a
  }
  .status {
    display: block;
    width: 10px;
    height: 10px;
    margin: auto;
    border-radius: 50%;
    background-color: #ececec;
  }
  .status-online {background-color: green;}
  .status-offline {background-color: red;}
</style>
