const count = {};  // list of arriving flights for all airports
const countDep = {};    // list of departure flights for all airports
const combinedCount = {};    // joined list of arriving and departing flights for all airports

const getArrivalAirportsCount = (allFlights) => {
    if(allFlights !=null) {
        const estArrivalAirports = allFlights.map(flight => flight.estArrivalAirport);
        estArrivalAirports.forEach((element) => {
            if (count[element]) {
            count[element] += 1;
            } else {
            count[element] = 1;
            }
        });
    }
    return count;
}

const getDepartureAirportsCount = (allFlights) => {
    if(allFlights !=null){
        allFlights.forEach((flight) => {
            const depAirport = flight.estDepartureAirport;

            if (depAirport in countDep) {
            countDep[depAirport]++;
            } else {
            countDep[depAirport] = 1;
            }
        });
    }
    return count;
}

export const getAllAirportsCount = (allFlights) => {
    if(allFlights !=null){
    getArrivalAirportsCount(allFlights);
    getDepartureAirportsCount(allFlights);
    if(count != null && countDep != null) {
        for (const key of Object.keys(count)) {
            if (countDep && key in countDep) {
            combinedCount[key] = {
                estArrivalAirport: count[key],
                estDepartureAirport: countDep[key]
            };
            } else {
            combinedCount[key] = {
                estArrivalAirport: count[key],
                estDepartureAirport: 0
            };
            }
        }

        if (countDep) {
            for (const key of Object.keys(countDep)) {
            if (!(key in count)) {
                combinedCount[key] = {
                estArrivalAirport: 0,
                estDepartureAirport: countDep[key]
                };
            }
            }
        }  
    }}
    const allAirports = Object.keys(combinedCount).filter(item => item !== "null"); ;
    return allAirports;
}


