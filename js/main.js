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
    },
    filters: {
      capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
});
