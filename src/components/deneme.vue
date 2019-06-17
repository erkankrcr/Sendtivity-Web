<template>

<h1>{{value}}</h1>

</template>

<script>
import firebase from "firebase";
  export default {
      name:'deneme',
     data() {
    return {
      value:null
    };
  },
  methods:{

  },
  created(){
     this.value = firebase.auth().currentUser; 
     if(this.value == null){
         this.value = JSON.parse(localStorage.getItem('UserInfo'));
        debugger;
     }else {
        localStorage.setItem('UserInfo',JSON.stringify(this.value));         
        debugger;

     }
  }
     
  }
</script>

<style>

</style>
