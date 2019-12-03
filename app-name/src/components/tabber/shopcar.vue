<template>
<div>
<div v-show="list.length == 0">购物车里面还没有宝贝哦，快去逛逛吧</div>
<div v-show="list.length != 0" class="haveCloth">
    <div class="cloth-thead">
        <el-col :span="6">商品信息</el-col>
        <el-col :span="3">价格</el-col>
        <el-col :span="3">数量</el-col>
        <el-col :span="3">折扣</el-col>
        <el-col :span="6">总计</el-col>
        <el-col :span="3">操作</el-col>
    </div>
    <div class="hasCloth">
        <li v-for="item in list" :key="item.id">
        <el-col :span="6">
            <img src="../../../static/5.jpg" :title="item.name">
            </el-col>
        <el-col :span="3">{{item.price}}</el-col>
        <el-col :span="3" class="ocloth-count">
            <span @click="cutcount(item)">-</span>
            {{item.count}}
            <span @click="addcount(item)">+</span>
            </el-col>
        <el-col :span="3">{{item.active}}</el-col>
        <el-col :span="6">{{item.price * item.count * item.active}}</el-col>
        <el-col :span="3" > <span @click="delcloth(item)">操作</span> </el-col>
        </li>
    </div>
</div>
<div class="footer">
<el-footer class="footer">
    <el-col :span="12"><div class="grid-content bg-purple">
        <el-checkbox>全选</el-checkbox>
        </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"><span>0</span> 已选商品</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">合计 <span>0</span></div></el-col>
</el-footer>
</div>
</div>



</template>
<script>
export default {
    name:'shopcar',
    data(){
        return{
            list:[
                {
                    name:'款式1',
                    price:'50',
                    count:'2',
                    active:'0.5',
                    id:'1'
                },
                {
                    name:'款式2',
                    price:'100',
                    count:'3',
                    active:'0.6',
                    id:'2'
                },
                                {
                    name:'款式3',
                    price:'150',
                    count:'1',
                    active:'0.55',
                    id:'3'
                },                {
                    name:'款式4',
                    price:'300',
                    count:'5',
                    active:'0.9',
                    id:'24'
                },
            ]
        }
    },
    methods: {
        cutcount(item){
            if(item.count==0){
                return;
            }
            item.count--;
        },
        addcount(item){
            item.count++;
        },
        delcloth(item){
            let index = this.list.findIndex(cloth => {
                return cloth.id == item.id;
            })
            this.list.splice(index,1);
            
        }
    },
}
</script>
<style scoped>
ul,li{
    height: 100%;
    list-style: none;
}
.footer{
    text-align: left;
    padding: 20px 0 ;
}
.hasCloth{
    position: relative;
}
.hasCloth li{
    padding: 70px 0 30px;
}
img{
    width: 50%;
    height: 50%;
    transform: translate(0px,-30px)
}
/* .haveCloth{
    position: relative;
    padding-top: 36px;
}
.noCloth{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -200px;
    }
.npCloth img{
    width: 100px;
}
.noClothMsg{
    letter-spacing: 3px;
    margin-left: 20px;
} */
</style>