
//Abstraction : se baser sur L'essentiel et nom sur le detail
function Employe(noms , age, sexe, salaire){
    this.noms = noms;
    this.age = age;
    this.sexe = sexe;
    this.salaire = salaire;
    const allocation = 7000
    const primeDeRisque = 600
    const calculSalaire = function(){
        console.log(`Le salaire final : ${salaire + allocation + primeDeRisque}`)
    }
    this.infoEmploye = function(){
        console.log(`Noms: ${this.noms}`)
        console.log(`Age: ${this.age}`)
        console.log(`Sexe: ${this.sexe}`)
        console.log(`Salaire: ${this.salaire}`)
        calculSalaire()
    }
}

//L'instance
const emp1 = new Employe('Daniel Cruz', 30, 'M', 50000)
const emp2 = new Employe('Fiona Gallagher', 45, 'f', 90000)

emp1.infoEmploye()
console.log('')
emp2.infoEmploye()