<template>
  <div>
    <div class="title">
      <h2>{{goodsdesc.title}}</h2>
    </div>
    <div class="descContent">
    <br />

      <html v-html="goodsdesc.content"></html>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      goodsdesc:[],
    }
  },
  created(){
    this.getgoodsdesc()
  },
  methods:{
    async getgoodsdesc(){
     const {data}= await this.$http.get('/api/goods/getdesc/'+this.id)
    //  console.log(data.message);
     if(data.status===0) return this.goodsdesc=data.message[0]
    }
  },
  props:['id'],
}
</script>

<style lang="scss" >
.title{
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
}
.descContent {
  font-size: 14px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>