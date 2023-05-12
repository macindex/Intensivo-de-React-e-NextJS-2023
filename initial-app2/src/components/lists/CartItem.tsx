import ItemCart from "@/model/ItemCart";


export default function CartItem(props: ItemCart){
    <div>
        {props.product.name}
        {props.amount}
    </div>
}