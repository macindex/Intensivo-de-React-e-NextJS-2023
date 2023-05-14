import { IconCircleX } from "@tabler/icons-react";

export default function EmptyCart(){
    return(
        <div className="flex gap-3 justify-center text-zinc-500">
          <IconCircleX />
          <span>No item in the cart!</span>
        </div>
    )
}