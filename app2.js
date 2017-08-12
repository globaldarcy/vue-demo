/*Vue.component("custom-select", {
    data:function () {
        return {selectShow : false}
    },
    props:["btnValue"],
    template: `<section class="warp">
                    <div class="searchIpt clearFix">
                        <div class="clearFix">
                            <input type="text" class="keyWord" value="" v-on:click="selectShow = !selectShow"/>
                            <input type="button" v-bind:value="btnValue">
                            <span></span>
                        </div>
                        <custom-list v-show="selectShow"></custom-list v-show="selectShow">
                    </div>
                </section>`
});*/
Vue.component("custom-list", {
    props:["list"],
    template: `<ul class="list">
                    <li v-for="item of list" v-on:click="selValHandle(item)">{{item}}</li>
            </ul>`,
    methods:{
        selValHandle(item){
            this.$emit("recaive", item);
        }
    }
});
var vm = new Vue({
    el:"#app",
    data:{
        list1:["beijing","shanghai","hangzhou"],
        list2:["javascript","react","vue"]
    },
    components:{
        "custom-select":{
            data:function () {
                return {
                    selectShow : false,
                    val:""
                }
            },
            props:["btnValue", "list"],
            template:`<section class="warp">
                    <div class="searchIpt clearFix">
                        <div class="clearFix">
                            <input type="text" class="keyWord" v-bind:value="val" v-on:click="selectShow = !selectShow"/>
                            <input type="button" v-bind:value="btnValue">
                            <span></span>
                        </div>
                        <custom-list v-show="selectShow" v-bind:list="list" v-on:recaive="changeVal"></custom-list>
                    </div>
                </section>`,
            methods:{
                changeVal(valu){
                    this.val = valu;
                }
            }
        }
    }
});

