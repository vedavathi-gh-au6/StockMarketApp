import React from 'react'
import {Card } from 'react-bootstrap'
const DisplayHeroes = ({name,image,stockvalue}) => {
    console.log(image)
    
    return (
        
             <div>
                 <Card style={{ width: '21rem' }}>
                  <Card.Body >
                  <div className="image">
                     <Card.Title>{name}</Card.Title>
                 
                       <Card.Img variant="top" src={image} height="50" width="20"  /> 
                 </div>
                 
                 <Card.Text><h1>{stockvalue} USD</h1></Card.Text>
                </Card.Body>
                </Card>
                   
             </div>
                
    
                
                 
                
           
 
        
    )
}

export default DisplayHeroes
