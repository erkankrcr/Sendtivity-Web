<template>
    <div class="ProfileContainer">
        <div class="container">
            <div class="notification">
                <div class="column is-three-fifths is-offset-one-fifth">
                <div class="card UserProfile">
                    <figure class="image ProfileImage">
                        <img class="is-rounded" :src="User.profilePhoto.ImageUrl" alt="Post image">
                    </figure>
                    <p class="UserName">{{User.Name + ' ' + User.LastName}}</p>
                </div>
                <div>
                    <ul v-for="post in PostList.Result" :key="post">
                        <li>
                            <TimeLineCard :item="post"></TimeLineCard>
                            </li>
                            
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import axios from 'axios';
import TimeLineCard from './TimeLineCard';
export default {
    name:'ProfileContainer',
    data(){
        return{

        }
    },
    components:{
        TimeLineCard
    },
    props:{
        User:{type:Object,required:null},
        PostList:{type:Object,required:null}
    },
    created(){
        var self = this;
        var mAuthID = this.$route.params.mAuthID;
        console.log(mAuthID);
        firebase.database().ref('User').child(mAuthID).on('value',(snapshot) =>{
            this.User = snapshot.val();
            debugger;
            console.log(this.User);
        });
        axios
        .get('https://us-central1-sendtivity.cloudfunctions.net/GetProfileLineWeb?mAuthID='+this.User.mAuthID)
        .then(function (response) {
            debugger;
            console.log(response.data);
            self.PostList = response.data;
            
        }).catch(function (error) {
            console.log(error);
            debugger;
        })
    }
}
</script>

<style scoped>
.ProfileImage{
    width: 200px;
    height: 200px;
    max-width: 200px;
    max-height: 200px;
    position: relative;
    left: 40%;
    top: 0px;
    right: 100px;
    bottom: 100px;

}
.UserName{
    text-align: center;
    font-size: 30px;
}
.UserProfile{
    margin-bottom: 20px;
}
</style>

