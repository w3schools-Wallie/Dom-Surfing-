const h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const btnHi = document.querySelector('#hi')
const hideBtn = document.querySelector('#hideH1')

console.log(h1)
console.log(btn)

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
}

hideBtn.addEventListener('click', hideH1)
