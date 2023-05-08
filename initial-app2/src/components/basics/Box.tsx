export default function Box(props: any){
    return (
        <div className={
            `bg-purple-400 rounded-md p-2 w-64 h-64`
        }>
            {props.children}
        </div>
    )
}