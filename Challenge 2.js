function IMC(weight, heigth){
    return weight/heihgt >= 25 ? weight/heihgt >= 30 ? "Obesity" : "Overweight" : "Normal";
}

function factorial2(n){
    return factorial(n-1) * n;
}

function dolRea(dolar){
    return dolar*4,80
}

function arPer(lenght, width){
    return `Perimeter: ${2*(lenght + width)}\nArea: ${lenght*width}`;
}

function arPerCirc(radius){
    return `Perimeter: ${2*3.14*radius}\nArea: ${3.14*radius**2}`;
}

function multiTable(n){
    count = 1;
    while(count <= 10){
        console.log(`${n} * ${count} = ${n*count}`)
        count++;
    }
}

console.log(factorial2(4))