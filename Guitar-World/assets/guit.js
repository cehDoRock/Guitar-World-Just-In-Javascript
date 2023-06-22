
const arrayGuitars = [
    {
        img: "assets/img/guitarras/Gui1.png",
        h2: "Turtle Guitar",
        h4: "Strinberg", 
        p: 1970.99
    },{
        img: "assets/img/guitarras/Gui2.png",
        h2: "h20 Guitar",
        h4: "Fender",
        p: 3670.74
    },{
        img: "assets/img/guitarras/Gui3.png",
        h2: "bifurcation",
        h4: "Yamaha",
        p: 10000.99
    },{
        img: "assets/img/guitarras/Gui4.png",
        h2: "T-500 Guitar",
        h4: "Strinberg",
        p: 1200.40
    },{
        img: "assets/img/guitarras/Gui5.png",
        h2: "Mind set",
        h4: "Jackson",
        p: 1193.93
    },{
        img: "assets/img/guitarras/Gui6.png",
        h2: "Barbies Rock",
        h4: "Fender",
        p: 7890.99
    },{
        img: "assets/img/guitarras/Gui7.png",
        h2: "Classik",
        h4: "Martin",
        p: 3670.00
    },{
        img: "assets/img/guitarras/Gui8.png",
        h2: "Titanium",
        h4: "Martin",
        p:5670.00
    },{
        img: "assets/img/guitarras/Gui9.png",
        h2: "Contamination",
        h4: "Jackson",
        p: 1999.99
    },{
        img: "assets/img/guitarras/Gui10.png",
        h2: "Toxic",
        h4: "Yamaha",
        p: 500.33
    },{
        img: "assets/img/guitarras/Gui11.png",
        h2: "Blue Ukulele",
        h4: "Strinberg",
        p: 300.00
    },{
        img: "assets/img/guitarras/Gui12.png",
        h2: "Cow Woc",
        h4:"Strinberg",
        p: 7000.23
    },
]

const cat = document.querySelector(".catalogo");

function criaElementos(e){
    var divProdutos = document.createElement("div");
    divProdutos.setAttribute("class" , "produtos")

    var img = document.createElement("img");
    img.setAttribute("src" , e.img);
    img.setAttribute("height" , "200px");

    var h2 = document.createElement("h2");
    h2.innerHTML = e.h2;

    var h4 = document.createElement("h4");
    h4.innerHTML = e.h4;

    var p = document.createElement("p");
    p.innerHTML = `R$${e.p}`;

    var button = document.createElement("button");
    button.innerHTML = "Contate-nos";


    divProdutos.insertAdjacentElement("beforeend" , img);
    divProdutos.insertAdjacentElement("beforeend" , h2);
    divProdutos.insertAdjacentElement("beforeend" , h4);
    divProdutos.insertAdjacentElement("beforeend" , p);
    divProdutos.insertAdjacentElement("beforeend" , button);


    cat.insertAdjacentElement("beforeend" , divProdutos)
}
arrayGuitars.forEach(criaElementos);


document.querySelector("#mostraTudo").addEventListener("click" , (e) => {
    e.preventDefault();
    cat.innerHTML = ""
    inputPesquisa.value = "";
    arrayGuitars.forEach(criaElementos)
})

var inputPesquisa = document.querySelector("#inputPesquisa");
var changePreco = document.querySelector("#preco-select");

document.querySelector("#pesquisar").addEventListener("click" , (e)=>{
    e.preventDefault();
    cat.innerHTML = ""
    arrayGuitars.forEach((e)=>{
        if(e.h4 === inputPesquisa.value){
            criaElementos(e);
        }
    })
    inputPesquisa.value = "";
})
// 
// 
// 