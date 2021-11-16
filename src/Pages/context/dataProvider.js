import React ,{useContext,useState,createContext} from 'react';


export const Datacontext=createContext();
export const DataupdateContext=createContext();
export const useData=()=>{
    return useContext(Datacontext);
}
export const useDataUpdate=()=>{
    return useContext(DataupdateContext);
}
export const Dataprovider=({children})=>{
    const [data,setData]=useState(false)
    const toggleData=()=>setData(prev=>!prev);
    return (<Datacontext.Provider value={data}>
        <DataupdateContext.Provider value={toggleData}>
        {children}
        </DataupdateContext.Provider>
    </Datacontext.Provider>)

}
