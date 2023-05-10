interface ButtonProps{
    inc: (valor: number) => void
    dec: (valor: number) => void
}

export default function Buttons(props: ButtonProps){
    return(
        <div className='flex justify-between pt-2 gap-2'>
            <button className='botao flex-1' onClick={() => props.dec(2)}>
                -2
            </button>
            <button className='botao flex-1' onClick={() => props.inc(2)}>
                +2
            </button>
        </div>
    )
}