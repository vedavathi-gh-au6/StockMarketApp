import React , {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config';
import {Row,Button,ListGroup} from 'react-bootstrap';
//import ShowTable from '../components/ShowTable';
import Mdatatable from '../components/Mdatatable'



const Home = () => {
    const [input,setinput]=useState('');
    const [results,setResults]=useState(null)
    const APIKEY='5S0Q4GF47ZTPA6GN'
    

    const onSearch=()=>{
        console.log(input)
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input}&apikey=5S0Q4GF47ZTPA6GN`)
        .then(r=>r.json())
        .then(result=>{
                setResults(result)
                console.log(result)    
            })
         .catch(err=>{
             console.log(err)
         });
    };
    const renderResults=()=>{
        if(results && results.length===0){
            return <div>No Results</div>
        }
        if(results && results.length>0){
             
        }
        return null;
    }
   
const onInputChange=(ev)=>{
    setinput(ev.target.value);
    console.log(input)
    console.log(ev.target.value);
}
const onKeyDown=(ev)=>{
    if(ev.keyCode===13){
        onSearch();
    }
};
    return (
<MainPageLayout>

<div className="searchbar">
       <div className="flex-items">Stock details table</div>
       <div className="flex-items">
           <input type="text" placeholder="Search for stocks" onChange={onInputChange} onKeyDown={onKeyDown}  value={input}/>
           <Button onClick={onSearch}>Search</Button >
           </div>
       </div>     
       <Mdatatable/>
        {renderResults()}
                  
</MainPageLayout>

    )
}
export default Home