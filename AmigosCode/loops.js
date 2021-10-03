var names = ["Hagi", "Ronaldo", "Messi", "Sukur", "Buruk" ]

console.log("for i =>")
for(var i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log("******")
console.log("for of =>")
//for of
for (const name of names) {
    console.log(name)
}

console.log("******")
console.log("forEach =>")
names.forEach(element => {
    console.log(element)
});
console.log("forEach =>")
names.forEach(function(element){
    console.log(element)
});


