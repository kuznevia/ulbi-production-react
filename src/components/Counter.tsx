import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1);    
}

console.log(classes);

  return (
    <div className={classes.btn}><h1>{count}</h1><button onClick={increment}>increment</button></div>
  )
}
