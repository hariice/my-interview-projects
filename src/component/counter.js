import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCounter=(type)=> {
        let num = count || 0
        if (type === 'add') {
            num = count + 1
        } else {
            num = count-1
        }
        localStorage.setItem('count', num);
        setCount(num)
    }

    useEffect(()=>{
        setCount(Number(localStorage.getItem('count')));
    }, [])

console.log("count", typeof count);


  return (<>
<h1>Count: {count}</h1> <button onClick={()=>handleCounter('add')}>add +</button> <button onClick={()=>handleCounter('minus')}>minus -</button>
  </>
  )
}

export default Counter