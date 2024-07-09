// Code your solution here
const drivers = ['Bobby','Sammy','Sally','Annette','Sarah','bobby'];
 
function findMatching(arr,name){
    return arr.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));

}

function fuzzyMatch(arr, name){
    return arr.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));

}

function matchName(arr, name){
    return arr.filter(
        driver => driver.name.toLowerCase() === name.toLowerCase()
        
  );
}

