<template>

  <div class="app-container">
    <!-- 在这里放一个 Header  -->
    <mt-header fixed title="Vue项目">
      <span slot="left">
        <mt-button icon="back" @click="back" v-if="isShow">返回</mt-button>
      </span>
    </mt-header>

    <!-- 路由的容器坑 -->
    <transition>
			<router-view></router-view>
		</transition>


    <!-- tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-star-filled"></span>
				<span class="mui-tab-label">关注</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span  class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="shopcar" class="mui-badge">{{totalcount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
      // console.log(this);
      
    }
  },
  watch:{
    '$route.path':function(newval,oldwal){
      if(newval==='/home'){
        this.isShow=false
      }else{
        this.isShow=true
      }
    }
  },
  created(){
 
    console.log(this.$route);
    
      if(this.$route.path==='/home'){
        this.isShow=false
      }else{
        this.isShow=true
      }
  },
  computed:{
    ...mapGetters(['totalcount'])
  }

}
</script>

// 这里写的样式，要符合 scss 语法，并且，样式是 当前组件私有的，不会成为全局的样式，也不会应用给子组件
<style lang="scss" scoped>

.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  // 当有组件切换动效的时候，一瞬间，页面的宽度会变成 正常宽度的 2 倍，此时，需要隐藏超出屏幕宽度的区域
  overflow: hidden;
}

// 动画效果相关的类样式
.v-enter {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  // 让即将进入的页面，向右偏移 100% 屏幕的宽度
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.mint-header {
  z-index: 99;
}

.my-bar-tab .my-tab-item1 .mui-active {
    color: #007aff;
}
.my-bar-tab .my-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>
