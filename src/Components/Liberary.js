import React from 'react';
import html from "../assest/html.png"
import css from "../assest/css.png"
import js from "../assest/js.png"
import rect from "../assest/react.png"
import express from "../assest/express.png"
import bootstrap from "../assest/bootstrap.png"
import tailwind from "../assest/tailwind.svg"
import mongo from "../assest/mongo.png"
import firebase from "../assest/firebase.png"
import stripe from "../assest/stripe.png"
import node from "../assest/node.png"

const Liberary = () => {
    return (
        <div className='container'>
            <h2 className='text-center pt-5 pb-5'>Working <span className='text-primary'>With</span></h2>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={html} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={css} alt="" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="shadow text-center">
                        <img src={bootstrap} alt="" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="shadow text-center">
                        <img width={144} height={144} src={tailwind} alt="" />
                    </div>
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={js} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 p-4">
                    <div className="shadow text-center">
                        <img src={rect} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center text-white">
                        <img width={144} height={144} src={express} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={mongo} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={firebase} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center">
                        <img src={stripe} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="shadow text-center ">
                        <img className='w-75' src={node} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Liberary;