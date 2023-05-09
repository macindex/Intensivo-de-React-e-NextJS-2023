import AleatoryImage from "@/components/hooks/aleatoryImage";

export default function PageImages(){
    return (
        <div className={`
         flex justify-center items-center flex-wrap gap-5 h-screen
        `}>
            <AleatoryImage />
            <AleatoryImage />
            <AleatoryImage />
        </div>
    )
}