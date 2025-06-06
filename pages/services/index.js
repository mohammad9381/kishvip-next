import Services from "containers/services";
import React from "react";
import Header from "components/layout/header7";
import Wrapper from "hoc/Wrapper/Wrapper";
import Footer from "components/layout/footer7";

export default function ServicePage(props) {
  return (
    <Wrapper>
      <Header />
      <Services data={props.data} title={"همه تفریح های کیش "} />
      <Footer />
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.REACT_APP_API_URL + "/api/servicesCategory"
  );
  const data = await res.json();

  return {
    props: {
      key: "blogs",
      data: data.data,
      title: "تفریحات کیش",
      description:
        "در این صفحه می توانید تمام تفریحاتی که در کیش انجام می دهید با تخفیف رزرو کنید",
      disableLayout: true,
    },
  };
}
