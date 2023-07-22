import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
   increment,
   decrement,
   reset,
   incrementByAmount,
   decrementByAmount,
} from './counterSlice'
import { useStoreDispatch } from '../../app/store'
import { RootState } from '../../app/store'

function Counter() {
   const count = useSelector((state: RootState) => state.counter.count)
   const [incrementAmount, setIncrementAmount] = useState(0)
   const [decrementAmount, setDecrementAmount] = useState(0)
   const dispatch = useStoreDispatch()

   const resetAll = () => {
    setIncrementAmount(0)
    setDecrementAmount(0)
    dispatch(reset())
   }

   return (
      <section className="flex flex-col items-center">
         <p className="w-[50px] h-[50px] rounded-full bg-teal-300 grid place-content-center font-bold text-teal-600 my-5">
            {count}
         </p>
         <div className="grid grid-cols-2 gap-2">
            <section className="grid grid-cols-2 gap-2">
               <div className="flex flex-col gap-2 items-center">
                  <h1>Increment By: </h1>
                  <input
                     className="border-2 rounded-md p-1 max-w-[60px]"
                     type="number"
                     value={incrementAmount}
                     onChange={(e) => setIncrementAmount(Number(e.target.value))}
                  />
               </div>
               <div className="flex flex-col gap-2 items-center">
                  <h1>Decrement By: </h1>
                  <input
                     className="border-2 rounded-md p-1 max-w-[60px]"
                     type="number"
                     value={decrementAmount}
                     onChange={(e) => setDecrementAmount(Number(e.target.value))}
                  />
               </div>
            </section>
            <div className="grid grid-cols-2 gap-2">
               <button
                  onClick={() => dispatch(increment())}
                  className="py-2 px-6 rounded-md bg-slate-300 font-semibold"
               >
                  +
               </button>
               <button
                  onClick={() => dispatch(decrement())}
                  className="py-2 px-6 rounded-md bg-slate-300 font-semibold"
               >
                  -
               </button>
               <button
                  onClick={() => dispatch(reset())}
                  className="py-2 px-6 rounded-md bg-slate-300 font-semibold"
               >
                  reset counter
               </button>
               <button
                  onClick={() => dispatch(incrementByAmount(incrementAmount))}
                  className="py-2 px-6 rounded-md bg-slate-300 font-semibold"
               >
                  Increment by {incrementAmount}
               </button>
               <button
                  onClick={() => dispatch(decrementByAmount(decrementAmount))}
                  className="py-2 px-6 rounded-md bg-slate-300 font-semibold"
               >
                  Decrement by {decrementAmount}
               </button>
               <button
                  onClick={() => resetAll()}
                  className="py-2 px-6 rounded-md bg-red-500 font-bold text-white"
               >
                  Reset All
               </button>
            </div>
         </div>
      </section>
   )
}

export default Counter
