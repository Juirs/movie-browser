import {Link} from "react-router-dom";

const SearchView = ({ keyword, searchResults }) => {
    const hasResults = searchResults.length > 0;

    return (
        <div className="container">
            <h2 className="my-4">Search Results for "{keyword}"</h2>
            <div className="row">
                {hasResults ? (
                    searchResults.map((movie) => {
                        const detailUrl = `/movies/${movie.id}`;
                        return (
                            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 my-3">
                                <div className="card">
                                    {movie.poster_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            className="card-img-top"
                                            alt={movie.title}
                                        />
                                    ) : (
                                        <div className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                                            No Image
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No results found for "{keyword}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchView;
