import { useState } from "react"

export default function useProcessing(){
    const [ processing, setProcessing ] = useState<boolean>(false)
    
    function beginProcessing(){
        setProcessing(true)
    }

    function finalizeProcessing(){
        setProcessing(false)
    }
    return {
        processing,
        beginProcessing,
        finalizeProcessing
    }
}