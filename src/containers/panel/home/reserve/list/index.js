import React from "react";
import { WarningToast } from "hoc/ToastNotify/ToastNotify";
import dynamic from "next/dynamic";
import { Card } from "react-bootstrap";
import ReserveListFilter from "containers/panel/home/reserve/list/filter";
const ReactDatatableList = dynamic(() =>
  import("components/ReactDatatableList")
);

class PanelReserveList extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        dataField: "id",
        text: "کد",
      },
      {
        dataField: "product.title",
        text: "محصول",
      },
      {
        dataField: "name_mehman",
        text: "نام مهمان",
      },
      {
        dataField: "forosh",
        text: "نام فروشنده",
      },
      {
        dataField: "tedad",
        text: "تعداد بلیط",
      },
      {
        dataField: "date_mehman",
        text: "تاریخ بلیط",
      },
    ];

    this.state = {
      loading: false,
      orders: [],
      date_mehman: null,
    };

    this.getOrders = this.getOrders.bind(this);
    this.onSubmitFilter = this.onSubmitFilter.bind(this);
  }

  componentDidMount() {}

  async getOrders(date_mehman, product_id) {
    try {
      this.setState({
        loading: true,
        date_mehman:
          date_mehman.year + "-" + date_mehman.month + "-" + date_mehman.day,
      });
      let url = "/api/panel/listOrder?x=x";
      if (date_mehman)
        url =
          url +
          "&date_mehman=" +
          date_mehman.year +
          "-" +
          date_mehman.month +
          "-" +
          date_mehman.day;

      if (product_id) url = url + "&product_id=" + product_id;
      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        loading: false,
        orders: data.data,
      });
    } catch (er) {
      console.log(er);
      WarningToast("مشکل در دریافت اطلاعات");
    }
  }

  async onSubmitFilter(data) {
    console.log(data);
    this.getOrders(data.date_mehman, data.product_id);
  }
  render() {
    const { loading, orders, date_mehman } = this.state;
    return (
      <div>
        <h3 className={"mb-3"}>دریافت لیست رزرو ها</h3>
        <Card className={"mb-3"}>
          <Card.Body>
            <ReserveListFilter onSubmitFilter={this.onSubmitFilter} />
          </Card.Body>
        </Card>
        {loading ? (
          <Card className={"text-center"}>
            <Card.Body>در حال بررسی</Card.Body>
          </Card>
        ) : (
          <Card className={"mb-5"}>
            <Card.Header className={"dir-rtl"}>
              لیست رزرو ها {date_mehman}
            </Card.Header>
            <Card.Body>
              {orders.length > 0 ? (
                <ReactDatatableList data={orders} columns={this.columns} />
              ) : (
                <div className={"text-center"}>
                  سفارشی در این مشخصات وجود ندارد
                </div>
              )}
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default PanelReserveList;
