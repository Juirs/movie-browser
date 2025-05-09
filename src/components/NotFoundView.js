import Hero from "./Hero";

const NotFoundView = () => {
    return (
        <>
            <Hero text="404 - Page Not Found" />
            <div className="container my-5 text-center lead">
                <h1>Oops! The page you're looking for doesn't exist.</h1>
                <p>It seems you may have entered an incorrect URL or the page has been moved.</p>
                <p>Use the navigation bar to find your way back or return to the home page.</p>
            </div>
        </>
    );
};

export default NotFoundView;
