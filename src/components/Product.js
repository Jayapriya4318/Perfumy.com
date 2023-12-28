import perfumeone from "../assets/images/per-1.jpg"
import perfumetwo from "../assets/images/per-2.jpg"
import perfumethree from "../assets/images/per-3.jpg"

function Product(){
  return(
    <div className="product-list">
      <div className="product-card">
        <img src={perfumeone} alt=""></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam.</p>
      </div>
      <div className="product-card">
        <img src={perfumetwo} alt=""></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam.</p>
      </div>
      <div className="product-card">
        <img src={perfumethree} alt=""></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ipsam.</p>
      </div>
    </div>
  )
}
export default Product