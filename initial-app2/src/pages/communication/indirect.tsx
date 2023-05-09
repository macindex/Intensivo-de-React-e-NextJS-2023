import Counter from "@/components/communication/indirect/Counter";


export default function IndirectPage(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-5xl font-black mb-10">Indirec communication</h1>
            <div className="flex gap-5">
                <Counter />
                <Counter />
                <Counter />
            </div>
        </div>
    )
}