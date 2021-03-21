import React from 'react';
import Navs from './Navs';
import Herocards from './Herocards';

const MainPageLayout = ({children}) => {
    return (
        <div  className="mainPage">
            <Navs />
            <Herocards/>{children}
        </div>
    )
}

export default MainPageLayout