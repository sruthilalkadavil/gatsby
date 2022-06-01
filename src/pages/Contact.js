

import Axios from "axios";
import React, { useState, useEffect } from "react"
import Layout from "./components/Layout"
import { SRLWrapper } from "simple-react-lightbox";


function Contact() {
    const [image, setImages] = useState([]);
    useEffect(() => {
        console.log(process.env.GATSBY_API_URL)
        Axios.get(
            "https://api.unsplash.com/photos/?client_id=YDRx_zKrRSwCM-NzhmUNcI5BRVZzE1Yu-yA4ra7nCtk"
        ).then(response => {
            setImages(response.data)
          })


    }, [])

    return (
        <Layout>
            <div className="container img-grid">
                <div className="row">
                    <div className="col-md-12">
                        Contact
                        <SRLWrapper>
                        <div className="row">
                            {image.map(x => 
                            <div className="col-md-4" key={x.urls.regular}>{x.user.name}<img src={x.urls.regular} alt={x.alt_description}/></div>
                            )}
                       
                        </div>
                        </SRLWrapper>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Contact
