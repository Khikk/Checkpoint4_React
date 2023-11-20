import { Link } from "react-router-dom"

function Header(){

    const menu_data = ['About', 'Contact', 'A&Q']

    return(
        <div className="header">
            <Link to='/products' className="decoration_none">
            <h1>ProductsForAll</h1>
            </Link>
        </div>
    )
}

export default Header