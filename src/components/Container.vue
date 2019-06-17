<template>
<div id="Container">
<div class="container is-fullhd">
  <div class="notification">
      {{TimeLine}}
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
  export default {
      name:'Container',
     data() {
    return {
      Auth:null,
      TimeLine:null
    };
  },
  methods:{

  },
  created(){
      var self = this;
      this.Auth = firebase.auth().currentUser;
      axios
      .get('https://us-central1-sendtivity.cloudfunctions.net/GetTimeLineWeb?mAuthID='+this.Auth.uid)
      .then(function (response) {
          console.log(response);
          self.TimeLine = response.data;
          debugger;
      })
      .catch(function (error) {
          console.log(error);
      })
      
  },
  mounted(){
    
  }
     
  }
</script>

<style>
</style>
