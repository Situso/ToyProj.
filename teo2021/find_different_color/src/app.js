var stage = document.querySelector('.stage');
var playBtn = document.querySelector('.playBtn');
playBtn.addEventListener('click', function (e) { return e.preventDefault(); });
function generateTile() {
    var tile = document.createElement('div');
    stage.appendChild(tile);
}
generateTile();
