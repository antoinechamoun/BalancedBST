function selectShortestOne(start, end){
    let finalArray = []
    while(finalArray.length<20){
        finalArray.push(selectShortest(start, end))
        finalArray.sort(function(a, b){return a.length - b.length});
    }
    return finalArray[0]
}

function selectShortest(start, end){
    let array =[]
    while(array.length<300){
        array.push(shortestPath(start, end))
        array.sort(function(a, b){return a.length - b.length});
    }
    return array[0]
}

function shortestPath(start, end){
    let array = start
    let path = []
    let found =false
    let result = move(array)
    path.push(result)

    let counter = 0
    while((result[0] !== end[0] || result[1] !== end[1]) && counter<7){
        result=move(result)
        path.push(result)
        counter++
    }

    found = path.find((array)=>array[0]===end[0] && array[1]===end[1])
    if(!found){
        shortestPath(start, end)
    }else if(counter === 1){
        return path
    }

    return path
}

// Move knight functionality
function move(position){
    let x = position[0]
    let y = position[1]
    let ranNum 

    if(x > 1 && y>1 && x<7 && y<7){
        // Case inside board
        ranNum = Math.floor(getRandom(1,2)) * (Math.round(Math.random()) ? 1 : -1)
        x+=ranNum
        if(ranNum===2 || ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }
    }else if(x===0 && y>1 && y<7){
        // Case border bottom
        ranNum = Math.floor(getRandom(1,2))
        x+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }
    }else if(y===0 && x>1 && x<7){
        // Case border left
        ranNum = Math.floor(getRandom(1,2))
        y+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }
    }else if(x===8 && y>1 && y<7){
        // Case border right
        ranNum = -Math.floor(getRandom(1,2)) 
        x+=ranNum
        if(ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum = 2 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }
    }else if(y===8 && x>1 && x<7){
        // Case border top
        ranNum = -Math.floor(getRandom(1,2)) 
        y+=ranNum
        if(ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum = 2 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }
    }else if(x===0 && y===0){
        // Case corner bottom-left
        ranNum = Math.floor(getRandom(1,2))
        x+=ranNum
        if(ranNum===2){
            ranNum = 1
            y+=ranNum
        }else{
            ranNum=2
            y+=ranNum
        }
    }else if(x===8 && y===8){
        // Case corner top-right
        ranNum = -Math.floor(getRandom(1,2))
        x+=ranNum
        if(ranNum===-2){
            ranNum = -1
            y+=ranNum
        }else{
            ranNum = -2
            y+=ranNum
        }
    }else if(x===0 && y===8){
        // Case corner top-left
        ranNum = Math.floor(getRandom(1,2))
        x+=ranNum
        if(ranNum===2){
            ranNum = -1 
            y+=ranNum
        }else{
            ranNum = -2
            y+=ranNum
        }
    }else if(x===8 && y===0){
        // Case corner bottom-right
        ranNum = -Math.floor(getRandom(1,2))
        x+=ranNum
        if(ranNum===-2){
            ranNum = 1 
            y+=ranNum
        }else{
            ranNum = 2
            y+=ranNum
        }
    }else if(x===1 && y>1 && y<7){
        do{
            ranNum = getRandom(-1,2)
        }while(ranNum===0)
        x+=ranNum
        if(ranNum===2 || ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }
    }else if(y===1 && x>1 && x<7){
        do{
            ranNum = getRandom(-1,2)
        }while(ranNum===0)
        y+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }
    }else if(x===7 && y>1 && y<7){
        do{
            ranNum = getRandom(-2,1)
        }while(ranNum===0)
        x+=ranNum
        if(ranNum===2 || ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }
    }else if(y===7 && x>1 && x<7){
        do{
            ranNum = getRandom(-2,1)
        }while(ranNum===0)
        y+=ranNum
        if(ranNum===2 || ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum=2 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }
    }else if(x===0 && y===1){
        ranNum = getRandom(1,2)
        x+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 
            y+=ranNum
        }
    }else if(y===0 && x===1){
        ranNum = getRandom(1,2)
        y+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum=2 
            x+=ranNum
        }
    }else if(x===8 && y===7){
        ranNum = getRandom(-2,-1)
        x+=ranNum
        if(ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=-2 
            y+=ranNum
        }
    }else if(y===8 && x===7){
        ranNum = getRandom(-2,-1)
        y+=ranNum
        if(ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            x+=ranNum
        }else{
            ranNum=-2 
            x+=ranNum
        }
    }else if(x===7 && y===7){
        do{
            ranNum = getRandom(-2,1)
        }while(ranNum === 0)
        x+=ranNum
        if(ranNum===-2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=-2 
            y+=ranNum
        }
    }else if(x===1 && y===1){
        do{
            ranNum = getRandom(-1,2)
        }while(ranNum === 0)
        x+=ranNum
        if(ranNum===2){
            ranNum = 1 * (Math.round(Math.random()) ? 1 : -1)
            y+=ranNum
        }else{
            ranNum=2 
            y+=ranNum
        }
    }
    
    return[x,y]
}

// Get random number function
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

console.log(selectShortestOne([0,6], [7,1]))