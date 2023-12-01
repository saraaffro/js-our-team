/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/

let nomeCognomeMemberIesimo;
let ruoloMemberIesimo;
let fotoMemberIesimo;

// creare array di oggetti per rappresentare i membri del team (nome, ruolo, foto)
const memberArray = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "wayne-barnett-founder-ceo-jpg"
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "angela-caroll-chief-editor-jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "walter-gordon-office-manager-jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "angela-lopez-social-media-manager-jpg"
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "scott-estrada-developer-jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "barbara-ramos-graphic-designer-jpg"
    },

]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(i = 0; i < memberArray.length; i++){
    let memberIesimo = memberArray[i];
    
    nomeCognomeMemberIesimo = memberIesimo.nome;
    // console.log("nome e cognome: ", nomeCognomeMemberIesimo);

    ruoloMemberIesimo = memberIesimo.ruolo;
    // console.log("ruolo: ", ruoloMemberIesimo);

    fotoMemberIesimo = memberIesimo.foto;
    // console.log("foto: ", fotoMemberIesimo);
}

// seleziono div
const nomeMember1 = document.querySelector(".name-member1").innerHTML = memberArray[0].nome;
const nomeMember2 = document.querySelector(".name-member2").innerHTML = memberArray[1].nome;
const nomeMember3 = document.querySelector(".name-member3").innerHTML = memberArray[2].nome;
const nomeMember4 = document.querySelector(".name-member4").innerHTML = memberArray[3].nome;
const nomeMember5 = document.querySelector(".name-member5").innerHTML = memberArray[4].nome;
const nomeMember6 = document.querySelector(".name-member6").innerHTML = memberArray[5].nome;

const ruoloMember1 = document.querySelector(".role-member1").innerHTML = memberArray[0].ruolo;
const ruoloMember2 = document.querySelector(".role-member2").innerHTML = memberArray[0].ruolo;
const ruoloMember3 = document.querySelector(".role-member3").innerHTML = memberArray[0].ruolo;
const ruoloMember4 = document.querySelector(".role-member4").innerHTML = memberArray[0].ruolo;
const ruoloMember5 = document.querySelector(".role-member5").innerHTML = memberArray[0].ruolo;
const ruoloMember6 = document.querySelector(".role-member6").innerHTML = memberArray[0].ruolo;




