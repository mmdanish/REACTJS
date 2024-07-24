import React from 'react'
import { useState } from 'react'
import App from './App'

export const Counters = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    let increment = () => {
        setCount(count + 1)
    }

    let decrement = () => {
        if(count!=0){
            setCount(count - 1)
        }
    }

    let toggled = () => {
        setToggle(!toggle)
    }

    
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <button onClick={toggled}>
            {toggle ? 
            <span>Register</span>
            :
            <span>Login</span>
            }
        </button>

        {toggle ?
        <App />
        :
        <div>
            Register
        </div>

        }
    </div>
  )
}
