<template>
    <div>
    <Nav></Nav>
    <!-- <shopcar></shopcar> -->
</div>
</template>

<script>

import Nav from './tabber/nav'
import shopcar from "./tabber/shopcar";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    }
  },

  components: {
    Nav,  
    shopcar
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(219, 147, 13);
  display: flex;
  justify-content: space-around;
}
.nav .aaa {
  color: white;
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: 12px;
}
</style>
