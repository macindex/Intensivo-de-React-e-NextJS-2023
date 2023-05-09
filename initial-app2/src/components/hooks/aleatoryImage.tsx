import Image from "next/image"
import { useState } from "react"

export default function AleatoryImage(){
    const [search, setSearch ] = useState<string>('')
    const [size, setSize ] = useState<number>(300)
  
    const url = 'https://source.unsplash.com/featured/'
    // let search: string = '' 

    // function imageUrl(){
    //     return `${url}${search}`
    // }

    function renderButton(value: string){
        return(
            <button className={`
            bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                setSearch(value) 
                console.log(value)}}>
                {value}
            </button>
        )
    }
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <Image src={`${url}${size}x${size}?${search}`} height={300} width={300} alt="Imagem" />
            <div className="flex gap-5">
            {renderButton('abstract')}
            {renderButton('city')}
            {renderButton('person')}
            </div>
            <div>
                <input 
                type="number" 
                value={size} 
                className='bg-zinc-800 outline-none'
                onChange={e => {
                    setSize(+e.target.value)
                }} />
            </div>
        </div>
    )
}