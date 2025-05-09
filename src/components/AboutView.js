import Hero from "./Hero";

const AboutView = () => {
    return (
        <>
            <Hero text="This is the about us page"/>
            <div className="container my-5 text-center lead">
                <h1>About Us</h1>
                <p>We are a team of movie enthusiasts who love to share our passion for films with the world.</p>
                <p>Our mission is to provide a platform where users can easily browse and discover new movies.</p>
                <p>We believe that movies have the power to inspire, entertain, and bring people together.</p>
                <p>Thank you for visiting our site and we hope you enjoy your experience!</p>
                <p>If you have any questions or feedback, feel free to reach out to us.</p>
                <p>Happy browsing!</p>
                <p>JuirsTv Studios</p>
            </div>
        </>
    )
}

export default AboutView;