import React from 'react'
import { useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);

    const handlerSum = () => {
        setCount(count + 1);
    }

    const handlerRes = () => {
        setCount(count - 1);
    }

  return (
    <>  
        <div className='card'>
            <div>Contador</div>
            <h2>{count}</h2>
            <div className='contain'>
                <button className='button' onClick={handlerSum}>Sumar</button>
                <button className='button' onClick={handlerRes}>Restar</button>
            </div>
        </div>

    </>
    

  )
}
