const h1 = document.getElementsByTagName("h1")
console.log(h1.length);

const className = document.getElementsByClassName("title-1")
console.log(className);

const id = document.getElementById("title")

id.setAttribute("style","color:blue; background-color:green")
id.setAttribute("title","hi")
// id.setAttribute("class","vusala")

// id.style.color = "blue"
// id.style.backgroundColor = "red"
// id.title = "hii"
// id.className = "vusala"

id.classList.add("vusala")
id.classList.remove("title-4")
id.classList.toggle("title-3") //if exists remove and if doesnt exist add

id.textContent = "new tag"
id.innerHTML = "new <u>tag</u>"

console.log(id);


///////////////////////

/*
let len = h1.length
for(let i = 0; i < len; i++){
    console.log(h1[i]);
}



[...h1].forEach(element => {
    console.log(element);
});

*/

// console.log(document.querySelector('.title-1'));

///////////////////////////////////

/*
console.log(document.querySelectorAll(".title-1"));
console.log(document.querySelectorAll(".title-1").length);
document.querySelectorAll(".title-1").forEach((elem) => console.log(elem))
*/


////////////////////////////////////

const lists = `
 <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Ongoing</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul')
ul.innerHTML = lists
// ul.innerHTML = ''
const wrapper = document.querySelector('.wrapper')
// wrapper.removeChild(ul)

/////////////////////////////////////

const titles = document.querySelectorAll('.title-1')

titles.forEach((elem,index) => {
    if(index % 2 ==0){
        elem.style.color = "orange"
        elem.style.fontSize = "50px"
    }else{
        elem.style.color = "pink"
    }
})