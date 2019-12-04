<template>
  <div id="news">
    <div id="header">
      <div>
        <span>font</span>
        <h3>新闻资讯</h3>
      </div>
      <div><a>...</a></div>
      </div>
   <div id="bodyer" v-for="(item,items,index) in parnews">
      <ul class="top">
        <li>{{items}}</li>
      </ul>
    <swiper :options="swiperOption">
       <swiper-slide>
     <ul class="down" v-for="(item,items) in item">
       <li><a href=""><span>{{item.type}}</span>{{item.name}}</a> <span>{{item.date}}</span></li>
     </ul>
         </swiper-slide>
     </swiper>
    </div>
  </div>
</template>

<script>
import "vue-awesome-swiper/node_modules/swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default{
    props:["parnews"],
    data(){
      return{
        swiperOption: {
          freeMode: false,
          grabCursor: true,
          speed: 500,
          }
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  li,ul,a{
    list-style: none;
  }
  #news{
    width: 100%;
    background-color: yellow;

  }
  #news #header{
    height: 50px;
    background-color: #0062CC;
  }
  #news #header
  #news #bodyer .top{
    display: flex;
    justify-content: space-between;
    background-color: red;
  }
  #news #bodyer .down{
    display: flex;
    flex-direction:column-reverse;
    background-color: aqua;
  }
</style>
