import React from 'react';
import './Home.css';
import lb1 from '../src/Images/of2.jpg';
import lb2 from '../src/Images/of3.jpg';
import lb3 from '../src/Images/lb3.jpg';

const Home = () => {
    return (
        <>
            <div className="container-fluid p-0 m-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={lb2} class="d-block w-100" alt="first"></img>
                        </div>
                        <div class="carousel-item ">
                            <img src={lb1} class="d-block w-100 " alt={lb1}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={lb2} class="d-block w-100" alt={lb1}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
                <section>
                    <h1 className="ServicesHeading mt-3 ">Our Services</h1>
                    <hr className="w-50 mx-auto mt-0 bg-Secondary"></hr>
                    <div className="container-fluid bg-dark p-4">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <a href="/Services">
                                <div class="col ">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/Services">
                                <div class="col">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/Services">
                                <div class="col">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/Services">
                                <div class="col">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/Services">
                                <div class="col">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/Services">
                                <div class="col">
                                    <div class="card">
                                        <img src={lb1} class="card-img-top p-3" alt={lb1} />
                                        <div class="card-body">
                                            <h6 class="ServicesPragraph">Card title his is a longer card with supporting text below as a natural lead-in to additional content</h6>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </section>
                <section>

                    <h2 className="Text" >Grow your business with <strong className="navbar-brand ">AuraTechSolution</strong></h2>
                    <h3 className="Text" > we are the team of talented developer</h3>
                    <div className="mt-100 d-flex">
                        <a className="btn-get-started m-2 " href="/About">More About Us</a>
                    </div>
                </section>
            </div >



        </>
    );
};
export default Home;