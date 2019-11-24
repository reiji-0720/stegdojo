var button = document.getElementById("button");

button.addEventListener("click",function(e){
   e.preventDefault();

   var textForm1 = document.getElementById("textForm1").value;
   var textForm2 = document.getElementById("textForm2").value;

   var sum = parseFloat(textForm1,10) + parseFloat(textForm2,10);

   var resultForm = document.getElementById("resultForm");
   document.getElementById("resultForm").innerHTML = sum ;

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