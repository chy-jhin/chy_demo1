<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in parimg" :key="index">
          <img :src="item.img" alt />
        </swiper-slide>


      </swiper>
      
    <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
 <div class="swiper-pagination" v-for="(item,index) in parimg" :key="index" slot="pagination"></div>     
    <!-- 切换按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- 滚动条 -->
    </div>
  </div>
</template>

<script>
import "vue-awesome-swiper/node_modules/swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  props: ["parimg"],
  data() {
    return {
      swiperOption: {
        freeMode: false, //切换后是否自动贴合完整图片
        grabCursor: true, //变成抓取手掌
        loop: true, //控制循环播放
        speed: 1000, //切换速度
        uniqueNavElements: false, //独立分页元素
        autoplay:true,
        autoplay:1500,//有效
        // autoplay:{
        //   delay:3000,
        //   disableOnInteraction: false,
        //   waitForTransition: false,
        // },无效
        autoplayDisableOnInteraction: false,//手动操作后自动轮播
        pagination : '.swiper-pagination',
        paginationType : 'bullets',
        paginationClickable :true,
        paginationElement : 'li',
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        created() {
          this.swiperOption.autoplay =
            this.commodity.length != 1
              ? {
                  //控制只有一张图片的时候不自动轮播
                  delay: 1500,
                  stopOnLastSlide: false,
                  disableOnInteraction: false
                }
              : false;
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {}
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

</style>