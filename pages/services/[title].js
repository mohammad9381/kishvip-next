import React from "react";

import axois from "utilsFolder/fetchClient";
import { event_categories } from "constants/event_categories.constant";
import Services from "containers/services";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import Wrapper from "hoc/Wrapper/Wrapper";
import { Button } from "react-bootstrap";

class ServiceCategoryPage extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    const { data } = this.props;
    console.log(data);

    return (
      <Wrapper>
        <Header />
        {data.data.data && data.data.data.length > 0 ? (
          <Services data={data.data.data} title={data.title} />
        ) : (
          <div className={"m-5 text-center"}>
            <i
              className={"fa fa-info-circle"}
              style={{ fontSize: 60, color: "red" }}
            />
            <h5>در حال حاضر سرویسی موجود نمی باشد</h5>
            <br />
            <a href={"/services"}>
              <Button variant={"outline-dark"} size={"lg"}>
                برگشت به سرویس ها
              </Button>
            </a>
          </div>
        )}{" "}
        <Footer />
      </Wrapper>
    );
  }
}

export async function getServerSideProps(context) {
  const { title } = context.query;

  const tt = title.split("-").join(" ").trim();

  let xfind = event_categories.find((ev) => {
    console.log(ev, tt);
    return ev.title.trim() === tt;
  });

  const res = await fetch(
    process.env.REACT_APP_API_URL + "/api/servicesCategory?id=" + xfind.id
  );
  const data = await res.json();

  console.log(
    process.env.REACT_APP_API_URL + "/api/servicesCategory?id=" + xfind.id
  );

  console.log("ccc", res);

  return {
    props: {
      key: "service category",
      data: {
        data: data,
        title: xfind.title,
      },
      title: xfind.title,
      description: null,
    },
  };
}

export default ServiceCategoryPage;
