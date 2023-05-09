import Image from "next/image"

export default function AleatoryImage(){
    const url = 'https://source.unsplash.com/featured/200x200'
    let search: string = '' 

    function imageUrl(){
        return `${url}${search}`
    }

    function renderButton(value: string){
        return(
            <button className={`
            bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                search = value 
                console.log(imageUrl)}}>
                {value}
            </button>
        )
    }
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <Image src={imageUrl()} height={200} width={200} alt="Imagem" />
            <div className="flex justify-between gap-5">
            {renderButton('abstract')}
            {renderButton('city')}
            {renderButton('person')}
            </div>
        </div>
    )
}