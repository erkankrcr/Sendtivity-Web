<template>
<div class="UserList">
    <Navbar></Navbar>
    <UserListContainer></UserListContainer>

</div>
</template>

<script>
//import firebase from "firebase";
import Navbar from './GlobalNavBar';
import UserListContainer from './UserListContainer';
export default {
      name:'UserList',
     data() {
    return {

    };
  },
  components:{
      Navbar,
      UserListContainer
  },
  methods:{

  },
  created(){

     
  }
     
  }
</script>

<style>

</style>
