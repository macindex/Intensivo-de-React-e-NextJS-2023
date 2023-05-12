import ItemCart from "@/model/ItemCart";
import CartItem from "./CartItem";

interface CartProps{
    itens: ItemCart[]
}

export default function Cart(props: CartProps){
 return (
    <div>
        {props.itens.map((item, i) => {
            return (
                <div>
                     {props.itens.map((item, i) => {
                        return <CartItem key={i} {...item} />
                     })}

                </div>
            )
        })}
    </div>
 )
}