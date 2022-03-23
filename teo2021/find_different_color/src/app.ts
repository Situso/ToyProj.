const stage = document.querySelector('.stage') as HTMLDivElement;
const playBtn = document.querySelector('.playBtn') as HTMLAnchorElement;

playBtn.addEventListener('click', e => e.preventDefault());

function generateTile() {
    const tile = document.createElement('div');

    stage.appendChild(tile);
}

generateTile();