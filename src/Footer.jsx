import React from 'react';
import './Footer.css';
import whatslogo from '../src/Images/whatsapp.png';
import twitter from '../src/Images/twitter.png';
import facebook from '../src/Images/facebook.png';
import instagram from '../src/Images/instagram.png';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <section>
                <div className="container-fluid bg-dark p-2 ">
                    <div className="container">
                        <div class="row ">
                            <div class="col-12 col-md-3">
                                <h6 class="footerheading">CONTACT US</h6>
                                <ul class="footer-links list-unstyled">
                                    <li class="coltext">auratech@2021.gmail.com</li>
                                    <li class="coltext">aishdhuri0@gmail.com</li>

                                    <li class="coltext">+919404779107</li>
                                    <li class="coltext">+919763086216</li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3 ">
                                <h6 class="footerheading">ADDRESS</h6>
                                <ul class="footer-links list-unstyled">
                                    <li class="coltext">Navi mumbai</li>
                                    <li class="coltext">Kharghar,416514,</li>
                                    <li class="coltext">Near ASDgarden</li>
                                    <li class="coltext">12445</li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6 class="footerheading">QUICK LINKS</h6>
                                <ul class="footer-links list-unstyled">
                                    <li class="coltext">  <a href="/Home"> Home</a> </li>
                                    <li class="coltext"> <a href="/Services">Services</a></li>
                                    <li class="coltext"> <a href="/About">About Us</a></li>

                                    <li class="coltext"> <a href="/Contact">Contact </a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6 class="footerheading">FOLLOW US</h6>

                                <ul class="footer-links list-unstyled d-flex m-3 justify-content-between ">

                                    <li >  <img className="logoimg" src={whatslogo} alt="whatslogo"></img></li>
                                    <li > <img className="logoimg" src={twitter} alt="whatslogo"></img></li>
                                    <li > <img className="logoimg" src={instagram} alt="whatslogo"></img></li>
                                    <li  > <img className="logoimg" src={facebook} alt="whatslogo"></img></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr className="w-100 mx-auto mt-3 bg-light"></hr>
                    <div>
                        <p className="copyright mb-3 ">Copyright@2021Auratech</p></div>
                </div>
            </section >
        </>
    );
};
export default Footer;