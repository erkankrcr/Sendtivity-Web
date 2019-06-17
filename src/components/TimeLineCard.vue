<template>
<div class="TimeLineCard">
<div class="card">
  <div v-if="item.PostImageUrl!=null">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="item.PostImageUrl" alt="Post image">
    </figure>
  </div>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="item.PostUserImageUrl" alt="User image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{item.UserName}}</p>
        <p class="subtitle is-6">{{item.UserID}}</p>
      </div>
    </div>

    <div class="content">
      {{item.PostText}}
    </div>
  </div>
</div>
</div>
    
</template>
<script>

export default {
  name: 'TimeLineCard',
  data () {
    return {

    }
  },
  props:{
      item:{type:Object,required:null}
  }
}
</script>

<style scoped>
.TimeLineCard{
  margin-bottom: 30px
}

</style>

