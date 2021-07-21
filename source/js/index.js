
// le button et deja programmer en html, donc a l'envoi du formulaire, l'action effectuer fait appelle a setData fonction

const name = () => {

    // on recupere l'endroit ou afficher le nom, ou message
    let sayHello = document.getElementById('sayHello');
    // on recupere le nom renseigné au préalable par l'utilisateur dans le localStorage
    let nameStorage = localStorage.getItem('nom');

    // on crée notre condition si, si celle a deja ete renseigné faite tel ou tel chose, sinon ..
    if (nameStorage == null) {

        sayHello.innerHTML = 'Bonjour à toi l\'ami, nous ne nous somme pas encore présenté';

    } else {

        sayHello.innerHTML = ` Salut ${nameStorage} !`

    };

};

function setData() {

    // recupere le nom dans l'input
    let pseudo = document.getElementById('pseudo').value;
    // envoie au local les infos, premiere parametre ce que c'est , la c'est un nom que l'on rentre, et second parametre l'entrer qui a stocker la valeur renseigner une sorte de KEY:VALUE clé valeur. getitem recupere la valeur du storage, setitem l'envoi au storage
    localStorage.setItem('nom', pseudo);


};

name();
