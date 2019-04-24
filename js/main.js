/**
 *  ToDo List with vue.js
 */
/*
new Vue({
  el: '.todolist',
  data: {
    newtodolist:'',
    todos:[
    {newtodolist:'test'}
    ]
  }
})
*/
new Vue ({
  el:"#app",
  data:{
    todos:[
      "toto",
      "tata"
    ]
    },

    methods:{
      addTodo: function(){
      this.todos.push(this.newList);
      this.newList="";
      }
    }
});
