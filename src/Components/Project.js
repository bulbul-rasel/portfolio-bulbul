import React from 'react';
import tools from "../assest/tools.png"
import telecom from "../assest/telecom.png"
import dental from "../assest/dental.png"
import center from "../assest/sadhi.png"
import gear from "../assest/gear.png"
import phone from "../assest/phone.png"
import Zoom from 'react-reveal/Zoom';
import github from "../assest/icons8-github-48.png"
import browser from "../assest/globe.png"
import './Style.css'
const Project = () => {
  return (
    <div className="container p-5" id='project'>
      <h2 className='text-center pt-5 pb-5'>My Recent <span className="text-primary">Project</span></h2>
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
        <div className="col">
          <div className="card h-100 p-3 shadow">
            <Zoom>
              <img src={telecom} className="card-img-top" alt="..." />
            </Zoom>
            <div className="card-body">
              <h5 className="text-center  text-primary">Modern Telecom</h5>
              <p className="card-text text-dark">A full-stack responsive Furniture Warehouse app. Users can request a service,Buy product</p>
              <a href="https://github.com/bulbul-rasel/modern-telecom-server"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Server Code</button></a>
              <a href="https://github.com/bulbul-rasel/modern-telecom-client"> <button className='ps-2 pe-2  btn btn-primary'><img width={24} src={github} alt="" />Client Code</button></a>
              <a href="https://modern-telecom-client.web.app/">  <button className='ps-2 pe-2 ms-5 mt-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-3 shadow">
            <Zoom>
              <img src={dental} className="card-img-top" alt="..." />
            </Zoom>
            <div className="card-body">
              <h5 className="text-center text-primary">Modern Dental</h5>
              <p className="card-text text-dark">A  responsive Dental Service Website. Users can request a service,and Booking any Service</p>
              <a href="https://github.com/bulbul-rasel/Modern-dental-service"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Github</button></a>
              <a href="https://dental-service-fa5d0.web.app/">  <button className='ps-2 pe-2 ms-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-3 shadow">
            <Zoom>
              <img src={center} className="card-img-top" alt="..." />
            </Zoom>
            <div className="card-body">
              <h5 className="text-center text-primary">Convention Center</h5>
              <p className="card-text text-dark">A  responsive Convention Center App. Users can show any kinds of Services</p>
              <a href="https://github.com/bulbul-rasel/shadhighar-convension-center"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Github</button></a>
              <a href="https://programming-hero-shadhi-ghoor-convention-center.netlify.app/">  <button className='ps-2 pe-2 ms-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-3 shadow">
            <Zoom>
              <img src={gear} className="card-img-top" alt="..." />
            </Zoom>
            <div className="card-body">
              <h5 className="text-center text-primary">Gear Shop</h5>
              <p className="card-text text-dark">A  responsive Influencer Gear Shop App. Influencer can Show  Products</p>
              <a href="https://bulbul-rasel.github.io/Programming-Hero-Influencer-Gear/"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Github</button></a>
              <a href="https://github.com/bulbul-rasel/Programming-Hero-Influencer-Gear">  <button className='ps-2 pe-2 ms-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-3 shadow">
            <Zoom>
              <img src={phone} className="card-img-top" alt="..." />
            </Zoom>
            <div className="card-body">
              <h5 className="text-center text-primary">Phone Finder Shop</h5>
              <p className="card-text text-dark">A  responsive Influencer phone shop. Customer can search   Products</p>
              <a href="https://github.com/bulbul-rasel/Phone-Hunter-Api"> <button className='ps-2 pe-2 btn btn-primary'><img width={24} src={github} alt="" />Github</button></a>
              <a href="https://bulbul-phone-finder.netlify.app/">  <button className='ps-2 pe-2 ms-3 btn btn-primary'><img width={24} src={browser} alt="" /> Live Site</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;