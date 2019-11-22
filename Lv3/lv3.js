var button = document.getElementById("button");

button.addEventListener("click",function(e){
   e.preventDefault();

   var textForm1 = dovument.getElementById("textForm1").value;
   var textForm2 = document.getElementById("textForm2").value;

   var um = textForm1 + textForm2;

   var resultForm =document.getElementById("resultForm");
   resultForm.value = sum;
});

function Calc_form(){
   fm.result.value= eval(fm,A.value)+(fm,B,value);
};
