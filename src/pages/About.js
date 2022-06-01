import React from 'react';
import Layout from './components/Layout';
import Carousel from 'react-bootstrap/Carousel'
import { StaticImage } from "gatsby-plugin-image"
const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <StaticImage src="../images/laptop1.jpg" layout="fullWidth" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <StaticImage src="../images/laptopa.jpg" layout="fullWidth" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <StaticImage src="../images/laptopb.jpg" layout="fullWidth" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default About;
