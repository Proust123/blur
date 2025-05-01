const main = document.querySelector('.main')
const input = document.querySelector('.input')

input.addEventListener('input', function(){
  let value = input.value.length
  main.style.filter = `blur(${15 - value}px)`
})
