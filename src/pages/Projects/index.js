import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';


export default function Project({data}){
     
    const projects = data.allMarkdownRemark.nodes
    return (
        <Layout>
        <div>
            <div className="container">
                <div className="row">
                   
   
        {projects.map(project => (
              <div className="col-md-4">
            <Link to = {"../Projects" + project.frontmatter.slug} key={project.id}>

              
                    <h1>
                        {project.frontmatter.title}
                    </h1>
                    <p>
                    {project.frontmatter.stack}
                    </p>
                
            </Link>
            </div>

        ))}
         
        </div>
        </div>    
        </div>
        </Layout>
    )       
}
 
export const query = graphql`
query Projectpage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
  
`
