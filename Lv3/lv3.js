var button = document.getElementById("button");
var checkString1;
var checkString2//桁数チェック
button.addEventListener("click",function(e){
   e.preventDefault();


  var textForm1 = document.getElementById("textForm1").value;
  var textForm2 = document.getElementById("textForm2").value;

  var sum = parseFloat(textForm1,10) + parseFloat(textForm2,10);
   checkString1 = console.log(String(textForm1).length);
   checkString2 = console.log(String(textForm2).length);

   if (((0 <= checkString1) || (checkString1 <= 10))||((0 <= checkString2 )||(checkString2 <= 10))){
     
      

      var resultForm = document.getElementById("resultForm");
      document.getElementById("resultForm").innerHTML = sum ;


   }else{
    alert("10桁以下しか計算できません")
   }

});

$(function(){
  $("#textForm1").blur(function(){ 
    if ( !isNumeric($(this).val())
    ){ 
      $(this).focus(); 
    } 
  })
});
$(function(){
  $("#textForm2").blur(function(){ 
    if ( !isNumeric($(this).val())
    ){ 
      $(this).focus(); 
    } 
  })
});

function isNumeric(value) {
  if ( value == null )
    return;
  if( value.match( /[^0-9.,-]+/ ) ) {
    alert("半角数字で入力して下さい。");
    return false;
  }
  return true;
};


$(function(){
  $("#textForm1").keypress(function(event){
    return isPositive(event);
   }
   
 );
});
$(function(){
 $("#textForm2").keypress(function(event){
   return isPositive(event);
  }
  
);
});


function isPositive(e) {
  if ( (e.which < "0".charCodeAt(0) || "9".charCodeAt(0) < e.which) && e.which != 8 && e.which != 0 && e.which != 46 )
    return false;
  return true;
}

function onKeyPress(e) {
  if ( e.keyCode !== 13 || ( e.keyCode === 13 && (e.shiftKey === true || e.ctrlKey === true || e.altKey === true) )) { // Enterキー除外
    return false;
  }
  var textForm1 = document.getElementById("textForm1").value;
  var textForm2 = document.getElementById("textForm2").value;

  var sum = parseFloat(textForm1,10) + parseFloat(textForm2,10);

  var resultForm = document.getElementById("resultForm");
  document.getElementById("resultForm").innerHTML = sum ;
}

