// localStorage.setItem("name","vusala")

// console.log(localStorage);
// console.log(localStorage.getItem("name"));

// const names = ["vusala","gunel","aynur"]
// const user = {
//     name:"aygun",
//     surname:"salimova"
// }

// console.log(localStorage.setItem("names",JSON.stringify(names)));
// console.log(localStorage.setItem("user",JSON.stringify(user)));
// console.log(localStorage);

// console.log(JSON.parse(localStorage.getItem("user")));

// localStorage.removeItem("name")
// console.log(localStorage);

// localStorage.clear()


/////////////////////////////////////

let basket = JSON.parse(localStorage.getItem("basket")) || []

const products = [
    {
        id:1,
        title:"Asus Tuf Gaming Notebook",
        price:2500
    },
    {
        id:2,
        title:"Lenova",
        price:2000
    },
    {
        id:3,
        title:"Iphone 14 Pro Max",
        price:3000
    }
]

function setToLocalStorage() {
    localStorage.setItem("basket",JSON.stringify(basket))
}

function addToBasket(productId) {
    const basketIndex = basket.findIndex(b => b.productId == productId)
    // console.log(basketIndex);
    if(basketIndex > -1){
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }
    }else{
        basket.push({
            productId,
            amount:1
        })
    }
    setToLocalStorage()
}

function removeBasket(productId) {
    const item = basket.find(b => b.productId == productId)
    if(item){
        if(item.amount == 1){
            basket = basket.filter(p => p.productId !== productId)
        } else{
            basket = basket.map(i => {
                if(i.productId === productId){
                    i.amount -= 1
                }
                return i
            })
        }
    }
    // console.log(basket);
    setToLocalStorage()
}

function totalPrice() {
    return basket.reduce((prev,basket) => {
        const product = products.find(p => p.id == basket.productId)
        return prev += product.price * basket.amount
    },0)
}

// addToBasket(2)
// addToBasket(3)
// addToBasket(1)
// addToBasket(1)
// addToBasket(1)
// addToBasket(1)
// addToBasket(1)
// addToBasket(1)
// addToBasket(1)


// removeBasket(1)
// removeBasket(3)
// removeBasket(2)

console.log(basket);
console.log(localStorage);
console.log(totalPrice());
// localStorage.clear()