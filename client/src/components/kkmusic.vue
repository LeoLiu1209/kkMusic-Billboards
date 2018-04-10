<template>
  <div>
      <h1 class="title">KKMusic electrical billboards</h1>
      <img v-bind:src="qrcode" alt="">
      <div class="container">
        <div class="row">
            <div class="col-xs-4 col-md-4 col-lg-4">
              <div class = "data">
                 <b-img rounded="circle" v-bind:src="playlistImage" fluid alt="" />  
                <a v-bind:href="playListURL"><h1>{{title}}</h1></a>
              </div>
            </div>
            <div class="col-xs-8 col-md-8 col-lg-8">
              <b-table responsive striped hover :items="tracksInfo"></b-table>
            </div>
        </div>
      </div> 
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
      qrcode:'',
      tracksInfo:[]
    }
  },
  methods: {
    getHitPlayLists: async function(){
      let response = await kkFetcherServices.getHitPlayLists()
      this.title = response.data.message.title
      this.playListURL = response.data.message.url
      this.qrcode = response.data.dataURL
      this.playlistImage = response.data.message.image
      this.tracksInfo = response.data.message.tracks
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
   color: #42b983;
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
