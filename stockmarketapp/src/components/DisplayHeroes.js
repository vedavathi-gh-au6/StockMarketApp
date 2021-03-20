import React from 'react'
import {Card ,Button,Image,Col,Row} from 'react-bootstrap'
const DisplayHeroes = ({name,image}) => {
    return (
        <div className="container-fluid d-flex justify-content-center">
           <Col xs={6} md={4}>
                <Card.Title>{name}</Card.Title>
                <Image src={image} alt="image" roundedCircle />
                </Col>
                </div>
                
           
 
        
    )
}

export default DisplayHeroes
