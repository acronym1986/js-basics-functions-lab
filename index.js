// Code your solution in this file!w
//test 1
let hqStreet = 42;
function distanceFromHqInBlocks(streetNum){ 
      let distanceBlock = streetNum - hqStreet;
      return Math.abs(distanceBlock);   
}

//test2
let blockLength = 264;
function distanceFromHqInFeet(streetNum){
    let distanceFeet = (streetNum - hqStreet) * blockLength;
    return Math.abs(distanceFeet);
} 

//test 3
function distanceTravelledInFeet(streetNum1, streetNum2) {
    let distanceTravel = (streetNum1 - streetNum2) * blockLength;
    return Math.abs(distanceTravel);
}


//test 4 
let farePrice;

function calculatesFarePrice(start, destination) {
    let feetCount = (start - destination) * blockLength;

    if(Math.abs(feetCount) < 400 ){
        return farePrice = 0;

    }else if(Math.abs(feetCount) > 400 && Math.abs(feetCount) < 2000) {
        return farePrice = 2.56;

    }else if(Math.abs(feetCount) > 2000 && Math.abs(feetCount) < 2500) {
        return farePrice = 25;

    }else if(Math.abs(feetCount) > 2500) {
           return  'cannot travel that far';
         
    }
    
    
}