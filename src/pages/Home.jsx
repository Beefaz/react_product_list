import cartImage from '../assets/images/svg/cart.svg'
import Product from "../components/Product.jsx";
import {products} from "../constants/constants.js";
import {useState} from "react";

const cart = [];

const Home = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const getTotalItemsInCart = (cart) => cart.reduce((count, val) => val.amountInCart ? count + val.amountInCart : count, 0);

  const setProduct = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex >= 0) cart[itemIndex].amountInCart++;
    if (itemIndex < 0) cart.push({
      ...products.find(item => item.id === id),
      amountInCart: 1,
    })
    setCartItemCount(getTotalItemsInCart(cart));
    console.dir(cartItemCount);
  }

  const generateProducts = (array) => array.map((product =>
      <Product
        product={product}
        key={product.id}
        setProduct={setProduct}
      />
  ));

  return (
    <div className="products">
      <a href="#" className="btn-cart" id="cart-redirect">
        <span id="cart-item-count">{cartItemCount}</span>
        <img src={cartImage} alt="cart_icon"/>
      </a>
      {generateProducts(products)}
    </div>
  );
}

export default Home;
