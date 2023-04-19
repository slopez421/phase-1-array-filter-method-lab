// Code your solution here
// function findMatching(drivers) {
//     const names = name.filter(name => name === "name")
//     if(name){
//     return names}
// }

function findMatching(drivers, singleDriver) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === singleDriver.toLowerCase() 
    })
  } debugger

  function fuzzyMatch(drivers, singleDriver) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, singleDriver.length) === singleDriver.toLowerCase()
    })
  }

  function matchName(drivers, singleDriver) {
    return drivers.filter(function (driver) {
        return driver.name === singleDriver
    })

  }