/**
 *  ToDo List with vue.js
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
