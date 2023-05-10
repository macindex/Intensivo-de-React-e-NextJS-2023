import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import If from "./If";
import IfElse from "./IfElse";

interface QuestionProps{
    indice: number
    text: string
    answer: string
    open: boolean
    changeVisibility: (indice: number) => void
}

export default function Question(props: QuestionProps){
// const [ open, setOpen ] = useState<boolean>(false) 
// const temp = <h1>Look its nice!</h1>

    return (
    <div className={`border border-white rounded-md overflow-hidden`}>
      <div className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between" onClick={() => props.changeVisibility(props.indice)} >
        <span>{props.text}</span>
        {/* <IfElse teste={open} >
            <IconChevronDown />
            <IconChevronUp />
        </IfElse> */}
        {props.open ? <IconChevronDown /> : <IconChevronUp />} 
        </div>
      {/* {open ? "Yes" : "No"} */}
        
        <If teste={props.open}>
        <div className="p-5">{props.answer} </div>
        </If>

        
    </div>
  );
}