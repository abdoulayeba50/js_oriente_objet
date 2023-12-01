class Utilisateur {
    //Constructeur : C'est une fonction qui implemente les proprietes d'un object
    constructor( noms, email, ...amis){
        this.noms = noms
        this.email = email
        this.amis = amis
}
    login(){
        console.log(`${this.email} est connecté(e)`)
    }
    logout(){
        console.log(`${this.email} est déconnecté(e)`)
    }
}

class Admin extends Utilisateur{
//Methode accessible uniquement aux admins
supprimerUtilisateur(util){
    utilisateur = utilisateur.filter(utilisateur => {
        return utilisateur.email != util.email;
    })
}
}



const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira')
const util2 = new Utilisateur('Zacl Mwikasa', 'zack@gmail.com', 'Job' ,'Charlie')
const admin = new Admin ('Abdoulaye Ba','ba@gmail.com', 'mamy', 'Amy')

let utilisateur = [util1, util2, admin]
console.log(utilisateur)

admin.supprimerUtilisateur(util)
console.log(utilisateurs)