//Constructor Function : maquette (model) pour la creation des objects

function utilisateur( noms, email, ...amis){
    this.noms = noms
    this.email = email
    this.amis = amis
    this.login = function(){
        console.log(`${noms} est conncte(e)`)
    }
    this.logout = function(){
        console.log(`${noms} est deconncte(e)`)
    }
}
 //Une instance
 const util1 = new utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira')
 const util2 = new utilisateur('Zacl Mwikasa', 'zack@gmail.com', 'Job' ,'Charlie')
 const util3 = new utilisateur('Hilaire Guy', 'guy@gmail.com', 'Tarzan')
 const util4 = new utilisateur('Jack Ma', 'jack@gmail.com', 'Elon Musk', 'Bill Gates')

 console.log(util1)
 console.log(util2)
 console.log(util3)
 console.log(util4)

//Acces au methodes
 util1.login()
 util2.logout()