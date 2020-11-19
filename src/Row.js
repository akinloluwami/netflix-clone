import React, {useState, useEffect} from 'react';
//import axios from "./axios";
import axios from 'axios';

const getImg = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h1>{title}</h1>
        <div className="row_posters">
            {movies.map(movie=>(

                <img src={`${getImg}${movie.poster_path}`} alt={movie.name}/>

            ))}
        </div>
        </div>
    )
}

export default Row;
