import React, {useState, useEffect} from 'react';
import './Row.css';
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

    return (
        <div className="row">
            <h1>{title}</h1>
        <div className="row_posters">

            {movies.map(movie=>( 
                <img className="row_poster" src={`${getImg}${movie.poster_path}`} alt={movie.name} key={movie.id}/>
            ))}
        </div>
        </div>
    )
}

export default Row;
