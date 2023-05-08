import Circle from "@/components/basics/Circle";

export default function CirclesPage(){
    return(
        <div className="flex justify-between items-center bg-red-600">
            <Circle texto="circ #1" />
            <Circle texto="circ #2" almostPerfect/>
            <Circle texto="circ #3"/>
        </div>
    )
}