import ItemCart from "@/model/ItemCart";


export default function CartItem(props: ItemCart){
  function showLikeCoin(valor: number){
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }  
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
        {showLikeCoin(props.product.price * props.amount)}
      </span>
    </div>
  );
}