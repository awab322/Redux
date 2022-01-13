import React,{useState} from 'react'
import { depositMoney , withdrawMoney } from "../state/actions/index";
import {useDispatch} from "react-redux"
 
const EnterData = () => {

const [money,setMoney] = useState("");

function getMoney(aa) {
    setMoney(aa.target.value)
}

const dispatch = useDispatch();

    return (
        <>
           <div className="card">
                {/* <h1>Enter Data</h1>  */}
                <input className="cash_input shadow-none" onChange={getMoney} value={money} type="number" placeholder="Enter Amount"/>

                <button className="btn btn-block shadow-none add_button"
                onClick={()=>dispatch(depositMoney(Number(money),setMoney("")))}
                >
                Deposit Money
                </button>
                <button className="btn btn-block shadow-none remove_button"
                onClick={()=>dispatch(withdrawMoney(Number(money),setMoney("")))}
                >
                Withdraw Money
                </button>

            </div> 
        </>
    )
}

export default EnterData