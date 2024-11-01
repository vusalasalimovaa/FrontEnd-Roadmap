const aElements = document.querySelectorAll('a')

aElements.forEach(a => {
    a.addEventListener("click",e => {
        const href = e.target.getAttribute('href')
        if(href.includes('http') && !confirm("It seems not good site. are u sure?")){
            e.preventDefault()
        }
    })
})

/////////////////////////////////////////////////

const test1 = document.querySelector('.test1')
const test2 = document.querySelector('.test2')
const test3 = document.querySelector('.test3')

/*
test3.addEventListener('click',() => console.log('test3'), true)
test1.addEventListener('click',() => console.log('test1'), true)
test2.addEventListener('click',() => console.log('test2'), true)
*/

test1.addEventListener('click', e => {
    console.log('test1');
})
test2.addEventListener('click', e => {
    console.log('test2');
})
test3.addEventListener('click', e => {
    console.log('test3');
    // e.stopPropagation()
    e.stopImmediatePropagation()
})


test3.addEventListener('click', e => {
    console.log('test3 2nd event');
})

/////////////////////////////////////////////////

const todos = document.querySelector('.todos')
todos.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', e => {
        e.target.classList.toggle("completed")
        console.log('completed worked.');
    })
})

todos.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation()
        e.target.closest('li').remove()
    })
})

////////////////////////////////////////////

const h2 = document.querySelector('h2')

h2.style.setProperty('color','blue')
h2.style.removeProperty('background-color')

console.log(document.styleSheets[0].cssRules[1].style.removeProperty('background-color'));
console.log(document.styleSheets[0].cssRules[1].style.getPropertyValue('text-decoration'));
console.log(document.styleSheets[0].cssRules[1].style.getPropertyPriority('text-decoration'));

//////////////////////////////////////////////



// isMobile.addEventListener('change', e => {
//     console.log(e);
// })

function mobileDetectHandle() {
    if(isMobile.matches){
        document.body.classList.add('mobile')
    }else{
        document.body.classList.remove('mobile')
    }
}

const isMobile = window.matchMedia('(max-width:480px)')
mobileDetectHandle()
isMobile.addEventListener('change', mobileDetectHandle)


//////////////////////////////////////////////////

const input = document.querySelector('input')
input.addEventListener('select', (e) => {
    console.log(e.target.value.substring(
        e.target.selectionStart,
        e.target.selectionEnd
    ));
    console.log(e.target.selectionStart, e.target.selectionEnd);
})

/////////////////////////////////////////////////

const textarea = document.querySelector('textarea')
const actionsBtns = document.querySelectorAll('.action-btn')
const preview = document.getElementById('preview')

// textarea.addEventListener('select', e => {
//     console.log(e.target.value.substring(
//         e.target.selectionStart,
//         e.target.selectionEnd
//     ));
// })

actionsBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(textarea.selectionStart, textarea.selectionEnd);
        let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)

        switch(e.target.dataset.type){
            case 'bold':
                selectedText = `<strong>${selectedText}</strong>`
                break
            case 'underline':
                selectedText = `<u>${selectedText}</u>`
                break
            case 'uppercase':
                 selectedText = selectedText.toUpperCase()
        }
        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            // 'end',
            // 'start',
            'select'
        )
        textarea.focus()
        preview.innerHTML = textarea.value
        console.log(e.target.dataset.type);
    })
})

textarea.addEventListener('keyup', (e) => {
    preview.innerHTML = e.target.value
})

/////////////////////////////////////////////

const inputNumber = document.querySelector('input[type=number]')
const inputs = document.querySelectorAll('input.test')
const decBtn = document.querySelector('.dec-btn')
const incBtn = document.querySelector('.inc-btn')
const pickerBtn = document.querySelector('.picker-btn')
const timeInput = document.querySelector('.time')
const dateInput = document.querySelector('.date')
const fileInput = document.querySelector('.file')

decBtn.addEventListener('click', e => {
    inputNumber.stepDown()
    inputs.forEach(input => {
        input.stepDown()
    })
})

incBtn.addEventListener('click', e => {
    inputNumber.stepUp()
    inputs.forEach(input => {
        input.stepUp()
    })
})

pickerBtn.addEventListener('click', e => {
    // timeInput.showPicker()
    // dateInput.showPicker()
    fileInput.showPicker()
})

