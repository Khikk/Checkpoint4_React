import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Stars from "../components/Stars"
function ProductInfoPage(){

    const {id} = useParams()
    let navigate = useNavigate()

    const [product, setProducts] = useState({})

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' +id)
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [id])

        
    return(
        <div className="card_product">
            <div className="card_content">
                <h1>{product.title}</h1>
                <img className="img_card" src={product.image}/>
                <div className="text_card">
                <p>Price: {product.price}$</p>
                <p>Description: {product.description}</p>
                </div>
                <Stars rating={product.rating}/>
                <button onClick={() => navigate(-1)} className="btn_decoration">Go back</button>
            </div>
            
        </div>
    )
}

export default ProductInfoPage