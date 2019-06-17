<template>
    <div class="MessageItem">
        <div class="MessageBox">
            <p>{{item}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        item:{type:String,required:null}
    }
}
</script>

<style scoped>
.MessageBox{
    width: 200px;
    background-color: #9d9ea0;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

