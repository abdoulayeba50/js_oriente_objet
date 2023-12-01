function Utilisateur(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...parms) {
    // Héritage des propriétés
    Utilisateur.apply(this, parms);
}

// Liaison d'une méthode ou prototype
Utilisateur.prototype.login = function() {
    console.log(`${this.email} est connecté(e)`);
};

Utilisateur.prototype.logout = function() {
    console.log(`${this.email} est déconnecté(e)`);
};

// Héritage des prototypes (méthodes)
Admin.prototype = Object.create(Utilisateur.prototype);

// Fonction seulement accessible pour l'admin
Admin.prototype.supprimerUtilisateur = function(util) {
    utilisateur = utilisateur.filter(user => {
        return user.email !== util.email;
    });
};

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira');
const util2 = new Utilisateur('Zacl Mwikasa', 'zack@gmail.com', 'Job' ,'Charlie');
const util3 = new Utilisateur('Jean paul', 'Jean@gmail.com', 'Dody', 'Mira');
const admin = new Admin('Abdoulaye Ba', 'ba@gmail.com', 'mamy', 'Amy');

let utilisateurs = [util1, util2, util3, admin];

console.log(utilisateurs);

admin.supprimerUtilisateur(util1);
console.log(utilisateurs);
