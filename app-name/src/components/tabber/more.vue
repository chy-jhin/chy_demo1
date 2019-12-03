<template>
<div>
<ul>
    <li v-for="(item,index) in parfont" :key="index">
        <i class="iconfont" :class="item.className"></i>
        <span>{{item.spanName}}</span>
    </li>
</ul>
<div class="btn" @click="put"><i></i><span>展开</span></div>
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

        }
    },
    methods: {
        put(){
            console.log(document.querySelectorAll("ul"));
        }
    },
}
</script>

<style scoped>
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
}
li{
    width: 20%;
    margin:10px 2.2%;
    border-right: 1px gainsboro solid;
}
.btn{
    background-color: rgb(243, 243, 243);
    padding: 5px 0;
}
.btn span{
    font-size: 18px;
}
</style>