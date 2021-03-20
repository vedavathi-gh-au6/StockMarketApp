import React , {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import Herocards from '../components/Herocards';

const Home = () => {
    const [input,setinput]=useState('');
    return (
<MainPageLayout>
    <Herocards/>
</MainPageLayout>

         
    )
}
export default Home