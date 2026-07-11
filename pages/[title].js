import React from "react";
import { splitQueryString } from "utilsFolder/splitQueryString";
import ServiceShow from "containers/service_show";

class ServiceViewPage extends React.Component {
  render() {
    const { data } = this.props;

    return <ServiceShow data={data.data} title={data.title} />;
  }
}

export async function getServerSideProps(context) {
  const { id, title } = splitQueryString(context.query.title);

  try {
    const res = await fetch(
      process.env.REACT_APP_API_URL + "/api/ServiceById?id=" + id
    );
    const data = await res.json();

    return {
      props: {
        key: "service show",
        data: {
          data: data,
          title: title,
        },
        title: title,
        description: null,
      },
    };
  } catch (err) {
    return {
      props: {
        key: "service show",
        data: {
          data: { status: "fail", error: "خطا در دریافت اطلاعات سرویس" },
          title: title,
        },
        title: title,
        description: null,
      },
    };
  }
}

export default ServiceViewPage;
