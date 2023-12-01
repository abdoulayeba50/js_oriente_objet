//Polymorphisme : Capacite d'un object a prendre plusieurs formes

class User{
    constructor(noms){
        this.noms = noms;
    }
    login(){
        console.log(`${this.noms} connecte entant qu'utilisateur`);
    }
}

class Admin extends User {
    login(){
        console.log(`${this.noms} connecte entant qu'admin`);
    }
}

const user1 = new User('Musole Louis')
const admin = new Admin('Blaise Tarzan')
user1.login()
admin.login()