import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

export default function Counter(){
    const [ num, setNum ] = useState<number>(0)

    function increment(){
        setNum(num + 1)
    }
    function decrement(){
        setNum(num - 1)
    }

    return(
        <div className={`
        flex flex-col p-2 w-72 h-72 border border-zinc-400 rounded-lg
        `} >
            <Display valor={num} />
            <Buttons inc={increment} dec={decrement} />
        </div>
    )
}