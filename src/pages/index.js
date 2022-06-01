
import React from "react"
import Layout from "./components/Layout"
import "./assets/scss/style.scss"
import "/node_modules/bootstrap/scss/bootstrap.scss"
import { graphql } from "gatsby"
 
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import log from "../images/cloud.svg";
import log from "../images/cloud.svg"
export default function Home({data}) {
 
  return <Layout>
    <section className="home-background">
    <div className="container">
      <div className="row">
      <div className="col-md-6 home-web">
           <h1 className="home-web__heading">Web development</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
           <button type="button" class="btn   home-web__btncolor">Read More</button>
        </div>
        <div className="col-md-6">
        <img src={log} alt="log" />
        </div>
      </div>
    </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>About us</h4>
            
               <div className="row">
               {
             data.allMdx.nodes.map((node) => (
             <div className="col-md-12" key={node.id}>
            <h2>{node.frontmatter.title}</h2>
             <GatsbyImage image ={getImage(node.frontmatter.hero_image)} />
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </div>
           ))
      }
               </div>

            </div>
          </div>
        </div>


    </section>
  </Layout>

}

export const query = graphql`
query   {
  allMdx {
    nodes {
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
      body
      id
    }
  }
}

`
 