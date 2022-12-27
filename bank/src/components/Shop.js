import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
// import {actionCreators} from './state/index';
import { actionCreators } from '../state';


const Shop = () => {
  const dispatch = useDispatch();
const amount = useSelector(state => state.amount)
  return (
      <>
      
        <h1 className='text-center top'>Deposit/Withdraw Money.🙍‍♂️🖋🖊</h1>
    <div className='shop my-5'>
<button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
Update Money({amount})
<button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>


    </div>
    </>

  )
}

export default Shop