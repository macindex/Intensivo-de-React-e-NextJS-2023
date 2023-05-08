import Event from "@/components/basics/Event";

export default function EventPage(){
    return(
        <div className="flex justify-center flex-wrap items-center gap-5 h-screen bg-purple-400">
            <Event />
            <Event />
            <Event />
        </div>
    )
}