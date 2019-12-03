<template>
  <div id="news">
    <div id="header"> <span>font</span> <h3>新闻资讯</h3> <a>...</a></div>
    <div id="bodyer">
      <ul class="top">
        <li>热门</li>
      </ul>
      <ul class="down" v-for="(item,index) in parnews">
        <li><a href=""><span>{{item.type}}</span>{{item.name}}</a> <span>{{item.date}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props:["parnews"],
    data(){
      return{

      }
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
  }
  #news #header{
    height: 50px;
  }
  #news #bodyer .top{
    display: flex;
    justify-content: space-between;
  }
  #news #bodyer .down{
    display: flex;
    flex-direction:column-reverse;
  }
</style>
