import React from "react";
import { ListGroup, Table } from "react-bootstrap";
import { formatNumber, latinToPersian } from "utilsFolder/lastinToPersian";
import Wrapper from "hoc/Wrapper/Wrapper";

const OrderDetail = (props) => {
  const { payment, invoice, service } = props.data;

  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td className={"text-center"}>شماره همراه</td>
            <td className={"text-center"}>
              {latinToPersian(invoice.cellphone)}
            </td>
          </tr>
          <tr>
            <td className={"text-center"}>نام و نام خانوادگی</td>
            <td className={"text-center"}>
              {latinToPersian(invoice.fullname)}
            </td>
          </tr>
          <tr>
            <td className={"text-center"}>شماره سفارش</td>
            <td className={"text-center"}>
              {latinToPersian(payment.uniq_code)}
            </td>
          </tr>
          <tr>
            <td className={"text-center"}>وضعیت پرداخت</td>
            <td className={"text-center"}>
              {payment.status === "success" ? (
                <span className={""}>موفق</span>
              ) : payment.status === "send" ? (
                "ناموفق"
              ) : (
                "عدم برگشت از درگاه"
              )}
            </td>
          </tr>
          <tr>
            <td className={"text-center"}>سرویس</td>
            <td className={"text-center"}>{service.title}</td>
          </tr>
          <tr>
            <td className={"text-center"}>تعداد</td>
            <td className={"text-center"}>{latinToPersian(invoice.number)}</td>
          </tr>
          <tr>
            <td className={"text-center"}>مبلغ کل</td>
            <td className={"text-center"}>
              {latinToPersian(payment.total_price)}
            </td>
          </tr>
          {invoice.status === "success" ? (
            <Wrapper>
              <tr>
                <td className={"text-center"}>کد بلیط</td>
                <td className={"text-center"}>{invoice.bookingReference}</td>
              </tr>
              <tr>
                <td className={"text-center"}>لینک بلیط</td>
                <td className={"text-center"}>
                  <a
                    href={invoice.ticketsLink}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {invoice.ticketsLink}
                  </a>
                </td>
              </tr>
            </Wrapper>
          ) : (
            ""
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetail;
