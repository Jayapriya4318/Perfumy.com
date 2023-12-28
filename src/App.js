import Navbar from "./components/Navbar"
import Search from "./components/SearchBar"
import Product from "./components/Product"
import AboutUs from "./components/About"
import Footer from "./components/Footer"

function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Search></Search>
    <Product></Product>
    <AboutUs></AboutUs>
    <Footer></Footer>
        </div>
    )
}
export default App