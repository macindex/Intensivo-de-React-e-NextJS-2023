import products from "@/constants/products"
import Product from "@/model/Product"
import ProductItem from "./ProductItem"

interface ListProductsProps{
    products: Product[]
    buy: (product: Product) => void
}

export default function ListProducts(props: ListProductsProps) {
    return(
        <div className="flex flex-wrap gap-5">
            {props.products.map(product => {
                return <ProductItem key={product.id} product={product} buy={props.buy} />
            })}
        </div>
    )
}