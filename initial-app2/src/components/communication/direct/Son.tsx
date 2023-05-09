
interface SonProps {
    name: string
    lastname: string
}

export default function Son(props: SonProps){
    return (
        <div className={`
        flex justify-center items-center bg-green-500 rounded-md p-5 border border-white 
        `}>
        <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Father</span>
                <span>{props.name}</span>
                <span>{props.lastname}</span>
            </div>
        </div>
        
    )
}