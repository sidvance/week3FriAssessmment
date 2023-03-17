

// 1. grab html Element
// 2. write function
// 3. combine first 2 steps w/ event listener

let pepPizza = document.querySelector('#pizza1')

const pepperoni = () => {
    alert('Pepperoni is the best!')
}

pepPizza.addEventListener('click', pepperoni)


let bbqPizza = document.querySelector('#pizza2')

const bbq = () => {
    alert('Everyone loves bbq chicken')
}

bbqPizza.addEventListener('dblclick', bbq)


let hiPizza = document.querySelector('#pizza3')

const hawaiian = () => {
    alert('I love pineapple on my pizza!')
}

hiPizza.addEventListener('click', hawaiian)


let myForm = document.querySelector('form')

const suggestPizza = (evt) => {
    evt.preventDefault()
    alert('Nice suggestion weirdo')
}

myForm.addEventListener('submit', suggestPizza)