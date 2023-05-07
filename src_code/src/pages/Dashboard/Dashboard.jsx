import React, { useEffect, useState, useCallback } from "react";
import "./Dashboard.css";
import { withSidebarLayout } from "../../components/HOC.js/hoc";
import FlightChart from "../../components/OurD3/OurD3Component";
import FilteredResult from "../../components/FilteredResult/filteredResult";
import ErrorBoundaryComponent from "../../components/ErrorBoundary/erorBoundary";
import { getAllAirportsCount } from "../../services/getAllAirports";
import { GetOurFlights, GetOurDepartureData, GetOurArrivalData } from "../../api/getFlightsData";
import { getMinBeginDate } from "../../services/dateServices";

const ourNewDate = new Date().toISOString().substring(0, 16);  

function Dashboard() {
  const [allFlights, setAllFlights] = useState({ loading: true, data: [] });
  const [ourDepartureCount, setOurDepartureCount] = useState(0);    // counts of  arriving and departing flights for selected airport
  const [ourArrivalCount, setOurArrivalCount] = useState(0);    
  const [ourAirport, setOurAirport] = useState(['']);     // list of airports in the time range selected
  const [beginDate, setBeginDate] = useState(ourNewDate);  
  const [endDate, setEndDate] = useState(ourNewDate);   // begin and end date format that the input understands
  const [normalBeginDate, setNormalBeginDate] = useState('');
  const [normalEndDate, setNormalEndDate] = useState('');   // begin and end date format that the users understand or good for user experience
  const [beginDateString, setBeginDateString] = useState(1517227200);
  const [endDateString, setEndDateString] = useState(1517230800);   // begin and end date format that the openSky endpoint understands
  const [error, setError] = useState(null);  // error message if any
  const [selected, setSelected] = useState('');  //selected airport

  const setInputBeginDate = (theBeginDateString) => {
    setBeginDate(theBeginDateString)
    const beginDateObj = new Date(theBeginDateString);
    setNormalBeginDate(beginDateObj.toString());
    const beginDateTime = Math.round(beginDateObj.getTime() / 1000).toString();
    setBeginDateString(beginDateTime);
   }

  const setInputEndDate = (theEndDateString) => {
    setEndDate(theEndDateString);
    const endDateObj = new Date(theEndDateString);
    setNormalEndDate(endDateObj.toString());
    const endDateTime = Math.round(endDateObj.getTime() / 1000).toString();
    setEndDateString(endDateTime);
  }

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
    console.clear();
  };  
  
  const getFlights = useCallback(() => {
    GetOurFlights(beginDateString, endDateString)
        .then(response => setAllFlights({ loading: false, data: response.data }))
        .catch(error => setError(error));
    const allFlightsData = allFlights.data;
    console.log(allFlightsData)
    return allFlightsData
  }, [beginDateString, endDateString, allFlights])

  const getDepartureData  = useCallback(() => {    
    GetOurDepartureData(selected, beginDateString, endDateString)
        .then(response => setOurDepartureCount({ loading: false, data: response.data.length }))
        .catch(error => setError(error));
  }, [beginDateString, endDateString, selected])

  const getArrivalData = useCallback(() =>  {
    GetOurArrivalData(selected, beginDateString, endDateString)
        .then(response => setOurArrivalCount({ loading: false, data: response.data.length }))
        .catch(error => setError(error));
  }, [beginDateString, endDateString, selected])

  useEffect(() => {
    getArrivalData();
    getDepartureData();
    getFlights();

   const allAirports = getAllAirportsCount(getFlights())
    setOurAirport(allAirports);
// eslint-disable-next-line
  }, [getArrivalData, getDepartureData]);

  const departureCount = ourDepartureCount.data;  
  const arrivalCount = ourArrivalCount.data;
  if(ourDepartureCount.data == null){setOurDepartureCount({loading: false, data:  0 })};
  if(ourArrivalCount.data == null){setOurArrivalCount({loading: false, data:  0 })} 

  return (
    <ErrorBoundaryComponent error={error}>
      <div className="Dashboard">
        <h4>Compare The Rates of Arrival and Departure of Flights in any Airport</h4>
        <div className="container" style={{display:'flex', flexDirection:'column'}}>
          <div className="row">
              <div className="mx-md-8 mt-2 inputs">
                  <p>Please note that the end date is designed to be not more than seven days ahead of the start date.</p>
                  <p>Note that the list of airports for a specific period only become available when you set the date and time. </p>
                  <p>This is Open Sky's Policy. </p>
                  <div >
                        <label htmlFor="beginDate">Start Date:</label>
                        <input
                            type="datetime-local"
                            id="beginDate"
                            name="beginDate"
                            value={beginDate}
                            min={getMinBeginDate(endDate)}
                            max={endDate}
                            onChange={(event) => setInputBeginDate(event.target.value)}
                            />
                  </div> 
                  <div>
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="datetime-local"
                            id="endDate"
                            name="endDate"
                            value={endDate}
                            max={ourNewDate}
                            onChange={(event) => setInputEndDate(event.target.value)}
                        />
                  </div>
                  <div>
                  <div className="rowOrColumn" >
                    <div className="column mxr-4">
                        <label htmlFor="airport">Airport:</label>            
                        <select value={selected} id="airport" onChange={handleSelectChange}>
                        <option value=''>Select an airport</option>
                        {ourAirport.map((airport) => (
                            <option key={airport} value={airport}>
                            {airport}
                            </option>
                        ))}
                        </select>
                        <FilteredResult selected={selected} normalBeginDate={normalBeginDate} normalEndDate={normalEndDate} 
                          arrivalCount={arrivalCount} departureCount={departureCount} allFlights={allFlights} />
                    </div>   
                    <FlightChart arrivalCount={arrivalCount} departureCount={departureCount}/>
                  </div>
              </div>
              </div>
          </div>
          <hr />
        </div>
      </div>
    </ErrorBoundaryComponent>
     );
  }

export default withSidebarLayout(Dashboard);
