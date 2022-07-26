console.log('Hii')

const quietBtn = document.getElementById('quiet-btn')
quietBtn.addEventListener('click', makeQuiet)
    function makeQuiet(e){
        console.log(e)
        const p = document.getElementById('patrick')
        let text = p.innerText
        p.innerText = text.toLowerCase()
    };

const loudBtn = document.getElementById('loud-btn')
document.getElementById('loud-btn').addEventListener('click', makeLoud)
    function makeLoud(e){
        console.log(e)
        const p = document.getElementById('patrick')
        let text = p.innerText
        p.innerText = text.toUpperCase()
    };

document.getElementById('sarc-btn').addEventListener('click', makeSarc)    
function makeSarc (e) {
    const p = document.getElementById('patrick')
    const txt = p.innerText
    let result = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let i = 0
    for (let char of txt) {
        if (alphabet.includes(char)) {
            if (i % 2 === 0) char = char.toLowerCase()
            if (i % 2 === 1) char = char.toUpperCase()
            i++
        }
        result += char
    }
    p.innerText = result
}