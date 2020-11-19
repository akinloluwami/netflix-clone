import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="POPULAR" fetchUrl={requests.fetchPopular}/>
    </div>
  );
}

export default App;
