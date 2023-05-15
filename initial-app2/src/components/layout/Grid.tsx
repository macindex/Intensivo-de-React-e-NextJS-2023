interface GridProps{
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2: number
    children: any
}

export default function Grid(props: GridProps){
    // grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    return(
        <div className={`
            grid grid-cols-${props.cols ?? 1} 
            ${props.sm ? `sm:grid-cols${props.sm}` : ''}
            ${props.md ? `sm:grid-cols${props.md}` : ''}
            ${props.lg ? `sm:grid-cols${props.lg}` : ''}
            ${props.xl ? `sm:grid-cols${props.xl}` : ''}
            ${props.xl2 ? `sm:grid-cols${props.xl2}` : ''}
            gap-4 w-full 
        `} >
            {props.children}
        </div>
    )
}