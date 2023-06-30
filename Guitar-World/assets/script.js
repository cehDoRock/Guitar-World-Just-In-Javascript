var errorpassword = document.querySelector("#errorpassword");
const $ = document.querySelector.bind(document);
// tabela de pesquisa geral
function tabNavigation(){


    const html = {
        abas: [...$('.abas').children],
        conteudos: [...$('.conteudos').children],
        openTab: $('[data-open]')
    }
    
    
    function esconderConteudos(){
     
        html.conteudos.forEach(section => {
            section.style.display = "none";
            // tenho que ver isso melhor dps em especifico array 
        })
    }
    
    function removerAsClassesAtivas(){
        html.abas.forEach(tab => {
            tab.className = tab.className.replace(" ativa" , "")
        })
    }
    
    function showConteudoTab(aba){
        const tabContent = $('#' + aba);
        tabContent.style.display = 'block';
    }
    
    function selectTab(event){
        esconderConteudos();
        removerAsClassesAtivas();
    
       const target = event.currentTarget;
       showConteudoTab(target.dataset.aba)
    
       target.className += " ativa";
    }
    
    function ouvindoAsmudancas(){
        html.abas.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }
    
    function init(){ 
        esconderConteudos();
        ouvindoAsmudancas();
        
    
        html.openTab.click()
    }
    
    return init();
    
    }
    tabNavigation();

