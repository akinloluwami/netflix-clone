import React, {useState, useEffect} from 'react';
import requests from "./requests";
import axios from 'axios';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(
                    
                        request.data.results[

                            Math.floor(Math.random() * request.data.results.length - 1)
                        
                        ]
                    
                );

                

                return request;
            }


            fetchData();
        }, []);

        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + "..." : str;
          }
        

    return (

        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >

        <div className="banner_contents">

                <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_movie}
                </h1>
                <div className="buttons">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">My List</button>
                </div>

                <div className="banner_desc">

                    <p>{truncate(movie?.overview, 150)}</p>
                </div>
        </div>

            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner;