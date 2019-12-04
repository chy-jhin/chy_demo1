<template>
  <div>
    <p>攻略中心</p>
   <news :parnews="news"></news>
  </div>
</template>
<script>
import news from '../tabber/news.vue'
export default {
  name: "Home",
  data() {
    return {
     "news":{
        "热门":[
          {
            "type":"公告","name":"12月3日全服不停机更新公告","date":"12/2"
          },
          {
            "type":"活动","name":"12月3日限时抽皮肤","date":"12/2"
          },
          {
            "type":"公告","name":"【体验服】王者模拟战无法下载异常说明","date":"12/4"
          },
          {
            "type":"公告","name":"王者创意互动之旅 蔡文姬-繁星吟游秒杀即将开启","date":"12/6"
          },
          {
            "type":"公告","name":"【体验服】人机挑战模式版本错误异常说明","date":"12/8"
          }
        ],
        "新闻":[
          {
            "type":"公告","name":"以数字之美探索文化 TGC腾讯数字文创节海南站即将开幕","date":"12/2"
          },
          {
            "type":"活动","name":"KPL限定皮肤爆料丨天狼星创始人，幕后老板即将登场","date":"12/2"
          },
          {
            "type":"公告","name":"腾讯游戏品牌全新升级：Spark More去发现，无限可能","date":"12/4"
          },
          {
            "type":"公告","name":"圣斗士联动！信物熔铸赢【圣斗士系列皮肤】","date":"12/6"
          },
          {
            "type":"公告","name":"张靓颖西施英雄主打歌翻唱大赛，参与活动打榜赢靓颖签名照！","date":"12/8"
          }
        ],
      },
    }
  },
  components:{
    news,
  }
};
</script>
<style scoped>
</style>
