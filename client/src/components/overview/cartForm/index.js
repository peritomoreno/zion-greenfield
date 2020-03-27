import React from 'react';
import { Formik, Field, Form } from 'formik';

const CartForm = ({ selectedStyle: { skus } }) => {
  return (
    <div data-testid="cartForm" className="container">
      <Formik
        onSubmit={(values) => console.log(values)}
        initialValues={{ size: '', quantity: 1 }}
      >
        <Form>
          <div className="form-row">
            <div className="col-md-7 form-group">
              <label htmlFor="size"> </label>
              <Field
                name="size"
                as="select"
                placeholder="select size"
                className="form-control"
              >
                <option value="" disabled defaultValue hidden>
                  select size
                </option>
                {Object.keys(skus).map((sku) => (
                  <option value={sku}>{sku}</option>
                ))}
              </Field>
            </div>
            <div className="col-md-5 form-group">
              <label htmlFor="quantity"> </label>
              <Field
                name="quantity"
                as="select"
                placeholder="select quantity"
                className="form-control"
              >
                {new Array(5).fill(null).map((_, idx) => (
                  <option value={idx + 1}>{idx + 1}</option>
                ))}
              </Field>
            </div>
          </div>
          <div className="form-row">
            <div className="col form-group">
              <button type="submit" className="form-control">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default CartForm;
