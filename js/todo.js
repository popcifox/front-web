$(document).ready(function(){

    $.ajax({
       url:'https://jsonplaceholder.typicode.com/todos/',
       type:'GET',
       success:function(response){
          var todos = response;
          for(var i=0;i<todos.length;i++){
             var t = todos[i];
             $('#todos').append(`
                <tr>
                   <th scope="row">${t.id}</th>
                   <td>${t.userId}</td>
                   <td>${t.title}</td>
                   <td>${t.completed ? '완료' : '미완료'}</td>
                </tr>
             `);
          }
       },
       error:function(error){}
    });
 });