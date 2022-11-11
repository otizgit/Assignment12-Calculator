const trig = document.querySelector('.trig')
const calc2 = document.querySelector('.calc2')
const calc1 = document.querySelector('.calc1')
const back = document.querySelector('.back')
const tab = document.querySelector('.tab')
const content = document.querySelectorAll('.content')

trig.addEventListener('click', function(){
    calc2.classList.add('switch')
    calc1.classList.add('remove')
})

back.addEventListener('click', function(){
    calc2.classList.remove('switch')
    calc1.classList.remove('remove')
})
