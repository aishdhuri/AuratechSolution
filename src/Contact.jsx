import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <div className="Contactdiv m-5">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CONTACT US</h5>


                                <ul class="list-unstyled">
                                    <li>auratech@2021.gmail.com</li>
                                    <li>aishdhuri0@gmail.com</li>
                                    <li>+919404779107</li>
                                    <li>+919763086294.</li>
                                </ul>


                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">ADDRESS</h5>
                                <ul class="list-unstyled">
                                    <li>Navi mumbai</li>
                                    <li>Kharghar,416514,</li>
                                    <li>Near ASDgarden</li>
                                    <li>12445</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;