import {React , useState} from 'react'
import { depositMoney , withdrawMoney } from "../state/actions/index";
import {useDispatch} from "react-redux"
 
const EnterData = () => {


const dispatch = useDispatch();

    return (
        <>
           <div className="card">
                <h1>Enter Data</h1> 
                {/* <input className="cash_input shadow-none" type="number" placeholder="Enter Amount"/> */}

                <button className="btn btn-block shadow-none add_button" 
                onClick={()=>dispatch(depositMoney(50))}
                >
                Deposit Money (50)
                </button>
                <button className="btn btn-block shadow-none remove_button"
                onClick={()=>dispatch(withdrawMoney(25))}
                >
                Withdraw Money (25)
                </button>

            </div> 
        </>
    )
}

export default EnterData