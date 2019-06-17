<template>
<div id="MessageListContainer" class="columns">
    <div class="column">
    <nav class="panel">
  <p class="panel-heading">
    Kullanıcılar
  </p>
  <div id="nav-item" v-for="user in UserList.Result" :key="user">
      <a class="panel-block is-active" @click="UserClick(user)" >
              <span class="panel-icon">
                  <figure class="image">
                    <img class="is-rounded" :src="user.profilePhoto.ImageUrl"  alt="Profile Image">
                    </figure>
            </span>
        {{user.Name + " " + user.LastName}}
        </a>
  </div>
</nav>
</div>
<div class="column is-four-fifths">
    <div class="MessagePage">
        <Message :MessageArray="MessageList" :UserId="currentuserID" :FriendUser="FriendUser" > </Message>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Message from './Message.vue'
import firebase from 'firebase';
export default {
    name:'MessageListContainer',
    data(){
        return{
            UserList:null
        }
    },
    props:{
        FriendUser:{type:Object,required:null},
        MessageList:{type:Object,required:null},
        currentuserID:{type:String,required:null},
    },
    components:{
        Message
  },
  methods:{
      UserClick: function (ListOnClickUser){
          var self = this;
          self.currentuserID = firebase.auth().currentUser.uid;
          var db = firebase.database();
          self.FriendUser = ListOnClickUser;
          db.ref("Messages").child(self.currentuserID).child(ListOnClickUser.mAuthID).on('value',(MessageList) => {
             self.MessageList = MessageList.val();
              
          })
      }
  },
   created(){
      var self = this;
      this.Auth = JSON.parse(localStorage.getItem('UserInfo'));
      debugger;
      axios
      .get('http://us-central1-sendtivity.cloudfunctions.net/GetMessageLineWeb?mAuthID='+this.Auth.uid)
      .then(function (response) {
          console.log(response);
          self.UserList = response.data;
          debugger;
      })
      .catch(function (error) {
          console.log(error);
          debugger;
      })
  }
}
</script>

<style scoped>
nav {
    width: 300px;
    
    

}

</style>
