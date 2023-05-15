import { useState } from "react"
import useProcessing from "./useProcessing"

export default function useStarWars(){
    const { processing, beginProcessing, finalizeProcessing} = useProcessing()
    const [ personages, setPersonages ] = useState<any>([])
    
    async function getPersonages(){
        try {
            beginProcessing()
            const resp = await fetch('https://swapi.dev/api/people/')
            const data = await resp.json()
            setPersonages(data.results)
        } finally {
            finalizeProcessing()
        }
    }
    
    return {
        personages,
        getPersonages,
        processing
    }
}