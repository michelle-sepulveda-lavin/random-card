let pinta = ["&hearts;", "&spades;" , "&diams;", "&clubs;"];

const generadorNumero = () =>{
    let numero = Math.floor(Math.random()*13) + 1
    return numero;  
}

const generadorPinta = () => {
    let aux = Math.floor(Math.random()*4)
    return pinta[aux]
}

let signo1 = document.querySelector(".signo1")
let signo2 = document.querySelector(".signo2")
let numeroCarta = document.querySelector(".numero")

let t = generadorPinta()
signo1.innerHTML = t
signo2.innerHTML = t

if(t === "&hearts;" || t === "&diams;"){
    signo1.classList.add("rojas") 
    signo2.classList.add("rojas")
 }

let n = generadorNumero();
if(n === 11){
    numeroCarta.innerHTML = "J";
}else if(n === 12){
    numeroCarta.innerHTML = "Q";
}else if(n === 13){
    numeroCarta.innerHTML = "K";
}else{
    numeroCarta.innerHTML = n;
}

