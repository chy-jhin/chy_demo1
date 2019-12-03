<template>
  <div>
    <p>攻略中心</p>
    <news :parnews="newslist"></news>
  </div>
</template>
<script>
import news from '../tabber/news.vue'
export default {
  name: "Home",
  data() {
    return {
        "newslist":[
          {
            "type":"公告","name":"12月3日全服不停机更新公告","date":"12/2"
          },
          {
            "type":"活动","name":"12月3日限时抽皮肤","date":"12/2"
          },
          {
            "type":"公告","name":"12月5日全服不停机更新公告","date":"12/4"
          },
          {
            "type":"公告","name":"12月7日全服不停机更新公告","date":"12/6"
          },
          {
            "type":"公告","name":"12月9日全服不停机更新公告","date":"12/8"
          }
        ],
    }
  },
  components:{
    news,
  }
};
</script>
<style scoped>
</style>
