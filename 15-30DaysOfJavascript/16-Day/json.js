let sampleJSON = `
{
    "users": [
        {
            "firstName":"Vusala",
            "lastName":"Salimova",
            "age":20,
            "major":"PAM"
        },
        {
            "firstName":"Gunel",
            "lastName":"Ahmedzade",
            "age":18,
            "major":"IT"
        },
        {
            "firstName":"Xadica",
            "lastName":"Veliyeva",
            "age":21,
            "major":"History"
        }

    ]
}
`

console.log(typeof sampleJSON)

const usersObj = JSON.parse(sampleJSON)
console.log(typeof usersObj);
console.log(usersObj);

const usersObject = JSON.parse(sampleJSON, (key,value) => {
    return key == "firstName" ? value.toUpperCase() : value
})

console.log(usersObject);

const categories = [
    {
        name: "css",
        lesson: 5
    },
    {
        name: "javascript",
        lesson: 16
    },
]

const categoriesJSON = JSON.stringify(categories)
const categoriesJSONN = JSON.stringify(categories,["name"],5)

console.log(categoriesJSON);
console.log(categoriesJSONN);

