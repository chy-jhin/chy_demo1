<template>
  <div class="head">
    <mt-header title="王者荣耀">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!-- <mt-button @click="handleClose">close</mt-button> -->
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="main">
      <router-link to="/Home">
        <span>首页</span>
      </router-link>
      <router-link to="/Home2">
        <span>攻略中心</span>
      </router-link>
      <router-link to="/Home3">
        <span>赛事中心</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["title", "show"],
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.main a {
  line-height: 45px;
  text-decoration: none;
  color: white;
  font-size: 15px;
}
.main {
  display: flex;
  justify-content: space-around;
  background-color: rgb(238, 165, 28);
  height: 45px;
  text-align: center;
}
.main a{
  display: inline-block;
  width: 100%;
}
</style>
