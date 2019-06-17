<template>
<div class="UserListItem" >
  <router-link :to="UserUrl">
<div class="card">
  <div class="card-image">
    
    <figure class="image is-4by3">
      <img class="is-rounded" :src="item.profilePhoto.ImageUrl" alt="Post image">
    </figure>
    
  </div>
  <div class="card-content">
    <div class="media">
      </div>
      <div class="media-content">
        <p class="title is-4">{{item.Name+' '+item.LastName}}</p>
        <p class="subtitle is-6">{{item.PhoneNumber}}</p>
      </div>
    </div>
  </div>
  </router-link>
</div>

</template>

<script>
//import firebase from "firebase";
  export default {
      name:'UserListItem',
     data() {
    return {
      UserUrl:''
    };
  },
  props:{
      item:{type:Object,required:null}
  },
  methods:{

  },
  created(){
    this.UserUrl = '/User/'+this.item.mAuthID;

  }
     
  }
</script>

<style scoped>

</style>
