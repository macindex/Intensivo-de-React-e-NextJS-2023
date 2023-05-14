
import Cart from "@/components/lists/Cart"
import CartItem from "@/components/lists/CartItem"
import ListProducts from "@/components/lists/ListProducts"
// import ProductItem from "@/components/lists/ProductItem"
import products from "@/constants/products"
import ItemCart from "@/model/ItemCart"
import Product from "@/model/Product"
import { useState } from "react"

export default function ProductsPage(){
    // const product = products[0]
    const [ itens, setItens ] = useState<ItemCart[]>([])
    function addProduct(product: Product){
        const actualItem = itens.find((item) => item.product.id === product.id) ?? { amount: 0, product }
        const newItem = {...actualItem, amount: actualItem.amount + 1}
        const otherItens = itens.filter((item) => item.product.id !== product.id)
        setItens([...otherItens, newItem])
    }
    return(
        <div className={`
        flex flex-col gap-10 justify-center items-center h-screen
        `}>
            {/* <ProductItem product={product} /> */}
            <Cart itens={itens} />
            <ListProducts products={products} buy={addProduct} />
        </div>
    )
}