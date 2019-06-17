<template>
  <div class="container is-fullhd">
    <div id="recaptcha-container"></div>
    <div class="notification">
      <VuePhoneNumberInput default-country-code="TR" size="lg" v-model="phoneNumber" @update="onUpdate"/>
      <a class="button is-success is-outlined" @click="update">Gönder</a>

      <div v-if="verifyStart">
      <custom-input
        input-height="50px"
        :input-number="6"
        input-style-type="allBorder"
        input-type="number"
        :input-style="inputStyle"
        :input-active-style="inputActiveStyle"
        @custom-input-change="verifyCodeChange"
        @custom-input-complete="verifyCodeComplete">
        </custom-input>
      <a class="button is-success is-outlined" @click="check">Doğrula</a>
      </div>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import firebase from "firebase";
import customInput from 'vue-custom-inputs';

export default {
  name: "LoginContainer",
  components: {
    VuePhoneNumberInput,
    'custom-input':customInput
  },
  data() {
    return {
      phoneNumber: "",
      value: "",
      appVerifier: "test",
      confirmation:'',
      verifycode:'',
      user:null,
      verifyStart:false,
      inputStyle: {'border-color': '#20A0FF'},
      inputActiveStyle: {'outline': '#58B7FF ridge 1px'},
    };
  },
  methods: {
    update: function() {
      this.verifyStart = true;
      firebase
        .auth()
        .signInWithPhoneNumber(this.phoneNumber, this.appVerifier)
        .then(confirmation => {
          console.log(confirmation);
          console.log(this.appVerifier);
                this.confirmation = confirmation;

        });
    },
    verifyCodeComplete: function (val) {
        this.verifycode = val;
    },
    verifyCodeChange: function (val) {
       this.verifycode = val;
    },
    check:function () {
      var self = this;
      this.confirmation.confirm(this.verifycode).then(function (result) {
        console.log('Başarılı');
        self.user = result.user;
        localStorage.setItem('UserInfo',JSON.stringify(firebase.auth().currentUser))
        self.$router.push('/Home');
      }).catch(function (error) {
        console.log(error +' Kod Doğrularken Hata');
      })
    },
    onUpdate(payload) {
       this.phoneNumber = payload.formattedNumber;
      },
    initReCaptcha() {
      setTimeout(() => {
        this.appVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
              console.log(response+" : response");
            },
            "expired-callback": function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          }
        );
        //
      }, 1000);
    }
  },
  created() {
    this.initReCaptcha();
  },
  props:{  }
};
</script>

<style>
</style>

