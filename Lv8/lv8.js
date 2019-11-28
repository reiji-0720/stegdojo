
var table = document.createElement('table');

for ( var i = 1; i < 9; i++){
 
    var div = document.createElement('div');
    div.className = 'box';

    var tmp = document.getElementsByClassName("box")
    var val="images"+ i;
    tmp[i-1].setAttribute("id",val)


    var img = document.createElement('img');
    img.src = './' + i +'.jpg';
    img.alt = i + 'の画像';
    document.getElementById('test1').appendChild(div)
};