/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/

// seleziono div
const row = document.querySelector(".row");

// creare array di oggetti per rappresentare i membri del team (nome, ruolo, foto)
const memberArray = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "angela-caroll-chief-editor.jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "barbara-ramos-graphic-designer.jpg"
    },

]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(i = 0; i < memberArray.length; i++){
    let memberIesimo = memberArray[i];
    
    let nomeCognomeMemberIesimo = memberIesimo.nome;
    // console.log("nome e cognome: ", nomeCognomeMemberIesimo);

    let ruoloMemberIesimo = memberIesimo.ruolo;
    // console.log("ruolo: ", ruoloMemberIesimo);

    let fotoMemberIesimo = memberIesimo.foto;
    // console.log("foto: ", fotoMemberIesimo);

    const col = 
    `<div class="col">
        <div class="card">
            <div class="img-container">
                <img src="img/${fotoMemberIesimo}" alt="img">
            </div>
            <div class="description-member">
                <div class="name-member1">${nomeCognomeMemberIesimo}</div>
                <div class="role role-member1">${ruoloMemberIesimo}</div>
            </div>
        </div>
    </div>`

    row.innerHTML += col; 
}




