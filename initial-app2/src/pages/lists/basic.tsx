
import SerieaTable from "@/components/lists/SerieaTable"
import { IconBallFootball } from "@tabler/icons-react"

export default function BasicListPage(){
    const times = ['Fluminense', 'Botafogo', 'Palmeiras', 'Vasco', 'Internacional', 'Bragantino','Flamengo', 'São', 'Paulo', 'Goiás']
    return(
        <div className={`
        flex flex-col justify-center items-center h-screen
        `} >
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1} className="text-green-50" />
                Serie A Table
            </h1>
            <SerieaTable times={times} />
        </div>
    )
}