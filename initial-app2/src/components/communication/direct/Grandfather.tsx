import Father from "./Father";

interface GrandfatherProps {
    name: string
    lastname: string
}

export default function Grandfather(props: GrandfatherProps){
    return (
        <div className="flex flex-col
        gap-5 p-5 rounded-md bg-purple-500 text-white border border-white
        ">
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Grandfather</span>
                <span>{props.name}</span>
                <span>{props.lastname}</span>
            </div>
            <div className="flex gap-5">
            <Father name="Antonio" lastname={props.lastname} />
            <Father name="Pedro" lastname={props.lastname} />
            <Father name="João" lastname={props.lastname} />
            </div>
        </div>
    )
}