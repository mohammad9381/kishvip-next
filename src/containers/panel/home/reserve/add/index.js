import React from "react";
import { Card, Row } from "react-bootstrap";
import NavLink from "hoc/NavLink";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { SuccessToast, WarningToast } from "hoc/ToastNotify/ToastNotify";
import { DatePicker } from "jalali-react-datepicker";
import jmoment from "moment-jalaali";
import { latinToPersian } from "utilsFolder/lastinToPersian";
import FormikDatePicker from "components/FormikDatePicker";

class PanelReserveAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loadingProducts: true,
      capacity: null,
      price: null,
    };

    this.getProducts = this.getProducts.bind(this);
    this.checkCapacity = this.checkCapacity.bind(this);
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

  async checkCapacity(date_mehman, product_id) {
    try {
      this.setState({ capacity: null, price: null });
      const res = await fetch(
        "/api/panel/productCapacity?date_mehman=" +
          date_mehman.year +
          "-" +
          date_mehman.month +
          "-" +
          date_mehman.day +
          "&product_id=" +
          product_id
      );
      const data = await res.json();
      if (data.status === "success") {
        this.setState({
          capacity: data.data.capacity,
          price: data.data.price,
        });
      } else {
        throw new Error("مشکل");
      }
    } catch (er) {
      WarningToast("ظرفیت مشخص نیست");
    }
  }

  render() {
    const { products, capacity, price } = this.state;

    return (
      <div className={"m-5"}>
        <Card>
          <Card.Header>
            <div className={"d-flex justify-content-between"}>
              <div>افزودن رزرو جدید</div>
              <div>
                <NavLink href={"/panel/"}>برگشت</NavLink>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                forosh: "",
                name_mehman: "",
                mob: "",
                product_parent_id: "",
                product_id: "",
                tedad: 0,
                date_mehman: null,
                comment: null,
              }}
              validationSchema={Yup.object().shape({
                name_mehman: Yup.string().required("نام مهمان را وارد نمایید"),
                mob: Yup.string().required("شماره همراه را وارد نمایید"),
              })}
              onSubmit={async (fields, formikHelpers) => {
                try {
                  const res = await fetch("/api/panel/addOrder", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      ...fields,
                      date_mehman:
                        fields.date_mehman.year +
                        "-" +
                        fields.date_mehman.month +
                        "-" +
                        fields.date_mehman.day,
                    }),
                  });
                  const data = await res.json();
                  if (data.status === "success") {
                    SuccessToast("با موفقیت ثبت گردید");
                    formikHelpers.resetForm();
                    this.setState({
                      capacity: null,
                      price: null,
                    });
                  } else {
                    WarningToast("خطا در ثبت رزرو. مجددا تلاش کنید");
                  }
                } catch (err) {
                  console.log(err);
                  WarningToast("مشکل در ارتباط با سرور");
                }
              }}
              render={({
                errors,
                status,
                touched,
                values,
                setFieldValue,
                getFieldProps,
              }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="forosh">نام فروشنده</label>
                    <Field
                      name="forosh"
                      type="text"
                      className={
                        "form-control" +
                        (errors.forosh && touched.forosh ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="forosh"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name_mehman">نام مهمان</label>
                    <Field
                      name="name_mehman"
                      type="text"
                      className={
                        "form-control" +
                        (errors.name_mehman && touched.name_mehman
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="name_mehman"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">شماره همراه مهمان</label>
                    <Field
                      name="mob"
                      type="text"
                      className={
                        "form-control" +
                        (errors.mob && touched.mob ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="mob"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
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

                          this.checkCapacity(values.date_mehman, product_id);
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

                  <div className="form-group">
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
                        this.checkCapacity(value, values.product_id);

                        setFieldValue("date_mehman", value);
                      }}
                    />
                    {/*<DatePicker*/}
                    {/*  className={"form-control"}*/}
                    {/*  label={"تاریخ رزرو"}*/}
                    {/*  timePicker={false}*/}
                    {/*  onClickSubmitButton={(arg) => {*/}
                    {/*    const date_mehman = jmoment(arg.value).format(*/}
                    {/*      "jYYYY-jM-jD"*/}
                    {/*    );*/}
                    {/*    setFieldValue("date_mehman", date_mehman);*/}
                    {/*    this.checkCapacity(date_mehman, values.product_id);*/}
                    {/*  }}*/}
                    {/*/>*/}
                    {/*<ErrorMessage*/}
                    {/*  name="confirmPassword"*/}
                    {/*  component="div"*/}
                    {/*  className="invalid-feedback"*/}
                    {/*/>*/}
                  </div>
                  <div className={"row"}>
                    <div className={"col text-center form-group"}>
                      <label>
                        ظرفیت :
                        {capacity === null
                          ? "انتظار"
                          : latinToPersian(capacity)}
                      </label>
                    </div>
                    <div className={"col text-center form-group"}>
                      <label>
                        قیمت :
                        {price === null
                          ? "انتظار"
                          : latinToPersian(price) + " تومان"}
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tedad">تعداد</label>
                    <Field
                      name="tedad"
                      type="number"
                      className={
                        "form-control" +
                        (errors.tedad && touched.tedad ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="tedad"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">توضیحات</label>
                    <Field
                      name="comment"
                      as={"textarea"}
                      className={
                        "form-control" +
                        (errors.comment && touched.comment ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="comment"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-outline-info ml-2">
                      ثبت رزرو
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      کنسل
                    </button>
                  </div>
                </Form>
              )}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PanelReserveAdd;
