/**
 * Created by Shawn on 2017/8/10.
 */
var storeA = {
    saveStorage(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    },
    fetchGet(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
};

var list = storeA.fetchGet("storeAge");


/*var list = [
    {
        title:"吃饭睡觉打豆豆",
        isCheck:false
    },
    {
        title:"吃饭睡觉",
        isCheck:true
    }
];*/

var vm = new Vue({
    el:".main",
    data:{
        list:list,
        todo:"",
        edits:"",
        beforeTitle:""
    },
    /*watch:{
        //list(){
        //    storeA.saveStorage("storeAge", this.list)
        //}
        list:{
            handler(){
                storeA.saveStorage("storeAge", this.list)
            },
            deep: true
        }
    },*/
    computed:{
        noCheckLength(){
            return this.list.filter(function(item){
                return !item.isCheck
            }).length;
        }
    },
    methods:{
        addToDo () {
            //console.log(event);
            this.list.push({
                title:this.todo,
                isCheck:false
            });
            this.todo = "";
        },
        delTodo (item) {
            let i = this.list.indexOf(item);
            this.list.splice(i,1);
        },
        edit (item) {
            this.edits = item;
            this.beforeTitle = item.title;
        },
        edited (item) {
            this.edits = "";
        },
        cancel (item) {
            item.title = this.beforeTitle;
            this.beforeTitle = "";
            this.edits = "";
        }
    },
    directives:{
        "focu":{
            update(el, bind){
                //console.log(bind);
                if(bind.value){
                    el.focus();
                }
            }
        }
    }
});

vm.$watch('list', function handler(){
        storeA.saveStorage("storeAge", this.list)
    }, {
        deep: true
    }
);