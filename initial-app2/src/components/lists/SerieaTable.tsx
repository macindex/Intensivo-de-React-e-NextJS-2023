interface TableSerieaProps{
    times: string[] 
}

export default function SerieaTable(props: TableSerieaProps){
    // console.log(props.times)
    const itens: any[] = []

    // Transforming string to <li>
    for(let i = 0; i < props.times.length; i++){
        console.log(props.times[i])
        itens.push(
            (<li key={props.times[i]} className="text-xl list-decimal">
                {props.times[i]}
            </li>)
        )
    }
    const itens2 = props.times.map((time, i) => {
        return(
            <li key={time} className={`text-2xl list-decimal ${i % 2 === 0 ? 'text-blue-200' : 'text-yellow-400'}`} >
                {time}
            </li>
        )
    })
    return (
      <div>
        <ol>{itens2}</ol>
        <ol>{itens}</ol>
      </div>
    );
}