import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import jmoment from "moment-jalaali";
import * as Yup from "yup";
import { DatePicker } from "jalali-react-datepicker";
import { latinToPersian } from "utilsFolder/lastinToPersian";
import { Card, Col, Row } from "react-bootstrap";
import { WarningToast } from "hoc/ToastNotify/ToastNotify";
import FormikDatePicker from "components/FormikDatePicker";

class ReserveListFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingProducts: true,
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const res = await fetch("/api/panel/products");
      const data = await res.json();
      if (data.status === "success") {
        this.setState({
          products: data.data,
          loadingProducts: false,
        });
      } else {
        this.setState({
          loadingProducts: false,
        });
        throw new Error("مشکل");
      }
    } catch (er) {
      WarningToast("مشکل در دریافت اطلاعات");
    }
  }

  render() {
    const { products, loadingProducts } = this.state;
    return (
      <div>
        <Formik
          initialValues={{
            product_parent_id: "",
            product_id: "",
            date_mehman: null,
          }}
          validationSchema={Yup.object().shape({
            product_id: Yup.string().required("سانس را انتخاب نمایید"),
          })}
          onSubmit={this.props.onSubmitFilter}
          render={({
            getFieldProps,
            errors,
            status,
            touched,
            values,
            setFieldValue,
          }) => (
            <Form>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="product_parent_id">محصول </label>
                    <Field
                      name="product_parent_id"
                      as={"select"}
                      className={
                        "form-control" +
                        (errors.product_parent_id && touched.product_parent_id
                          ? " is-invalid"
                          : "")
                      }
                    >
                      <option key={"xx"} value={null}>
                        انتخاب نمایید
                      </option>
                      {products
                        .filter((product) => product.parent_id == 0)
                        .map((product) => {
                          return (
                            <option key={product.id} value={product.id}>
                              {product.title}
                            </option>
                          );
                        })}
                    </Field>
                    <ErrorMessage
                      name="product_parent_id"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  {" "}
                  <div className="form-group">
                    <label htmlFor="product_id">سانس </label>
                    {values.product_parent_id &&
                    parseInt(values.product_parent_id) > 0 ? (
                      <Field
                        name="product_id"
                        as={"select"}
                        className={
                          "form-control" +
                          (errors.product_id && touched.product_id
                            ? " is-invalid"
                            : "")
                        }
                        onChange={(e) => {
                          const product_id = e.target.value;
                          setFieldValue("product_id", product_id);
                        }}
                      >
                        <option key={"product.id"} value={null}>
                          انتخاب نمایید
                        </option>
                        {products
                          .filter(
                            (product) =>
                              product.parent_id == values.product_parent_id
                          )
                          .map((product) => {
                            return (
                              <option key={product.id} value={product.id}>
                                {product.title}
                              </option>
                            );
                          })}
                      </Field>
                    ) : (
                      <div className={"text-danger"}>
                        ابتدا محصول انتخاب نمایید.
                      </div>
                    )}
                    <ErrorMessage
                      name="product_id"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </Col>
              </Row>

              <div className="form-group">
                {" "}
                <FormikDatePicker
                  name={"date_mehman"}
                  label={"تاریخ رزرو"}
                  formik={{
                    touched: touched,
                    setFieldValue: setFieldValue,
                    errors: errors,
                    getFieldProps,
                  }}
                  onChange={(value) => {
                    setFieldValue("date_mehman", value);
                  }}
                />
                {/*<DatePicker*/}
                {/*  className={"form-control"}*/}
                {/*  label={"تاریخ رزرو"}*/}
                {/*  timePicker={false}*/}
                {/*  onClickSubmitButton={(arg) => {*/}
                {/*    console.log(arg);*/}
                {/*    const date_mehman = jmoment(arg.value).format(*/}
                {/*      "jYYYY-jM-jD"*/}
                {/*    );*/}
                {/*    setFieldValue("date_mehman", date_mehman);*/}
                {/*  }}*/}
                {/*  value={values.date_mehman}*/}
                {/*  daysEventListeners={(e) => {*/}
                {/*    console.log(e);*/}
                {/*  }}*/}
                {/*  onToggle={(x) => {*/}
                {/*    console.log(x);*/}
                {/*  }}*/}
                {/*/>*/}
                {/*<ErrorMessage*/}
                {/*  name="confirmPassword"*/}
                {/*  component="div"*/}
                {/*  className="invalid-feedback"*/}
                {/*/>*/}
              </div>

              <div className="form-group text-center">
                <button type="submit" className="btn btn-outline-info ml-2">
                  جستجو
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default ReserveListFilter;
