var button = document.getElementById("button");

button.addEventListener("click",function(e){
   e.preventDefault();

   var textForm1 = dovument.getElementById("textForm1").value;
   var textForm2 = document.getElementById("textForm2").value;

   var sum = parseInt(textForm1,10) + parseInt(textForm2,10);

   var resultForm =document.getElementById("resultForm");
   resultForm.value = sum;
});

