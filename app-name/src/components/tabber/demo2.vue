<template>
  <div @click="btn()">
    demo2
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    methods:{
          btn() {
      axios.post('http://rap2api.taobao.org/app/mock/data/1369738')
        .then(function (data) {
          if(data.status === 200){
            console.log(data)
            console.log("数据请求成功")
          }
          else{
           console.log("没有拿到服务器数据！")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
    }

</script>

<style scoped>
</style>
