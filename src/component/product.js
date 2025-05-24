import { useContext} from "react"
import { api } from "../App";
import Item from "./cart";
const Product = () => {
    const context = useContext(api)
   
    return (
        <section id="product-sec" className="my-[150px] relative flex flex-col gap-5" style={{ paddingTop: context.mode_header === 'main' ? '0' : '100px' }}>
           


            <div id="product" className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center min-h-screen ">
                {
                    context.result.length ? context.result.map(item => (
                        <Item title={item.title} img={item.img} isheart={item.heart} desc={item.desc} color={item.color} price={item.price} id={item.id} rating={item.rating} key={item.id} />
                    )) : context.product.map(item => (
                        <Item title={item.title} img={item.img} desc={item.desc} color={item.color} price={item.price} rating={item.rating} id={item.id} key={item.id} />
                    ))
                }

            </div>
        </section>

    )
}
export default Product

