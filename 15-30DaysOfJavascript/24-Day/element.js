const ul = document.querySelector('ul')
// const deleteButtons = ul.children

console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

const deleteButtons = document.querySelectorAll('.delete-btn')

deleteButtons.forEach(elem => {
    elem.addEventListener('click', e => {
        elem.remove()
        // console.log(ul.childElementCount);
        if(ul.childElementCount == 0){
            // ul.remove()
            ul.innerHTML = 'there is not li anymore'
        }
    })
})

//////////////////////////////////////////

const h2 = document.querySelector('h2')

console.log(h2.attributes);
console.log(h2.attributes.title);
console.log(h2.attributes.title.value);

for(let elem of h2.attributes){
    console.log(elem.name, elem.value);
}

/////////////////////////////////

const test = document.querySelector(".test")
console.log(test.clientHeight);
console.log(test.clientWidth);

///////////////////////////////////////

const title = document.querySelector('.title')

console.log(title.previousElementSibling);
console.log(title.nextElementSibling);
console.log(title.nextElementSibling.nextElementSibling);

//////////////////////////////////////////

const scrollContent = document.querySelector('.scroll-content')
console.log(scrollContent.scrollHeight);

const scrollDownBtn = document.getElementById('scroll-down')
scrollDownBtn.addEventListener('click', () => {
    // console.log(scrollContent.scrollTop);
    scrollContent.scrollTop += 50
})

const scrollUpBtn = document.getElementById('scroll-up')
scrollUpBtn.addEventListener('click', () => {
    // console.log(scrollContent.scrollTop);
    scrollContent.scrollTop -= 50
})



const scrollContent2 = document.querySelector('.scroll-content2')
console.log(scrollContent2.scrollWidth, scrollContent2.clientWidth);

const scrollRightBtn = document.getElementById('scroll-right')
const scrollLeftBtn = scrollContent2.nextElementSibling



if(scrollContent2.scrollLeft == 0){
    scrollLeftBtn.setAttribute('disabled','disabled')
}else{
    scrollLeftBtn.removeAttribute('disabled')
}

scrollRightBtn.addEventListener('click', () => {
    // console.log(scrollContent2.scrollLeft);
    scrollContent2.scrollLeft += 50
})

scrollLeftBtn.addEventListener('click', (e) => {
    // console.log(scrollContent2.scrollLeft);
    console.log(e.target.tagName);
    scrollContent2.scrollLeft -= 50
})

scrollContent2.addEventListener('scroll', e => {
    console.log('scroll oldu!', e.target.scrollLeft);
    if(scrollContent2.scrollWidth - scrollContent2.clientWidth == e.target.scrollLeft){
        scrollRightBtn.setAttribute('disabled','disabled')
    }else{
        scrollRightBtn.removeAttribute('disabled')
    }
    if(e.target.scrollLeft == 0){
        scrollLeftBtn.setAttribute('disabled','disabled')
    }else{
        scrollLeftBtn.removeAttribute('disabled')
    }
})

///////////////////////////////////////

const dodge = document.querySelector('.dodge')
dodge.setAttribute('style','color:red; background-color: blue')

const h3 = document.createElement('h3')
h3.textContent = 'heading'

const p = document.createElement('p')
p.textContent = 'paragraph'

dodge.after(h3)
dodge.before(p)
dodge.after(h3,p)

dodge.prepend(h3,p)
dodge.append(h3,p,"vusala")

console.log(dodge.getBoundingClientRect());
///////////////////////////////////////

const deleteButton = document.querySelectorAll('.delete-button')
const secondUl = document.getElementById('second-ul')

deleteButton.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.closest('li').remove();
        if(secondUl.childElementCount == 0){
            secondUl.innerHTML = 'li bitdi'
        }
    })
})

/////////////////////////////////////////

const aElements = document.querySelectorAll('a')

aElements.forEach(a => {
    if(a.hasAttribute('title')){
        a.setAttribute('style','background-color: yellow')
    }
    // if(a.hasAttributes()){
    //     a.setAttribute('style','background-color: red')
    // }
})

//////////////////////////////////////////

const buttons = document.querySelectorAll('button')

for(let btn of buttons){
    if(btn.matches('button[type=submit][disabled]')){
        btn.setAttribute('style','font-size: 40px')
    }
}

///////////////////////////////////////

const button = document.getElementById('toggleButton')
const input = document.getElementById('toggleInput')
  
button.addEventListener('click', () => {
  input.toggleAttribute('disabled')
})