import Son from "./Son";

interface FatherProps {
    name: string
    lastname: string
}

export default function Father (props: FatherProps){
    return (
        <div className={`
        flex flex-col gap-5
        `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Father</span>
                <span>{props.name}</span>
                <span>{props.lastname}</span>
            </div>
            <Son name="Virginia" lastname={props.lastname} />
            <Son name="Marlene" lastname={props.lastname} />
            <Son name="Mary" lastname={props.lastname} />
        </div>
    )
}