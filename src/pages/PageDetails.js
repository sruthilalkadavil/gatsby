import React from 'react';
import PageContent from './company/PageContent';
import Layout from './components/Layout';
import {useState} from 'react'

const PageDetails = () => {

    const [count,setCount] = useState(10)

    const AllDetails = {
        pageTitle:"Gatsby Web Page",
        welcome:"Welcome to the Gatsby Tutorial! We’re excited you’re here."
    }
    const increment = () => {
        setCount(prevCount => prevCount+1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount-1)
    }

  return (
        <div>
            <Layout>
                <div className="container">
                    <div className="row page-web">
                        <div className="col-md-6">
                         <PageContent title = {AllDetails.pageTitle} welcome = {AllDetails.welcome} />
                        </div>
                        <div className="col-md-6">
                          <button type="button" class="btn btn-info" onClick={increment}>increment</button>
                          <button type="button" class="btn btn-info" onClick={decrement} >decrement</button>
                          <h4 className="page-web__countbtn">{count}</h4>
                      </div>
                       
                    </div>
                </div>
             </Layout>
        </div>
    );
}

export default PageDetails;
