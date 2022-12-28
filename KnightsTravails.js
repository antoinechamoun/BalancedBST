// function shortestPath(start, end){
//     let totalMove = 0
//     if(array[0])
// }

function move(position){
    let x = position[0]
    let y = position[1]
    let ranNum
    if(position[0] > 1 && position[1]>1 && position[0]<7 && position[1]<7){
        ranNum = Math.floor(getRandom(1,2)) * (Math.round(Math.random()) ? 1 : -1)
        x+=ranNum
        if(ranNum===2 || ranNum===-2){
            ranNum = Math.floor(Math.random()+1) * (Math.round(Math.random()) ? 1 : -1)
            console.log(ranNum);
            y+=1
        }
        // return [position[0]+]
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

move([2,2])
// shortestPath([0,0], [1,3])