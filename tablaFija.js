var campeones = [];

var campeonesShuffle = [];

var cartaActual = "";

function deck(){
    campeones = ['annie', 'zilean', 'irelia', 'kalista', 'kaisa', 'velkoz', 'xerath', 'ezreal',
    'lulu', 'lissandra', 'sona', 'brand', 'darius', 'garen', 'katarina', 'akali', 'blitz', 'yummi', 'soraka', 'ahri', 'lux', 'gragas', 'viktor', 'jayce',
    'zed', 'shen', 'gwen', 'vi', 'ziggs', 'teemo', 'chogath', 'alistar', 'yasuo',
    'yone', 'lee', 'urgot', 'sylas', 'jhin', 'ekko', 'zeri', 'swain', 'twitch', 'leona', 'diana', 'braum', 'ashe', 'quinn', 'warwick', 'camile', 'fiora', 'karma', 'nunu', 'mundo', 'oriana'];
    campeonesShuffle = campeones.sort(() => Math.random() - 0.5);
    console.log(campeonesShuffle)
}

deck();

const botonCarta = document.getElementById('cartaRandom');

function siguienteCarta(){
    let ultimo = campeonesShuffle.pop()
    console.log(ultimo)
    cartaActual = ultimo;
    return ultimo;
}
function sacarCarta() {
    if (campeonesShuffle.length == 0){
        return;
    }
    var img = document.getElementById("campeon");
    let carta = siguienteCarta();
    let imagen = (carta + '.jpg')
    console.log(imagen);
    img.src= "Images/"+imagen;
}

botonCarta.addEventListener('click', sacarCarta)

function crearCartilla(){
    const n = 16
    const arr = [];
    if (n == 0) {
        console.log(null)
    }
    do {
        const randomNumber = Math.floor(Math.random() * campeonesShuffle.length)
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
        }
    }   while (arr.length < n);
    return arr.map(function(x) {
        return campeonesShuffle[x];
     });
}
function grid(el) {
    let cartilla = crearCartilla();
    var container = document.createElement("div");
        container.id = "main";
    container.className = "container";
    for (i=0; i<4; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        for (k=0; k<4; k+=1) {
            const imageCampeon = document.createElement("img");
            imageCampeon.className = "imageCampeon";
            const index = i + k*4;
            const nombreCampeon = cartilla[index];
            imageCampeon.id = nombreCampeon;
            let imagen = (nombreCampeon + '.jpg')
            imageCampeon.src= "Images/"+imagen;
            var box = document.createElement("div");
            imageCampeon.selected = false;
            box.className = "box";
            box.appendChild(imageCampeon);
            row.appendChild(box);
            bindClick(imageCampeon);
            
        };
        container.appendChild(row);
    };
    el.appendChild(container);
};


function bindClick(card) {
    card.addEventListener('click', function() {
        clickHappened(card);
    },{
        once: true
    });
}
var contador = 0

function clickHappened(card) {
    console.log(card.id, cartaActual)
    if(card.id != cartaActual) {
        return;
    }
    card.selected = true;
    contador++;
    console.log(card.id);
    if(card.selected) {
        card.classList.add("imageCampeonSelected");
        card.classList.add("imagenFijaSelected");
    }else{
        card.classList.remove("imageCampeonSelected");
        card.classList.remove("imagenFijaSelected");
    }
    if (contador === 16){
        alert("Ganaste n.n")
        location.reload()
    }
}
sacarCarta();
grid(document.body);
