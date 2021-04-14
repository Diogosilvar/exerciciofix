window.onload = function () {
    
}

function cachorro(dogs) {
    document.getElementById('img_cachorro').innerHTML = `<img class='img_cachorro' src='${dogs.message}'>`
}

function verificarAnimal() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dogs => cachorro(dogs))
    
}


