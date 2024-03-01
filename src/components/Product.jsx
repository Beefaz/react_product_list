import '../styles/product.css';
import Rating from "./Rating.jsx";
import ProductPrice from "./ProductPrice.jsx";
import Button from "./Button.jsx";

const Product = ({product, setProduct}) => {
  const {id, thumbnail, discountPercentage, title, rating, description, price} = product;

  return (
    <div className="product" key={id}>
      <div className="thumbnail-container">
        <img src={thumbnail} alt="product"/>
        {discountPercentage ? <div className='discount'>{`-${discountPercentage}%`}</div> : ''}
      </div>
      <div className="description-container">
        <div className="title">{title}</div>
        <Rating rating={rating}></Rating>
        <div className="description">{description}</div>
      </div>
      <div className="actions-container">
        <ProductPrice price={price} discountPercentage={discountPercentage}/>
        <Button setProduct={setProduct} className={'btn-add-to-cart'}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Product;
