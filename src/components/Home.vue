
<template>
  <div>
    <Navbar></Navbar>
    <Container></Container>
  </div>
</template>




<script>
import firebase from "firebase";
import Navbar from './GlobalNavBar'
import Container from './HomeContainer'
  export default {
      name:'Home',
     data() {
    return {
      Auth:null
    };
  },
  methods:{

  },
  components:{
      Navbar,
      Container
  },
  created(){
    this.Auth = firebase.auth().currentUser;
    if(this.Auth == null){
      this.$router.push('/Login');
    }
  }
     
  }
</script>

<style>

</style>
