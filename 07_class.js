//CLasse : C'est une maquette (model) pour creer des objects

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

 const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira')
 const util2 = new Utilisateur('Zacl Mwikasa', 'zack@gmail.com', 'Job' ,'Charlie')

 console.log(util1)
 console.log(util2)

 //Acces au methodes
 util1.login()
 util2.logout()