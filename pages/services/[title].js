import React from "react";

import { event_categories } from "constants/event_categories.constant";
import Services from "containers/services";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import Wrapper from "hoc/Wrapper/Wrapper";
import { Button } from "react-bootstrap";

class ServiceCategoryPage extends React.Component {
  render() {
    const { data } = this.props;

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
    return ev.title.trim() === tt;
  });

  // guard: اگر دسته‌بندی پیدا نشد
  if (!xfind) {
    return {
      props: {
        key: "service category",
        data: {
          data: { data: [] },
          title: title,
        },
        title: title,
        description: null,
      },
    };
  }

  try {
    const res = await fetch(
      process.env.REACT_APP_API_URL + "/api/servicesCategory?id=" + xfind.id
    );
    const data = await res.json();

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
  } catch (err) {
    return {
      props: {
        key: "service category",
        data: {
          data: { data: [] },
          title: xfind.title,
        },
        title: xfind.title,
        description: null,
      },
    };
  }
}

export default ServiceCategoryPage;
