import React ,{useState} from 'react'
import DisplayHeroes from '../components/DisplayHeroes'
import googleImage from '../images/google.png'
import facebook from '../images/facebook.png'
import amazon from '../images/amazon.png'
import {Row,Col} from 'react-bootstrap'
const Herocards = () => {
    const HEROES=[
        {name:"Google",image:"https://tse4.mm.bing.net/th?id=OIP.1sUxZaK9TnqWD6YLfRbkggHaEK&pid=Api&P=0&w=318&h=180",stockvalue:'1521'},
        {name:"Facebook",image:"https://tse1.mm.bing.net/th?id=OIP.pQH2vq0fker_No4sLjIFxAHaF8&pid=Api&P=0&w=188&h=152",stockvalue:'266'},
        {name:"Amazon",image:"https://tse3.mm.bing.net/th?id=OIP.k5XvM8pKxonydUFIDf5OjgHaEK&pid=Api&P=0&w=279&h=158",stockvalue:'3116'},
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
