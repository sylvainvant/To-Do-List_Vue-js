/**
 *  ToDo List with vue.js
 */

let toDoList = new Vue ({
  el:".app",
  data:{
    todos:[],
    newList: ''
    },

    methods:{
      addTodo: function(){
      this.todos.push(this.newList);
      this.newList="";
      },
      supTodo: function(index) {
        this.todos.splice(index,1);
      }
    }
});
