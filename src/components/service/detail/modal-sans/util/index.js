import React from "react";
import { ListGroup } from "react-bootstrap";
import { formatNumber, latinToPersian } from "utilsFolder/lastinToPersian";

export const BoxDetailSans = (props) => {
  const { number, sans, priceFInal, jm, data } = props;
  return (
    <ListGroup className={"pt-3"}>
      <ListGroup.Item>
        تعداد {latinToPersian(number) + " رزرو "} در تاریخ{" "}
        {latinToPersian(jm.format("ddd LL"))} برای
        {" " + sans.label} از ساعت
        {latinToPersian(sans.start)} تا {latinToPersian(sans.end)}
        به مبلغ
        {latinToPersian(formatNumber(priceFInal * number))}
        در
        {data.title}
      </ListGroup.Item>
    </ListGroup>
  );
};
