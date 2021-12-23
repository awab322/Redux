import React from 'react'
import { useSelector } from "react-redux";



const ShowData = () => {
    
    const balance = useSelector((state)=>state.amountReducer)

    return (
        <>
        <div className="card">
            <h1>Show Data </h1> 
            <h5 style={{color : balance<0?"red":""}}>{balance<0?`Recharge Balance : ${balance}`:`Your Balance : ${balance}`}</h5>
        </div>
           
        </>
    )
}

export default ShowData
