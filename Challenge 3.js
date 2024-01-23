var genericList = [];
var programmingLanguages = ['JavaScript', 'C', 'C++' , 'Kotlin', 'Python']
programmingLanguages.push('Java', 'Ruby', 'GoLang')
console.log(programmingLanguages)

function showInList(){
    for(var i = 0; i < programmingLanguages.length; i++){
        console.log(`${programmingLanguages[i]}\n`)
    }
}

function showInListReve(){
    var count = programmingLanguages.length - 1;
    while(count ){
        console.log(`${programmingLanguages[count]}\n`)
        count--;
    }
    for(var i = programmingLanguages.length; i >= 0 ; i--){
        console.log(`${programmingLanguages[i]}\n`)
    }
}

function averInList(list){
    for(var i = 0; i < list.length; i++){
        var add =+ list[i];
    }
    return add/list.length;
}

function maxAndMinInList(list){
    maxAndMin = [];
    maxAndMin.push(list[i],list[i])
    for(var i = 0; i < list.length; i++){
        if(list[i] > maxAndMin[0]){
            maxAndMin[0] = list[i];
        }
        if(list[i] < maxAndMin[1]){
            maxAndMin[1] = list[i];
        }
    }
function listSumatory(list){
    var sum = 0;
    for(var i = 0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
}
function listFinder(list, element){
    if(list[i] == element){
        return i;
    }
    return -1;
}
}