import React ,{useState} from 'react'
import DisplayHeroes from '../components/DisplayHeroes'
import googleImage from '../images/google.png'
import facebook from '../images/facebook.png'
import amazon from '../images/amazon.png'
import {Row} from 'react-bootstrap'
const Herocards = () => {
    const HEROES=[
        {name:"Google",image:{googleImage}},
        {name:"Facebook",image:{facebook}},
        {name:"Amazon",image:{amazon}},
    ]
   
   

    return (
        
             <div className='row'>
                
                {HEROES.map(item=>(
                <div key={item.name}>
                    <DisplayHeroes name={item.name} image={item.image} />
                </div>
                ))}
                
                </div>
          
        
    )
}

export default Herocards
