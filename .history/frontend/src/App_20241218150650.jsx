import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section id="home">
                    <h1>Welcome to My Website</h1>
                    <p>This is the home page.</p>
                </section>
                <section id="about">
                    <h1>About Us</h1>
                    <p>Learn more about us here.</p>
                </section>
                <section id="services">
                    <h1>Our Services</h1>
                    <p>Details about our services.</p>
                </section>
                <section id="contact">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us here.</p>
                </section>
            </main>
        </div>
    );
};

export default App;
