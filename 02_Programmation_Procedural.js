//Creation utilisateur
const nomUtil1 = 'Musole Louis'
const emailUtil1 = 'musole@gmail.com'
const amisUtil1 = ['Jack' , 'steven']
console.log(`Nom : ${nomUtil1 }`)
console.log(`Email : ${emailUtil1}`)
console.log(`Amis : ${amisUtil1}`)
console.log('')


//Creation utilisateur
const nomUtil2 = 'Gloria Hule'
const emailUtil2 = 'gloria@gmail.com'
const amisUtil2 = ['John' , 'Alice']
console.log(`Nom : ${nomUtil2 }`)
console.log(`Email : ${emailUtil2}`)
console.log(`Amis : ${amisUtil2}`)
console.log('')


//Creation utilisateur
const nomUtil3 = 'Tresor Louis'
const emailUtil3 = 'tresor@gmail.com'
const amisUtil3 = ['Rhema' , 'David']
console.log(`Nom : ${nomUtil3}`)
console.log(`Email : ${emailUtil3}`)
console.log(`Amis : ${amisUtil3}`)
console.log('')

//Function
function login(email){
    console.log(`${email} est connecte(e)`)
}

function loginout(email){
    console.log(`${email} est deconnecte(e)`)
}

login(nomUtil1)
loginout(nomUtil3)