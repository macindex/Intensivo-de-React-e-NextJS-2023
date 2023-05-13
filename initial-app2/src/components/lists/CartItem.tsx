import ItemCart from "@/model/ItemCart";
import Coin from "@/utils/Coin";


export default function CartItem(props: ItemCart){
    
  return (
    <div
      className={`
      flex items-center gap-2 rounded-full bg-blue-500 px-4`}
    >
      <span className="flex justify-center items-center w-7 h-7 rounded-full p-2 bg-blue-700">
        {props.amount}
      </span>
      <span>{props.product.name}</span>
      <span className="pr-5">
        {Coin.format(props.product.price * props.amount)}
      </span>
    </div>
  );
}