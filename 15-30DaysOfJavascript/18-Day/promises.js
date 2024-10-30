const test = (callback) => {
    setTimeout(() => {
        callback("error occured",[])
    },2000)
}

const callbackFunction = (err, result) => {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
}

test(callbackFunction)

////////////////////////////////////

const doSomething = callback => {
    setTimeout(() => {
        callback(false,[])
    },1500)
}

doSomething((err,result) => {
    if(err){
        return console.log("err occured", err);
    }
    return console.log(result);
})

////////////////////////////////////////////

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("success")
    // reject("error")
    },1500)
})

// console.log(promise);

promise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

////////////////////////////

const API_url = 'https://jsonplaceholder.typicode.com/posts'

fetch(API_url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

///////////////////////////////

async function getData(){
    const response = await fetch(API_url)
    const data = await response.json()
    console.log(data);
}

getData()

/////////////////////////////////

const square = async function (n) {
    return n * n
  }
  
console.log(square(2));

/////////////////////////////

// const squaree = async function (n) {
//     return n * n
// }
// const value = await squaree(2)
// console.log(value)

/////////////////////////////

const getPosts = async () => {
    try{
        const response = await fetch(API_url)
        const data = await response.json()
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

getPosts()