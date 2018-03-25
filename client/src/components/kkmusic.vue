<template>
  <div>
      <h1>{{backendMsg}}</h1>
  </div>
</template>

<script>
import kkFetcherServices from '@/services/kkFetcherServices'
export default {
  data () {
    return {
      backendMsg :''
    }
  },
  methods: {
    getHitPlayLists: async function(){
      let response = await kkFetcherServices.getHitPlayLists()
      this.backendMsg = response.data
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
