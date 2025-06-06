import React from "react";
import { splitQueryString } from "utilsFolder/splitQueryString";
import ServiceShow from "containers/service_show";

class ServiceViewPage extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    const { data } = this.props;
    console.log(data);

    return <ServiceShow data={data.data} title={data.title} />;
  }
}

export async function getServerSideProps(context) {
  const { id, title } = splitQueryString(context.query.title);
  console.log(process.env.REACT_APP_API_URL + "/api/ServiceById?id=" + id);
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
}

export default ServiceViewPage;
