import Hero from "./Hero";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const MovieView = () => {
    const {id} = useParams();

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2bf187c7a632f4ae1843bce9c31a0367`)
            .then(response => response.json())
            .then(data => {
                setDetails(data)
                setLoading(false);
            })
    }, [id]);

    function renderMovieDetails() {
        if (loading) {
            return <Hero text="Loading..."/>;
        }

        if (!details) {
            return <Hero text="No details found."/>;
        }
        const backdropUrl = `https://image.tmdb.org/t/p/original${details.backdrop_path}`

        return (
            <div className="text-center">
                <Hero text={details.title} backdrop={backdropUrl}/>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            {details.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                                    className="img-fluid"
                                    alt={details.title}
                                />
                            ) : (
                                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <h2>{details.title}</h2>
                            <p className="lead">{details.overview}</p>
                            <p><strong>Release Date:</strong> {details.release_date}</p>
                            <p><strong>Rating:</strong> {details.vote_average} / 10</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return renderMovieDetails();
}

export default MovieView;