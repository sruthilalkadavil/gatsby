import { graphql} from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';


export default function Project({data}){
     
    const projects = data.projects.nodes
    return (
        <Layout>
        <div>
            <div className="container">
                <div className="row">
                   
 

           
{projects.map(project => (
              <div className="col-md-4">
          
              
                    <h1>
                        {project.frontmatter.title}
                    </h1>
                    <p>
                    {project.frontmatter.stack}
                    </p>
                    <p>
                   
                    <div dangerouslySetInnerHTML={{ __html: project.html }} />
                    </p>
                     
                
            
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
    projects:  allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
        html
      }
    }
  }
  
`
