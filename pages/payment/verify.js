import React from "react";
import PaymentVerify from "containers/payment-verify";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import Wrapper from "hoc/Wrapper/Wrapper";

const PaymentVerifyPage = (props) => {
  console.log(props.data);
  return (
    <Wrapper>
      <Header />

      <PaymentVerify query={props.data} />
      <Footer />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      key: "payment verify",
      data: context.query,
      title: "بررسی پرداخت " + context.query.id,
      description: null,
    },
  };
}

export default PaymentVerifyPage;
