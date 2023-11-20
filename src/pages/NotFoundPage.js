import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFoundPage(){

    let navigate = useNavigate()


    return(
        <div className="content">
            <button onClick={() => navigate('/products')} className="btn_decoration">Go home</button>
            <button onClick={() => navigate(-1)} className="btn_decoration">Go back</button>
            <img src="https://anime-chan.me/uploads/posts/2016-01/1453131583_anime-404-pesochnica-yuru-yuri-527330.jpeg" width='1200px' height='1000px'></img>
        </div>
    )
}

export default NotFoundPage