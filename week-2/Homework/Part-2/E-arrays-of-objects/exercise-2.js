/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


let destinationNamesWithin500Kms = travelDestinations.map(travelDestination => {
    if (travelDestination.distanceKms <= 500) {
        return travelDestination.destinationName
    }; 
})
let destinationNameReachableByFerry = travelDestinations.map(travelDestination => {
    if (travelDestination.transportations.includes('ferry')) {
        return (travelDestination.destinationName)
    }; 
})// Complete here

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations.map(travelDestination=>{

if(travelDestination.distanceKms>=300 && travelDestination.transportations.includes('train')){
  return travelDestination.destinationName

}
// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)


})

        /*
        DO NOT EDIT ANYTHING BELOW THIS LINE
        */

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);