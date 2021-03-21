import React from 'react'
import {Card } from 'react-bootstrap'
const DisplayHeroes = ({name,image,stockvalue}) => {
    return (
        
             <div>
                 <Card style={{ width: '21rem' }}>
                  <Card.Body >
                 <Card.Title>{name}</Card.Title>
                 <Card.Img variant="top" src="holder.js/100px180" /> 
                 <Card.Text><h1>{stockvalue} USD</h1></Card.Text>
                </Card.Body>
                </Card>
                   
             </div>
                
    
                
                 
                
           
 
        
    )
}

export default DisplayHeroes
