<template>

<div id="NotLoginNavbar">
      <nav class="navbar" id="navbar-style" role="navigation" aria-label="main navigation">
  <!--Home Button-->
  <div class="navbar-brand">
    <router-link to="/Home">
    <a class="navbar-item">
      <img src="@/assets/baseline_call_merge_black_48.png">
      <h1 class="navbartextItem">Sendtivity</h1>
    </a></router-link>
  </div>
  <!--Settings Button-->
  <div class="navbar-end">
     <router-link to="/Settings">
    <a class="navbar-item">
      <img src="@/assets/baseline_settings_black_48.png">
    </a>
    </router-link>
     <router-link to="/Settings">
    <a class="navbar-item">
      <img src="@/assets/baseline_settings_black_48.png">
    </a>
    </router-link>
     <router-link to="/Settings">
    <a class="navbar-item">
      <img src="@/assets/baseline_settings_black_48.png">
    </a>
    </router-link>
     <router-link to="/Settings">
    <a class="navbar-item">
      <img src="@/assets/baseline_message_black_48.png">
    </a>
    </router-link>
    <router-link to="/Settings">
    <a class="navbar-item">
    <img :src="UserProfileImage">
    </a>
    </router-link>
    <router-link to="/Settings">
    <a class="navbar-item">
      <img src="@/assets/baseline_settings_black_48.png">
    </a>
    </router-link>
  </div>
  <!--User Image-->
</nav>
  </div>

</template>

<script>
import firebase from 'firebase'
  export default {
      name:'NavBar',
     data() {
    return {
      Auth:null,
      UserProfileImage:''
    };
  },
  methods:{

  },
  created(){
      this.Auth = firebase.auth().currentUser;
      var database = firebase.database();
      database.ref('User').child(this.Auth.uid).on('value', querry => {
        var User = querry.val();
        this.UserProfileImage = User.profilePhoto.ImageUrl;
      })
      
  },
  mounted(){
    
  }
     
  }
</script>

<style>
.navbar {
  background-color: blueviolet;

}
.UserProfileImage {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
