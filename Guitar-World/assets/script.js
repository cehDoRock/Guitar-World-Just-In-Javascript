const $ = document.querySelector.bind(document);
// tabela de pesquisa geral
function tabNavigation(){

    const html = {
        abas: [...$('.abas').children],
        conteudos: [...$('.conteudos').children],
        openTab: $('[data-open]')
    }
    console.log(html.abas)
    
    
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






function catalog(){
    let catalogArray = [
        {
            image:"assets/img/guitarras/Gui1.jpg",
            h2:"Turtle Guitar",
            p:"R$1.970,99"
        },
        {
            image:"assets/img/guitarras/Gui1.jpg",
            h2:"Turtle Guitar",
            p:"R$1.970,99"
        },
        {
            image:"assets/img/guitarras/Gui1.jpg",
            h2:"Turtle Guitar",
            p:"R$1.970,99"
        }
    ]

    function addInTheWorld(e , i, array){
        
    }

    catalogArray.forEach(addInTheWorld);
    
}
catalog()


var users = []
const user = {
    name : "",
    email : "",
    password : ""
};

document.querySelector("#cad").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Gravando na LocalStorage");
    if(localStorage.getItem("users")){
        users = JSON.parse(localStorage.getItem("users"));
    }
    user.name = document.querySelector("#nameId").value;
    user.email = document.querySelector("#emailId").value;
    user.password = document.querySelector("#passwordId").value;
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    console.log(localStorage.getItem("users"));
});

var whUser = {
    name: "",
    email:""
}
var userCad = false;

var problens = document.querySelector("#problens");
var ola = document.querySelector("#ola");
document.querySelector("#ent").addEventListener("click", (e) => {
    e.preventDefault();
    let emailEn = document.querySelector("#emailEn").value;
    let passwordEn = document.querySelector("#passworEn").value;


    var forIf = JSON.parse(localStorage.getItem("users"));

    forIf.forEach((e)=>{
        if(userCad === false){
        if(emailEn === e.email && passwordEn === e.password){
            whUser = {
                name: e.name,
                email: e.email
            }
            userCad = true;
            problens.innerHTML = "";
            ola.innerHTML = `Olá ${e.name}!`

            localStorage.setItem("whUser",JSON.stringify(whUser));
            localStorage.setItem("userCad",JSON.stringify(userCad));
           
        }else{
            ola.innerHTML = ""
            problens.innerHTML = "Senha ou email inválidos!"
        }
    }else{
        problens.innerHTML = "usuario ja cadastrado";
    }
    })
    
})
document.querySelector("#controleDeDanos").addEventListener("click" , ()=> {
    localStorage.clear();
    
    console.log(localStorage.getItem("users"));
})


console.log(localStorage.getItem("userCad"))

