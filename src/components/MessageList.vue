<template>
    <div class="MessageList">
        <Navbar></Navbar>
        <Container></Container>
    </div>
</template>

<script>
import Navbar from './GlobalNavBar';
import MessageListContainer from './MessageListContainer';
export default {
    name:'MessageList',
    data(){
        return{
            
        }
    },
    components:{
        Navbar,
        'Container':MessageListContainer
    },
    created(){
        
    }
    
}
</script>

<style scoped>

</style>



