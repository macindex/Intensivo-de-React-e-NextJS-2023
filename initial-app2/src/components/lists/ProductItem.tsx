import products from "@/constants/products";
import Product from "@/model/Product";
import Coin from "@/utils/Coin";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from 'next/image'

interface ProductItemProps{
    product: Product
    buy: (product: Product) => void
}

export default function ProductItem(props: ProductItemProps){
    const { product } = props
    return (
      <div
        className={`
        flex flex-col rounded-md border border-zinc-600
        `}
      >
        <Image
          src={props.product.image}
          width={300}
          height={200}
          alt="Imagem do produto"
          className="rounded-md"
        />
        <div className="flex flex-col p-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black">{product.name}</div>
            <div className="text-green-500 font-bold">{Coin.format(product.price)} </div>
          </div>
          <div>
            <div className="text-gray-500">{product.description}</div>
          </div>
          <div>
            <button className="botao flex justify-center gap-2 w-full"
            onClick={() => props.buy(product)} >
                <IconShoppingCart />Buy</button>
          </div>
        </div>
      </div>
    );
}