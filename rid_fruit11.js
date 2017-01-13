
  
 $(document).ready(function(){
    $("#left").on("click","li",function(){
	
	click.apply(this);   
 });
    $("button").on("click",function(){
      add();
    });
  }); 



function click(){
  if($(this).find( 'input[type="checkbox"]' ).prop("checked")==true)
  		$(this).find( 'input[type="checkbox"]' ).prop( 'checked', false );
  else
  		$(this).find( 'input[type="checkbox"]' ).prop( 'checked', true );      

  show.apply(this);
}  

function show(){  
  
  var content=$(this).find( 'input[type="checkbox"]' ).prop("value");
  if($(this).find( 'input[type="checkbox"]' ).prop("checked")==true){
       $("#display").append($("<li />").text(content));
  }
 else{
    
      var listitem=$("#right li");
      listitem.each(function(idx){
	  var value = $("#display").children("li").eq(idx).text();
		 if(value==content){
                  $("#display").children("li").eq(idx).remove();
         }   

      });
  }
}

function add(){
  var fruit = prompt("Please enter name of food");
  if(fruit !=null && fruit !=""){
    var container = $('#left');
    var inputs = container.find('input');
    var id = inputs.length+1;
    $('<li></li>').appendTo("#left ul");
    $('<input />', { type: 'checkbox', id: id, value: fruit }).appendTo("#left ul li:last-child()");
    $('<p />', { id: 'c'+id, text: fruit }).appendTo("#left ul li:last-child()");
  }
}

