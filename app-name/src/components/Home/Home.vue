<template>
<div>
    <Swiper :parimg="imglist"></Swiper>
    <more :parfont="fontlist"></more>
</div>
</template>

<script>
import Swiper from '../tabber/swiper'
import more from '../tabber/more.vue'
export default {
    data(){
        return {
    "imglist":[
        {id:0,img:'../../static/1.jpg'},
        {id:1,img:'../../static/2.jpg'},
        {id:2,img:'../../static/3.jpg'},
        {id:3,img:'../../static/4.jpg'},
      ],
      "fontlist":[
          {
              id:0,className:'icon-shujumofang',spanName:"爆料站"
          },
          {
              id:1,className:'icon-liangzitongji',spanName:"故事站"
          },
          {
              id:2,className:'icon-dianpu',spanName:"周边商城"
          },
          {
              id:3,className:'icon-wenzhang1',spanName:"体验服"
          },
          {
              id:4,className:'icon-muyangzuo',spanName:"新人专区"
          },
          {
              id:5,className:'icon-shuangzizuo',spanName:"荣耀·传承"
          },
          {
              id:6,className:'icon-shuangyuzuo',spanName:"王者营地"
          },
          {
              id:7,className:'icon-taobaoxingdian',spanName:"版本介绍"
          },
          {
              id:8,className:'icon-tupian',spanName:"对局环境"
          },

      ]
        }
    },
    components:{
        Swiper,
        more,
    }
}
</script>

<style scoped>

</style>
