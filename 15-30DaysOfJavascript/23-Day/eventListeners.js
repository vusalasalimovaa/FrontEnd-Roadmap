const button = document.getElementById('btn')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')
const button5 = document.getElementById('btn5')
const img = document.querySelector('img')
const input = document.getElementById('name')
const inputColor = document.getElementById('color-picker')
const saveButton = document.getElementById('save-btn')
const select = document.getElementById('gender')
const inputCheckBox = document.getElementById("check")
const form = document.getElementById('form')

button.addEventListener('click', function(e){
    console.log('Clicked to button');
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.textContent);
})

// button.onclick = e => {
//     console.log('button clicked second time');
//     console.log(e);
// }

button3.addEventListener('dblclick', e => {
    console.log('click me double');
    console.log(e);
})

button4.addEventListener('mouseenter', e => {
    console.log('hover on button');
    console.log(e);
})

button5.addEventListener('mousemove', e => {
    console.log('hover on button');
    console.log(e);
})

////////////////////////////////

const clickMe =  e => {
    console.log('clicked me');
    console.log(e);
}

/////////////////////////////

img.addEventListener('load', e => {
    console.log('img downloaded');
})

img.addEventListener('error', e => {
    console.log('error occured');
    e.target.src = "noimg.jpg"
})

////////////////////////////

input.addEventListener('input',e => {
    if(e.target.value){
        e.target.classList.remove('error')
    }
    console.log(e.target.value);
})

input.addEventListener('blur', e => {
    console.log('odak kayboldu');
    if(e.target.value == ''){
        e.target.classList.add('error')
    }
})

inputColor.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})


select.addEventListener('change', e => {
    console.log([...e.target.selectedOptions].map(el => el.value));
})

saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        inputColor.value,
        inputCheckBox.checked,
        form.elements['car'].value,
        // form.elements.car.value
    );
})

////////////////////////////////////

document.body.addEventListener('keydown', e => {
    console.log(e.key, e.code);
})