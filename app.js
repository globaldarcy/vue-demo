/**
 * Created by Shawn on 2017/8/10.
 */
var list = [
    {
        title:"吃饭睡觉打豆豆",
        isChecked:false
    },
    {
        title:"sdfsdfksdlgsdlklsdg",
        isChecked:true
    }
];

new Vue({
    el:".main",
    data:{
        list:list,
        todo:""
    },
    methods:{
        addToDo (data, ev) {
            console.log(data,ev)
            this.list.push({
                title:this.todo,
                isChecked:false
            });
            this.todo = "";
        },
        delTodo (todo) {
            let i = this.list.indexOf(todo);
            this.list.splice(i,1);
        }
    }
});