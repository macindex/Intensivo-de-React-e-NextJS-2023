import ItemCart from "@/model/ItemCart";
import { IconCircleX } from "@tabler/icons-react";
import { Emblema_One } from "next/font/google";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

interface CartProps{
    itens: ItemCart[]
}

export default function Cart(props: CartProps){
 const total = props.itens.reduce((som, item) => {
  return som + item.amount * item.product.price
 }, 0)
  return (
   <div className="flex flex-col border border-white overflow-hidden w-4/5">
     <div className="bg-zinc-800 text-3xl p-3">
      <span>Cart</span>
      <span>Cart</span>
      </div>
     <div className="flex gap-5">
      {props.itens.length === 0 ? (
        // <div className="flex gap-3 justify-center text-zinc-500">
        //   <IconCircleX />
        //   <span>No item in the cart!</span>
        // </div>
        <EmptyCart />
      ): (
        props.itens.map((item, i) => {
          return <CartItem key={i} {...item} />
        })
      )}

     </div>
   </div>
 );
}