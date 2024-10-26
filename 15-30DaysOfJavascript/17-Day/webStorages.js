// localStorage.setItem("name","vusala")

console.log(localStorage);
console.log(localStorage.getItem("name"));

const names = ["vusala","gunel","aynur"]
const user = {
    name:"aygun",
    surname:"salimova"
}

console.log(localStorage.setItem("names",JSON.stringify(names)));
console.log(localStorage.setItem("user",JSON.stringify(user)));
console.log(localStorage);

console.log(JSON.parse(localStorage.getItem("user")));

localStorage.removeItem("name")
console.log(localStorage);

// localStorage.clear()


/////////////////////////////////////

let basket = JSON.parse(localStorage.getItem("basket")) || []

let products = [
    {
        id:1,
        title:"Asus Tuf Gaming Notebook",
        price:2400
    },
    {
        id:2,
        title:"Lenova",
        price:2000
    },
    {
        id:3,
        title:"Iphone 16 pro Max",
        price:4000
    },
]

function saveToLocalStorage() {
    localStorage.setItem("basket",JSON.stringify(basket))
}

function addToBasket(productId) {
    basket.push(productId)
    saveToLocalStorage()
}

function removeBasket(productId) {
    basket = basket.filter(id => id !== productId)
    saveToLocalStorage()
}

function totalPrice() {
    return basket.reduce((prev,productId) => {
        let product = products.find(p => p.id == productId)
        return prev += product.price
    },0)
}

addToBasket(2)
addToBasket(3)


console.log(basket);
removeBasket(2)
console.log(basket);
console.log(totalPrice());
