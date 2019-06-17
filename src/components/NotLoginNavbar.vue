<template>
  <div id="NotLoginNavbar">
      <nav class="navbar" id="navbar-style" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/Home">
    <a class="navbar-item">
      <img src="@/assets/baseline_call_merge_black_48.png">
      <h1 class="navbartextItem">Sendtivity</h1>
    </a></router-link>
  </div>

  <div class="navbar-end">
    <router-link to="/Login">
    <a class="navbar-item">
      <img src="@/assets/baseline_home_black_48.png">
    </a>
    </router-link>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBarNotSign',
  data () {
    return {

    }
  }
}
</script>

<style scope>
.navbar {
  background-color: blueviolet;

}

</style>
