import React from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';

const SizeSelect = ({ sizes, handleChange, setFieldValue }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="size" />
      <Field
        name="size"
        as="select"
        className="form-control"
        disabled={sizes.length === 0}
        onChange={(e) => {
          handleChange(e);
          setFieldValue('quantity', 1);
        }}
      >
        <option value="" key="" disabled hidden>
          {sizes.length === 0 ? 'out of stock' : 'select size'}
        </option>
        {sizes.map((sku) => (
          <option key={sku} value={sku}>
            {sku}
          </option>
        ))}
      </Field>
    </>
  );
};

const QtySelect = ({ qty = 0 }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="quantity" />
      <Field name="quantity" as="select" className="form-control">
        <option value="" disabled hidden>
          -
        </option>
        {[...new Array(Math.min(qty, 15))].map((_, idx) => (
          <option value={idx + 1} default={idx === 0}>
            {idx + 1}
          </option>
        ))}
      </Field>
    </>
  );
};

const CartForm = ({ skus }) => {
  const skusInStock = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const size in skus) {
    if (skus[size]) skusInStock[size] = skus[size];
  }
  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
      initialValues={{ size: '', quantity: '' }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} data-testid="cartForm">
          <div className="form-row">
            <div className="col-md-7 form-group">
              <SizeSelect
                sizes={Object.keys(skusInStock)}
                handleChange={formik.handleChange}
                setFieldValue={formik.setFieldValue}
              />
            </div>
            <div className="col-md-5 form-group">
              <QtySelect qty={skus[formik.values.size]} />
            </div>
          </div>
          <div className="form-row">
            <div className="col form-group">
              <button
                type="submit"
                className="form-control"
                hidden={Object.keys(skusInStock).length === 0}
              >
                add to cart
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({ skus: state.selected.style.skus });

export default connect(mapStateToProps)(CartForm);
