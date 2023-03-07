import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form>
      <OptionSize
        size={props.size}
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentPrice={props.setCurrentPrice}
      />

      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />

      <Button
        className={styles.button}
        onClick={props.productSummary}
        type={'submit'}
      >
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  // size: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  productSummary: PropTypes.func.isRequired,
};

export default ProductForm;
