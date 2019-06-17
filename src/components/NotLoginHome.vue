<template>
<div>
    <NotLoginNavbar></NotLoginNavbar>
    <NotLoginContainer></NotLoginContainer>
</div>
</template>

<script>
import NotLoginContainer from './NotLoginContainer'
import NotLoginNavbar from './NotLoginNavbar'

export default {
  name: 'NotLoginHome',
  data(){
    return{
      Auth:null
    }
  },
  components:{
      NotLoginContainer,
      NotLoginNavbar
  },
  
}
</script>

<style>
</style>

