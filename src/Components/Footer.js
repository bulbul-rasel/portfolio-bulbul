import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="text-center text-white" >
            <div class="container pt-4">

                <section class="mb-4">
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-twitter"></i
                    ></a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-google"></i
                    ></a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i
                    ></a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-linkedin"></i
                    ></a>

                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-github"></i
                    ></a>
                </section>

            </div>

            <div class="text-center text-white p-3" >
                © {year} Copyright:Bulbul Ahammed
            </div>
        </div>
    );
};

export default Footer;