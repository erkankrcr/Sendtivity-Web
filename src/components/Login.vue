<template>
<div>
    <NotLoginNavbar></NotLoginNavbar>
    <LoginContainer></LoginContainer>
</div>
</template>

<script>
import LoginContainer from './LoginContainer'
import NotLoginNavbar from './NotLoginNavbar'

export default {
  name: 'NotLoginHome',
  components:{
      LoginContainer,
      NotLoginNavbar
  }
}
</script>

<style>
</style>

