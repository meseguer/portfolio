import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.css';
import './../styles/global.css';
import hero from "./../images/contact-hero.svg" // Tell Webpack this JS file uses this image

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className={ 'row' }>
            <div className={ 'col-md-6'}>
                <h1>Let's talk about everything</h1>
                <p>Don't like forms? Send us an email: hello@devpost.com</p>
                <p>Now go build something great.</p>
                <img src={hero} alt="Contact SVG" />
            </div>
            <div className={ 'col-md-6'}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" />
                </div>
                <button className="devshop-button" style={{borderRadius: 0, width: '100%' }}>Send</button>
            </div>
        </div>
    </Layout>
)

export default IndexPage