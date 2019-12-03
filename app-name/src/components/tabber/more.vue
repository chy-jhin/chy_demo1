<template>
<div>
<ul id="more">
    <li v-for="(item,index) in parfont" :key="index">
        <i class="iconfont" :class="item.className"></i>
        <span>{{item.spanName}}</span>
    </li>
</ul>
<div id="btn" @click="put"><i></i><span class="show">v展开</span> <span>^收起</span> </div>
</div>

</template>

<script>
import '../../../static/font-family/iconfont.css'
export default {
    props:[
        "parfont"
    ],
    data(){
        return{
          name:""
        }
    },
    methods: {
        put(){
            var ul = document.getElementById("more");
            var span = document.getElementById("btn").childNodes;
            if(span[1].getAttribute("class") == "show"){
              span[1].setAttribute("class","");
              span[3].setAttribute("class","show");
              ul.style.height = "70px";
            }else{
              span[3].setAttribute("class","");
              span[1].setAttribute("class","show");
              ul.style.height = "";
            }
        }
    },
}
</script>

<style scoped>
  .show{
    display:none;
  }
ul,li{
    list-style: none;
    padding: 0 0;
    margin: 0 0;
}
ul i{
    font-size: 28px;
    display: flex;
    flex-direction:row-reverse;
    justify-content: center;
}
ul li span{
    font-size: 14px;
}
ul{
    margin-top: 10px;
    display: flex;
    justify-content: left;
    flex-flow: row wrap;
    flex:0 0 25%;
    background-color: white;
    /* height: 70px; */
    overflow: hidden;
    transition: 0.5s all ease;
}
li{
    width: 20%;
    margin:10px 2.2%;
    border-right: 1px gainsboro solid;
}
#btn{
    background-color: rgb(243, 243, 243);
    padding: 5px 0;
}
#btn span{
    font-size: 18px;
}
</style>
