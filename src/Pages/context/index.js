import React  from 'react';
import Child from './child';
import {Dataprovider,useDataUpdate} from './dataProvider'


const Context = props => {
    const toggleData=useDataUpdate();
    return <>
    <Dataprovider>
        <Child />
   <br />
   <button onClick={toggleData}>onclick button</button>
    <p>parent component</p>
    </Dataprovider>
    </>
}
export default Context