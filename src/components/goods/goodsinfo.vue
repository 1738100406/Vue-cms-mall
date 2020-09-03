<template>
  <div class="goodsinfo-content">
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter" >
        <div class="ball" v-if="isShow" ></div>

    </transition>
    <div class="mui-card">
      <!-- /api/getthumimages/43 -->

      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图区域 -->
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, i) in luobo" :key="i">
              <img :src="item.src" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card-max" v-for="(item,i) in goodsinfo" :key="i">
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>
              <span style="margin-right:5px">
                市场价:
                <del>￥{{item.market_price}}</del>
              </span>
              <span>
                销售价:
                <span style="color:red;font-size:18px">￥{{item.sell_price}}</span>
              </span>
            </p>
            <p>
              购买数量:
              <nobox :max="item.stock_quantity" @functi="getSelect"></nobox>
            </p>
            <p>
              <button class="mint-button mint-button--primary mint-button--small">立即购买</button>
              <button class="mint-button mint-button--danger mint-button--small" @click="addTocat">加入购物车</button>
            </p>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{item.goods_no}}</p>
            <p>库存情况:{{item.stock_quantity}}件</p>
            <p>上架时间:{{item.add_time | dateFormat}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <router-link
            tag="button"
            :to="'/home/goodsdesc/'+ item.id"
            class="mint-button mint-button--primary mint-button--large is-plain"
          >图文介绍</router-link>

          <button
            @click="gogoodscomment"
            class="mint-button mint-button--danger mint-button--large is-plain"
          >商品评价</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nobox from "../sub-components/goodsinfo_nobox.vue";
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      luobo: [],
      goodsinfo:[],
      isShow:false,
      countval:1,

    };
  },
  created() {
    this.getluobo(), this.getgoodsinfo();
  },
  methods: {
    ...mapMutations(['addTocar']),

    async getluobo() {
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      // console.log(data);
      if (data.status === 0) return (this.luobo = data.message);
    },
    async getgoodsinfo() {
      const { data } = await this.$http.get("/api/goods/getinfo/" + this.id);
      // if(data.status===0) return console.log(data);
      this.goodsinfo = data.message;
      // console.log(this.goodsinfo.id);
    },

    gogoodscomment() {
      // this.$router.push('/home/goodscomment/'+this.id)   //链式路由跳转
      this.$router.push({
        name: "goodscmt",
        params: { id: this.id }
      });
    },
    addTocat(){
      this.isShow=!this.isShow
      // this.$store.commit('addTocar',{id:this.id,count:this.countval})
      this.addTocar({id:this.id,count:this.countval,price:this.goodsinfo[0].sell_price}) //直接调用mapmutation映射出来的方法
      // console.log(this.goodsinfo[0].sell_price);
      
      // console.log('hi');

    },
    beforeEnter(el){
    //入场动画开始之前 设置小球的起始状态
    el.style.transfrom="translate(0,0)"
    },
    enter(el,done){
    //入场动画结束之后 小球的终止状态
    el.offsetWidth
    const balltop= el.getBoundingClientRect()
    const shoptop= document.getElementById('shopcar').getBoundingClientRect()
    const top=shoptop.top-balltop.top
    const left=shoptop.left-balltop.left
    
    el.style.transform='translate('+left+'px, '+top+'px)'
    el.style.transition="all 1s cubic-bezier(.5,-0.33,.69,.29)"
    done()
    },
    afterEnter(el){
    //入场动画完成后的回调函数
    this.isShow=!this.isShow
    },
    getSelect(val){
      // console.log("父组件拿到的"+val);
      this.countval=val
    },

  },
  props: ["id"],
  components: {
    nobox
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;

  .mint-swipe-item {
    //行内替换元素
    /*在父元素中,直接让子元素居中显示[图片:行内替换元素 
                                span,a:行内元素
                                  div,p行内元素   */
    text-align: center;

    img {
      height: 100%;
    }
  }
}
.mui-card-footer {
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 10px;
  }
}

.goodsinfo-content {
  background-color: #eee;
}
.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 370px;
  left: 145px;
    // transform: translate(82px, 225px);
}
</style>