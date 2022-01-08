// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let distance = Math.abs(hqAddress - pickup);
    return distance;
}
//console.log(distanceFromHqInBlocks(100));

function distanceFromHqInFeet(street){
    let manhattanBlocks = 264;
    let convertToFeet = distanceFromHqInBlocks(street)*manhattanBlocks;
    return convertToFeet;
}
//console.log(distanceFromHqInFeet(47))

function distanceTravelledInFeet(start, destination){
    let feet = Math.abs(distanceFromHqInFeet(destination)-distanceFromHqInFeet(start));
    return feet;
}
let hqAddress = 42
let deliveryAddress = 39
let distanceFeet = distanceTravelledInFeet(hqAddress,deliveryAddress)
console.log(distanceFeet);
//console.log(3*264);

function calculatesFarePrice(start, destination){
    let x = distanceTravelledInFeet(start, destination);
    let priceByFeet;
    let closeDiscount = 400;
    let average = 2000;
    let long = 2500;
    let far = "cannot travel that far";

    if (x <= closeDiscount){
        priceByFeet = 0;
    } else if (x > closeDiscount && x < average){
        priceByFeet = (x - closeDiscount) * .02;
    } else if (x > average && x < long){
        priceByFeet = 25;
    } else if (x > average){
        priceByFeet = far;
    };

    return priceByFeet;
}

console.log(calculatesFarePrice(hqAddress,deliveryAddress));
console.log(392*.02)