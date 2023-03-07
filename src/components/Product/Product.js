import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentPrice, setCurrentPrice] = useState(
    props.sizes[0].additionalPrice
  );

  const getPrice = (a, b) => {
    return a + b;
  };

  const totalPrice = useMemo(
    () => getPrice(props.basePrice, currentPrice),
    [props.basePrice, currentPrice]
  );

  const productSummary = (e) => {
    e.preventDefault();
    console.log('SUMMARY');
    console.log('=============');

    console.log('Name:', props.title);
    // console.log('Price:', getPrice());
    console.log('Price:', totalPrice);
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage>
        title={props.title}
        name={props.name}
        color={currentColor}
      </ProductImage>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          {/* <span className={styles.price}>Price: {getPrice()}$</span> */}
          <span className={styles.price}>Price: {totalPrice}$</span>
        </header>

        <ProductForm
          sizes={props.sizes}
          size={props.size}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          price={props.currentPrice}
          additionalPrice={props.additionalPrice} //?
          setCurrentPrice={setCurrentPrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          // onClick={props.onClick}
          productSummary={productSummary}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // size: PropTypes.string.isRequired,
  // currentPrice: ,
  // additionalPrice: ,
  // onClick: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
