import axios from 'axios';
const url = `https://@opensky-network.org/api`;

export const GetOurFlights = async(beginDateString, endDateString) => {
    const response = await axios.get( `${url}/flights/all?begin=${beginDateString}&end=${endDateString}`)
    return response;
}

export const GetOurDepartureData = async (selected, beginDateString, endDateString) => {
    if (selected != null){
        const response = await axios.get( `${url}/flights/departure?airport=${selected}&begin=${beginDateString}&end=${endDateString}`)
        return response;  }   
}

export const GetOurArrivalData = async (selected, beginDateString, endDateString) => {
    if (selected != null) {
        const response = await axios.get( `${url}/flights/arrival?airport=${selected}&begin=${beginDateString}&end=${endDateString}`)
        return response; }
}

