import Hero from "./Hero";

const Home = () => {
    return (
        <>
            < Hero text="This is the home page"/>
            <div className="container my-5 text-center lead">
                <h1>Welcome to the Movie Browser</h1>
                <p>This is the home page where you can find the latest movies.</p>
                <p>Explore our collection of movies and find your next favorite!</p>
                <p>Check out the latest releases, top-rated movies, and more.</p>
                <p>Don't forget to check out the about page to learn more about us!</p>
                <p>Happy browsing!</p>
            </div>
        </>
    )
}

export default Home;