// Code your solution here
const drivers=('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')

function findMatching(drivers, match){
return drivers.filter ((m) => m.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, match){
    return drivers.filter((m) => m.indexOf(match) === (0));
}
function matchName (drivers, match) {
  return drivers.filter((m) => m.name.toUpperCase() === match.toUpperCase());
}
