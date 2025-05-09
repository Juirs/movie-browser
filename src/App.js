import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from "react";
import MovieView from "./components/MovieView";
import NotFoundView from "./components/NotFoundView"; // Import the new NotFoundView component

function App() {

    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if(searchText) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=2bf187c7a632f4ae1843bce9c31a0367&query=${searchText}`)
                .then(response => response.json())
                .then(data => setSearchResults(data.results))
        }
    }, [searchText]);

    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutView/>}/>
                <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
                <Route path="movies/:id" element={<MovieView/>}/>
                <Route path="*" element={<NotFoundView/>}/> {/* Add this route for 404 */}
            </Routes>
        </div>
    );
}

export default App;

