let fullName
try{
    let name = "Vusala"
    let surname = "Salimova"
    fullName = name + " " + surname
} catch(err) {
    console.log("Error occured.");
    console.log(err.message);
    console.table(err)
    console.log(err.name);  
}
// finally {
//     console.log("hi");
// }

console.log(fullName);

let age = prompt("Your age:")

try{
    if(age > 29)
        throw new Error("Your are too old for this job")
}catch(error){
    console.log(error);
    console.log(error.name);
    alert(error.message)
}