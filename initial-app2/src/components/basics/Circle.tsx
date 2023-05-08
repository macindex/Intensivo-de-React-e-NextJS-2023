interface CircleProps{
    texto: string
    almostPerfect?: boolean 
}

export default function Circle(props: any){
    return (
        <div className={`
        flex justify-center items-center
        h-64 w-64 bg-cyan-500 
        text-black text-3xl ${props.almostPerfect ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}