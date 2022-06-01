import React from 'react';

const PageContent = ({title,welcome}) => {
       console.log(title)
       console.log(welcome)

    return (
        <div>
         <h2>{title}</h2>   
          <p>{welcome}</p>
        </div>
    );
}

export default PageContent;
