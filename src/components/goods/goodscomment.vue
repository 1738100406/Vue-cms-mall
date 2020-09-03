<template>
  <div>
      <comment :newsid="id"></comment>
  </div>
</template>

<script>
import comment from '../sub-components/Comment.vue'
export default {
    data(){
        return{

        }
    },
    mounted:{

    },
    components:{
        comment
    },
    props:["id"],
}
</script>

<style>

</style>