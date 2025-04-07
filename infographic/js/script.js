function selectEdge(){
    const cube = document.querySelector('.cube');
    const degs = { 
        back:   {X: -180, Y:   0},
        top:    {X:   90, Y:   0},
        front:  {X:    0, Y:   0},
        bottom: {X:  -90, Y:   0},
        left:   {X:    0, Y: -90},
        right:  {X:    0, Y:  90},
    }

    document.querySelectorAll('nav a').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let edgeName = e.target.hash.replace(/#/, '');
            cube.style.transform = 'perspective(700px) rotateX('+degs[edgeName].X+'deg) rotateY('+degs[edgeName].Y+'deg)';
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    selectEdge();
});