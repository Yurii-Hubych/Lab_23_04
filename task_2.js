function StringInsertion (string, pos, substring){
    let temp = string.split('')
    temp.splice(pos,0,substring)
    return temp.join('');
}
console.log(StringInsertion('Veronica likes apples', 15, 'sweet '))