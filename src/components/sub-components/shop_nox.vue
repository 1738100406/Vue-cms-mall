<template>
  <div class="mui-numbox" data-numbox-min="1" style="width:100px">
     <button class="mui-btn mui-btn-numbox-minus" type="button">-</button><!--  监听数
     据    -->
    <input id="test" class="mui-input-numbox" type="number" :value="initnox" ref="num" @change="countchange" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.js'
import {mapMutations} from 'vuex'
export default {
data(){
    return{

    }
},

methods:{
  countchange(){
    const val= parseInt(this.$refs.num.value)
    // console.log(val);
    
    this.$emit('functi',parseInt(val))
    //调用updategoodscount更新数量
    this.updategoodscount({id:this.id,count:val})
  },
  ...mapMutations(['updategoodscount'])
},
props:["initnox",'id'],

mounted(){
    // console.log(this.max);
    
    mui(".mui-numbox").numbox()
},

};

</script>

<style scoped>

</style>