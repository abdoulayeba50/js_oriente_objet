function utilisateur( noms, email, ...amis){
    this.noms = noms
    this.email = email
    this.amis = amis
}

//Liaison d'une methode ou prototype
utilisateur.prototype.login = function(){
    console.log(`${email} est connecte(e)`)
}
utilisateur.prototype.logout = function(){
    console.log(`${email} est deconnecte(e)`)
}

const util1 = new utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira')
console.log(util1);