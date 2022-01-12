const fillGasTank = (gallons) => {
    if (gallons > 15){
        console.log(`you dont need gas yet`)
    } else if (gallons <= 1) {
        console.log(`I filled the tank with ${gallons} gallon of gas`)
    } else {
        console.log(`I filled the tank with ${gallons} gallons of gas`)
    }
}

fillGasTank(3)