function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, prefix) {
    return drivers.filter(driver => driver.startsWith(prefix));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };