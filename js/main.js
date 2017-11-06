;(function(){
  'use strict';
new Vue({
el:'#main',
  data:{
  list:[],
  current:{}

},
methods:{
  add:function(){
var title = this.current.title;
    if (!title&&title!==0)  alert("输入的内容不能为空！");
    var todo = Object.assign({},this.current)
this.list.push(todo);
  },
  update:function(){},
  remove:function(id){
this.list.splice(id,1);
  }
}

});

})();
