import React, { useEffect, useState } from 'react'

function useCurrencyinfo(Currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/4284e656e3fa20670d87ce02/latest/${Currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res["conversion_rates"]))
        console.log(data);
    },[Currency])
    console.log(data);
    return data
}


export default useCurrencyinfo;