import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Button } from "react-bootstrap";
import Title from "./components/Title/Title";
import FlightList from "./components/FlightList/FlightList";
import "./App.css";

function App() {
    const [flightDataList, setFlightDataList] = useState([]);

    window.x = flightDataList;
    window.y = setFlightDataList;

    async function fetchFromAPI() {
        const response = await fetch(
            "http://localhost:3001/flight_api/2021-09-09"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFlightDataList(data[0].list);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchFromAPI();
    }, []);

    useEffect(() => {
        if (flightDataList.length > 0) {
            console.log("state has changed");
            console.log(flightDataList);
        }
    }, [flightDataList]);

    return (
        <div className="App">
            <Title />
            <FlightList flightDataList={flightDataList} />
        </div>
    );
}

export default App;
