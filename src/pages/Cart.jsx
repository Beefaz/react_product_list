import '../styles/cart.css'
import {useState} from "react";
import Button from "../components/Button.jsx";
import {initStorage, syncStorage} from "../constants/helpers.js";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(initStorage('cart'));

  const setProductAmount = (number, currentAmount, product) => {
    if (number + currentAmount >= product.stock || number + currentAmount < 0) return;

    const newCart = cartProducts.reduce((newList, item) =>
      item.id !== product.id
        ? [...newList, item]
        : [...newList, {
          ...item,
          amountInCart: currentAmount + number
        }], []);

    syncStorage('cart', [...newCart]);
    setCartProducts([...newCart]);
  }

  const removeProduct = (product) => {
    const newCart = cartProducts.filter(item => item.id !== product.id);
    syncStorage('cart', [...newCart]);
    setCartProducts([...newCart]);
  }

  const renderProducts = (array) => array.map((product => {
    const {title, description, amountInCart, category, price} = product;

    return <tr key={product.id}>
      <td className="title">{title}</td>
      <td>
        <div>{`Category: ${category}`}</div>
        {description}
      </td>
      <td>
        <div className="amount-control">
          <Button onClick={() => setProductAmount(-1, amountInCart, product)}>-</Button>
          <div>{amountInCart}</div>
          <Button onClick={() => setProductAmount(1, amountInCart, product)}>+</Button>
        </div>
      </td>
      <td className="price">{`$${price}`}</td>
      <td className="actions">
        <Button onClick={() => removeProduct(product)}>delete</Button>
      </td>
    </tr>
  }));

  return (
    <div className="cart">
      {cartProducts.length === 0 && <div>Kol kas nėra sukurtų produktų.</div>}
      {cartProducts.length !== 0 &&
        <div className="table-wrapper">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>{renderProducts(cartProducts)}</tbody>
          </table>
        </div>}
    </div>
  );
}

export default Cart;
