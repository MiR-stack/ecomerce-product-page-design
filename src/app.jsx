
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Product from "./pages/product/product";
import product from './data'

const App = ()=>{
    return <Router>
        <Routes>
            <Route path="/" element={<Product product={product} />} />
        </Routes>
    </Router>
}


export default App;