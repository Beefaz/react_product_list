import cartImage from '../assets/images/svg/cart.svg'
import Product from "../components/Product.jsx";
import {products} from "../constants/constants.js";
import {useState} from "react";
import {initStorage, syncStorage} from "../constants/helpers.js";
import {Link} from "react-router-dom";

const getTotalItemsInCart = (cart) => cart.reduce((count, product) => product.amountInCart ? count + product.amountInCart : count, 0);

const Home = () => {
  const cart = initStorage('cart');
  const [cartItemCount, setCartItemCount] = useState(getTotalItemsInCart(cart));

  const setProduct = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex >= 0) cart[itemIndex].amountInCart++;
    if (itemIndex < 0) cart.push({
      ...products.find(item => item.id === id),
      amountInCart: 1,
    })
    syncStorage('cart', [...cart]);
    setCartItemCount(getTotalItemsInCart(cart));
  }

  const renderProducts = (array) => array.map((product =>
      <Product
        product={product}
        key={product.id}
        setProduct={setProduct}
      />
  ));

  return (
    <div className="products">
      <div className="btn-cart" id="cart-redirect">
        <Link to={'/cart'}>
          <span id="cart-item-count">{cartItemCount}</span>
          <img src={cartImage} alt="cart_icon"/>
        </Link>
      </div>
      {renderProducts(products)}
    </div>
  );
}

export default Home;
