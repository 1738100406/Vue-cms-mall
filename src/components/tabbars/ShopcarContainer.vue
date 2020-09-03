<template>
  <div class="shopcar-content">
    <div class="mui-card" v-for="item in goodslist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-item">
          <mt-switch></mt-switch>
          <img :src="item.thumb_path" alt />
          <div class="info">
            <h2>{{item.title}}</h2>
            <div class="goods-info">
              <span class="price">{{item.sell_price}}</span>
              <nox :initnox="countobj[item.id]" :id="item.id"></nox>
              <a @click.prevent="del(item.id)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner l-item">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>
              已勾选商品
              <span>{{selectedcount}}</span>件,总价
              <span>￥{{amount}}</span>
            </p>
          </div>
          <div class="right">
            <button type="button" class="mui-btn mui-btn-danger">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nox from "../sub-components/shop_nox.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getshopcar();
  },
  methods: {
    ...mapMutations(['delgoodscount']),
    async getshopcar() {
      const { data } = await this.$http.get(
        "/api/goods/getshopcarlist/" + this.strids
      );
      // console.log(data);
      if (data.status === 0) return (this.goodslist = data.message);
    },
    del(id) {
      // console.log(id);
      this.delgoodscount(id)
      this.goodslist.some((item, i) => {
        if (item.id == id) {
          this.goodslist.splice("i", 1);
          return true;
        }
      })
    }
  },
  computed: {
    ...mapGetters(["strids", "countobj","selectedcount","amount"])
  },
  components: {
    nox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-content {
  background-color: #eee;
  overflow: hidden;

  .goods-item {
    display: flex;
    img {
      width: 60px;
      height: 60px;
    }
    .info {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      h2 {
        font-size: 16px;
      }
      .goods-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}

.l-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: red;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
