import useProcessing from "@/data/hooks/useProcessing"
import useStarWars from "@/data/hooks/useStartWars"
import { useState } from "react"

export default function Personages(){
    const { processing, personages, getPersonages } = useStarWars()
    // const { processing, beginProcessing, finalizeProcessing} = useProcessing()
    // const [ personages, setPersonages ] = useState<any>([])
    
    function renderingPersonages(){
        return(
            <ul>
                    {personages.map((p:any) => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
        )
    }

    return (
      <div>
        {processing ? (
          <div>Processing ...</div>
        ) : personages.length > 0 ? (
          renderingPersonages()
        ) : (
          <h1>No one personage find</h1>
        )}

        <button onClick={getPersonages} className="bg-blue-500 p-2">
          Get
        </button>
      </div>
    );
}