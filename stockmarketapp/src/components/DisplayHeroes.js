import React from 'react'
import {Card ,Button,Image} from 'react-bootstrap'
const DisplayHeroes = ({name,image}) => {
    return (
        <div className="container-fluid d-flex justify-content-center">
           <div className='col-md-4'>
                <Card.Title>{name}</Card.Title>
                <Image src={image} alt="image" roundedCircle />
                </div>
                </div>
                
           
 
        
    )
}

export default DisplayHeroes
