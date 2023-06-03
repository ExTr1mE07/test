let servicesYellowText = document.getElementById('services-yellow-text')
let servicesWords = [
    'Our Services'
]
let charTurn = 0
let wordTurn = 0
servicesWord()
function servicesWord(){
    if(charTurn <= servicesWords[0].length){
        servicesYellowText.innerHTML = servicesWords[0].substr(0, charTurn)
        charTurn++
        setTimeout(servicesWord, 200)
    }else{
        setTimeout(deleteWord, 800)
    }
}

function deleteWord(){
    if(charTurn >= 0){
        servicesYellowText.innerHTML = servicesWords[0].substr(0, charTurn)
        charTurn--
        setTimeout(deleteWord, 200)
    }else{
        setTimeout(servicesWord, 600)
    }
}