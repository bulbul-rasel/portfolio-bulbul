import React from 'react';
import { Zoom } from 'react-reveal';
import tools from "../../assest/tools.png"

const Project1 = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card shadow h-100 p-3">
                    <Zoom>
                        <img src={tools} className="card-img-top" alt="..." />
                    </Zoom>

                    <div className="card-body">
                        <h5 className="text-center text-primary">Modern Tools</h5>
                        <p className="card-text  text-dark">A full-stack responsive service seller app. Users can request a service, also make a review from the dashboard.</p>
                        <a href="https://github.com/bulbul-rasel/modern-tools-purchase-server"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Server Code</button></a>
                        <a href="https://github.com/bulbul-rasel/Modern-tools-purchase-client"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Client Code</button></a>
                        <a href="https://modern-tools.web.app/">  <button className='ps-2 pe-2 ms-5 mt-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;