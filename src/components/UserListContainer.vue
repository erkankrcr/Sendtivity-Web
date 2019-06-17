<template>
<div class="UserListContainer" >
  <div class="container is-fullhd">
  <ul>
        <li v-for="card in UserList.Result" :key="card">
          <UserListItem :item="card"></UserListItem>
        </li>
      </ul>
</div>
  </div>

</template>

<script>
//import firebase from "firebase";
import axios from 'axios'
import UserListItem from './UserListItem'
  export default {
      name:'UserListContainer',
     data() {
    return {
      UserList:null
    };
  },
  components:{
    UserListItem
  },
  methods:{

  },
  created(){
      var self = this;
      this.Auth = JSON.parse(localStorage.getItem('UserInfo'));
      debugger;
      axios
      .get('http://us-central1-sendtivity.cloudfunctions.net/GetMessageLineWeb?mAuthID='+this.Auth.uid)
      .then(function (response) {
          console.log(response);
          self.UserList = response.data;
          debugger;
      })
      .catch(function (error) {
          console.log(error);
          debugger;
      })
  }
     
  }
</script>

<style scoped>
li {
    list-style: none;
    float: left;
    margin: 20px;
  }
</style>

