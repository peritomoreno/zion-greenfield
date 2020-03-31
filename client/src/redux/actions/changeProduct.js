import { Product, QA, Reviews } from '../../api';
import setCurrentProduct from './currentProduct';
import setStyles from './styles';
import { setStyle, setThumbnail } from './selected';
import setQuestions from './setQuestions';
import setReviews from './setReviews';
import setBreakdowns from './setBreakdowns';
import { getRelatedProduct } from './related';

// Use API calls to init redux store
const changeProduct = (id) => {
  return async (dispatch) => {
    const product = await Product.getProduct(id);
    dispatch(setCurrentProduct(product));

    const { results: styles } = await Product.getStyles(id);
    dispatch(setStyles(styles));
    dispatch(setStyle(styles[0]));
    dispatch(setThumbnail(0));

    const questions = await QA.fetchAllQuestions(id);
    dispatch(setQuestions(questions.error ? [] : questions.results));

    const reviews = await Reviews.getReviews(id);
    dispatch(setReviews(reviews.error ? [] : reviews));

    const breakdowns = await Reviews.getMetaData(id);
    dispatch(setBreakdowns(breakdowns.error ? [] : breakdowns));

    dispatch(getRelatedProduct(id));
  };
};

export default changeProduct;
