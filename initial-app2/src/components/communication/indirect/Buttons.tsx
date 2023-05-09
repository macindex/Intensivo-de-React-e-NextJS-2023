interface ButtonProps{
    inc: () => void
    dec: () => void
}

export default function Buttons(props: ButtonProps){
    return(
        <div className='flex justify-between pt-2 gap-2'>
            <button className='botao flex-1' onClick={props.dec}>
                Dec
            </button>
            <button className='botao flex-1' onClick={props.inc}>
                Inc
            </button>
        </div>
    )
}