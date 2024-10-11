import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

  return (
    <div>
        Count: {count}
        <button onClick={() => setCount (initialCount)}>Reset</button>
        <button onClick={() => setCount (count + 1)}>Increament</button>
        <button onClick={() => setCount (count - 1)}>Decreament</button>
    </div>
  )
}

export default HookCounterTwo