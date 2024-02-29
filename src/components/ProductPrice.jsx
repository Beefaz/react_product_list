import '../styles/product_price.css'

const ProductPrice = ({price, discountPercentage}) => {

  return (
    <>
      <div className={`price-container ${discountPercentage ? ' discounted' : ''}`}>
        {discountPercentage
          ? <div className="price-discounted"> {`$${(price * (100 - discountPercentage) / 100).toFixed(2)}`}</div>
          : <></>
        }
        <div className='price'>{`$${price.toFixed(2)}`}</div>
      </div>
    </>
  );
}
export default ProductPrice;
