
import Product from "./component/product"
import Main from './component/main'
import { useContext} from "react"
import { api } from "./App"

const Face_page=()=>{
    const context=useContext(api)
    
    return(
        <>
        {context.mode_header==='main'&&<Main/>}
        {context.mode_header!=='main'&&<Product/>}
        </>
    )
}
export default Face_page
  /* <Product/> */