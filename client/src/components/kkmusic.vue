<template>
  <div>
      <img v-bind:src="playlistImage" alt="">
      <h1 class="title">KKMusic electrical billboards</h1>
      <img v-bind:src="qrcode" alt="">
      <a v-bind:href="playListURL"><h1>{{title}}</h1></a>
  </div>
</template>

<script>
import kkFetcherServices from '@/services/kkFetcherServices'
export default {
  data () {
    return {
      title :'',
      playListURL:'',
      playlistImage:'',
      qrcode:''
    }
  },
  methods: {
    getHitPlayLists: async function(){
      let response = await kkFetcherServices.getHitPlayLists()
      this.title = response.data.message.title
      this.playListURL = response.data.message.url
      this.qrcode = response.data.dataURL
      this.playlistImage = response.data.message.image
    }
  },
  mounted () {
    this.getHitPlayLists()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
