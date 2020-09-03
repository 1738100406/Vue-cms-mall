<template>
  <div>
    <div class="goods-list">
      <router-link  tag="div" :to="'/home/goodsinfo/'+ item.id" class="good-item" v-for="(item,i) in goodslist" :key="i">
        <img :src="item.img_url" />
        <h2 class="name">{{item.title}}</h2>
        <div class="info">
          <p>
            <span class="new">￥{{item.sell_price}}</span>
            <span class="old">￥{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩90件</span>
          </p>
        </div>
      </router-link>
    </div>
    <button @click="getmore" class="mint-button mint-button--primary mint-button--large is-plain">加载更多</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page:1,
      goodslist:[],
    };
  },
  created(){
    this.getgoods()
  },

  methods:{
   async getgoods(){
      const {data}=await this.$http.get('/api/getgoods?hageindex='+this.page)
      // console.log(data);
      this.goodslist=this.goodslist.concat(data.message)
      
    },
    getmore(){
      this.page++
      this.getgoods()
    },
  }
};
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 7px;
}
.goods-list  .good-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7 #ccc;        
}
.goods-list img{
    width: 170px;
    height: 170px;

}
.goods-list h2{
    font-size: 14px;
    margin: 4px;
}
.info{
    background-color: #eee;
    overflow: hidden;
}
.info .new{
    color:red;
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
}
.info .old{
    text-decoration: line-through;
}
.good-item{
  display: flex;
  flex-direction: column;
  padding: 2px;
  border: 1px solid #ccc;
  justify-content: space-between;
}
.good-item .sell{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>