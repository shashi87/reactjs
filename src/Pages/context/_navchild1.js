import React from 'react';
import {useData,useDataUpdate} from './dataProvider'
import { Button } from 'reactstrap';


const NavChild = props => {
    const data=useData();
    const update=useDataUpdate()
    return <>
    {data?'yes this is ultimate child ':'it is also working fine'}
    <Button onClick={update}>click</Button>
    <p>ultimate navchild component</p></>
}
export default NavChild