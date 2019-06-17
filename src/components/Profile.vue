<template>
    <div class="Profile">
        <NavBar></NavBar>
        <ProfileContainer></ProfileContainer>
    </div>
</template>

<script>
import NavBar from './GlobalNavBar';
import ProfileContainer from './ProfileContainer'
export default {
    name:'Profile',
    data(){
        return{

        }
    },
    components:{
        NavBar,
        ProfileContainer
    }
}
</script>

<style scoped>

</style>