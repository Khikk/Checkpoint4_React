import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Stars from "../components/Stars"


function ProductListPage(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    let navigate = useNavigate()

    useEffect(() => {
        navigate('/products')
    }, [])

    return(
        <div className="content">
            <div className="products_content">
                {products.map(elem => 
                <div className="products_block">
                        <Link to={'/product/' + elem.id} key={elem.id} className="decoration_none">
                            <p>{elem.title}</p>
                            <Stars rating={elem.rating}/>
                        </Link>          
                </div>)}
            </div>
        </div>
    )
}

export default ProductListPage