// tabela de pesquisa Cadastro
function abasloglgout(){
    var conts = 0;
    var toEnter = document.querySelector("#toEnter");
    var register = document.querySelector("#registers");

    var register2 = document.querySelector("#register");
    var enter = document.querySelector("#enter")

    if(conts===0){
        enter.setAttribute("class" , "");
        register2.setAttribute("class" , "ride");
        register.setAttribute("class" , "")
        toEnter.setAttribute("class" , "ativa")
    }
    toEnter.addEventListener("click", ()=>{
        enter.setAttribute("class" , "");
        register2.setAttribute("class" , "ride");
        register.setAttribute("class" , "")
        toEnter.setAttribute("class" , "ativa")
        
        conts++;
    })
    register.addEventListener("click" , ()=>{
        register2.setAttribute("class" , "");
        enter.setAttribute("class" , "ride");
        register.setAttribute("class" , "ativa")
        toEnter.setAttribute("class" , "")
        conts++;
    })
}
abasloglgout();
// Aparecer as guitarras 

    
let arrayGuitars = [
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


function visu(){
    var uso = JSON.parse(localStorage.getItem("whUser"));
    document.querySelector("#divDeVisu h2").innerHTML = uso.name;
    console.log(JSON.parse(localStorage.getItem("whUser")))


    var email = uso.email;
    var [nome, dominio] = email.split("@");
    var limiteMinimoCaracteres = 4;
    if (nome.length > limiteMinimoCaracteres) {
        nome = nome.substring(0, limiteMinimoCaracteres) + "****";
    }
    var emailMascarado = nome + "@" + dominio;

    document.querySelector("#email12").innerHTML = `Email: ${emailMascarado}`;
    var endereco = uso.adress;

// Verificar se o endereço tem mais de 4 caracteres
if (endereco.length > 4) {
  endereco = endereco.substring(0, 4) + "*".repeat(endereco.length - 4);
}
document.querySelector("#endereco12").innerHTML = `Endereço: ${endereco}`;
var telefone = uso.telphone;

// Verificar se o telefone tem mais de 4 dígitos
if (telefone.length > 4) {
  telefone = telefone.substring(0, 4) + "*".repeat(telefone.length - 4);
}

document.querySelector("#phone12").innerHTML = `Telefone: ${telefone}`;

   
}

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
console.log(arrayGuitars)
    if(localStorage.getItem("arrayGuitars")){
        arrayGuitars = JSON.parse(localStorage.getItem("arrayGuitars"));
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


// login de usuarios


    
var users = []


const user = {
    name: "",
    email: "",
    password: "",
    adress: "",
    telphone: ""
};
var password = document.querySelector("#passwordId")
var senhafraca = document.querySelector("#senhafraca")
password.addEventListener("input",()=>{
    if(password.value.length <= 5){
        senhafraca.textContent = "Senha fraca";
        senhafraca.setAttribute("class","red")
    }

    if(password.value.length > 5 && password.value.length <= 8){
        senhafraca.textContent = "Senha moderada";
        senhafraca.setAttribute("class","yellow");
    }

    if(password.value.length >= 12) {
        senhafraca.textContent = "Senha forte";
        senhafraca.setAttribute("class","green");
    }

});

document.querySelector("#cad").addEventListener("click", (e)=>{
    
    e.preventDefault();
    var criadaounao = document.querySelector("#criadaounao")
    var name = document.querySelector("#nameId").value;
    var email = document.querySelector("#emailId").value;
    var adress = document.querySelector("#adressId").value;
    var phone = document.querySelector("#phoneId").value;

    

    if(name!=""&&email!=""&&password.value!=""){

        
        criadaounao.setAttribute("class", "right");
    criadaounao.innerHTML = "Usuário criado com sucesso!"
    if(localStorage.getItem("users")){
        users = JSON.parse(localStorage.getItem("users"));
    }
    user.name = name
    user.email = email
    user.adress = adress
    user.telphone = phone
    user.password = password.value
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
}else{
    criadaounao.setAttribute("class", "wrong");
    criadaounao.innerHTML = "insira todas as informações corretamente para poder criar um novo usuario!"
}
});


var whUser = {
    name: "",
    email: "",
    password: "",
    adress: "",
    telphone: ""
}
var userCad

function logadoOuNao(){
    var um = document.querySelector("#um");
var dois = document.querySelector("#dois");

if(userCad === true){
    um.setAttribute("class" , "ContsRegister")
    dois.setAttribute("class" , "ride");
    visu();
}else{
    um.setAttribute("class" , "ride")
    dois.setAttribute("class" , "ContsRegister");
}


}

logadoOuNao()

var rodadaPorSecao = 0;

var problens = document.querySelector("#problens");
var ola = document.querySelector("#ola");
if(localStorage.getItem("userCad")){
    if(JSON.parse(localStorage.getItem("userCad")) === true){
        userCad = true;
        if(rodadaPorSecao===0){
        var inie = JSON.parse(localStorage.getItem("whUser"));
        ola.innerHTML = `Olá, ${inie.name}`
}
    }else{
        userCad = false;
    }
}else{
   userCad = false;
}
document.querySelector("#ent").addEventListener("click", (e) => {
    e.preventDefault();
    rodadaPorSecao++;
    let emailEn = document.querySelector("#emailEn").value;
    let passwordEn = document.querySelector("#passworEn").value;


    var forIf = JSON.parse(localStorage.getItem("users"));
    
    forIf.forEach((e)=>{
        
        if(userCad === false){
        
        if(emailEn === e.email && passwordEn === e.password){
            whUser = {
                name: e.name,
                email: e.email,
                password: e.password,
                adress: e.adress,
                telphone: e.telphone
            }
            userCad = true;
            problens.innerHTML = "";
            console.log(e.name)
            ola.innerHTML = `Olá, ${e.name}!`

            localStorage.setItem("whUser",JSON.stringify(whUser));
            localStorage.setItem("userCad",JSON.stringify(userCad));
           
        }else{
            ola.innerHTML = "cadastre-se"
            problens.innerHTML = "Senha ou email inválidos!"
        }
    }
    
    })
    logadoOuNao()
})


document.querySelector("#paralog").addEventListener("click" , ()=>{
    logadoOuNao();
})
document.querySelector("#controleDeDanos").addEventListener("click" , ()=> {
    localStorage.clear();
})
document.querySelector("#backout").addEventListener("click" , (e)=>{
    e.preventDefault()
    whUser = {
        name:"",
        email: ""
    }
    ola.innerHTML = "Cadastre-se"
    problens.innerHTML = "Insira Seus Cadastros"
    userCad = false;
    localStorage.setItem("whUser",JSON.stringify(whUser));
    localStorage.setItem("userCad",JSON.stringify(userCad));
    logadoOuNao()
})


// inserir novas guitarras
function insertNewGuitar(){
    var p = document.querySelector("#tagPdaCriacao")
    var objTemporario = {
        img: "",
        h2: "",
        h4: "", 
        p: ""
    }

function apareceOuNaoCadastroGuitarra(){
var formDeGuitar = document.querySelector("#formDeNovaGuitarra");
var anuncioDeVenda = document.querySelector("#usuarioNaoCadastrado");

    if(userCad === true){
        formDeGuitar.setAttribute("class" , "form1")
        anuncioDeVenda.setAttribute("class" , "ride");
    }else{
        formDeGuitar.setAttribute("class" , "ride")
        anuncioDeVenda.setAttribute("class" , "");
    }
}
apareceOuNaoCadastroGuitarra();

document.querySelector("#anunc").addEventListener("click" , ()=>{
    apareceOuNaoCadastroGuitarra();
})
document.querySelector("#cadastrarGuitarra").addEventListener("click",(e)=>{
    e.preventDefault()
    p.setAttribute("class" , "ride")
    
    let name = document.querySelector("#nomeguit").value;
    let preco = document.querySelector("#precoguit").value;
    let marca = document.querySelector("#marcaguit").value;
    let imge = document.querySelector("#imgguit").value;
    
    console.log(preco)
    if(name!=""&&preco!=""&&marca!=""&&imge!=""){
        p.setAttribute("class" , "right");
        p.innerHTML = "Inserido com Sucesso! ;)"
        if(localStorage.getItem("arrayGuitars")){
            arrayGuitars = JSON.parse(localStorage.getItem("arrayGuitars"));
        }
        objTemporario = {
            img: imge,
            h2: name,
            h4: marca, 
            p: preco
        }
        arrayGuitars.push(objTemporario);
        localStorage.setItem("arrayGuitars",JSON.stringify(arrayGuitars));
    
    arrayGuitars.forEach(criaElementos)
    }else{
        p.setAttribute("class" , "wrong");
        p.innerHTML = "Por favor insira todos os requisitos"
    }
    
    

}
)}
insertNewGuitar();

console.log(localStorage.getItem("users"))


document.querySelector("#alterarConta").addEventListener("click" ,()=>{
    
    document.querySelectorAll("#divDeVisu .ride").forEach((e)=>{
        e.setAttribute("class" , "noRide")
    })

    document.querySelector("#alterarConta").setAttribute("class" , "ride");
    document.querySelector("#backout").setAttribute("class" , "ride");
})
function sairDoModoDeEdicao(){
    document.querySelectorAll("#divDeVisu .noRide").forEach((e)=>{
        e.setAttribute("class" , "ride")
    })

    document.querySelector("#alterarConta").setAttribute("class" , "noRide");
    document.querySelector("#backout").setAttribute("class" , "noRide");
}
document.querySelector("#sairDoAlterarConta").addEventListener("click", ()=>{
   sairDoModoDeEdicao()
   errorpassword.innerHTML = "";
   
})

function mudamuda(){
    var newName = document.querySelector("#name13").value;

    if(newName!=null){
        console.log(newName)
    }
}
document.querySelector("#alterarContaTrue").addEventListener("click" , ()=>{
    var confirmaSenha = document.querySelector("#confirmInput").value;
    let uso = JSON.parse(localStorage.getItem("whUser"));
    if(confirmaSenha === uso.password){
        console.log("eu fui verificado")
        errorpassword.innerHTML = "";
        
       
    }else{
        errorpassword.innerHTML = "informe a senha correta";
    }
})

