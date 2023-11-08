console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 1; i <= 50; i++){
     if(i % 2 !== 0){
        console.log(`Odd ${i}`)
     }
               
    }
}
printOdds();

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name,age){
    if(age >= 16){
        console.log(`Hello, ${name} you are old enough to drive!`)
    }
    else{
        console.log(`Sorry, ${name} you are not old enough to drive.`)
    }
    
}
checkAge("Taj", 31);
//Exercise 3
console.log("EXERCISE 3: \n=============\n")
function checkQuadrant(x,y){
    if(x > 0 && y> 0){
        return "Quadrant 1";
        
    }else if (x < 0 && y < 0){
        return " Quadrant 2";
    }else if (x < 0 && y < 0){
        return " Quadrant 3";
    }else if(x > 0 && y > 0){
        return " Quadrant 4";
    }else if (x == 0 && y != 0){
        return "X Axis";
    }else if(x != 0 && y == 0){
        return "Y Axis";
    }else{
        return "Origin"
    }
}

console.log (checkQuadrant(11,1));
console.log (checkQuadrant(-11,1));
console.log (checkQuadrant(-1,-11));
console.log (checkQuadrant(1,-11));
console.log (checkQuadrant(0,-1));
console.log (checkQuadrant(11,0));
console.log (checkQuadrant(0,0));