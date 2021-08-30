import React from 'react';
import lb2 from '../src/Images/of3.jpg';
import Cer1 from '../src/Images/calibration-certificate.jpg';
import './About.css';
const About = () => {
    return (
        <>

            <div class="card border-warning m-4" >

                <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <p className="AboutUs"> Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card border-warning m-4" >

                <div class="card-body  ">
                    <h5 class="card-title">Certificates</h5>
                    <img src={Cer1} className="container-fluid p-4" alt="lb2"></img>
                </div>
            </div>

        </>
    );
};
export default About;