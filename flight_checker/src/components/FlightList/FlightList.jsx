import React from 'react';
import FlightListItem from "../FlightListItem/FlightListItem";

const FlightList = ({ flightDataList }) => { 
    console.log(flightDataList)
    // var flight_datas = []
    // for (var i=0;i<flightDataList.length;i++) {
    //     var flight_data = {
    //         flight_no: flightDataList[i]["flight"]["no"]
    //     }
    //     flight_datas.push(flight_data)
    // }
    // console.log(flight_datas)
    return(
        <>
            <FlightListItem/>
        </>
    )
}

export default FlightList