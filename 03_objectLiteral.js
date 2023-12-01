const utilisateur = {
    noms : 'Musole Louis',
    email : 'musole@gmail.com',
    amis : ['Steven', 'Jonathan'],

    login(){
        console.log(`${this.email} est connecte(e)`)
    },
    logout(){
        console.log(`${this.email} est deconnecte(e)`)
    }
}

console.log(utilisateur)

//Acces aux proprietes d'un object
console.log(utilisateur.noms)
console.log(utilisateur.email)

console.log(utilisateur['noms'])
console.log(utilisateur['email'])

utilisateur.noms = 'Blaise King'
utilisateur['email'] = 'blaise@gmail.com'

console.log(utilisateur)