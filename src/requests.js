const API_KEY = "7a39bb31aff8c308a779f52b74388970";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`, 
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, 
    fetchUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`, 
    fetchTvShows: `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}`, 
};

export default requests;