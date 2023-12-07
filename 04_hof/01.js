const powertwo = (n) => {
    return n ** 2
}


function powerCube(powertwo,n){
    return powertwo(n) *n
}

console.log(powerCube(powertwo,3));