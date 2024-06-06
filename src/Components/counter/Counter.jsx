import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../../feature/counter/counterSlice';



export default function Counter() {
  const {value} = useSelector(({counter}) => counter)
  const dispatch =useDispatch()
  const incrementHandle=()=>{
    dispatch(increment())
  }
   const decrementHandle=()=>{
    dispatch(decrement())
   }
   const resetHandle=()=>{
    dispatch(reset())
   }
   const incrementByAmountHandle=()=>{
    dispatch(incrementByAmount(5))
   }

  return (
    <>
    <div className="container">
    <h1 className='mb-4 mt-4'>Counter: {value}</h1>
    <div className='d-flex gap-1 buttons'>
    <Button variant="primary" size="lg" onClick={incrementHandle} active> Increment</Button>
    <Button variant="primary" size="lg" onClick={decrementHandle}  active>Decrement</Button>
    <Button variant="primary" size="lg" onClick={incrementByAmountHandle}  active> Increment by Amount</Button>
    <Button variant="primary" size="lg" onClick={resetHandle} active>Rest</Button>
    </div>
    </div>
    </>
  )
}
