/*
Viene fornito un layout di base in cui è presente * una card di esempio * inserita
staticamente nell’html.Questa card serve solo come timbro del markup necessario per
ottenere il risultato finale e * dovrà quindi essere rimossa dall’html *.
Aggiungere un file js in cui definire * un array di oggetti * che rappresentano
i membri del team.Ogni membro ha le informazioni necessarie per stampare la
relativa card: * Nome, Ruolo e Foto *.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
stampare dinamicamente una card per ogni membro del team.
boNUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
cliccando sul pulsante "add" viene creato un * nuovo oggetto *,
il quale viene * inserito nell'array iniziale * e viene stampata una nuova card
con tutte le informazioni inserite dall'utente.
 */
const contenitore = document.getElementById("Contenitore");
const nome = document.getElementById("Nome");
const ruolo = document.getElementById("Ruolo");
const immagine = document.getElementById("Immagine");
const arrayDipendenti = [
    {
        'nome': "angela Caroll",
        'ruolo': "editor",
        'foto': "img/angela-caroll-chief-editor.jpg"
    },
    {
        'nome': "ciruzzo",
        'ruolo': "designer",
        'foto': "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        'nome': "luca",
        'ruolo': "designer",
        'foto': "img/wayne-barnett-founder-ceo.jpg"
    }
]
function stampaDipendente(dipendente) {

    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    const divCardImage = document.createElement("div");
    divCardImage.classList.add("card-image");
    const cardImage = document.createElement("img");
    divCardImage.appendChild(cardImage);
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    const cardName = document.createElement("h3");
    const cardRuolo = document.createElement("p");
    cardText.appendChild(cardName, cardRuolo);
    teamCard.appendChild(divCardImage, cardText);
    cardName.innerText = dipendente.nome;
    cardRuolo.innerText = dipendente.ruolo;
    contenitore.appendChild(teamCard);
}
for (let i = 0; i < arrayDipendenti.length; i++) {
    const dipendente = arrayDipendenti[i];
    const card = stampaDipendente(dipendente);

}

