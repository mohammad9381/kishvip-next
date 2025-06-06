import React from "react";
import Header from "components/layout/header7";
import Footer from "components/layout/footer7";
import ServiceDetail from "components/service/detail";

class ServiceShow extends React.Component {
  render() {
    const { title, data } = this.props;
    return (
      <div>
        <Header />
        <ServiceDetail data={data} />
        <Footer />
      </div>
    );
  }
}

export default ServiceShow;
