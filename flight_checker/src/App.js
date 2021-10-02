import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Title from "./Title/Title";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
    const [flightDataList, setFlightDataList] = useState([]);
    const [flightData, setFlightData] = useState({
        destination: "",
        flightNumber: "",
    });
    const { destination, flightNumber } = flightData;
    async function fetchFlightDataList() {
        const { data, error } = await supabase.from("flight_data").select();
        setFlightDataList(data);
        console.log(flightDataList);
    }
    useEffect(() => {
        fetchFlightDataList();
    }, []);

    return (
        <div className="App">
            <Title />
            <Button>Testing</Button>
        </div>
    );
}

export default App;
