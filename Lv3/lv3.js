var button = document.getElementById("button");

button.addEventListener("click",function(e){
   e.preventDefault();

   var textForm1 = dovument.getElementById("textForm1").value;
   var textForm2 = document.getElementById("textForm2").value;

   var sum = textForm1 + textForm2;

   var resultForm =document.getElementById("resultForm");
   resultForm.value = sum;
});

