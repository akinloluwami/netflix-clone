import React, {useState, useEffect} from 'react';
import axios from "./axios";

function Row({title}) {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fecthData(){
            const requests = await axios.get(fecthUrl);
            console.log(requests);
            return requests;
        }
        fecthData();
    }, []);
    return (
        <div>
            <h1>{title}</h1>
            {/*title*/}
            {/*container -> posters*/}
        </div>
    )
}

export default Row;
