// Code your solution in this file!
const HQ_STREET = 42;
const FEET_PER_BLOCK = 264;
const FREE_FEET = 400;
const MAX_SHORT_DISTANCE_FEET = 2000;
const MAX_TRAVEL_FEET = 2500;
const LONG_DISTANCE_PRICE = 2500;
const PRICE_PER_FOOT = 2;
const CENTS_PER_DOLLAR = 100;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - HQ_STREET);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock)  * FEET_PER_BLOCK;
}

function calculatesFarePrice (start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance > MAX_TRAVEL_FEET) {
    return "cannot travel that far";
  }

  if(distance <= FREE_FEET) {
    return 0;
  }

 if(distance > MAX_SHORT_DISTANCE_FEET) {
   return LONG_DISTANCE_PRICE / CENTS_PER_DOLLAR;
 }


  return ((distance - FREE_FEET) * PRICE_PER_FOOT) / CENTS_PER_DOLLAR;
}

console.log(calculatesFarePrice(5,6))