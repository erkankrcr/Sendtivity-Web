<template>
<div id="Container">
<div class="container is-fullhd">
  <div class="notification">
      <div class="column is-three-fifths is-offset-one-fifth">
      <ul>
        <li v-for="card in TimeLine.Result" :key="card">
          <TimeLineCard :item="card"></TimeLineCard>
        </li>
      </ul>
  </div>
</div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
//import firebase from 'firebase'
import TimeLineCard from './TimeLineCard'
  export default {
      name:'Container',
     data() {
    return {
      Auth:null,
      TimeLine:null
    };
  },
  components:{
    TimeLineCard
  },
  methods:{

  },
  created(){
      var self = this;
      this.Auth = JSON.parse(localStorage.getItem('UserInfo'));
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
  
     
  }
</script>

<style scoped>
</style>
