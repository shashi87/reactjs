import React from 'react';
import NavChild from './navchild';
import {useDataUpdate} from './dataProvider'


const Child = props => {
    const toggleData=useDataUpdate()
    return <>
    <NavChild />
    <button onClick={toggleData}>onclick button</button>
    <p>child component</p>
    </>
}
export default Child