import LoadingComponent from "../Loading/LoadingComponent";

const FilteredResult = (props) => {
    return (
        <>
            {
             props.allFlights.loading ? (<LoadingComponent /> ) :
            props.selected !== '' && props.normalBeginDate !== '' && props.normalEndDate !== '' && (
                <div style={{color: 'blue'}}>
                    <p>Airport:     {props.selected}</p>
                    <p>Start Date:     {props.normalBeginDate}</p>
                    <p>End Date:     {props.normalEndDate}</p>
                    <p>Number of Arrivals:     {props.arrivalCount}</p>
                    <p>Number of Departure:     {props.departureCount}</p>
                </div>
            )}
        </>
        )
}

export default FilteredResult;
