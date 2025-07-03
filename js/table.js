$(document).ready(function(){
   


    //삭제 기능
    $(document).on('click','.del-btn',function(){
       var result = confirm('정말 삭제하겠습니까?')
       if(result){
        $(this).closest('tr').remove();
        }
    });
 
 
    //등록
    $('#add-btn').on('click',function(){
       var name = $('#name').val();
       var age = $('#age').val();
       var address = $('#address').val();
 
 
       if(name == ''){
          alert('이름을 입력해주세요');
          return;
       }
 
       if(age == ''){
          alert('나이를 입력해주세요');
          return;
       }
 
       if(address == ''){
          alert('주소를 입력해주세요');
          return;
       }
       
          
          
 
       $('#users').append(`
          <tr>
             <th scope="row">1</th>
             <td>${name}</td>
             <td>${age}</td>
             <td>${address}</td>
             <td>
                <button class="btn btn-sm btn-outline-danger del-btn">삭제</button>
             </td>
          </tr>
       `);
 
       alert('등록 완료');
       $('#name').val('');
       $('#age').val('');
       $('#address').val('');
    });
 })