<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
     <button class="mui-btn mui-btn-numbox-minus" type="button">-</button><!--  监听数
     据    -->
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="num" @change="countchange" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.js'
export default {
data(){
    return{

    }
},
methods:{
  countchange(){
    const val= this.$refs.num.value
    this.$emit('functi',parseInt(val))
  }
},

mounted(){
    // console.log(this.max);
    
    mui(".mui-numbox").numbox()
},
props:['max'],
watch:{//监听单个数据
        //mui API mui(Selector).numbox().setOption('step',5)

    // max:function(newval,oldval){ 
    //     console.log(newval,oldval);
    //     mui(".mui-numbox").numbox().setOption('max',newval)
    // }
}
};

</script>

<style scoped>

</style>