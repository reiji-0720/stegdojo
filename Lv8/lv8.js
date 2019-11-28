
var table = document.createElement('table');

for ( var i = 1; i < 9; i++){

    var div = document.createElement('div');
    div.className = 'box'+ i;

    var img = document.createElement('img');
    img.src = './' + i +'.jpg';
    img.alt = i + 'の画像';
    document.getElementById('test').appendChild(div)
};