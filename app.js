const h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const btnHi = document.querySelector('#hi')
const hideBtn = document.querySelector('#hideH1')
const resetBtn = document.getElementById('reset')
console.log(h1)
console.log(btn)
console.log(resetBtn)

let count = 0

function addOne(){
 count = count + 1
 console.log(count)
    h1.innerText = count
}


btn.addEventListener('click', addOne)

btnHi.addEventListener('click', ()=>{
    console.log('hi')
})

function hideH1(){
    if(h1.hasAttribute('hidden')){
        //        remove the hidden attribute
        h1.removeAttribute('hidden')
    }else{
        h1.setAttribute('hidden', '')
    }
    // h1.toggleAttribute('hidden')
    // h1.classList.toggle('hidden')
}

hideBtn.addEventListener('click', hideH1)

resetBtn.addEventListener('click', ()=>{
    count = 0
    h1.innerText = count
})