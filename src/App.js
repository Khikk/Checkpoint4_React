import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css'
import ProductListPage from "./pages/ProductListPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductInfoPage from "./pages/ProductInfoPage"
import NotFoundPage from "./pages/NotFoundPage"




function App(){
    return(
        <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/products' element={<ProductListPage/>}/>
                <Route path='/product/:id' element={<ProductInfoPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
                <Route path='/product/:id/*' element={<NotFoundPage/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
        </div>
    )
}

export default App