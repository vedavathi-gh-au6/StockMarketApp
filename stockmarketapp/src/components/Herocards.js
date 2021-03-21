import React ,{useState} from 'react'
import DisplayHeroes from '../components/DisplayHeroes'
import googleImage from '../images/google.png'
import facebook from '../images/facebook.png'
import amazon from '../images/amazon.png'
import {Row,Col} from 'react-bootstrap'
const Herocards = () => {
    const HEROES=[
        {name:"Google",image:{googleImage},stockvalue:'1521'},
        {name:"Facebook",image:{facebook},stockvalue:'266'},
        {name:"Amazon",image:{amazon},stockvalue:'3116'},
    ]
   
   

    return (
             
             <div className="container d-flex justify-content-center">
               <Row className="justify-content-space-around">
                {HEROES.map(item=>(
                <div key={item.name}>
                    <DisplayHeroes name={item.name} image={item.image} stockvalue={item.stockvalue} />
                </div>
                ))}
               </Row>
                </div>
          
        
    )
}

export default Herocards
