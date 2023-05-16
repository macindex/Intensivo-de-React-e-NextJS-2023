import Background from "@/components/starwars/Background";
import Personages from "@/components/starwars/Personages";

export default function PageStarWars(){
    


    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <Background />
            <Personages />
        </div>
    )
} 