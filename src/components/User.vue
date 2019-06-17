<template>
    <div class="User">
        <NavBar></NavBar>
        <UserContainer></UserContainer>
    </div>
</template>

<script>
import NavBar from './GlobalNavBar';
import UserContainer from './UserContainer'
export default {
    name:'User',
    data(){
        return{

        }
    },
    components:{
        NavBar,
        UserContainer
    }
}
</script>

<style scoped>

</style>