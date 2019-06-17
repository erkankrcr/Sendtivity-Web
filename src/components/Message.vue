<template>
    <div id="Message" > 
        <div class="container is-fullhd">
            <p class="FriendNameAndSurname">{{FriendUser.Name + " " + FriendUser.LastName}}</p>
      <div class="notification">
          <div class="ScrollingMessage">
              <ul v-for="item in MessageArray" :key="item">
              <template v-if="UserId === item.to">
                  <li>
                         <MessageItem class="Reciever" :item="item.message"></MessageItem>
                  </li>
              </template>
              <template v-else>
                   <li>
                         <MessageItem class="Sender" :item="item.message"></MessageItem>
                  </li>
              </template>
              
          </ul>
          </div>
      </div>
      <div class="columns textgiris">
          <input class="input is-rounded column is-four-fifths" :v-model="inputText" type="text"> <input class="button is-primary is-rounded" type="submit" @click="SendMessage">
      </div>
      </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
//import firebase from 'firebase'
//let db = firebase.database();
export default {
    name:'Message',
    data(){
        return{
            inputText:''
        }
    },
    /*
    methods:{
        SendMessage:function () {
            var Sender = 'Messages/'+this.UserId +'/'+this.FriendUser.mAuthID;
            var Reciever = 'Messages/'+this.FriendUser.mAuthID +'/'+this.UserId;
            var userMessageKey = db.ref("Messages").child(this.UserId).child(this.FriendUser.mAuthID).push().key;

           var MessageTextBody = {
                "message":this.inputText,
                "type":"text",
                "from":this.UserId,
                "to":this.FriendUser.mAuthID,
                "messageID":userMessageKey
            }

            var SenderRef = Sender+'/'+Reciever;   
            var RecieverRef = Reciever+'/'+Sender;

            var MessageBodyDetails = {
                SenderRef:MessageTextBody,
                RecieverRef:MessageTextBody
            }
            
            console.log(MessageBodyDetails);
            console.log(SenderRef);
            console.log(RecieverRef);
        }
    },
    */
    props:{
        FriendUser:{type:Object,required:null},
        MessageArray:{type:Object,required:null},
        UserId:{type:String,required:null}
    },
    components:{
        MessageItem
    }
}
</script>

<style scoped>
.Sender{
    text-align: center;
    position: absolute;
    right: 60px;
    margin-bottom: 30px;
}
.Reciever{
    text-align: center;
    float:inline-end;
}
.ScrollingMessage{

}
li{
    display: inline-block;
}
.FriendNameAndSurname{
    background-color: gray;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
    
}
.textgiris{
    position: relative;
    left: 60px;
}



</style>


