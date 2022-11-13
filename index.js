function writeCards(wombo, event){
    const names = []
    for (let i = 0; i < wombo.length; i++) {
        names.push(`Thank you, ${wombo[i]}, for the wonderful ${event} gift!`)
    }
    return names
}
function countDown(n){
    let down = n;
    while (down >= 0) {
        console.log(down--);
    }
}