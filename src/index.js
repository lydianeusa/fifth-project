
// EXO 1
const result1 = document.querySelector('.result1')
const btns1 = document.querySelectorAll('.btn-1')

btns1.forEach((el) => {
    el.addEventListener('click', (e) => {
        result1.style.backgroundColor = e.target.textContent
    })
})

// EXO 2
// const textToDisplay2 = document.querySelector('.text-to-display-2')
// const form2 = document.querySelector('.form-2')
// const input2 = document.querySelector('.input-2')

// form2.addEventListener('submit', (e) => {
//     e.preventDefault()
//     textToDisplay2.textContent = input2.value;
// })

// // EXO 3
// const textToDisplay3 = document.querySelector('.text-to-display-3')
// const input3 = document.querySelector('.input-3')

// input3.addEventListener('input', (e) => {
//     textToDisplay3.textContent = e.target.value
// })

// EXO 4
const inp = document.querySelector(".inp")
const result4 = document.querySelector('.result-4')

inp.addEventListener('input', (e) => {
    result4.textContent = e.target.value
})



// // EXO 5
// const textToDisplay5 = document.querySelector('.text-to-display-5')
// const input5 = document.querySelector('.input-5')


// input5.addEventListener('input', (e) => {
//     textToDisplay5.textContent = e.target.value
// })

// EXO 6
const select6 = document.querySelector('.language-select')
const result6 = document.querySelector('.result-6')

select6.addEventListener('change', (e) => {
    result6.textContent = e.target.value
})

// // EXO 7
const result7 = document.querySelector('.result-7')
const input7 = document.querySelector('.input-7')
input7.addEventListener('input', (e) => {
    result7.style.backgroundColor = e.target.value
})

// // EXO 8
const result8 = document.querySelector('.result-8')
const btns8 = document.querySelectorAll('.btn-8')

btns8.forEach((el) => {
    el.addEventListener('click', (e) => {
        result8.style.backgroundColor = e.target.getAttribute('data-color')
    })
})

// // EXO 9
const result9 = document.querySelector('.result-9')
const checkboxes = document.querySelectorAll('.checkbox-9')

checkboxes.forEach((checkbox) => {
    el.addEventListener('change', (e) => {
        result9.textContent = `${checkboxes[0].checked ? checkboxes[0].value : 'dev'}${checkboxes[0].checked && checkboxes[1].checked ? ' - ' : ''}${checkboxes[1].checked ? checkboxes[1].value : 'music'}`
    })
})

