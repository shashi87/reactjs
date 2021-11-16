import React, { useCallback, useState, useEffect } from 'react';
import { BasicTable } from '../../utils/basicTable';
const Table = props => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        setData([{ name: "sanjeev", l_name: "sanjeev", country: "india" }, { name: "stark", l_name: "sanjeev", country: "india" }, { name: "ironman", l_name: "sanjeev" }])    
    },[])
       let columns = [
            { Header: "Name", accessor: "name" },
            { Header: "l name", accessor: "l_name" },
            { Header: "country", accessor: "country" }
        ]
    const handleSort = useCallback(sortBy => {
        console.log(sortBy, 'sort by')
    }, [])
    const handlePaginate = useCallback(paginate => {
        console.log(paginate, 'paginate')
        if (paginate.pageSize) {
           setData(prev=> prev.slice(0, paginate.pageSize))
        }
    }, [])
    const initialState = { pageIndex: 0 };
    return <BasicTable tableColumn={columns}
        tableData={data}
        pageCount={50}
        changePaginate={handlePaginate}
        initialState={initialState}
        onSort={handleSort} />
}

export default Table