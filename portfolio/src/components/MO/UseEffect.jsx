import React, { useState, useEffect } from "react";
const MyButton = ()=>{
    const [ count , setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
}
return <div>
    <button onClick={()=>setCount(count+1)}></button>
</div>
